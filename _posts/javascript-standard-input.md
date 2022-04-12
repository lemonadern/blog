---
title: 'JavaScript(Node.js)における標準入力のやり方メモ'
date: '2022-04-12T11:54:36'
ogImage:
  url: '/assets/og_logo.png'
---

JavaScript(Node.js) で簡単な競プロ的課題をやることになったが、なかなかJavaScriptでは標準入出力を行うことがないため調べた。
個人的に使いやすいと感じた使い方を記しておく。

# 結論

```js
process.stdin.setEncoding("utf8");

let lines = []; 
const reader = require("readline").createInterface({
  input: process.stdin,
});

// 改行イベント
reader.on("line", (line) => {
  lines.push(line); 
});

// 標準入力終了時イベント
reader.on("close", () => {

  // 分割代入で利用する
  const [firstLine, ...restLines] = lines;
  const [n, m] = firstLine.split(" ").map( v => parseInt(v, 10));
  console.log(n, m);

  // 一行ずつ利用する
  for(const line of restLines) {
    const [a, b] = line.split(" ").map( v => parseInt(v, 10));
    console.log(a + b);
  }

});
```
# 簡単に解説
各部分を簡単に解説する
## 入力処理

```js
process.stdin.setEncoding("utf8");

let lines = []; 
const reader = require("readline").createInterface({
  input: process.stdin,
});
```
エンコーディングを指定した後、 `readline` を用いて一行ずつ読み込んでいる。
1行ごとに配列の要素として格納するので `let lines` のようにミュータブルな配列として宣言している。

## 改行時の処理
```js
// 改行イベント
reader.on("line", (line) => {
  lines.push(line); 
});

```
改行されるたびに、宣言しておいた `line` の配列へと要素を追加している。

## 入力終了時の処理
```js
// 標準入力終了時イベント
reader.on("close", () => {
  // 省略
});
```
標準入力が終了したらここの処理が呼ばれる。

# その他
その他、標準入力以外で使えそうなプラクティス(メモ)

## 最初の行を無視したり、別で利用したりする
競プロでは、最初の行が要素数だったりして他の行と意味が異なることがあるので、それを考慮した操作
### 分割代入で利用
```js
  // 分割代入で利用する
  const [firstLine, ...restLines] = lines;
```
配列の分割代入を利用して、`firstLine` と `restLine` に分割している。
最初の2行になどになっても同様に対応できる。

### そもそも利用しない
```js
 lines.shift();
```
最初の行を飛ばす。このあとに `lines` に対して操作をする。

## 空白区切りのフォーマットを解析する（文字列として利用）
```js
  const [firstName, lastName] = firstLine.split(" ");
  console.log(firstName, lastName);
```
`split()` で文字列を分割する

## 空白区切りのフォーマットを解析する（数値として利用）
```js
  const [n, m] = firstLine.split(" ").map( v => parseInt(v, 10));
  console.log(n, m);
```
上記の操作に対し、 `parseInt` で数値に変換する

## 1行ずつ利用する
```js
  // 一行ずつ利用する
  for(const line of restLines) {
    // 省略
  }
```
`for` , `in` を利用して配列の要素に一つずつ順番にアクセスすることができる