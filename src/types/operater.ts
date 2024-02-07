type OperaterType = {
  Priority: number;
  Type: string;
  Arity: number;
  Associative_law: string;
  fn: (L: number, R: number) => void;
};
export type OperateKeyType = { [key: string]: OperaterType };