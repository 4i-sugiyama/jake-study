// /* const,let等の変数宣言 */
// var val1 = "var変";
// console.log(val1);

// //var変数は上書き可能
// val1 = "上書き";
// console.log(val1);

// //var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// //letは上書き可能
// val2 = "let変数を上書き";
// console.log(val2);

// //letは再宣言不可
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// //constは上書き不可
// val3 = "上書き";

// //constは再宣言不可
// const val3 = "const変数";

//constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "じゃけぇ",
//   age: 28,
// };
// val4.name = "万ディー";
// console.log(val4);
// val4.address = "広島";
// console.log(val4)

// //constで定義した配列はプロパティの変更が可能
// const val5 = ['dog','cat'];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

// /* テンプレート文字列 */
// const name = "マンディー";
// const age = 21;
// //「私の名前はマンディーです。年齢は21さいです。」

// //従来の方法
// const message1 = "私の名前は" + name + "です。" + "年齢は" + age + "歳です。";
// console.log(message1);

// //テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

/* アロー関数 */
//従来の関数
// function func1(str){
//   return str;
// }

// const func1 = function (str) {
//   return str;
// };
// console.log(func1("hello"));

// //アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("こんにちは！"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 22));

/* 分割代入 */
// const myProfile = {
//   name: "マンディー",
//   age: 28
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// const {name, age}= myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);n

// const myProfile = ["マンディー", "21"];

// const [name, age] = myProfile;
// const message3 = `名前は${name}です。年齢は${age}です。`;
// console.log(message3)

/* デフォルト値 */
// const sayHello = (name = "ゲスト")=>{
//   console.log(`こんにちは！${name}さん！`);
// }
// sayHello("マンディー");

/* スプレッド構文 */
// 配列の展開
// const array = [1,2,3,2,1];
// // console.log(array);
// // console.log(...array);

// const sumFunc = (num1, num2) => {
//   console.log(num1 + num2);
// }
// sumFunc(array[0],array[1]);
// sumFunc(...array);

//まとめる
// const ary2 = [1,2,3,4,5];
// const [num1, num2, ...ary3] = ary2;
// console.log(ary3)

//配列のコピー、結合
// const ary4 = [10, 20];
// const ary5 = [30, 40];

// const ary6 = [...ary4];
// console.log(ary6);

// const ary7 = [...ary4, ...ary5];
// console.log(ary7);

/* mapやfilter */
// const nameAry = ["田中","山田","岡田"];
// for(let i= 0; i < nameAry.length; i++){
//   console.log(`${i + 1}番目は${nameAry[i]}です`);
// }
// const nameAry2 = nameAry.map((name)=>{
//   return name;
// })
// console.log(nameAry2)
// nameAry.map((name,index) => {
//   return console.log(`${index + 1}番目は${name}です。`);
// });

// const numAry = [1,2,3,4,5];
// const newNumAry = numAry.filter((num)=>{
//   return num % 2 !== 0;
// });
// console.log(newNumAry);

// const newNameAry = nameAry.map((name)=>{
//   if(name === "山田"){
//     return name;
//   }else{
//     return `${name}さん`;
//   }
// });
// console.log(newNameAry)

/* 三項演算子 */
// ある条件 ? 条件がtrueの時 : 条件がfalseの時
// const val1 = 1 > 0 ? 'true' : 'false';
// console.log(val1);

// const num = 1300;
// console.log(num.toLocaleString()); //金額表示3桁区切り

// const formattedNum = typeof num === 'number' ? num.toLocaleString() :'数値を入力してください';
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100より大きいです' : '100より小さいです';
// }
// console.log(checkSum(50,30));

/* 論理演算子の本当の意味を知ろう && || */
// const flag1 = true;
// const flag2 = true;

// if(flag1 || flag2){
//   console.log("1か2はtrue");
// }
// if(flag1 && flag2){
//   console.log("1も2もtrue");
// }

// || は左側falseなら右側を返す
const num = 100;
const fee = num || "金額未設定です";
console.log(fee);

// && は左側がtrueなら右側を返す
const num2 = 100;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
