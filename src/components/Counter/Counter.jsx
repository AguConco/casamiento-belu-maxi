import { useState, useEffect } from "react";
import './Counter.css';

export const Counter = () => {
    const [timeRemaining, setTimeRemaining] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const eventDate = new Date('2024-10-19T20:15:00').getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const difference = eventDate - now;

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            setTimeRemaining({ days, hours, minutes, seconds });

            if (difference < 0) {
                clearInterval(interval);
                setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className='section3'>
            <h4>faltan</h4>
            <div className='day-counter'>
                <div>
                    <span>{timeRemaining.days}</span>
                    <span>días</span>
                </div>
                <div>
                    <span>:</span>
                    <span></span>
                </div>
                <div>
                    <span>{timeRemaining.hours}</span>
                    <span>horas</span>
                </div>
                <div>
                    <span>:</span>
                    <span></span>
                </div>
                <div>
                    <span>{timeRemaining.minutes}</span>
                    <span>minutos</span>
                </div>
                <div>
                    <span>:</span>
                    <span></span>
                </div>
                <div>
                    <span>{timeRemaining.seconds}</span>
                    <span>segundos</span>
                </div>
            </div>
            <h4>para el ¡Si quiero!</h4>
        </section>
    );
};
