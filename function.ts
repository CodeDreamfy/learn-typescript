// 函数是 JavaScript 中的一等公民

// 函数声明有两种常见方式

// 函数声明
function sum(x: number, y: number): number {
  return x + y;
}

// 函数表达式
let sum2 = function (x: number, y: number): number {
  return x + y;
}
// 如果要对sum2进行定义的话可以这样
let sum3: (x: number, y:number) => number = function(x, y) {
  return x + y
}
sum3(3,2)
// sum(1,2,3) // 不允许输入多个参数
// sum(1) // 不允许缺少参数

// 可选参数
function testFunction(firstName: string, lastName?: string) {
  if(lastName) {
    return firstName + ' ' + lastName
  } else {
    return firstName
  }
}
testFunction('hello', 'zy')

// 默认值
function testFunction1( lastName?: string, firstName: string = 'zhang'){
  return firstName + ' ' + lastName
}
// 当必选值存在默认值的时候就可以和可选值颠倒位置了

// 剩余参数
function pushFunc(array: any[], ...items: any[]) {
  items.forEach(function(item){
    array.push(item)
  })
}

// 重载
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
  if(typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''))
  }else {
    return x.split('').reverse().join('')
  }
}
