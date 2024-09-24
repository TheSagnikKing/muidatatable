// import React, { useState } from 'react'

// const Dem = () => {

//     const [persondata, setPersondata] = useState([
//         {
//             id: 1,
//             name: "John",
//             country: "England",
//             count: 0
//         },
//         {
//             id: 2,
//             name: "Jane",
//             country: "America",
//             count: 0
//         },
//         {
//             id: 3,
//             name: "Marry",
//             country: "Germany",
//             count: 0
//         },
//         {
//             id: 4,
//             name: "Eren",
//             country: "Luxembourg",
//             count: 0
//         },
//         {
//             id: 5,
//             name: "Emiliy",
//             country: "France",
//             count: 0
//         }
//     ])


//     const increase_count = (id) => {
//         setPersondata((prev) => {
//             const updatearray = prev.map((item) => {
//                 return (
//                     item.id == id ? { ...item, count: item.count + 1 } : item
//                 )
//             })
//             return updatearray
//         })
//     }

//     const decrease_count = (id) => {
//         setPersondata((prev) => {
//             const updatearray = prev.map((item) => {
//                 return (
//                     item.id == id ? { ...item, count: item.count > 0 ? item.count - 1 : item.count } : item
//                 )
//             })
//             return updatearray
//         })
//     }
//     return (
//         <main>
//             <div style={{
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "50px",
//                 height: "60px",
//                 background: "#f9f9f9",
//                 paddingInline: "20px",
//                 borderBottom: "1px solid #000"
//             }}>
//                 <p>Name</p>
//                 <p>Country</p>
//                 <p>Count</p>
//             </div>

//             <div>
//                 {
//                     persondata.map((person) => {
//                         return (
//                             <div style={{
//                                 display: "flex",
//                                 alignItems: "center",
//                                 gap: "50px",
//                                 height: "60px",
//                                 background: "#f9f9f9",
//                                 paddingInline: "20px",
//                                 borderBottom: "1px solid #000"
//                             }}
//                                 key={person.id}
//                             >
//                                 <p>{person.name}</p>
//                                 <p>{person.country}</p>
//                                 <div style={{
//                                     display: "flex",
//                                     alignItems: "center",
//                                     gap: "10px"
//                                 }}>
//                                     <button style={{ width: "35px", height: "35px", cursor: "pointer" }}
//                                         onClick={() => decrease_count(person.id)}
//                                     >-</button>
//                                     <p style={{ fontWeight: "bold" }}>{person.count}</p>
//                                     <button style={{ width: "35px", height: "35px", cursor: "pointer" }}
//                                         onClick={() => increase_count(person.id)}
//                                     >+</button>
//                                 </div>
//                             </div>
//                         )
//                     })
//                 }

//             </div>
//         </main>
//     )
// }

// export default Dem


import React, { useEffect, useState } from 'react'

const Dem = () => {

    const [persondata, setPersondata] = useState([
        {
            id: 1,
            name: "John",
            country: "England",
            selected: false
        },
        {
            id: 2,
            name: "Jane",
            country: "America",
            selected: false
        },
        {
            id: 3,
            name: "Marry",
            country: "Germany",
            selected: false
        },
        {
            id: 4,
            name: "Eren",
            country: "Luxembourg",
            selected: false
        },
        {
            id: 5,
            name: "Emiliy",
            country: "France",
            selected: false
        }
    ])

    const [finaldata, setFinaldata] = useState([])

    const addHandler = (person) => {

        setPersondata((prev) => {
            const updatedArray = prev.map((item) => {
                return item.id === person.id ? { ...item, selected: true } : item
            })
            return updatedArray
        })
        setFinaldata([...finaldata, person])
    }

    const deleteHandler = (person) => {
        setPersondata((prev) => {
            const updatedArray = prev.map((item) => {
                return item.id === person.id ? { ...item, selected: false } : item
            })
            return updatedArray
        })

        setFinaldata((prev) => {
            const updatedArray = prev.filter((item) => {
                return item.id !== person.id
            })
            return updatedArray
        })
    }

    const [check, setCheck] = useState(false)

    const allCheckHandler = () => {
        setPersondata((prev) => {
            const updatedArray = prev.map((item) => {
                return { ...item, selected: true } 
            })
            setCheck(true)
            setFinaldata(updatedArray)
            return updatedArray
        })
    }

    const noCheckHandler = () => {
        setPersondata((prev) => {
            const updatedArray = prev.map((item) => {
                return { ...item, selected: false } 
            })
            setCheck(false)
            setFinaldata([])
            return updatedArray
        })
    }

    useEffect(() => {
        const allcheck = persondata.every((item) => item.selected)
        if(allcheck){
            setCheck(true)
        }else{
            setCheck(false)
        }
    },[persondata])
    
    console.log("Person ",persondata.every((item) => item.selected))
    console.log(finaldata)
    return (
        <main>
            <div style={{
                display: "flex",
                alignItems: "center",
                gap: "50px",
                height: "60px",
                background: "#f9f9f9",
                paddingInline: "20px",
                borderBottom: "1px solid #000"
            }}>
                <p>Name</p>
                <p>Country</p>

                {
                    check ? <button style={{
                        padding: "5px 12px", cursor: "pointer", background: "orangered", color: "#fff", fontWeight: "bold", border: "none", outline: "none", boxShadow: "0px 6px 12px rgba(0,0,0,0.4)"
                    }}
                    onClick={() => noCheckHandler()}
                    >Checked</button> :
                    <button style={{
                        padding: "5px 12px", cursor: "pointer", background: "blue", color: "#fff", fontWeight: "bold", border: "none", outline: "none", boxShadow: "0px 6px 12px rgba(0,0,0,0.4)"
                    }}
                    onClick={() => allCheckHandler()}
                    >All Check</button>
                }
                
            </div>

            <div>
                {
                    persondata.map((person) => {
                        return (
                            <div style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "50px",
                                height: "60px",
                                background: "#f9f9f9",
                                paddingInline: "20px",
                                borderBottom: "1px solid #000"
                            }}
                                key={person.id}
                            >
                                <p>{person.name}</p>
                                <p>{person.country}</p>
                                <div style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px"
                                }}>
                                    {
                                        person.selected ? <button style={{
                                            padding: "5px 12px", cursor: "pointer", background: "red", color: "#fff", fontWeight: "bold", border: "none", outline: "none", boxShadow: "0px 6px 12px rgba(0,0,0,0.4)"
                                        }}
                                            onClick={() => deleteHandler(person)}
                                        >Delete</button> :
                                            <button style={{
                                                padding: "5px 12px", cursor: "pointer", background: "limegreen", color: "#fff", fontWeight: "bold", border: "none", outline: "none", boxShadow: "0px 6px 12px rgba(0,0,0,0.4)"
                                            }}
                                                onClick={() => addHandler(person)}
                                            >Add</button>
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

export default Dem