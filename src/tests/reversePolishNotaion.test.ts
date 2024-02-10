import reversePolishNotaion from "../lib/reversePolishNotaion";
import rpnCalculation from "../lib/rpnCalculation";
describe("逆ポーランド記法変換", () => {
  test("コンソールログ", () => {

  });
  test('逆ポーランド記法変換', () => {
    expect(reversePolishNotaion("2 ^ 2")).toBe("2 2 ^");
    expect(reversePolishNotaion("3++")).toBe(undefined);
    expect(reversePolishNotaion("6 in")).toBe("6 in");
    expect(reversePolishNotaion("(6 / 2) * cos(π/4)")).toBe("6 2 / π 4 / cos *");
    expect(reversePolishNotaion("sin(π/6) + cos(π/3)")).toBe("π 6 / sin π 3 / cos +");
    expect(reversePolishNotaion("3 * log(100) + tan(π/6)")).toBe("3 100 log * π 6 / tan +");
    expect(reversePolishNotaion("(4 - 2) * √(16) / in(e 2)")).toBe("4 2 - 16 √ * 2 e in /");
    expect(reversePolishNotaion("(5 + 3) / sin(π/4) - cos(π/6)")).toBe("5 3 + π 4 / sin / π 6 / cos -");
  });
});