import './App.css'
import img5 from './assets/img/img5.png'
import { icon1, icon2, icon3, icon4, iconDivisor } from './assets/icons/icons'

export const App = () => {
    return (
        <main>
            <div className='container-img5'>
                <img src={img5} />
                <div className="background-fade"></div>
            </div>
            <div className='div-main'>
                <section className='section1'>
                    <h1>
                        <span>¡nos casamos!</span>
                        Belu y Maxi
                    </h1>
                    <p>Queremos invitarte a compartir la alegría de unir nuestras vidas...</p>
                </section>
                <section className='section2'>
                    <p>
                        <span>Sábado</span>
                        <span className='number-day'>19</span>
                        <span>Octubre </span>
                        <span className='number-year'>2024</span>
                    </p>
                    <div></div>
                </section>
                <section className='section3'>
                    <h4>faltan</h4>
                    <div className='day-counter'></div>
                    <h4>para el ¡Si quiero!</h4>
                </section>
                <section className='section4'>
                    <div className='color1'></div>
                    <div className='color3'></div>
                    <div className='ceremony'>
                        {icon1}
                        <h3>Ceremonia Religiosa</h3>
                        <p>
                            <span>Hora</span>
                            20:15
                        </p>
                        <p>
                            <span>Lugar</span>
                            Catedral San Rafael
                        </p>
                        <a href="https://www.google.com/maps/place/Catedral+San+Rafael/@-31.2538558,-61.4943597,17z/data=!3m1!4b1!4m6!3m5!1s0x95caae37f4ad98e7:0x70298b01c7633f9e!8m2!3d-31.2538604!4d-61.4917848!16s%2Fg%2F1hc0sxzqw?entry=ttu" target="_blank" rel="noopener noreferrer">ver ubicación</a>
                    </div>
                    <div className="divisor">
                        <div></div>
                        {iconDivisor}
                        <div></div>
                    </div>
                    <div className='celebration'>
                        {icon2}
                        <h3>Celebración</h3>
                        <p>
                            <span>Hora</span>
                            21:00
                        </p>
                        <p>
                            <span>Lugar</span>
                            Tipuana Tipu
                        </p>
                        <a href="https://www.google.com/maps/place/Tipuana+Tipu/@-31.2590845,-61.4668876,17z/data=!3m1!4b1!4m6!3m5!1s0x95caaf01a843c1ef:0xbdfa35e2b3fae283!8m2!3d-31.2590891!4d-61.4643127!16s%2Fg%2F11f0kxn8fv?entry=ttu" target="_blank" rel="noopener noreferrer">ver ubicación</a>
                    </div>
                </section>
                <section className='section5'>
                    <div>
                        {icon3}
                        <h3>¿Nos acompañas?</h3>
                        <p>Tenés tiempo para confirmar tu asistencia hasta el 13/09</p>
                        <a href="#" target="_blank" rel="noopener noreferrer">confirmar asistencia</a>
                    </div>
                </section>
                <section className='section6'>
                    <div>
                        {icon4}
                        <h3>Regalos</h3>
                        <p>Lo que más queremos es compartir con vos nuestro gran día, pero si quisieras ayudarnos con nuestra <span>luna de miel</span>  podes hacer click en el siguiente botón</p>
                        <a href="#" target="_blank" rel="noopener noreferrer">Más información</a>
                    </div>
                </section>
            </div>
        </main>
    )
}