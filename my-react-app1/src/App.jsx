// import banner from '../public/images/banner.jpg'
// images沒有在public可以這樣寫
// 載入app.css
import './App.css'

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
          <div className='box'>
            <h2><strong>教學影音</strong></h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis odit ea</p>
          </div>
          <div className='box'>
            <h2><strong>良性互動</strong></h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis odit ea</p>
          </div>
          <div className='box'>
            <h2><strong>趨勢分享</strong></h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis odit ea</p>
          </div>
        </div>
        {/* 主標 */}
        <section className="title">
          <h2>讓學習成為一種習慣</h2>
        </section>

        {/* 推薦課程 */}
        <div className="content2">
          <h1>推薦課程</h1>
          <div className='contentClass'>
            {/* 課程1 */}
            <div className="box2">
              <p><img src='images/unity.jpg'></img></p>
              <h3>Unity 5</h3>
              <p className='p-blue'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis odit ea</p>
              <p>講師：某某某</p>
              <p>影音課程時數：1hr</p>
              <p>
                <span className='span1'>原價1600</span>
                <span className='span2'>1200</span>
              </p>
              <p><button>付款上課去</button></p>
            </div>

            {/* 課程2 */}
            <div className="box2">
              <p><img src='images/gamesalad.jpg'></img></p>
              <h3>Gamesalad Game 遊戲製作</h3>
              <p className='p-blue'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis odit ea</p>
              <p>講師：某某某</p>
              <p>影音課程時數：1hr</p>
              <p>
                <span className='span1'>原價1600</span>
                <span className='span2'>1200</span>
              </p>
              <p><button>付款上課去</button></p>
            </div>

            {/* 課程3 */}
            <div className="box2">
              <p><img src='images/gwd.jpg'></img></p>
              <h3>Google web design</h3>
              <p className='p-blue'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis odit ea</p>
              <p>講師：某某某</p>
              <p>影音課程時數：1hr</p>
              <p>
                <span className='span1'>原價3600</span>
                <span className='span2'>2200</span>
              </p>
              <p><button>付款上課去</button></p>
            </div>
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
