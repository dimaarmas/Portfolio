import React from 'react'
import s from './index.module.css'

export default function HomePage() {
    return (
        <div className={s.intro}>
            <div className={s.intro_left}>left</div>
            <div className={s.intro_right}>right</div>
        </div>
    )
}
