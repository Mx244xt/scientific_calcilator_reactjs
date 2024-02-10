import { useState } from "react";
import reversePolishNotaion from "../lib/reversePolishNotaion";
import rpnCalculation from "../lib/rpnCalculation";

const useBttonAction = () => {
  const [displaytexts, setDisplaytexts] = useState<string[][]>([[]]);
  const [calcTexts, setCalcTexts] = useState<string[][]>([[]]);
  const [isAlt, setIsAlt] = useState<boolean>(true);
  const [ans, setAns] = useState<string>();
  const [dispHistory, setDispHistory] = useState<string[][]>([[]]);
  const [calcHistory, setCalcHistory] = useState<string[][]>([[]]);
  const [count, setCount] = useState<number>(0);
  const setState = (display: string, calc: string) => {
    setIsAlt(true);
    switch (calc) {
      case "CLR":
        setDisplaytexts([[]])
        setCalcTexts([[]])
        setIsAlt(true);
        setCount((rpnCount) => rpnCount = dispHistory.length - 1);
        break;
      case "ALT":
        if (isAlt === true) setIsAlt(!isAlt);
        break;
      case "BS":
        setDisplaytexts(
          displaytexts.map(
            (_items, i, _array) => (
              i === _array.length - 1
                ? _items.filter((_, j) => (j !== _items.length - 1))
                : _items
            ))
        );
        setCalcTexts(
          displaytexts.map((_items, i, _array) => (
            i === _array.length - 1
              ? _items.filter((_, j) => (j !== _items.length - 1))
              : _items
          ))
        );
        break;
      case "DEL":
        setDisplaytexts(
          displaytexts.filter((_, i, _array) => (i !== _array.length - 1))
        );
        setCalcTexts(
          displaytexts.filter((_, i, _array) => (i !== _array.length - 1))
        );
        break;
      case "Ans":
        if (ans !== undefined) {
          setDisplaytexts(
            displaytexts.map((_items, _i, _array) => (_i === _array.length - 1 ? [..._items, ans] : _items))
          );
          setCalcTexts(
            calcTexts.map((_items, _i, _array) => (_i === _array.length - 1 ? [..._items, ans] : _items))
          );
        }
        break;
      case "↑↑":
        if (count > 0) {
          setDisplaytexts(
            displaytexts.map((_items, _i, _array) => (_i === _array.length - 1 ? dispHistory[count] : _items))
          );
          setCalcTexts(
            displaytexts.map((_items, _i, _array) => (_i === _array.length - 1 ? calcHistory[count] : _items))
          );
          setCount((rpnCount) => rpnCount - 1);
        } else {
          setDisplaytexts(
            displaytexts.map((_items, _i, _array) => (_i === _array.length - 1 ? [] : _items))
          );
          setCalcTexts(
            calcTexts.map((_items, _i, _array) => (_i === _array.length - 1 ? [] : _items))
          );
        }
        break;
      case "=":
        try {
          if (calcTexts[0][0] === "") return setDisplaytexts([...displaytexts, ["=0"], []]);
          const rpn = reversePolishNotaion(calcTexts[calcTexts.length - 1].join(""));
          setDispHistory([...dispHistory, displaytexts[displaytexts.length - 1]]);
          setCalcHistory([...calcHistory, calcTexts[calcTexts.length - 1]]);
          setCount((rpnCount) => rpnCount + 1);
          if (typeof (rpn) === "string") {
            const result = rpnCalculation(rpn);
            if (typeof (result) === "number") {
              setDisplaytexts([...displaytexts, ["=" + result.toString()], []]);
              setCalcTexts([...calcTexts, ["=" + result.toString()], []]);
              setAns(result.toString());
              return;
            }
          }
          setCalcTexts([...calcTexts, []])
          setDisplaytexts([...displaytexts, ["=Calcilation error"], []]);
        } catch (error) {
          console.error(error);
        }
        break;
      default:
        setDisplaytexts(displaytexts.map((_items, _i, _array) => (_i === _array.length - 1 ? [..._items, display] : _items)));
        setCalcTexts(calcTexts.map((_items, _i, _array) => (_i === _array.length - 1 ? [..._items, calc] : _items)));
        break;
    }
  };
  return { setState, isAlt, displaytexts }
};

export default useBttonAction;