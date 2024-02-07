import { useState } from "react";
import reversePolishNotaion from "../lib/reversePolishNotaion";
import rpnCalculation from "../lib/rpnCalculation";

const useBttonAction = () => {
  const [displaytexts, setDisplaytexts] = useState<string[]>([""]);
  const [calcTexts, setCalcTexts] = useState<string[]>([""]);
  const [isAlt, setIsAlt] = useState<boolean>(true);
  const [ans, setAns] = useState<string>();
  const setState = (display: string, calc: string) => {
    setIsAlt(true);
    switch (calc) {
      case "CLR":
        displaytexts.pop();
        calcTexts.pop();
        setDisplaytexts([""])
        setCalcTexts([""])
        setIsAlt(true);
        break;
      case "ALT":
        if (isAlt === true) setIsAlt(!isAlt);
        break;
      case "BS":
        setDisplaytexts([...displaytexts.slice(0, -1), displaytexts.slice(-1)[0].slice(0, -1)]);
        setCalcTexts([...calcTexts.slice(0, -1), calcTexts.slice(-1)[0].slice(0, -1)]);
        break;
      case "DEL":
        setDisplaytexts(displaytexts.filter((e, index) => (index !== displaytexts.length - 1)));
        setCalcTexts(calcTexts.filter((e, index) => (index !== calcTexts.length - 1)));
        break;
      case "Ans":
        if (ans !== undefined) {
          setDisplaytexts([...displaytexts.slice(0, -1), displaytexts.slice(-1)[0] + ans]);
          setCalcTexts([...calcTexts.slice(0, -1), calcTexts.slice(-1)[0] + ans]);
        }
        break;
      case "=":
        try {
          if (calcTexts != null) {
            const rpn = reversePolishNotaion(calcTexts.slice(-1)[0])
            if (typeof (rpn) === "string") {
              const result = rpnCalculation(rpn);
              if (typeof (result) === "number") {
                setDisplaytexts([...displaytexts, "=" + result.toString(), ""]);
                setCalcTexts([...calcTexts, "=" + result.toString(), ""]);
                setAns(result.toString());
                return;
              }
            }
          }
        } catch (error) {
          console.error(error);
          setDisplaytexts([...displaytexts, "=Calcilation error", ""]);
        }
        break;
      default:
        setDisplaytexts([...displaytexts.slice(0, -1), displaytexts.slice(-1)[0] + display]);
        setCalcTexts([...calcTexts.slice(0, -1), calcTexts.slice(-1)[0] + calc]);
        break;
    }
  };
  return { setState, isAlt, displaytexts }
};

export default useBttonAction;