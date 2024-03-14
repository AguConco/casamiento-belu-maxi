import './App.css'
import { icon4, icon5, icon6 } from './assets/icons/icons'
import img6 from './assets/img/img6.jpeg'
import { ConfirmAssistance } from './components/ConfirmAssistance/ConfirmAssistance'
import { Counter } from './components/Counter/Counter'
import { Date } from './components/Date/Date'
import { Events } from './components/Events/Events'
import { Gallery } from './components/Gallery/Gallery'
import { Hero } from './components/Hero/Hero'

export const App = () => {
    return (
        <main>
            <Hero />
            <Date />
            <Counter />
            <Events />
            <ConfirmAssistance />
            <Gallery />
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