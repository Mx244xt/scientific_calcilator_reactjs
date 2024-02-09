import { OperateKeyType } from "../types/operater";


const operateTable: OperateKeyType = {
  //グループ化
  '(': {
    Priority: 19, Type: "state", Arity: 0, Associative_law: "",
    fn: () => { }
  },
  //グループ化
  ')': {
    Priority: 19, Type: "state", Arity: 0, Associative_law: "",
    fn: () => { }
  },
  //正弦
  'sin': {
    Priority: 18, Type: "op", Arity: 1, Associative_law: "L",
    fn: (L: number) => { return Math.sin(L * (Math.PI / 180)); }
  },
  //正割
  'asin': {
    Priority: 18, Type: "op", Arity: 1, Associative_law: "L",
    fn: (L: number) => { return Math.asin(L) * (180 / Math.PI); }
  },
  //余弦
  'cos': {
    Priority: 18, Type: "op", Arity: 1, Associative_law: "L",
    fn: (L: number) => { return cosDegCV(L); }
  },
  //余割
  'acos': {
    Priority: 18, Type: "op", Arity: 1, Associative_law: "L",
    fn: (L: number) => { return Math.acos(L) * (180 / Math.PI); }
  },
  //正接
  'tan': {
    Priority: 18, Type: "op", Arity: 1, Associative_law: "L",
    fn: (L: number) => { return Math.tan(L * (Math.PI / 180)); }
  },
  //余接
  'atan': {
    Priority: 18, Type: "op", Arity: 1, Associative_law: "L",
    fn: (L: number) => { return Math.atan(L) * (180 / Math.PI); }
  },
  //対数
  'log': {
    Priority: 18, Type: "op", Arity: 1, Associative_law: "L",
    fn: (L: number) => { return Math.log10(L); }
  },
  //ネイピア数 
  'e': {
    Priority: 18, Type: "op", Arity: 1, Associative_law: "L",
    fn: (L: number) => { return Math.exp(L); }
  },
  //自然対数
  'in': {
    Priority: 18, Type: "op", Arity: 1, Associative_law: "L",
    fn: (L: number) => { return Math.log(L); }
  },
  //平方根
  '√': {
    Priority: 18, Type: "op", Arity: 1, Associative_law: "L",
    fn: (L: number) => { return Math.sqrt(L); }
  },
  //3の平方根
  '3√': {
    Priority: 18, Type: "op", Arity: 1, Associative_law: "L",
    fn: (R: number) => { return Math.cbrt(R); }
  },
  //pi
  'π': {
    Priority: 18, Type: "op", Arity: 0, Associative_law: "",
    fn: () => { return Math.PI; }
  },
  //階乗
  '!': {
    Priority: 18, Type: "op", Arity: 1, Associative_law: "L",
    fn: (L: number) => { return factorial(L); }
  },
  'pol': {
    Priority: 18, Type: "op", Arity: 2, Associative_law: "L",
    fn: (L: number, R: number) => { return; }
  },
  //+符合の代替
  '#': {
    Priority: 15, Type: "op", Arity: 1, Associative_law: "R",
    fn: (L: any) => { return L; }
  },
  //-符合の代替
  '_': {
    Priority: 15, Type: "op", Arity: 1, Associative_law: "R",
    fn: (L: number) => { return -L; }
  },
  //ビット反転
  '~': {
    Priority: 15, Type: "op", Arity: 1, Associative_law: "R",
    fn: (L: number) => { return ~L; }
  },
  //べき乗 10x
  '10**': {
    Priority: 14, Type: "op", Arity: 1, Associative_law: "L",
    fn: (R: number) => { return 10 ** R; }
  },
  //べき乗 -()
  '**-1': {
    Priority: 14, Type: "op", Arity: 1, Associative_law: "L",
    fn: (L: number) => { return L ** -1; }
  },
  //べき乗 ^(
  '**': {
    Priority: 14, Type: "op", Arity: 2, Associative_law: "L",
    fn: (L: number, R: number) => { return L ** R; }
  },
  //乗算
  '*': {
    Priority: 13, Type: "op", Arity: 2, Associative_law: "L",
    fn: (L: number, R: number) => { return L * R; }
  },
  //除算
  '/': {
    Priority: 13, Type: "op", Arity: 2, Associative_law: "L",
    fn: (L: number, R: number) => { return L / R; }
  },
  //剰余
  '%': {
    Priority: 13, Type: "op", Arity: 2, Associative_law: "L",
    fn: (L: number, R: number) => { return L % R; }
  },
  //加算
  '+': {
    Priority: 12, Type: "op", Arity: 2, Associative_law: "L",
    fn: (L: any, R: any) => { return L + R; }
  },
  //減算
  '-': {
    Priority: 12, Type: "op", Arity: 2, Associative_law: "L",
    fn: (L: number, R: number) => { return L - R; }
  },
  //左ビットシプト
  '<<': {
    Priority: 11, Type: "op", Arity: 2, Associative_law: "L",
    fn: (L: number, R: number) => { return L << R; }
  },
  //右ビットシプト
  '>>': {
    Priority: 11, Type: "op", Arity: 2, Associative_law: "L",
    fn: (L: number, R: number) => { return L >> R; }
  },
  //ビット単位 AND
  '&': {
    Priority: 8, Type: "op", Arity: 2, Associative_law: "L",
    fn: (L: number, R: number) => { return L & R; }
  },
  //ビット単位 XOR
  '^': {
    Priority: 7, Type: "op", Arity: 2, Associative_law: "L",
    fn: (L: number, R: number) => { return L ^ R; }
  },
  //ビット単位 OR
  '|': {
    Priority: 6, Type: "op", Arity: 2, Associative_law: "L",
    fn: (L: number, R: number) => { return L | R; }
  },
};

export const factorial: (e: number) => number = (e: number) => {
  if (e === 0) return 1;
  return e * factorial(e - 1);
};

export const cosDegCV = (e: number) => {
  let cos = Math.cos(e * (Math.PI / 180));
  if (cos.toString().match("e")) return cos = 0
  return cos
};

export const polarCoordinates = (x: number, y: number) => {
  const r = Math.sqrt(x ** 2 + y ** 2);
  const θ = Math.sign(y) * Math.acos(x / Math.sqrt((x ** 2) + (y ** 2))) * (180 / Math.PI);
  return [r, θ];
  /** 直交座標 → 極座標への変換   
   r = √(x^2 + y^2)
   θ = sign(y) * acos(x / r)
  **/
};

export const cartesian = (r: number, θ: number) => {
  const x = Math.round(r * cosDegCV(θ));
  const y = Math.round(r * Math.sin(θ * (Math.PI / 180)));
  return [x, y];
  /** 極座標 → 直交座標 への変換
   x = r cos θ
   y = r sin θ
   **/
};

export const sinh = (x: number) => {
  return (Math.exp(x) - Math.exp(-x)) / 2;
};

export const cosh = (x: number) => {
  return (Math.exp(x) + Math.exp(-x)) / 2;
};

export const tanh = (x: number) => {
  return sinh(x) / cosh(x);
};

export const csch = (x: number) => {
  return 1 / sinh(x);
};

export const sech = (x: number) => {
  return 1 / cosh(x);
};

export const coth = (x: number) => {
  return 1 / tanh(x);
};

//順列
export const permutation = (n: number, r: number) => {
  return factorial(n) / factorial(n - r);
};

//組合せ
export const combinations = (n: number, r: number) => {
  return permutation(n, r) / factorial(r);
};

export default operateTable;