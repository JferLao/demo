## ES6
1.  Array.from(伪数组,mapFn,thisArg)
    伪数组特性:
    + 数据值可以为空,并且存在索引值
    + 要有length
    + { length:5} 也可以看做伪数组

    应用:
    + 实现数组每一项填充 let res = Array.from({ length: 5 }, function() { return i++ })
    + 伪数组转换为数组 let args = Array.from(arguments)
   

2. Array的数组遍历方法
    + for循环
    + forEach/map/every/some/filter
    + for of(用于非数组/非对象)/for in(用于Object)

3. Array生成新数组
    + 数组字面量
    + Array.of(每一项数据)
    + Array(length).fill(arrItem,start,end)

4. Array查找数组
    + array.filter()
    + array.find()

5. 函数参数默认值
    + 函数参数可以设置默认值,调用时利用undefined代替
    + 函数:function testFun(x, y = 3) {return x+y}
    + 调用:testFun(1,undefined)
    + 可以使用函数方法名.length获取参数个数
    
6. REST参数 
    + 使用(...)三个点放置参数,参数结果返回一个数组

7. 箭头函数的几种形式
    + let fun1 = () => { console.log('type 1'); }
    + let fun2 = type => { console.log('type 2'); } //箭头函数只有一个参数时圆括号可以省略
    + let fun3 = (x, y) => x + y //箭头后为表达式且为函数返回值时可以省略花括号和return
    + let fun4 = (x, y) => ({ x: x, y: y }) //函数返回的是字面量对象可以用圆括号包裹对象,可以省略return

8. 箭头函数的this指向保持不变,es5中this指向调用对象

9. Object可以简写,也可以使用方括号包裹变量作为key值,常规函数也可以直接写在Object内
    + let obj = { x, y, [z+y]: 5 }
    + let obj = { test(){ return 'hello' }}

10. 新的数据结构Set:
    + 特性1:数据不允许重复,重复部分自动过滤
    + 特性2:Set内存储的是可遍历的数据结构
    + 特性3:Set本质还是Object
    + 特性4:Set只能添加删除不能修改
    + WeakSet只接受Object

11. Set的api
    + add() 存储数据,可以级联
    + delete()删除数据
    + clear()清除全部数据
    + has() 判断有没有指定数据
    + size属性查看数据长度
    + keys()/values()返回对应内容
    + entries() 返回键值对
    + forEach()/for of

12. 新的数据结构Map:
    + set(key,value)可以实现添加和修改
    + delete(key) 删除key对应的数据
    + clear() 清除全部数据
    + has(key) 判断有没有指定key
    + size属性查看数据长度
    + keys()/values()返回对应内容
    + entries() 返回键值对
    + forEach(value,key)/for of
    + WeakMap只接受Object类型的key

13. Object.assign()对象拷贝
    + Object.assign(目标对象, 拷贝对象)实现浅拷贝

14. 字符串拼接
    + `${变量}`

15. 解构
16. Promise
17. Reflect 反射机制
    + 不能使用new 直接调用方法即可
    + console.log(Reflect.apply(Math.floor, null, [4.72]))
    + Reflect.defineProperty(obj, 'name', { value: 'name' })

18. Proxy代理
    + new Proxy(代理对象,代理做什么)
    + proxy的get(target, key)  目标对象和属性值
    + proxy的set(target, key, value)

19. Generator 让遍历停止
    + 在函数方法名前添加 * 
    + 方法执行用yield 定义停止 
    + 通过next()方法控制进行下一步
    + 直到next()执行完所有由yield控制的语句执行完才执行下面语句
    + return()实现控制流程直接结束
    + throw(new Error)可以抛出异常来结束next流程

20. Iterator 实现不可遍历的数据类型实现遍历
21. 模块导出
    + export default 变量
    + export { }
    + export function(){}
22. 模块引入
    + import 变量 from '路径'
23. ES7判断元素是否在数组中array.include('元素')
24. ES7中数学乘方 2**3 === Math.pow(2,3)
25. ES8获取对象中全部key  Object.keys(obj)
26. ES8获取对象中全部value Object.values(obj)
27. ES8获取对象中key和value Object.entries(obj)返回一个[key,value]
28. ES8补全位数str.padStart(位数,补的数字) /str.padEnd(位数,补的数字)
29. ES8获取对象的描述符Object.getOwnPropertyDescriptors(obj)