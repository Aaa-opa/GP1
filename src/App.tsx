import React from "react";
import Student from "./ObjectLesson/Student";

function App() {
  //===============产生一个类型的对象================
  const wangLaoShi : Teacher = {
    name:"王老师",
    age: 23,
    jobtitle:"副教授",
    lessons:42,
    recharge : ()=>{ 
      wangLaoShi.lessons+=1;
    }
  }
  console.log("wangLaoShi:", wangLaoShi)
  //=========>>>>作业： 产生一个老师类型的对象<<<<<=====
  

  //===============使用xiaoLi================
  //了解xiaoLi的卡现有值
  const mny = wangLaoShi.lessons;
  console.log("王老师现在的教学课时为：", mny)
  //给小李卡上充值
  wangLaoShi.recharge();
  console.log("王老师增加后的教学课时为：", wangLaoShi.lessons)
  //=========>>>>作业： 使用老师的对象<<<<<=====


  return (
    <div className="p-4">
      <h2 className="text-4xl font-bold">
        王老师的教学课时
      </h2>
      <h4>   </h4>
    </div>
  );
}

export default App;
