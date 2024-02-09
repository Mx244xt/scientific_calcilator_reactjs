import operateTable from "./operateTable";

const reversePolishNotaion = (formula: string) => {
  let result: string[] = [];
  let operator_stack: string[][] = [[]];
  let operator_depth: number = 0;
  let unary_operator: boolean = true;
  let operator: string | null = null;
  try {
    if (typeof formula !== "string") { throw new Error("引数が無効です。(Invalid argument.)"); }
    while (formula.length > 0) {

      formula = formula.replace(/^(\s|,)+/, "");

      if (formula.length === 0) break;

      operator_stack[operator_depth] = operator_stack[operator_depth] || [];

      let number_extraction = formula.match(/(^0x[0-9a-f]+)|(^[0-9]+(\.[0-9]+)?)/i);
      if (number_extraction != null) {
        result.push(number_extraction[0].indexOf("0x") === 0
          ? parseInt(number_extraction[0], 16).toString()
          : parseFloat(number_extraction[0]).toString()
        );
        formula = formula.substring(number_extraction[0].length);
        unary_operator = false;
        continue;
      }

      for (let key in operateTable) {
        const chack = formula.slice(-1);
        if (chack === key && chack !== ")" && chack !== "π") { throw new Error("末尾の演算子は無効です。(Trailing operators are invalid.)") }
        if (formula.indexOf(key) === 0) {
          operator = key;
          formula = formula.substring(key.length);
          break;
        }
      }

      if (operator == null) {
        throw new Error("演算子の記述が正しくありません。(The operator description is incorrect.): " + formula.substring(0, 10) + " ...")
      };

      switch (operator) {
        default:
          if (unary_operator) {
            if (operator === "+") { operator = "#" }
            else if (operator === "-") { operator = "_" }
          }
          if (operator_stack[operator_depth].length === 0 ||
            operateTable[operator].Priority > operateTable[operator_stack[operator_depth][0]].Priority ||
            (operateTable[operator].Priority === operateTable[operator_stack[operator_depth][0]].Priority
              && operateTable[operator].Associative_law === "R")
          ) {
            operator_stack[operator_depth].unshift(operator);
          }
          else {
            while (operator_stack[operator_depth].length > 0) {
              let ope = operator_stack[operator_depth].shift();
              if (ope !== undefined) {
                result.push(ope);
                if (operateTable[ope].Priority >= operateTable[operator].Priority) {
                  continue;
                } else {
                  break;
                }
              }
            }
            operator_stack[operator_depth].unshift(operator);
          }
          unary_operator = true;
          break;
        case "(":
          operator_depth++;
          unary_operator = true;
          break;

        case ")":
          while (operator_stack[operator_depth].length > 0) {
            if (operator_stack[operator_depth].length) {
              const res = operator_stack[operator_depth].shift();
              if (res !== undefined) {
                result.push(res);
              }
            }
          }
          if (--operator_depth < 0) {
            throw new Error(`「(」と「)」の数字が一致していません。(The numbers of "(" and ")" do not match.)`);
          }
          unary_operator = false;
          break;
      }
    }

    if (operator_depth > 1) {
      console.warn({ message: `「(」と「)」の数字が一致していません。(The numbers of "(" and ")" do not match.)`, rest_exp: formula });
      throw new Error(`「(」と「)」の数字が一致していません。(The numbers of "(" and ")" do not match.)`)
    } else if (formula.length > 0) {
      console.warn({ message: "逆ポーランド記法の生成に失敗しました。(Failed to generate reverse result notation.)", rest_exp: formula });
      throw new Error("逆ポーランド記法の生成に失敗しました。(Failed to generate reverse result notation.)")
    } else {
      while (operator_stack[operator_depth].length > 0) {
        const res = operator_stack[operator_depth].shift();
        if (res !== undefined) {
          result.push(res);
        }
      }
      return result.join(" ");
    }
  } catch (error) {
    console.error(error);
    return;
  }
};



export default reversePolishNotaion;

