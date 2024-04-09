import './Gallery.css'
import img2 from '../../assets/img/img1.jpeg'
import img1 from '../../assets/img/img2.jpeg'
import img3 from '../../assets/img/img3.jpeg'
import img4 from '../../assets/img/img4.jpeg'
import { useEffect, useRef } from 'react'

export const Gallery = () => {

    const section6Ref = useRef()
    const refImg1 = useRef()
    const refImg2 = useRef()
    const refImg3 = useRef()
    const refImg4 = useRef()


    useEffect(() => {
        const handleScroll = () => {
            const positionSection = section6Ref.current.offsetTop
            if (window.scrollY >= positionSection - 600) {
                refImg1.current.style.animationName = 'downUpOpacity'
                refImg2.current.style.animationName = 'downUpOpacity'
                refImg3.current.style.animationName = 'downUpOpacity'
                refImg4.current.style.animationName = 'downUpOpacity'
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])


    return (
        <section className='section6' ref={section6Ref}>
            <div className='img-1' ref={refImg1}> <img src={img1} /> </div>
            <div className='img-2' ref={refImg2}> <img src={img2} /> </div>
            <div className='img-3' ref={refImg3}> <img src={img3} /> </div>
            <div className='img-4' ref={refImg4}> <img src={img4} /> </div>
        </section>
    )
}

