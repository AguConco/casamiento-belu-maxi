import './App.css'
import { icon1, icon2, icon3, icon4, icon5, icon6, iconDivisor } from './assets/icons/icons'
import img2 from './assets/img/img1.jpeg'
import img1 from './assets/img/img2.jpeg'
import img3 from './assets/img/img3.jpeg'
import img4 from './assets/img/img4.jpeg'
import img6 from './assets/img/img6.jpeg'
import { Counter } from './components/Counter/Counter'
import { Date } from './components/Date/Date'
import { Events } from './components/Events/Events'
import { Hero } from './components/Hero/Hero'

export const App = () => {
    return (
        <main>
            <Hero />
            <Date />
            <Counter />
            <Events />
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
                {/* <p>Hecho por <a href='https://agustin-concollato.netlify.app' target="_blank" rel="noopener noreferrer">Agustin Concollato</a></p> */}
            </footer>
        </main>
    )
}