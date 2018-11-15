// 原始数据类型

// boolean
let isDone: boolean = true;
// boolean !== Boolean

// number
let decLiteral: number = 10;
let hexLiteral: number = 0xf00d;
let binLiteral: number = 0b01011;
let octalLiteral: number = 0o774;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;

// string
let myName: string = 'zy';

// void
function alertName():void {
  console.log("无法返回return")
}
let unusable: void = undefined;

// null and undefined
let n: null = null;
let u:undefined = undefined;

// let test1: number = undefined;
// let u2: undefined;
// test1 = null; // strict error
// test1 = u2; // error


// any
let anyThing: any;
anyThing = '12';
anyThing = 12;
anyThing = true;

// 未声明的变量默认都是任意值
let anyThing2 = 12;
// anyThing2 = 'as'; // 类型推论，首次未指定类型直接赋值会推测一个类型，但如果开始没有赋值，后面都不会进行类型检查

// Union Types
let anything: string | number;
anything = 98;
anything = 'av';
// anything = true; // 该变量的联合类型中并不包含boolean

// eg
function getLength(something: number | string): string {
  // return something.length; // number上面不存在length
  return something.toString()
}

