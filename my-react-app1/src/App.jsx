import { motion } from "motion/react"

function App() {
  // 摺疊資料
  const questions = [
    {
      id: 1,
      question: "題目1",
      answer: "答案1",
    },
    {
      id: 2,
      question: "題目2",
      answer: "答案2",
    },
    {
      id: 3,
      question: "題目3",
      answer: "答案3",
    },
  ];

  return(
    <>
    <div className="wrapper" style={{
      backgroundColor: "black",
      maxWidth:"100vh",
      height:"100vh",
      display:"flex",
      justifyContent:"center",
      paddingTop:"50px",
      color:"#ccc",
    }}>
      {/* FAQ區 */}
      <div className="faq" style={{
        backgroundColor:"gray",
        width:"80%",
      }}>
        {/* 主標題 */}
        <h2>FAQ列表</h2>
      </div>
      </div></>
  );
}

export default App;