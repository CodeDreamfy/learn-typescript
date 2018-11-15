let array1: number[];
array1 = [1,2,3]

// 数组泛型
let fibonacci: Array<number> = [1,2,3,2,1];

// 使用接口表示数组
interface NumberArray {
  [index: number] : number
}
let fibonacci1: NumberArray = [1,2,3,4]

// any 
let fibonacci2: any[] = [{}, true, 'adc', 12];

// 类数组
function summ() {
  let args: IArguments = arguments;
}