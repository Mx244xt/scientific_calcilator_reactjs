import operateTable, { factorial, cosDegCV, polarCoordinates, cartesian ,cosh, sinh, tanh, csch, permutation, combinations} from "../lib/operateTable";
describe("オペラントテーブル", () => {
  describe.skip("オペラントfunction", () => {
    test.skip("(", () => {
      expect(operateTable['('].fn(0, 0)).toBe(undefined);
    });
    test.skip(")", () => {
      expect(operateTable[')'].fn(0, 0)).toBe(undefined);
    });
    test.skip("sin", () => {
      expect(operateTable['sin'].fn(0, 0)).toBe(0);
      expect(operateTable['sin'].fn(45, 0)).toBe(0.7071);
      expect(operateTable['sin'].fn(90, 0)).toBe(1);
      expect(operateTable['sin'].fn(-45, 0)).toBe(-0.7071);
      expect(operateTable['sin'].fn(-90, 0)).toBe(-1);
    });
    test.skip("asin", () => {
      expect(operateTable['asin'].fn(1, 1)).toBe(90);
      expect(operateTable['asin'].fn(10, 20)).toBe(30);
      expect(operateTable['asin'].fn(20, 10)).toBe(undefined);
    });
    test.skip("cos", () => {
      expect(operateTable['cos'].fn(0, 0)).toBe(1);
      expect(operateTable['cos'].fn(45, 0)).toBe(0.7071067811865476);
      expect(operateTable['cos'].fn(90, 0)).toBe(0);
      expect(operateTable['cos'].fn(-45, 0)).toBe(0.7071067811865476);
      expect(operateTable['cos'].fn(-90, 0)).toBe(0);
      expect(operateTable['cos'].fn(270, 0)).toBe(0);
      expect(operateTable['cos'].fn(990, 0)).toBe(0);
      expect(operateTable['cos'].fn(99990, 0)).toBe(0);
    });
    test("acos", () => {
      expect(operateTable['acos'].fn(1, 1)).toBe(0);
    });
    test("tan", () => {
      expect(operateTable['tan'].fn(2, 2)).toBe(0.03492076949174773);
    });
    test("atan", () => {
      expect(operateTable['atan'].fn(1, 1)).toBe(45);
    });
    test("log", () => {
      expect(operateTable['log'].fn(2, 2)).toBe(0.3010299956639812);
    });
    test("e", () => {
      expect(operateTable['e'].fn(2, 2)).toBe(7.38905609893065);
    });
    test("in", () => {
      expect(operateTable['in'].fn(2, 2)).toBe(0.6931471805599453);
    });
    test("√", () => {
      expect(operateTable['√'].fn(2, 2)).toBe(1.4142135623730951);
    });
    test("3√", () => {
      expect(operateTable['3√'].fn(2, 2)).toBe(1.2599210498948732);
    });
    test("π", () => {
      expect(operateTable['π'].fn(2, 2)).toBe(3.141592653589793);
    });
    test("!", () => {
      expect(operateTable['!'].fn(5, 0)).toBe(120);
    });
    test("#", () => {
      expect(operateTable['#'].fn(2, 0)).toBe(+2);
    });
    test("_", () => {
      expect(operateTable['_'].fn(2, 2)).toBe(-2);
    });
    test("~", () => {
      expect(operateTable['~'].fn(2, 2)).toBe(-3);
    });
    test("10**", () => {
      expect(operateTable['10**'].fn(2, 2)).toBe(100);
    });
    test("**-1", () => {
      expect(operateTable['**-1'].fn(2, 2)).toBe(0.5);
    });
    test("**", () => {
      expect(operateTable['**'].fn(2, 2)).toBe(4);
    });
    test("*", () => {
      expect(operateTable['*'].fn(2, 2)).toBe(4);
    });
    test("/", () => {
      expect(operateTable['/'].fn(2, 2)).toBe(1);
    });
    test("%", () => {
      expect(operateTable['%'].fn(2, 2)).toBe(0);
    });
    test("+", () => {
      expect(operateTable['+'].fn(2, 2)).toBe(4);
    });
    test("-", () => {
      expect(operateTable['-'].fn(2, 2)).toBe(0);
    });
    test("<<", () => {
      expect(operateTable['<<'].fn(2, 2)).toBe(8);
    });
    test(">>", () => {
      expect(operateTable['>>'].fn(5, 2)).toBe(1);
    });
    test("&", () => {
      expect(operateTable['&'].fn(5, 3)).toBe(1);
    });
    test("^", () => {
      expect(operateTable['^'].fn(5, 3)).toBe(6);
    });
    test("|", () => {
      expect(operateTable['|'].fn(5, 3)).toBe(7);
    });
  });
  describe('function', () => {
    test.skip("階乗", () => {
      expect(factorial(1)).toBe(1);
      expect(factorial(2)).toBe(2);
      expect(factorial(3)).toBe(6);
      expect(factorial(5)).toBe(120);
      expect(factorial(10)).toBe(3628800);
      expect(factorial(100)).toBe(9.33262154439441e+157);
    });
    test.skip("コサイン", () => {
      expect(cosDegCV(0)).toBe(1);
      expect(cosDegCV(45)).toBe(0.7071067811865476);
      expect(cosDegCV(90)).toBe(0);
      expect(cosDegCV(-45)).toBe(0.7071067811865476);
      expect(cosDegCV(270)).toBe(0);
      expect(cosDegCV(990)).toBe(0);
      expect(cosDegCV(99990)).toBe(0);
    });
    test("POL", () => {
      expect(polarCoordinates(10, 20)).toStrictEqual([22.360679774997898, 63.43494882292201]);
      expect(polarCoordinates(10, -20)).toStrictEqual([22.360679774997898, -63.43494882292201]);
      expect(polarCoordinates(-10, -20)).toStrictEqual([22.360679774997898, -116.56505117707799]);
    });
    test("Rec", () => {
      expect(combinations(4,2)).toBe(6);
      expect(permutation(4,2)).toBe(12);
      expect(cosh(2)).toBe(3.7621956910836314);
      expect(cosh(3)).toBe(10.067661995777765);
      expect(cosh(-3)).toBe(10.067661995777765);
      expect(sinh(2)).toBe(3.626860407847019);
      expect(tanh(2)).toBe(0.964027580075817);
      expect(csch(2)).toBe(0.2757205647717832);
      expect(cartesian(14.142135623731, 45)).toStrictEqual([10, 10]);
      expect(cartesian(22.360679774997898, 63.43494882292201)).toStrictEqual([10, 20]);
      expect(cartesian(22.360679774997898, -63.43494882292201)).toStrictEqual([10, -20]);
      expect(cartesian(22.360679774997898, -116.56505117707799)).toStrictEqual([-10, -20]);
    });
  })
});