import React, { useState } from 'react'
import style from './Stepper.module.css'

const Stepper = () => {

    const [progress, setProgress] = useState(1)

    const stepupHandlerOne = () => {
        setProgress(2)
    }

    const stepupHandlerTwo = () => {
        setProgress(3)
    }

    const stepupHandlerThree = () => {
        alert("Submited successfully !")
    }

    return (
        <main className={style.stepper_container}>
            <div className={style.stepper_box}>
                <div className={style.stepper_header}>
                    <div
                        className={style.stp_circle}
                        style={{
                            background: progress >= 1 && "royalblue",
                            color: progress >= 1 && "#fff"
                        }}
                    >1</div>
                    <div className={style.stp_progress}
                        style={{
                            background: progress >= 2 && "royalblue",
                        }}
                    ></div>
                    <div className={style.stp_circle}
                        style={{
                            background: progress >= 2 && "royalblue",
                            color: progress >= 2 && "#fff"
                        }}
                    >2</div>
                    <div className={style.stp_progress}
                        style={{
                            background: progress >= 3 && "royalblue",
                        }}
                    ></div>
                    <div className={style.stp_circle}
                        style={{
                            background: progress >= 3 && "royalblue",
                            color: progress >= 3 && "#fff"
                        }}
                    >3</div>
                </div>

                <div className={style.stp_form}>
                    {
                        progress === 1 && (
                            <div>
                                <h1>Form One</h1>
                                <button onClick={stepupHandlerOne}>Next One</button>
                            </div>
                        )
                    }

                    {
                        progress === 2 && (
                            <div>
                                <h1>Form Two About</h1>
                                <button onClick={stepupHandlerTwo}>One More</button>
                            </div>
                        )
                    }

                    {
                        progress === 3 && (
                            <div>
                                <h1>Form Three Complete</h1>
                                <button onClick={stepupHandlerThree}>Submit</button>
                            </div>
                        )
                    }

                </div>
            </div>
        </main>
    )
}

export default Stepper