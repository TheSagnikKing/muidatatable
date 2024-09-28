import React, { useEffect, useState } from 'react'
import "./CustomTable.css"
import axios from "axios"
import mockdata from "./MOCK_DATA.json"

const CustomTable = () => {

    const [originaluserdata, setOriginaluserdata] = useState(mockdata)
    const [copyuserdata, setCopyUserdata] = useState(mockdata)

    const [filtertext, setFiltertext] = useState("")

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
            setPageNum(1)
        } else {
            setCopyUserdata(originaluserdata)
        }
    }, [filtertext, originaluserdata])

    const [sortOrder, setSortOrder] = useState("asc")

    //the sort method mutates the original array thats why my state is not updating .
    //but toSorted method sort the array and gives a new array this i should use.


    const sortLogicHandler = (columnName) => {
        if (sortOrder === "asc") {
            setCopyUserdata((prev) => {

                const updatedarray = prev.toSorted((a, b) => {
                    return b[columnName].localeCompare(a[columnName])
                })

                console.log(updatedarray)
                return updatedarray
            })
            setSortOrder("desc")
        } else if (sortOrder === "desc") {
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


    const [dataPerPage, setDataPerpage] = useState(10)
    const [totalPages, setTotalPages] = useState([])

    useEffect(() => {
        setTotalPages((prev) => {
            let allpages = Math.ceil(copyuserdata.length / dataPerPage)

            const updatedarray = []

            for (let i = 0; i < allpages; i++) {
                updatedarray.push(i + 1)

            }
            return updatedarray
        })

    }, [copyuserdata, dataPerPage])

    console.log("cvsd", dataPerPage)

    const [startIndex, setStartIndex] = useState(0)
    const [endIndex, setEndIndex] = useState(0)
    const [PageNum, setPageNum] = useState(1)

    useEffect(() => {
        setStartIndex((PageNum - 1) * dataPerPage)
        setEndIndex(PageNum * dataPerPage)
    }, [PageNum, dataPerPage])


    const nextPageHandler = () => {
        if (PageNum < totalPages.length) {
            setPageNum((prev) => prev + 1)
        }
    }

    const prevPageHandler = () => {
        if (PageNum > 1) {
            setPageNum((prev) => prev - 1)
        }
    }

    console.log(startIndex)
    console.log(endIndex)
    console.log(totalPages)
    return (
        <main>
            <div style={{ margin: "50px 50px 0 50px" }}>
                <input
                    type="text"
                    placeholder='Search'
                    value={filtertext}
                    onChange={(e) => handlefilterTextChange(e.target.value)}
                />

                <button style={{
                    marginLeft: "30px",
                    cursor: "pointer"
                }}
                    onClick={() => setCopyUserdata(originaluserdata)}
                >Reset</button>
            </div>


            <table id="customers">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name
                            <span className='spansortdiv'>
                                <button
                                    className='sorticon'
                                    onClick={() => sortLogicHandler("name")}>
                                    {sortOrder === "asc" ? "Asc" : "Desc"}
                                </button></span>
                        </th>
                        <th>Username
                            <span className='spansortdiv'>
                                <button
                                    className='sorticon'
                                    onClick={() => sortLogicHandler("username")}>
                                    {sortOrder === "asc" ? "Asc" : "Desc"}
                                </button></span>
                        </th>
                        <th>Email
                            <span className='spansortdiv'>
                                <button
                                    className='sorticon'
                                    onClick={() => sortLogicHandler("email")}>
                                    {sortOrder === "asc" ? "Asc" : "Desc"}
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
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.website.slice(0, 30)}</td>
                                </tr>
                            )).slice(startIndex, endIndex)
                        ) : (
                            <tr>
                                <td colSpan="4" style={{ textAlign: 'center' }}>No results found</td>
                            </tr>
                        )
                    }
                </tbody>

                <div>
                    <button onClick={() => setPageNum(1)}>First Page</button>
                    <button onClick={prevPageHandler}>Prev</button>
                    {
                        totalPages.map((value, index) => {
                            return (
                                <button style={{
                                    padding: "10px",
                                    marginRight: "5px",
                                    marginTop: "10px",
                                    cursor: "pointer"
                                }}
                                    key={value}
                                    onClick={() => setPageNum(value)}
                                >{value}</button>
                            )
                        })
                    }

                    <button onClick={nextPageHandler}>Next</button>
                    <button onClick={() => setPageNum(totalPages.length)}>Last Page</button>
                </div>

                <div>
                    <select name="" id=""
                        onChange={(e) => {
                            setDataPerpage(Number(e.target.value));
                            setPageNum(1);
                        }}
                    >
                        <option value="10">10</option>
                        <option value="20">20</option>
                    </select>
                </div>
            </table>
        </main>
    )
}

export default CustomTable
