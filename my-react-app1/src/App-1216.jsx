import { useEffect } from "react";

import $ from 'jquery';

export default function App() {

  // 建議的寫法2
  useEffect(() => {
    // 移入 => mouseover()
    // 移出 => mouseout()
    // 移動 => mousemove()
    // X、Y座標 => pageX、pageY
    // 取得HTML內容 => html()
    // 淡入 => fadeIn()
    // 淡出 => fadeOut()
    // 速度 => 毫秒 => (slow, normal, fast)

    $('a:has(.ttpShow)').mouseover(function (e) {
      $('body').append('<div id="ttpPanel">' + $().children(".ttpShow").html() + '</div>');
      $('#ttpPanel').css({
        top: (e.pageY) + 'px',
        left: (e.pageX) + 'px'
      }).fadeIn("fast");
    }).on('mouseout', function () {
      $('#ttpPanel').remove();
    }).on('mousemove', function (e) {
      $('#ttpPanel').css({
        top: (e.pageY + 10) + 'px',
        left: (e.pageX + 10) + 'px'
      });
    })
  }, [])

  return (
    <>
      <h2>ToolTip</h2>
      <p>Lorem, ipsum dolor sit amet
        <a href="#">
          consectetur
          <span className="ttpShow">consectetur 內容說明...</span>
        </a>
        in minus esse, quas eos quaerat nisi deserunt autem? Labore tempore adipisci, minus esse excepturi recusandae!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium non facilis officiis. Sunt, dolore.
        Lorem, ipsum dolor.i deserunt autem? Labore temporei deserunt autem? Labore temporei deserunt autem? Labore tempore</p>
    </>
  )
}