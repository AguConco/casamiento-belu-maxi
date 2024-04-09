import { Link } from "react-router-dom"
import { icon4 } from "../../assets/icons/icons"
import './Gifts.css'

export const Gifts = () => {

    return (
        <section className='section7'>
            <div>
                {icon4}
                <h3>Regalos</h3>
                <p>Lo que más queremos es compartir con vos nuestro gran día, pero si quisieras ayudarnos con nuestra <span>luna de miel</span>  podes hacer click en el siguiente botón</p>
                <Link className='btn-primary' to={'/info-regalos'}>Más información</Link>
            </div>
        </section>
    )
}