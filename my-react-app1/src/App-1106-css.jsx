// 導入外部CSS檔案
import "./App.css"

// 建立新的元件
function MyComponent() {
  // return <h1>React</h1> 也可以這樣寫
  return (  //可以不寫小括號，但空標籤要寫在return後（同行）
    // 空標籤：Fragment（因為他不存在，所以f12檢查看不到）
    <>
      <h1>React</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto voluptatum illo asperiores vel eveniet, illum culpa cupiditate! Nam, quas. Praesentium eum ducimus illo autem iure dolorem dolore odio error maxime.</p>
      <p>fff</p>
    </>
  )
}

function App() {
  // 如果把所有東西都放在App裡面的話，React效能會變低 => 元件建在function App外或另一個Component的file

  // 建立變數
  const strName = "abc"

  return (
    <div>
      {/* JSX中使用javascript變數，前後加大括號{變數名稱} */}
      {/* 在JSX裡面CSS是一種元件所以大括號之後要再加一個大括號 */}
      <h1 style={{
        color: "red",
        backgroundColor: "pink",
        width: "300px",
      }}>{strName.toLocaleUpperCase()}, 午安</h1>
      {/* 屬性中使用變數 */}
      <label className="unLineColor" htmlFor="userName">請輸入姓名：</label>
      <input type="text" id="userName" placeholder={strName} />
      {/* <MyComponent /> */}
    </div>
  )
}

export default App
