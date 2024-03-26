import './Gallery.css'
import img2 from '../../assets/img/img1.jpeg'
import img1 from '../../assets/img/img2.jpeg'
import img3 from '../../assets/img/img3.jpeg'
import img4 from '../../assets/img/img4.jpeg'
import { useRef } from 'react'

export const Gallery = () => {

    const section6Ref = useRef()
    const refImg1 = useRef()
    const refImg2 = useRef()
    const refImg3 = useRef()
    const refImg4 = useRef()

    window.onscroll = () => {
        const positionSection = section6Ref.current.offsetTop
        if (window.scrollY >= positionSection - 600) {
            refImg1.current.style.opacity = '1'

            setTimeout(() => {
                refImg2.current.style.opacity = '1'
            }, 200)

            setTimeout(() => {
                refImg3.current.style.opacity = '1'
            }, 600)

            setTimeout(() => {
                refImg4.current.style.opacity = '1'
            }, 1000)

        }
    }

    return (
        <>
            <section className='section6' ref={section6Ref}>
                <div className='img-1' ref={refImg1}> <img src={img1} /> </div>
                <div className='img-2' ref={refImg2}> <img src={img2} /> </div>
                <div className='img-3' ref={refImg3}> <img src={img3} /> </div>
                <div className='img-4' ref={refImg4}> <img src={img4} /> </div>
            </section>
        </>
    )
}