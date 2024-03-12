import './App.css'
import { icon1, icon2, icon3, icon4, icon5, icon6, iconDivisor } from './assets/icons/icons'
import img2 from './assets/img/img1.jpeg'
import img1 from './assets/img/img2.jpeg'
import img3 from './assets/img/img3.jpeg'
import img4 from './assets/img/img4.jpeg'
import img6 from './assets/img/img6.jpeg'
import { Counter } from './components/Counter/Counter'
import { Hero } from './components/Hero/Hero'

export const App = () => {
    return (
        <main>
            <Hero />
            <section className='section2'>
                <p>
                    <span>Sábado</span>
                    <span className='number-day'>19</span>
                    <span>Octubre </span>
                    <span className='number-year'>2024</span>
                </p>
                <div></div>
            </section>
            <Counter />
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
                <div className='img-1'> <img src={img1} /> </div>
                <div className='img-2'> <img src={img2} />
                    <div>
                        <span>MAXI</span>
                    </div>
                </div>
                <div className='img-3'> <img src={img3} /> </div>
                <div className='img-4'>
                    <div>
                        <span>BELU</span>
                    </div>
                    <img src={img4} /> </div>
            </section>
            <section className='section7'>
                <div>
                    {icon4}
                    <h3>Regalos</h3>
                    <p>Lo que más queremos es compartir con vos nuestro gran día, pero si quisieras ayudarnos con nuestra <span>luna de miel</span>  podes hacer click en el siguiente botón</p>
                    <a href="#" target="_blank" rel="noopener noreferrer">Más información</a>
                </div>
            </section>
            <section className='section7'>
                <div>
                    {icon5}
                    <h3>No es una fiesta si no suena....</h3>
                    <p>¿Qué tema no puede faltar en nuestra fiesta? ¡Ayúdanos a armar la lista!</p>
                    <a href="#" target="_blank" rel="noopener noreferrer">añadir tema</a>
                </div>
            </section>
            <section className='section7'>
                <div>
                    {icon6}
                    <h3>Subí las fotos de los momentos compartidos</h3>
                    <a href="#" target="_blank" rel="noopener noreferrer">subir foto</a>
                </div>
            </section>
            <section className='section8'>
                <h4>¡Esperamos verte ahi!</h4>
                <img src={img6} />
            </section>
            <footer>
                <p>Hecho por <a href='https://agustin-concollato.netlify.app' target="_blank" rel="noopener noreferrer">Agustin Concollato</a></p>
            </footer>
        </main>
    )
}