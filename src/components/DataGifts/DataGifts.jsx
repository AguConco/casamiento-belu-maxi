import { faCopy, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

export const DataGifts = () => {

    const [copy, setCopy] = useState(false)
    const CBU = '93427893247123784617'

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
        <div>
            <Link to={'/'}><FontAwesomeIcon icon={faTimes} className="cross" /></Link>
            <h3>Datos</h3>
            <div>
                <p>
                    {CBU}
                </p>
                <button onClick={copyNumber} >{copy ? 'Copiado' : ' Copiar'} <FontAwesomeIcon icon={faCopy} /></button>
            </div>
        </div>
    )
}