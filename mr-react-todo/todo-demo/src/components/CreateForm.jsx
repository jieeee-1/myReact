import { useState } from "react"


function CreateForm() {
    // 建立input內容的變數
    const [content, setContent] = useState('');

    // console.log(content);
    const handleSubmit = (e) => {
        // 去消事件預設行為
        e.preventDefault();
        // 增加todo內容
        addTodo(content);
        // 清除input內容
        setContent('');
    }
    return (
        <form className="create-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="輸入待辦事項"
                value={content}
                onChange={(e) => {
                    setContent(e.target.value)
                }}
            />
            <button type="submit">加入</button>
            {/* 表單的按鈕可以用submit，就是按下了表單的內容會被處理 */}
        </form>
    )
}
export default CreateForm