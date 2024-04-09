import img5 from '../../assets/img/img5.png'
import './Hero.css'

export const Hero = () => {
    return (
        <>
            <div className='container-img5'>
                <img src={img5} />
                <div className="background-fade"></div>
            </div>
            <section className='section1'>
                <h1>
                    <span>¡nos casamos!</span>
                    Belu y Maxi
                </h1>
                <p>Queremos invitarte a compartir la alegría de unir nuestras vidas...</p>
            </section>
        </>
    )
}