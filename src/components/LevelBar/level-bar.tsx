import { useEffect, useRef, useState } from 'react'
import './level-bar.scss'

interface LevelBarProps {
    ind: number,
    nome: string,
    level: number,
}

export default function LevelBar({ind, nome, level}: LevelBarProps) {
    /**
     * Referência do elemento da barra de progresso.
     */
    const barRef = useRef<HTMLDivElement | null>(null)

    /** Estado que controla a animação. */
    const [temAnimacao, setTemAnimacao] = useState(false)

    /**
     * Efeito para observar a visibilidade do elemento e o início da animação.
     */
    useEffect(() => {
        const element = barRef.current
        if (!element || temAnimacao) return

        const observer = new IntersectionObserver(
            ([entry], obs) => {
                if (entry.isIntersecting) {
                    setTemAnimacao(true)
                    obs.unobserve(entry.target)
                }
            },
            {
                threshold: 0.35,
            }
        )
        observer.observe(element)
        return () => observer.disconnect()
    }, [temAnimacao])

    return (
        <div className="bar-item" key={ind}>
            <div className="nome">
                {nome}
            </div>
            <div className="level">
                {level} %
            </div>
            <div className="progress">
                <span
                    ref={barRef}
                    className={`filler ${temAnimacao ? 'visivel' : ''}`}
                    style={{ ["--target-width" as string]: `${level}%` }}
                />
            </div>
        </div>
    )
}