import { useState, useEffect } from "react";
import './Counter.css';
import { DataCounter } from "./DataCounter";

export const Counter = () => {
    const [timeRemaining, setTimeRemaining] = useState({
        days: [0, 'días'],
        hours: [0, 'horas'],
        minutes: [0, 'minutos'],
        seconds: [0, 'segundos']
    });

    useEffect(() => {
        const eventDate = new Date('2024-10-19T20:00:00').getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime()
            const difference = eventDate - now

            const days = Math.floor(difference / (1000 * 60 * 60 * 24))
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
            const seconds = Math.floor((difference % (1000 * 60)) / 1000)

            setTimeRemaining({
                days: [days, 'días'],
                hours: [hours, 'horas'],
                minutes: [minutes, 'minutos'],
                seconds: [seconds, 'segundos']
            })

            if (difference < 0) {
                clearInterval(interval)
                setTimeRemaining({
                    days: [0, 'días'],
                    hours: [0, 'horas'],
                    minutes: [0, 'minutos'],
                    seconds: [0, 'segundos']
                })
            }
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <section className='section3'>
            <h4>faltan</h4>
            <div className='day-counter'>
                <DataCounter data={timeRemaining.days} />
                <div>
                    <span>:</span>
                    <span></span>
                </div>
                <DataCounter data={timeRemaining.hours} />
                <div>
                    <span>:</span>
                    <span></span>
                </div>
                <DataCounter data={timeRemaining.minutes} />

                <div>
                    <span>:</span>
                    <span></span>
                </div>
                <DataCounter data={timeRemaining.seconds} />

            </div>
            <h4>para el ¡Si quiero!</h4>
        </section>
    );
};
