import { useEffect } from "react"
import axios from 'axios';

import './App.css'

import { FaUmbrella } from "react-icons/fa";

function App() {
  // useEffect(() => {
  //   (async () => {
  //     const data = await axios.get('./F-C0032-001.json');
  //     const { location } = data.data.cwaopendata.dataset;
  //     console.log(location);
  //   })
  // }, [])

  return (
    <>
      <div className="wrap">
        <h2>36小時天氣預報</h2>
        {/* 一欄兩列 */}
        <div className="row">
          <div className="col1">
            {/* 卡片樣式 */}
            <div className="card">
              {/* 標題 */}
              <div className="card-title">台北市</div>
              {/* 內容 */}
              <div className="card-body">
                {/* 1列三欄 */}
                <div className="row2">
                  <div className="col1">
                    <p>2日</p>
                    <p>
                      上午6:00<br />
                      ～<br />
                      下午6:00
                    </p>
                    <p>
                      <img src="./public/weatherIcon/晴時多雲.svg" alt="" />
                    </p>
                    <p>晴時多雲</p>
                    <p><FaUmbrella />10%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* <section className="taipei">
        <h3>台北市</h3>
        <div className="taipeiWeather">
          <div>
            <h4>2日</h4>
            <p>上午6:00～下午6:00</p>
            <img src="./public/weatherIcon/晴時多雲.svg"></img>
            <p>晴時多雲</p>
            <p>30%</p>
          </div>
          <div>
            <h4>2日</h4>
            <p>下午6:00～上午6:00</p>
            <img src="./public/weatherIcon//多雲時晴.svg"></img>
            <p>多雲時晴</p>
            <p>20%</p>
          </div><div>
            <h4>3日</h4>
            <p>上午6:00～下午6:00</p>
            <img src="./public/weatherIcon/多雲短暫雨.svg"></img>
            <p>多雲短暫雨</p>
            <p>30%</p>
          </div>

        </div>
      </section> */}

    </>
  )
}
export default App