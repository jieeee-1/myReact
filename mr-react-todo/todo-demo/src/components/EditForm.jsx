import { useState } from "react"

function EditForm(todo){

    // 建立input內容的變數
    const [content, setContent] = useState('');

    // console.log(content);
    const handleSubmit = (e) => {
        // 去消事件預設行為
        e.preventDefault();
        editTodo(todo.id, content)

    }
    return (
        <form className="create-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="輸入待辦事項"
                value={content}
                onChange={(e) => {
                    setContent(e.target.value)
                }}
            />
            <button type="submit">完成</button>
            {/* 表單的按鈕可以用submit，就是按下了表單的內容會被處理 */}
        </form>
    )
}
export default EditForm