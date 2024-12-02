import { useState } from "react";

function App() {
  // 使用者名稱

  const [inputUserName, setInputUserName] = useState('我是文字方塊');

  // 縣市名稱
  const [selCity, setSelCity] = useState('');

  // 建立陣列
  const arrCity = ['台北市', '新北市', '桃園市'];

  // 閱讀確認
  const [check, setCheck] = useState(false);

  // 複選：多個核取方塊
  const [chkList, setChkList] = useState([]);

  // 建立函式處理被勾選的項目
  const handleChkList = (e) => {
    // console.log(e.target.value);
    // 使用其餘運算子保留已經被勾選的項目+目前被勾選的項目
    // 檢查是否被勾選
    if (e.target.checked) {
      // 是=>原本+新的
      setChkList([...chkList, e.target.value]);
    } else {
      // 否=>從原本被勾選的項目中，拿掉不要的(fliter)
      setChkList(
        chkList.fliter((list) => {
          list !== e.target.value
        })
      );
    }
  }
  
  return (
    <>
      <h1>react-表單</h1>
      <hr />
      {/* input */}
      <label htmlFor="username">使用者名稱</label>
      <input type="text" id="username"
        value={inputUserName}
        onChange={(e) => {
          setInputUserName(e.target.value);
        }}
      />{inputUserName}
      <br />
      {/* select */}
      <label htmlFor="city">縣市名稱</label>
      <select name="" id="city"
        value={selCity}
        onChange={(e) => {
          setSelCity(e.target.value);
        }}
      >
        {/* 逐行寫法 */}
        {/* <option value="台北市">台北市</option>
        <option value="新北市">新北市</option>
        <option value="桃園市">桃園市</option>
        <option value="台中市">台中市</option>
        <option value="台南市">台南市</option>
        <option value="高雄市">高雄市</option> */}

        {/* 讀取陣列寫法 */}
        {/*  */}
        <option value='' disabled>請選擇</option>
        {
          arrCity.map((city) => {
            return <option value={city} key={city}>{city}</option>
          })
        }

      </select>{selCity}
      <br />

      {/* 單一核取方塊 */}

      <label htmlFor="isCheck">閱讀確認</label>
      <input type="checkbox" id="ischeck"
        value={check}
        onChange={(e) => {
          setCheck(e.target.checked);
        }} />{check.toString()}
      <br />

      {/* 複選：多個核取方塊 */}
      <input type="checkbox" id="chkList1" name="like" value="HTML" onChange={''} />
      <label htmlFor="chkList1">HTML</label>
      <input type="checkbox" id="chkList2" name="like" value="CSS" onChange={''} />
      <label htmlFor="chkList2">CSS</label>
      <input type="checkbox" id="chkList3" name="like" value="JS" onChange={''} />
      <label htmlFor="chkList3">JS</label>
    </>
  )
}
export default App