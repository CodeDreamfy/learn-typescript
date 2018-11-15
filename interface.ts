interface Person {
  readonly name: string,
  age?: number,
  [propName: string]: any
}
// 严格模式下只允许undefined赋值给可选属性
let tom: Person = {
  name: 'Tom',
  like: 'ying',
  love: 1221,
  age: 12
}

//  只读属性只存在于第一次对象赋值，而不是第一次给只读属性赋值的时候
// 可选属性与任意属性都存在的情况下，当属性名相同的话，以可选属性定义的类型为准


