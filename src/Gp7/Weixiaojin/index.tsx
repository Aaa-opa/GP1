interface Person {
  name: string;
  age: number;
}

// 函数：打招呼
function greet(person: Person): string {
  return `Hello, ${person.name}! You are ${person.age} years old.`;
}

// 测试数据
const user = { name: "Alice", age: 25 };

// 调用函数并输出
console.log(greet(user));
