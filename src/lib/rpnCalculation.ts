import operateTable from "./operateTable";

export const fnSplitOperator = (val: any, stack: any) => {
  if (val === "") return null;
  if (operateTable[val] != null) {
    stack.push({ value: val, type: operateTable[val].Type });
    return stack;
  };

  for (let op in operateTable) {
    let piv = val.indexOf(op);
    if (piv != -1) {
      fnSplitOperator(val.substring(0, piv), stack);
      fnSplitOperator(val.substring(piv, piv + op.length), stack);
      fnSplitOperator(val.substring(piv + op.length), stack);
      return stack;
    };
  };

  if (!isNaN(val)) {
    stack.push({ value: val, type: "num" });
  } else {
    stack.push({ value: val, type: "str" });
  };
  return stack;
};

const rpnCalculation = (rpn: string) => {
  try {
    if (typeof (rpn) !== "string") { throw new Error("引数が無効です。(Invalid argument.)"); }

    let rpn_stack: any = [];
    for (let i = 0, rpn_array = rpn.split(/\s+|,/); i < rpn_array.length; i++) {
      fnSplitOperator(rpn_array[i], rpn_stack);
    }

    let calc_stack: any[] = [];
    while (rpn_stack.length > 0) {
      let elem: any = rpn_stack.shift();
      switch (elem.type) {
        case "num":
          calc_stack.push(
            elem.value.indexOf("0x") != -1 ? parseInt(elem.value, 16) : parseFloat(elem.value)
          );
          break;

        case "str":
          calc_stack.push(elem.value);
          break;

        case "state":
          console.warn("inclute statement: " + elem.value);
          break;

        case "op": case "fn":
          let operate = operateTable[elem.value];
          if (operate == null) throw new Error("not exit operate: " + elem.value);

          let args: any = [];
          for (let i = 0; i < operate.Arity; i++) {
            if (calc_stack.length > 0) {
              args.unshift(calc_stack.pop());
            } else {
              throw new Error("not enough operand");
            }
          }

          let res: any = operate.fn.apply(null, args);
          if (res != null) calc_stack.push(res);
          break;
      }
    }

    if (rpn_stack.length > 0 || calc_stack.length !== 1) {
      console.warn({ message: "calculate unfinished", rest_rpn: rpn_stack, result_value: calc_stack });
      throw new Error("calculate unfinished");
      return null;
    }
    const result: number = calc_stack[0]
    return Number(result.toPrecision(12));
  } catch (error) {
    console.error(error);
    return "Calculation error";
  }
};

export default rpnCalculation;