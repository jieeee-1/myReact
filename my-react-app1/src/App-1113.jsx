// import banner from '../public/images/banner.jpg'
// images沒有在public可以這樣寫
// 載入app.css
import './App-1113.css'
import ShowContent from './ShowContent.jsx'
import ShowContentClass from './ShowContentClass.jsx'


function App() {
  

  return (
    <>
      <div className="wrap">
        {/* 頁首廣告區 */}
        <header>
          {/* 導入圖片後使用 */}
          <div>
            <img src="images/banner.jpg"></img>
          </div>
        </header>

        {/* 特色區 */}
        <div className="content">
          <ShowContent />
        </div>

        {/* 主標 */}
        <section className="title">
          <h2>讓學習成為一種習慣</h2>
        </section>

        {/* 推薦課程 */}
        <div className="content2">
          <h1>推薦課程</h1>
          <div className='contentClass'>
          <ShowContentClass />

          </div>
        </div>

        {/* 頁尾區 */}
        <footer>
          <p>&copy; 2024.11.12 楊詠捷 </p>
        </footer>
      </div >
    </>
  )
}

export default App
