import React from 'react'
import s from './index.module.css'

export default function HomePage() {
    return (
        <div className={s.intro}>
            <div className={s.intro_left}>
                <div className={s.intro_left_wrapper}>
                    <h2 className={s.greetings_text}>Hello, My name is</h2>
                    <h1 className={s.name_text}>Dumitru Armas</h1>
                    <div className={s.intro_title}>
                        <div className={s.intro_title_wrapper}>
                            <div className={s.intro_title_item}>Junior Web Developer</div>
                            <div className={s.intro_title_item}>Photographer</div>
                            <div className={s.intro_title_item}>UI/UX Design</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.intro_right}>right</div>
        </div>
    )
}
