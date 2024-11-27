import { useEffect } from "react";

function App() {
  const [count, setcount] = useState(0);

  // 每一次渲染後執行
  useEffect(() => {
    console.log(1);
  });

  // 只執行一次（開啟檔案時）
  useEffect(() => {
    console.log(2);
    // 按鈕監聽事件
    // 取得按鈕
    let btn2 = document.getElementById('btn2');
    btn2.addEventListener('click', () => {
      // 取得段落
      let p1b = document.getElementById('p1');
      // 再變色
      p1b.style.color = 'red';
    })
  }, []);
  
  // 當陣列中的依賴條件改變時
  useEffect(() => {
    console.log(3);
  }, [count]);


  return (
    <>
      <h1>useEffect</h1>
      <hr />
      <p id="p1">我是段落</p>
      {/* 綁定事件 */}
      <button onClick={() => {
        // 取得段落
        let p1a = document.getElementById('p1');

        // 再變色
        p1a.style.color = "blue"
      }}>變藍色</button>

      {/* 監聽事件 */}
      <button id="btn2">變紅色</button>
    </>
  )
}

export default App