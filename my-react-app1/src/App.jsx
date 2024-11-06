// 建立新的元件
function MyComponent(){
  // return <h1>React</h1> 也可以這樣寫
  return (  //可以不寫小括號，但空標籤要寫在return後（同行）
    // 空標籤：Fragment（因為他不存在，所以f12檢查看不到）
    <>
  <h1>React</h1>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto voluptatum illo asperiores vel eveniet, illum culpa cupiditate! Nam, quas. Praesentium eum ducimus illo autem iure dolorem dolore odio error maxime.</p>
  </>
)
}

function App() {
// 如果把所有東西都放在App裡面的話，React效能會變低 => 元件建在function App外或另一個Component的file

  return (
    <div>
      <MyComponent />
    </div>
  )
}

export default App
