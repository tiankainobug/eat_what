import './App.css';
import {useState} from "react";

function App() {
  const [fan,setFan] = useState(['今天吃饺子！今天玩__？','嘿嘿嘿，韩香阁烤肉-.-！','芝士双层手搓牛肉汉堡？！','黄焖鸡吧','好吃不贵，驴肉火烧','惬意生活，炒个小菜~','吃屎啦里-_-!','暴躁老板家的麻辣香锅？！','吃腻歪的老胖吧','辗家鸡肉米线','远一点的美味炸串！','算了还是吃超意兴吧，穷逼！','呦呦呦切克闹，煎饼果子来一套？','社区板面加鸡蛋豆皮！','来一碗蛋炒饭，两个蛋加老干妈！','奢侈一把吃火锅？！','幸福时刻！最爱的老板恋上鱼！'])
  const [eatWhat,setEatWhat] = useState('')
  function myclick() {
    console.log(eatWhat)
    console.log(fan)
    let index = Math.floor(Math.random() * 16)
    setEatWhat(fan[index])
  }

  return (
      // 外面的大背景
      <div className="bg">
        {/*里面的展示吃什么的框子*/}
        <div className="eatWhat">
          <h1>{eatWhat?eatWhat:'今天吃什么'}</h1>
          <button type="button" className="submit" onClick={myclick}>干饭🍚</button>
        </div>
      </div>
  );
}

export default App;
