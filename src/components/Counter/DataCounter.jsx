import { useEffect, useRef } from "react"

export const DataCounter = ({ data }) => {

    const [a, b] = data

    const ref = useRef()

    useEffect(() => {
        ref.current.classList.add('number-animation')

        setTimeout(() => {
            ref.current.classList.remove('number-animation')
        }, 300)
    }, [a])

    return (
        <div>
            <span ref={ref}>{a < 10 ? '0' + a : a}</span>
            <span>{b}</span>
        </div>
    )
}