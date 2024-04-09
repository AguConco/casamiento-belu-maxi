import { icon3 } from '../../assets/icons/icons'
import './ConfirmAssistance.css'

export const ConfirmAssistance = () => {
    return (
        <section className='section5'>
                <div>
                    {icon3}
                    <h3>¿Nos acompañas?</h3>
                    <p>Tenés tiempo para confirmar tu asistencia hasta el 13/09</p>
                    <a className='btn-primary' href="#" target="_blank" rel="noopener noreferrer">confirmar asistencia</a>
                </div>
            </section>
    )
}