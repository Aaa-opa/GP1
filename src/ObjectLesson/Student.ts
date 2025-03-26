
/**
 * 这里定义了一个学生的类型，简单的包含了两个属性（变量），一个方法（函数）
 * name:string 表示名称是一个字符串类型的变量
 * age:number 表示年龄是一个字数字类型的变量
 * money: number 卡上余额
 * recharge: () => void; 对卡充值函数
 * ()=>void  函数可以理解为传入数据计算后返回数据，这里描述了输入输出的格式。
 *           ()表示不需要传入参数，  =>void  表示不需要返回结果。
 */

interface Student {
    name: string;
    age: number;
    money:number;
    recharge: () => void;
}

export default Student

/**
 * 如果想让本文件的内容在其他的文件也能使用
 * 就使用export default 把它开放出去
 */