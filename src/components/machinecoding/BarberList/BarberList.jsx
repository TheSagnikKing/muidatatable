import React, { useState } from 'react'
import "./BarberList.css"

const BarberList = () => {
    const apisalonservicesdata = [
        {
            id: 1,
            serviceName: "Hair Cut",
            ewt: 40
        },
        {
            id: 2,
            serviceName: "Hair Spa",
            ewt: 45
        },
        {
            id: 3,
            serviceName: "Female Hair Cut",
            ewt: 50
        },
        {
            id: 4,
            serviceName: "Body Message",
            ewt: 30
        },
    ]

    const [salonservices, setSalonservices] = useState(apisalonservicesdata.map((ser) => {
        return { ...ser, check: false }
    }))


    const [apiSendingArray, setApiSendingArray] = useState([])

    const addHandler = (serobj) => {
        setSalonservices((prev) => {
            const updatedarray = prev.map((item) => {
                return (item.id === serobj.id ? { ...item, check: true } : item)
            })
            return updatedarray
        })

        delete serobj.check

        setApiSendingArray([...apiSendingArray, serobj])
    }

    console.log(apiSendingArray)

    const deleteHandler = (serobj) => {
        const currentobj = apisalonservicesdata.find((item) => item.id === serobj.id)

        setSalonservices((prev) => {
            const updatedarray = prev.map((item) => {
                return (item.id === serobj.id ? { ...item, ewt: Number(currentobj.ewt), check: false } : item)
            })
            return updatedarray
        })

        setApiSendingArray((prev) => {
            const updatedarray = prev.filter((item) => {
                return item.id !== serobj.id
            })
            return updatedarray
        })
    }

    const handleEWT = (ewtvalue, serobj) => {
        setSalonservices((prev) => {
            const updatedarray = prev.map((item) => {
                return (item.id === serobj.id ? { ...item, ewt: Number(ewtvalue) } : item)
            })
            return updatedarray
        })

        setApiSendingArray((prev) => {
            const updatedarray = prev.map((item) => {
                return (item.id === serobj.id ? { ...item, ewt: Number(ewtvalue) } : item)
            })
            return updatedarray
        })
    }

    return (
        <main className='bb_table'>
            <div className='bb_table_header'>
                <p>Service Name</p>
                <p>EWT in Minutes</p>
                <p>Action</p>
            </div>

            <div className='bb_table_body'>
                {
                    salonservices.map((ser) => {
                        return (
                            <div className='bb_table_item' key={ser.id}>
                                <p>{ser.serviceName}</p>
                                <input
                                    type="number"
                                    placeholder='Enter EWT'
                                    value={ser.ewt}
                                    onChange={(e) => handleEWT(e.target.value, ser)}
                                />
                                {
                                    ser.check ?
                                        (<button onClick={() => deleteHandler(ser)} style={{ background: "red" }}>DELT</button>) :
                                        (<button onClick={() => addHandler(ser)} style={{ background: "blue" }}>ADD</button>)
                                }

                            </div>
                        )
                    })
                }
            </div>
        </main>
    )
}

export default BarberList