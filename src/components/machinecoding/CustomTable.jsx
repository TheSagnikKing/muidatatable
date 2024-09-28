import React, { useEffect, useState } from 'react'
import "./CustomTable.css"
import axios from "axios"

const CustomTable = () => {
    const [originaluserdata, setOriginaluserdata] = useState([])
    const [copyuserdata, setCopyUserdata] = useState([])

    const [filtertext, setFiltertext] = useState("")

    useEffect(() => {
        const fetchUsers = async () => {
            const { data } = await axios.get("https://jsonplaceholder.typicode.com/users")
            setOriginaluserdata(data)
            setCopyUserdata(data)
        }

        fetchUsers()
    }, [])

    const handlefilterTextChange = (value) => {
        setFiltertext(value)
    }


    useEffect(() => {
        if (filtertext) {
            const filteredArray = originaluserdata.filter((item) => {
                return (
                    item.name.toLowerCase().includes(filtertext.toLowerCase()) ||
                    item.username.toLowerCase().includes(filtertext.toLowerCase()) ||
                    item.email.toLowerCase().includes(filtertext.toLowerCase()) ||
                    item.website.toLowerCase().includes(filtertext.toLowerCase())
                )
            })
            setCopyUserdata(filteredArray)
        } else {
            setCopyUserdata(originaluserdata)
            setSortOrder("initial")
        }
    }, [filtertext, originaluserdata])

    const [sortOrder, setSortOrder] = useState("asc")

    //the sort method mutates the original array thats why my state is not updating .
    //but toSorted method sort the array and gives a new array this i should use.

    const sortLogicHandler = (columnName) => {
        if (sortOrder === "initial") {
            setCopyUserdata((prev) => {

                const updatedarray = prev.toSorted((a, b) => {
                    return a[columnName].localeCompare(b[columnName])
                })

                console.log(updatedarray)
                return updatedarray
            })
            setSortOrder("asc")
        } else if (sortOrder === "asc") {
            setCopyUserdata((prev) => {

                const updatedarray = prev.toSorted((a, b) => {
                    return b[columnName].localeCompare(a[columnName])
                })

                console.log(updatedarray)
                return updatedarray
            })
            setSortOrder("desc")
        } else {
            setCopyUserdata((prev) => {

                const updatedarray = prev.toSorted((a, b) => {
                    return a[columnName].localeCompare(b[columnName])
                })

                console.log(updatedarray)
                return updatedarray
            })
            setSortOrder("asc")
        }
    }

    // const sortLogicHandler = (columnName) => {
    //     if (sortOrder === "asc") {
    // setCopyUserdata((prev) => {

    //     const updatedarray = prev.toSorted((a, b) => {
    //         return b[columnName].localeCompare(a[columnName])
    //     })

    //     console.log(updatedarray)
    //     return updatedarray
    // })
    // setSortOrder("desc")
    //     } else if (sortOrder === "desc") {
    // setCopyUserdata((prev) => {

    //     const updatedarray = prev.toSorted((a, b) => {
    //         return a[columnName].localeCompare(b[columnName])
    //     })

    //     console.log(updatedarray)
    //     return updatedarray
    // })
    // setSortOrder("asc")
    //     }
    // }

    return (
        <main>
            <div style={{ margin: "50px 50px 0 50px" }}>
                <input
                    type="text"
                    placeholder='Search'
                    value={filtertext}
                    onChange={(e) => handlefilterTextChange(e.target.value)}
                />
            </div>

            <table id="customers">
                <thead>
                    <tr>
                        <th>Name
                            <span className='spansortdiv'>
                                <button
                                    className='sorticon'
                                    onClick={() => sortLogicHandler("name")}>
                                    {/* {sortOrder === "asc" ? "Asc" : "Desc"} */}
                                    {
                                        sortOrder === "initial" ? "Ini" :
                                            sortOrder === "asc" ? "Asc" : "Desc"
                                    }
                                </button></span>
                        </th>
                        <th>Username
                            <span className='spansortdiv'>
                                <button
                                    className='sorticon'
                                    onClick={() => sortLogicHandler("username")}>
                                    {
                                        sortOrder === "initial" ? "Ini" :
                                            sortOrder === "asc" ? "Asc" : "Desc"
                                    }
                                </button></span>
                        </th>
                        <th>Email
                            <span className='spansortdiv'>
                                <button
                                    className='sorticon'
                                    onClick={() => sortLogicHandler("email")}>
                                    {
                                        sortOrder === "initial" ? "Ini" :
                                            sortOrder === "asc" ? "Asc" : "Desc"
                                    }
                                </button></span>
                        </th>
                        <th>Website
                            <span className='spansortdiv'>
                                <button
                                    className='sorticon'
                                    onClick={() => sortLogicHandler("website")}>
                                    {sortOrder === "asc" ? "Asc" : "Desc"}
                                </button></span>
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {
                        copyuserdata.length > 0 ? (
                            copyuserdata.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.website}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" style={{ textAlign: 'center' }}>No results found</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </main>
    )
}

export default CustomTable
