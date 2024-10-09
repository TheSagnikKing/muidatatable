import React, { useEffect, useState } from 'react'

const Practise = () => {

    const [userarray, setUserarray] = useState([
        {
            id: 1,
            name: "",
            country: "India",
            check: false
        },
        {
            id: 2,
            name: "",
            country: "Germany",
            check: false
        },
        {
            id: 3,
            name: "",
            country: "Canada",
            check: false
        },
        {
            id: 4,
            name: "",
            country: "Portugal",
            check: false
        },
        {
            id: 5,
            name: "",
            country: "Spain",
            check: false
        },
    ])

    const [finalarray, setFinalarray] = useState([])

    const handleChange = (value, obj_id) => {
        setUserarray((prev) => {
            const updatedArray = prev.map((item) => {
                return (
                    item.id === obj_id ? { ...item, name: value } : item
                )
            })
            return updatedArray
        })
    }

    const addHandler = (obj) => {
        if(obj.name){
            setFinalarray((prev) => {
                const updatedArray = [...prev, obj];
                return updatedArray;
            });
    
            setUserarray((prev) => {
                const updatedArray = prev.map((item) => {
                    return (
                        item.id === obj.id ? { ...item, check: true } : item
                    )
                })
                return updatedArray
            })
        }else{
            alert("Please Enter A Name")
        }
        
        
    }

    const deleteHandler = (obj) => {
        setFinalarray((prev) => {
            const updatedArray = prev.filter((item) => {
                return item.id !== obj.id
            })
            return updatedArray
        })

        setUserarray((prev) => {
            const updatedArray = prev.map((item) => {
                return item.id === obj.id ? { ...item, check: false, name: "" } : item
            })
            return updatedArray
        })
    }

    let [allChecked, setAllChecked] = useState(false)

    useEffect(() => {
        if(userarray.every((item) => item.check)){
            setAllChecked(true)
        }else{
            setAllChecked(false)
        }
    },[userarray])

    console.log("Final array ", finalarray)
    // console.log(userarray)
    return (
        <main>
            <h1 style={style.title}>How to modify particular object in React</h1>

            {
                allChecked ? 
                (<button style={{
                    margin: "auto",
                    display: "block",
                    background: "red",
                    color: "#fff",
                    padding: "6px 15px"
                }}>Checked</button>) : 
                (<button style={{
                    margin: "auto",
                    display: "block",
                    background: "limegreen",
                    color: "#fff",
                    padding: "6px 15px"
                }}>Not Check</button>)
            }
            

            <div>
                {
                    userarray.map((obj) => {
                        return (
                            <div style={style.item} key={obj.id}>
                                <div>
                                    <input
                                        type="text"
                                        value={obj.name}
                                        onChange={(e) => handleChange(e.target.value, obj.id)}
                                        style={{ paddingInline: "10px", marginBottom: "10px", outline: "none" }} />
                                    <p style={{ marginBottom: "5px", fontWeight: "500", fontSize: "18px" }}>Country - {obj.country}</p>
                                </div>

                                <div>
                                    {
                                        obj.check ?
                                            (<button style={{
                                                ...style.btn,
                                                background: "red"
                                            }} onClick={() => deleteHandler(obj)}>-</button>) :
                                            (<button style={{
                                                ...style.btn,
                                                background: "limegreen"
                                            }} onClick={() => addHandler(obj)}>+</button>)
                                    }

                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </main>
    )
}

export default Practise

const style = {
    title: {
        textAlign: "center",
        fontWeight: "500"
    },

    item: {
        width: "500px",
        height: "120px",
        borderRadius: "6px",
        boxShadow: "0px 0px 10px rgba(0,0,0,0.4)",
        padding: "15px",
        margin: "auto",
        marginTop: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    },
    btn: {
        height: "40px",
        width: "40px",
        borderRadius: "50%",
        backgroundColor: "crimson",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "none",
        fontSize: "22px",
        cursor: "pointer"
    }
}