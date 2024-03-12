import { useState } from "react"

export const Counter = () => {

    const [currentDate, setCurrentDate] = useState()

    const eventDate = new Date('2024-10-19T20:15:00').getTime()

    setInterval(()=> {
        const a = new Date(eventDate - new Date().getTime())
        console.log(a)
        // setCurrentDate(a)
    },1000)

    return (
        <section className='section3'>
            <h4>faltan</h4>
            <div className='day-counter'>
                <div>{console.log(currentDate)}</div>
                <div>{}</div>
            </div>
            <h4>para el ¡Si quiero!</h4>
        </section>
    )
} 