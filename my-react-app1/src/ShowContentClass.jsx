function ShowContentClass() {
    // 推薦課程資料
    const contentClassData = [
        {
            id: 1,
            imgURL: "images/unity.jpg",
            title: "Unity 5",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis odit ea",
            teacher: "某某某",
            hour: "1",
            price: "1600",
            priceSale: "1200",
        },
        {
            id: 2,
            imgURL: "images/gamesalad.jpg",
            title: "Gamesalad Game 遊戲製作",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis odit ea",
            teacher: "某某某",
            hour: "1",
            price: "1600",
            priceSale: "1200",
        },
        {
            id: 3,
            imgURL: "images/gwd.jpg",
            title: "Google Web design",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis odit ea",
            teacher: "某某某",
            hour: "1",
            price: "3600",
            priceSale: "2200",
        },
    ]
    return (
        <>
            {
                contentClassData.map((item) => {
                    return (
                        <div className="box2">
                            <p><img src={item.imgURL} alt="" /></p>
                            <h3>{item.title}</h3>
                            <p className='p-blue'>{item.desc}</p>
                            <p>講師：{item.teacher}</p>
                            <p>影音課程時數：{item.hour}hr</p>
                            <p>
                                <span className='span1'>原價{item.price}</span>
                                <span className='span2'>{item.priceSale}</span>
                            </p>
                            <button>付款上課去</button>
                        </div>
                    )
                })
            }
        </>
    )
}
export default ShowContentClass