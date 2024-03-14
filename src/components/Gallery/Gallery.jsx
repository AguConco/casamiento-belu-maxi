import './Gallery.css'
import img2 from '../../assets/img/img1.jpeg'
import img1 from '../../assets/img/img2.jpeg'
import img3 from '../../assets/img/img3.jpeg'
import img4 from '../../assets/img/img4.jpeg'

export const Gallery = () => {
    return (
        <section className='section6'>
            <div className='img-1'> <img src={img1} /> </div>
            <div className='img-2'> <img src={img2} /> </div>
            <div className='img-3'> <img src={img3} /> </div>
            <div className='img-4'> <img src={img4} /> </div>
        </section>
    )
}