

export const Clothing = () => {
     const arr = [
        { name: 'חצאית ', color: 'green',size: 20,price: 100 },
        { name: 'חולצה', color: 'green' ,size: 10,price: 100 },
        { name: 'סרפן', color: 'green' ,size: 8,price: 100  },
          { name: 'חצאית ', color: 'yellow',size: 20,price: 100 },
        { name: 'חולצה', color: 'yellow' ,size: 2,price: 100 },
        { name: 'סרפן', color: 'yellow' ,size: 38,price: 100  },
          { name: 'חצאית ', color: 'pink',size: 12,price: 100 },
        { name: 'חולצה', color: 'red' ,size: 18,price: 100 },
        { name: 'סרפן', color: 'red' ,size: 12,price: 20  }
    ]
   return (
    <>
    {arr.map((x, index) => (
                <div key={index} >
                    <p>שם הבגד:{x.name} מחיר{x.price} מידה:{x.size}</p>
                    {/* <p>מידה: {x.size}</p> */}
                    {x.size >= 20 ? <p>בגדי נשים</p> : <p>בגדי ילדים</p>}
                    {x.price<= 50 ? <p>מחיר מבצע </p> : <p>מחיר רגיל</p>}
        
                </div>
            ))}
          
        </>
    )
}