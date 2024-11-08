import React, { useEffect, useRef, useState } from 'react'
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


    const inputref = useRef(null)

    const [focus, setFocus] = useState(false)

    useEffect(() => {
        if (inputref.current) {
            console.log(inputref);
        }

    }, [])


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

                                <div className={style.input_box} >
                                    <label
                                        style={{
                                            top: focus ? "-10px" : "50%",
                                            transform: focus ? "translateY(0%)" : "translateY(-50%)",
                                            fontSize: !focus && "17px",
                                            fontWeight: !focus && "500",
                                            color: !focus && "gray",
                                            transition: "all 0.2s ease",
                                        }}
                                    >Outline</label>
                                    <input
                                        type="text"
                                        ref={inputref}
                                        onFocus={() => setFocus(true)}
                                        onBlur={() => setFocus(false)}
                                        
                                        style={{
                                            outline: focus ? "1px solid royalblue" : "none",
                                            border: focus && "none"
                                        }}
                                    />
                                </div>
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