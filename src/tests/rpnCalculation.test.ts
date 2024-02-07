import rpnCalculatioion, { fnSplitOperator } from '../lib/rpnCalculation'

describe.skip("逆ポーランド → 中置記法", () => {
  test("計算", () => {
    expect(rpnCalculatioion("2 log 10 cos *")).toBe(0.296456673619);
    expect(rpnCalculatioion("6 2 / π 4 / cos *")).toBe(2.9997181494);
    expect(rpnCalculatioion("π 6 / sin π 3 / cos +")).toBe(1.00897137486);
    expect(rpnCalculatioion("3 100 log * π 6 / tan +")).toBe(6.009138777);
    expect(rpnCalculatioion("4 2 - 16 √ * 2 e in /")).toBe(4);
    expect(rpnCalculatioion("5 3 + π 4 / sin / π 6 / cos -")).toBe(582.628336982);
  });
  test.skip('タイプ変換', () => {
    expect(fnSplitOperator("0", [])).toStrictEqual([{ "value": "0", "type": "num" }]);
    expect(fnSplitOperator("1", [])).toStrictEqual([{ "value": "1", "type": "num" }]);
    expect(fnSplitOperator("100000", [])).toStrictEqual([{ "value": "100000", "type": "num" }]);
    expect(fnSplitOperator("(", [])).toStrictEqual([{ "value": "(", "type": "state" }]);
    expect(fnSplitOperator(")", [])).toStrictEqual([{ "value": ")", "type": "state" }]);
    expect(fnSplitOperator("sin", [])).toStrictEqual([{ "value": "sin", "type": "op" }]);
    expect(fnSplitOperator("3√", [])).toStrictEqual([{ "value": "3√", "type": "op" }]);
    expect(fnSplitOperator("#", [])).toStrictEqual([{ "value": "#", "type": "op" }]);
  });
});