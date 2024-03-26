import { useState } from "react"
import { icon4 } from "../../assets/icons/icons"
import './Gifts.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCopy } from "@fortawesome/free-regular-svg-icons"
import { faTimes } from "@fortawesome/free-solid-svg-icons"

export const Gifts = () => {

    const [modal, setModal] = useState()
    const [copy, setCopy] = useState(false)
    const CBU = '93427893247123784617'

    const changeModal = (e) => {
        e.preventDefault()
        setModal(!modal)
        const d = document.querySelector('body')
        modal ? d.style.overflowY = 'scroll' : d.style.overflowY = 'hidden'
    }

    const copyNumber = () => {
        navigator.clipboard.writeText(CBU)
            .then(() => {
                setTimeout(() => setCopy(false), 5000)
                setCopy(true)
            })
            .catch((error) => {
                console.error('Error al copiar el código: ', error)
            });
    }

    return (
        <section className='section7'>
            <div>
                {icon4}
                <h3>Regalos</h3>
                <p>Lo que más queremos es compartir con vos nuestro gran día, pero si quisieras ayudarnos con nuestra <span>luna de miel</span>  podes hacer click en el siguiente botón</p>
                <a href="#" onClick={changeModal} target="_blank" rel="noopener noreferrer">Más información</a>
            </div>
            {modal && <div className="container-modal">
                <div onClick={changeModal} className="background"></div>
                <div className="modal">
                    <FontAwesomeIcon icon={faTimes} className="cross" onClick={changeModal}/>
                    <h3>Datos</h3>
                    <div>
                        <p>
                            {CBU}
                        </p>
                        <button onClick={copyNumber} >{copy ? 'Copiado' : ' Copiar'} <FontAwesomeIcon icon={faCopy} /></button>
                    </div>
                </div>
            </div>}
        </section>
    )
}