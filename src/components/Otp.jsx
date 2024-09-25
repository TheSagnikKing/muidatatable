import React, { useState, useEffect, useRef } from 'react'

const Otp = () => {

    const [phoneinputs, setPhoneinputs] = useState(new Array(4).fill(""))

    const inputRefs = useRef([])

    // console.log(inputRefs)

    const handleChange = (value, index) => {

        if (isNaN(value)) {
            alert("Please Enter Valid Number")
            return
        }

        setPhoneinputs((prev) => {

            const updatedarray = prev.map((item, ind) => {
                return ind === index ? value : item
            })

            return updatedarray
        })

        if (index < phoneinputs.length - 1) {
            inputRefs.current[index + 1].focus()
        }

    }

    // const handleKeyDown = (event, index) => {
    //     if (event.key === "Backspace") {
    //         if (index > 0) {
    //             if (!phoneinputs[index]) {
    //                 setPhoneinputs((prev) => {

    //                     const updatedarray = prev.map((item, ind) => {
    //                         return ind === index ? "" : item
    //                     })

    //                     return updatedarray
    //                 })

    //                 inputRefs.current[index - 1].focus()
    //             }
    //         }
    //     }
    // }


    const handleKeyDown = (e, index) => {

        //First time backspace ai if conditionta worki koreni default nature o oi last element take empty kore dilo.
        // Next backspace condition run korbe

        if (e.key === "Backspace" && index > 0 && !phoneinputs[index]) {
            const newOtp = [...phoneinputs];
            newOtp[index - 1] = "";
            inputRefs.current[index - 1].focus();
            setPhoneinputs(newOtp);
        }
    };


    console.log(phoneinputs)


    const submitHandler = () => {
        console.log(phoneinputs.join(""))
    }

    return (
        <div style={{ padding: "50px" }}>
            <h2>Enter your otp</h2>

            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                {
                    phoneinputs.map((input, index) => {
                        return (
                            <input
                                key={index}
                                style={{ width: "45px", height: "45px", display: "flex", textAlign: "center" }}
                                maxLength={1}
                                ref={(input) => (inputRefs.current[index] = input)}
                                onChange={(e) => handleChange(e.target.value, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                autoFocus={index === 0}
                                value={input}
                            />
                        )
                    })
                }
            </div>

            <button
                style={{
                    marginTop: "20px",
                    background: "#000",
                    color: "#fff",
                    fontSize: "16px",
                    fontWeight: "500",
                    padding: "4px 12px",
                    borderRadius: "4px",
                    border: "none",
                    cursor: "pointer"
                }}
                onClick={submitHandler}
            >Submit</button>
        </div>
    )
}

export default Otp