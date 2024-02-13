# Scientific Calculator with ReactJs
  <img src="https://data-m244.s3.amazonaws.com/scientific_calcilator_reactjs/scientific_calculator_calculation.gif" alt="計算" width="49%" /> <img src="https://data-m244.s3.amazonaws.com/scientific_calcilator_reactjs/scientific_calculator_calculation_list.gif" alt="計算結果の表示" width="49%" />

## サイト概要

初等関数の計算ができる関数電卓アプリです。
計算順序をスタックで評価し逆ポーランド記法へ変換してから計算を行います。

### サイト URL

<https://scientific-calcilator.mx244.com/>

### 制作背景

React、TypeScript、firebase の学習のため作成。

## 使用技術

### 使用言語

- TypeScript

### ライブラリ
- React
- Tailwind CSS

### インフラ

AWS

- IAM
- S3
- Cloud Front
- Route 53

## インフラ構成図

<img src="https://data-m244.s3.amazonaws.com/Infrastructure/S3_static_hosting_configuration_diagram.jpg" alt="インフラ構成図" width="80%" />

## 機能

計算機能
- 四則演算
- 括弧を用いた計算
- 計算順序の評価

関数
  - 三角関数
  - 逆三角関数
  - 対数
  - 自然対数
  - 階乗
  - ネイピア数
  - 平方根
  - 冪乗
  - 剰余
  - 組合せ
  - 順列
  - 円周率
  - 極座標変換
  - 直交座標変換

