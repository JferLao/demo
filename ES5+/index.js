// 转换
// from转换伪数组和数组
// Array.from(伪数组,mapFn,thisArg)
function testfrom(a, b, c) {
    // let array = [1, 2, 3, 4, 5]
    let i = 0
    let args = Array.from(arguments)
    let image = Array.from(document.querySelectorAll('img'))
    args.forEach((item) => {
        console.log("当前值为:" + item);
    })
    image.forEach((item) => {
        console.log("当前图片为:" + item);
    })
    let res = Array.from({ length: 5 }, function() { return i++ })
}
testfrom(1, 2, 3)

//生成新数组
// Array.of(arrItem)
// Array.fill(value,start,end)
function testArray() {
    let arr = Array(5)
    let arr1 = Array.of(1, 2, 3, 4, 5)
    let arr2 = [1, 2, 3, 4, 5]
    let arr3 = Array(5).fill(1, 0, 4)
    console.log(arr, arr1, arr2, arr3);
}
testArray()

// 查找数组
// Array.filter(fn) 查找满足条件的所有值
// Array.find(fn) 查找满足条件的第一个值
// Array.findIndex()查找满足条件的第一个值的索引位置
function findArray() {
    let arr = [1, 2, 4, 5, 6, 3, 1, 2, 3]
    let find = arr.filter(item => item === 3)
    let find2 = arr.find(item => item === 3)
    let find3 = arr.findIndex(item => item === 3)
    console.log(find, find2, find3);
}
findArray()

// 函数参数
function testFun(x, y = 3, z = 5) {
    // es5处理
    // if (x === undefined) {
    //     x = 2
    // }
    let res = x + y + z
    return res
    console.log(testFun.length);
}
testFun(1)

// REST参数使用
function testRest(...arr) {
    let num = 0
    arr.forEach((item) => {
        num += item * 1
    })
    console.log(num);
    return num
}
testRest(...[1, 2, 3, 4])


// 箭头函数
let fun1 = () => { console.log('type 1'); }
let fun2 = type => { console.log('type 2'); } //箭头函数只有一个参数时圆括号可以省略
let fun3 = (x, y) => x + y //箭头后为表达式且为函数返回值时可以省略花括号和return
let fun4 = (x, y) => ({ x: x, y: y }) //函数返回的是字面量对象可以用圆括号包裹对象,可以省略return

let test = {
    name: 'test',
    say: function() {
        console.log(`say${this.name}`);
    },
    sing: () => {
        let self = this
        console.log(`self: ${self.name} this: ${this.name}`);
    }
}
name = 'hello'
test.say()
test.sing()

//Object简写
function testObj() {
    let x = 1,
        y = 2,
        z = 4
    let obj = { x, y, [z]: 5 } //简写
    console.log(obj);
}
testObj()

// 新的数据结构Set
function testSet() {
    let s = new Set()
    s.add('hello').add('world').add('hello').add('delete')
    s.delete('delete')
    console.log(s, s.has('hello'), s.size);
    console.log(s.values(), s.keys(), s.entries());
    console.log(s.clear());
}
testSet()

// 新的数据结构Map
function testMap() {
    let map = new Map()
    map.set('key', 'value')
    map.set('key', 'new Value')
    map.set('key1', 'value1')
    map.forEach((key, value) => { console.log(key, value); })
    for (let [key, value] of map) {
        console.log(key, value);
    }
    console.log(map, map.get('key1'));
    console.log(map.values(), map.keys(), map.entries());
    map.delete('key1')
    console.log(map);
    map.clear()
    console.log(map);
}
testMap()

// Object拷贝
function testAssign() {
    const target = { a: null }
    const source = { a: 1, b: 2, c: 3, d: undefined, e: null }
    Object.assign(target, source)
    console.log(target, source);
}
testAssign()