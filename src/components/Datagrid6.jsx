import React, { useEffect, useState } from 'react'
import './Datagrid6.css'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const data = [
    {
        "_id": 1,
        "LotNo": "A1B2C3",
        "DieReceipt": "2023-11-21",
        "day1": 3,
        "BumpIn": "2023-11-22",
        "day2": 8,
        "BumpOut": "2023-11-23",
        "day3": 5,
        "ProbeIn": "2023-11-24",
        "day4": 7,
        "ProbeOut": "2023-11-25",
        "day5": 2,
        "AssemblyIn": "2023-11-26",
        "day6": 1,
        "AssemblyOut": "2023-11-27",
        "day7": 9,
        "TestIn": "2023-11-28",
        "day8": 4,
        "TestOut": "2023-11-29",
        "day9": 6,
        "ShipOut": "2023-11-30"
    },
    {
        "_id": 2,
        "LotNo": "D4E5F7",
        "DieReceipt": "2024-02-14",
        "day1": 1,
        "BumpIn": "2024-02-15",
        "day2": 7,
        "BumpOut": "2024-02-16",
        "day3": 9,
        "ProbeIn": "2024-02-17",
        "day4": 4,
        "ProbeOut": "2024-02-18",
        "day5": 2,
        "AssemblyIn": "2024-02-19",
        "day6": 5,
        "AssemblyOut": "2024-02-20",
        "day7": 3,
        "TestIn": "2024-02-21",
        "day8": 8,
        "TestOut": "2024-02-22",
        "day9": 6,
        "ShipOut": "2024-02-23"
    },
    {
        "_id": 3,
        "LotNo": "UNIQUE",
        "DieReceipt": "2023-12-05",
        "day1": 5,
        "BumpIn": "2023-12-06",
        "day2": 3,
        "BumpOut": "2023-12-07",
        "day3": 6,
        "ProbeIn": "2023-12-08",
        "day4": 2,
        "ProbeOut": "2023-12-09",
        "day5": 4,
        "AssemblyIn": "2023-12-10",
        "day6": 7,
        "AssemblyOut": "2023-12-11",
        "day7": 1,
        "TestIn": "2023-12-12",
        "day8": 8,
        "TestOut": "2023-12-13",
        "day9": 9,
        "ShipOut": "2023-12-14"
    },
    {
        "_id": 4,
        "LotNo": "J1K2L3",
        "DieReceipt": "2024-01-01",
        "day1": 2,
        "BumpIn": "2024-01-02",
        "day2": 4,
        "BumpOut": "2024-01-03",
        "day3": 6,
        "ProbeIn": "2024-01-04",
        "day4": 1,
        "ProbeOut": "2024-01-05",
        "day5": 8,
        "AssemblyIn": "2024-01-06",
        "day6": 5,
        "AssemblyOut": "2024-01-07",
        "day7": 7,
        "TestIn": "2024-01-08",
        "day8": 3,
        "TestOut": "2024-01-09",
        "day9": 9,
        "ShipOut": "2024-01-10"
    },
    {
        "_id": 5,
        "LotNo": "M4N5O6",
        "DieReceipt": "2024-03-10",
        "day1": 3,
        "BumpIn": "2024-03-11",
        "day2": 7,
        "BumpOut": "2024-03-12",
        "day3": 6,
        "ProbeIn": "2024-03-13",
        "day4": 5,
        "ProbeOut": "2024-03-14",
        "day5": 4,
        "AssemblyIn": "2024-03-15",
        "day6": 1,
        "AssemblyOut": "2024-03-16",
        "day7": 8,
        "TestIn": "2024-03-17",
        "day8": 2,
        "TestOut": "2024-03-18",
        "day9": 9,
        "ShipOut": "2024-03-19"
    },
    {
        "_id": 6,
        "LotNo": "P7Q8R9",
        "DieReceipt": "2021-02-20",
        "day1": 5,
        "BumpIn": "2023-02-21",
        "day2": 8,
        "BumpOut": "2025-02-22",
        "day3": 2,
        "ProbeIn": "2026-02-23",
        "day4": 7,
        "ProbeOut": "2021-02-24",
        "day5": 1,
        "AssemblyIn": "2021-02-25",
        "day6": 4,
        "AssemblyOut": "2021-02-26",
        "day7": 9,
        "TestIn": "2021-02-27",
        "day8": 3,
        "TestOut": "2021-02-28",
        "day9": 6,
        "ShipOut": "2021-02-29"
    },






    {
        "_id": 7,
        "LotNo": "A1B2C3",
        "DieReceipt": "2023-11-21",
        "day1": 3,
        "BumpIn": "2023-11-22",
        "day2": 8,
        "BumpOut": "2023-11-23",
        "day3": 5,
        "ProbeIn": "2023-11-24",
        "day4": 7,
        "ProbeOut": "2023-11-25",
        "day5": 2,
        "AssemblyIn": "2023-11-26",
        "day6": 1,
        "AssemblyOut": "2023-11-27",
        "day7": 9,
        "TestIn": "2023-11-28",
        "day8": 4,
        "TestOut": "2023-11-29",
        "day9": 6,
        "ShipOut": "2023-11-30"
    },
    {
        "_id": 8,
        "LotNo": "D4E5F6",
        "DieReceipt": "2024-02-14",
        "day1": 1,
        "BumpIn": "2024-02-15",
        "day2": 7,
        "BumpOut": "2024-02-16",
        "day3": 9,
        "ProbeIn": "2024-02-17",
        "day4": 4,
        "ProbeOut": "2024-02-18",
        "day5": 2,
        "AssemblyIn": "2024-02-19",
        "day6": 5,
        "AssemblyOut": "2024-02-20",
        "day7": 3,
        "TestIn": "2024-02-21",
        "day8": 8,
        "TestOut": "2024-02-22",
        "day9": 6,
        "ShipOut": "2024-02-23"
    },
    {
        "_id": 9,
        "LotNo": "G7H8I9",
        "DieReceipt": "2023-12-05",
        "day1": 5,
        "BumpIn": "2023-12-06",
        "day2": 3,
        "BumpOut": "2023-12-07",
        "day3": 6,
        "ProbeIn": "2023-12-08",
        "day4": 2,
        "ProbeOut": "2023-12-09",
        "day5": 4,
        "AssemblyIn": "2023-12-10",
        "day6": 7,
        "AssemblyOut": "2023-12-11",
        "day7": 1,
        "TestIn": "2023-12-12",
        "day8": 8,
        "TestOut": "2023-12-13",
        "day9": 9,
        "ShipOut": "2023-12-14"
    },
    {
        "_id": 10,
        "LotNo": "J1K2L3",
        "DieReceipt": "2024-01-01",
        "day1": 2,
        "BumpIn": "2024-01-02",
        "day2": 4,
        "BumpOut": "2024-01-03",
        "day3": 6,
        "ProbeIn": "2024-01-04",
        "day4": 1,
        "ProbeOut": "2024-01-05",
        "day5": 8,
        "AssemblyIn": "2024-01-06",
        "day6": 5,
        "AssemblyOut": "2024-01-07",
        "day7": 7,
        "TestIn": "2024-01-08",
        "day8": 3,
        "TestOut": "2024-01-09",
        "day9": 9,
        "ShipOut": "2024-01-10"
    },
    {
        "_id": 11,
        "LotNo": "M4N5O6",
        "DieReceipt": "2024-03-10",
        "day1": 3,
        "BumpIn": "2024-03-11",
        "day2": 7,
        "BumpOut": "2024-03-12",
        "day3": 6,
        "ProbeIn": "2024-03-13",
        "day4": 5,
        "ProbeOut": "2024-03-14",
        "day5": 4,
        "AssemblyIn": "2024-03-15",
        "day6": 1,
        "AssemblyOut": "2024-03-16",
        "day7": 8,
        "TestIn": "2024-03-17",
        "day8": 2,
        "TestOut": "2024-03-18",
        "day9": 9,
        "ShipOut": "2024-03-19"
    },
    {
        "_id": 12,
        "LotNo": "P7Q8R9",
        "DieReceipt": "2024-02-20",
        "day1": 5,
        "BumpIn": "2024-02-21",
        "day2": 8,
        "BumpOut": "2024-02-22",
        "day3": 2,
        "ProbeIn": "2024-02-23",
        "day4": 7,
        "ProbeOut": "2024-02-24",
        "day5": 1,
        "AssemblyIn": "2024-02-25",
        "day6": 4,
        "AssemblyOut": "2024-02-26",
        "day7": 9,
        "TestIn": "2024-02-27",
        "day8": 3,
        "TestOut": "2024-02-28",
        "day9": 6,
        "ShipOut": "2024-02-29"
    },





    {
        "_id": 13,
        "LotNo": "A1B2C3",
        "DieReceipt": "2023-11-21",
        "day1": 3,
        "BumpIn": "2023-11-22",
        "day2": 8,
        "BumpOut": "2023-11-23",
        "day3": 5,
        "ProbeIn": "2023-11-24",
        "day4": 7,
        "ProbeOut": "2023-11-25",
        "day5": 2,
        "AssemblyIn": "2023-11-26",
        "day6": 1,
        "AssemblyOut": "2023-11-27",
        "day7": 9,
        "TestIn": "2023-11-28",
        "day8": 4,
        "TestOut": "2023-11-29",
        "day9": 6,
        "ShipOut": "2023-11-30"
    },
    {
        "_id": 14,
        "LotNo": "D4E5F6",
        "DieReceipt": "2024-02-14",
        "day1": 1,
        "BumpIn": "2024-02-15",
        "day2": 7,
        "BumpOut": "2024-02-16",
        "day3": 9,
        "ProbeIn": "2024-02-17",
        "day4": 4,
        "ProbeOut": "2024-02-18",
        "day5": 2,
        "AssemblyIn": "2024-02-19",
        "day6": 5,
        "AssemblyOut": "2024-02-20",
        "day7": 3,
        "TestIn": "2024-02-21",
        "day8": 8,
        "TestOut": "2024-02-22",
        "day9": 6,
        "ShipOut": "2024-02-23"
    },
    {
        "_id": 15,
        "LotNo": "G7H8I9",
        "DieReceipt": "2023-12-05",
        "day1": 5,
        "BumpIn": "2023-12-06",
        "day2": 3,
        "BumpOut": "2023-12-07",
        "day3": 6,
        "ProbeIn": "2023-12-08",
        "day4": 2,
        "ProbeOut": "2023-12-09",
        "day5": 4,
        "AssemblyIn": "2023-12-10",
        "day6": 7,
        "AssemblyOut": "2023-12-11",
        "day7": 1,
        "TestIn": "2023-12-12",
        "day8": 8,
        "TestOut": "2023-12-13",
        "day9": 9,
        "ShipOut": "2023-12-14"
    },
    {
        "_id": 16,
        "LotNo": "J1K2L3",
        "DieReceipt": "2024-01-01",
        "day1": 2,
        "BumpIn": "2024-01-02",
        "day2": 4,
        "BumpOut": "2024-01-03",
        "day3": 6,
        "ProbeIn": "2024-01-04",
        "day4": 1,
        "ProbeOut": "2024-01-05",
        "day5": 8,
        "AssemblyIn": "2024-01-06",
        "day6": 5,
        "AssemblyOut": "2024-01-07",
        "day7": 7,
        "TestIn": "2024-01-08",
        "day8": 3,
        "TestOut": "2024-01-09",
        "day9": 9,
        "ShipOut": "2024-01-10"
    },
    {
        "_id": 17,
        "LotNo": "M4N5O6",
        "DieReceipt": "2024-03-10",
        "day1": 3,
        "BumpIn": "2024-03-11",
        "day2": 7,
        "BumpOut": "2024-03-12",
        "day3": 6,
        "ProbeIn": "2024-03-13",
        "day4": 5,
        "ProbeOut": "2024-03-14",
        "day5": 4,
        "AssemblyIn": "2024-03-15",
        "day6": 1,
        "AssemblyOut": "2024-03-16",
        "day7": 8,
        "TestIn": "2024-03-17",
        "day8": 2,
        "TestOut": "2024-03-18",
        "day9": 9,
        "ShipOut": "2024-03-19"
    },
    {
        "_id": 18,
        "LotNo": "P7Q8R9",
        "DieReceipt": "2024-02-20",
        "day1": 5,
        "BumpIn": "2024-02-21",
        "day2": 8,
        "BumpOut": "2024-02-22",
        "day3": 2,
        "ProbeIn": "2024-02-23",
        "day4": 7,
        "ProbeOut": "2024-02-24",
        "day5": 1,
        "AssemblyIn": "2024-02-25",
        "day6": 4,
        "AssemblyOut": "2024-02-26",
        "day7": 9,
        "TestIn": "2024-02-27",
        "day8": 3,
        "TestOut": "2024-02-28",
        "day9": 6,
        "ShipOut": "2024-02-29"
    },
]

const Datagrid6 = () => {

    const [showColumn, setShowColumn] = useState(false)

    const [showtoggleall, setShowtoggleall] = useState(true)
    const [showlotno, setShowlotno] = useState(true)
    const [showdiereceipt, setShowdiereceipt] = useState(true)
    const [showday1, setShowday1] = useState(true)
    const [showBumpIn, setShowBumpIn] = useState(true)
    const [showday2, setShowday2] = useState(true)
    const [showBumpOut, setShowBumpOut] = useState(true)
    const [showday3, setShowday3] = useState(true)
    const [showProbeIn, setShowProbeIn] = useState(true)
    const [showday4, setShowday4] = useState(true)
    const [showProbeOut, setShowProbeOut] = useState(true)
    const [showday5, setShowday5] = useState(true)
    const [showAssemblyIn, setShowAssemblyIn] = useState(true)
    const [showday6, setShowday6] = useState(true)
    const [showAssemblyOut, setShowAssemblyOut] = useState(true)
    const [showday7, setShowday7] = useState(true)
    const [showTestIn, setShowTestIn] = useState(true)
    const [showday8, setShowday8] = useState(true)
    const [showTestOut, setShowTestOut] = useState(true)
    const [showday9, setShowday9] = useState(true)
    const [showShipOut, setShowShipOut] = useState(true)
    
    const toggleHandle = () => {
        setShowtoggleall((prev) => !prev)
        
        setShowlotno((prev) => !prev)
        setShowdiereceipt((prev) => !prev)
        setShowday1((prev) => !prev)
        setShowBumpIn((prev) => !prev)
        setShowday2((prev) => !prev)
        setShowBumpOut((prev) => !prev)

        setShowday3((prev) => !prev)
        setShowProbeIn((prev) => !prev)
        setShowday4((prev) => !prev)
        setShowProbeOut((prev) => !prev)
        setShowday5((prev) => !prev)

        setShowAssemblyIn((prev) => !prev)
        setShowday6((prev) => !prev)
        setShowAssemblyOut((prev) => !prev)
        setShowday7((prev) => !prev)
        setShowTestIn((prev) => !prev)

        setShowday8((prev) => !prev)
        setShowTestOut((prev) => !prev)
        setShowday9((prev) => !prev)
        setShowShipOut((prev) => !prev)
    }


    const [sortOrder, setSortOrder] = useState('asc');
    const [sortBy, setSortBy] = useState('');

    const toggleSortOrder = (columnName) => {
        setSortBy(columnName);
        setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
    };


    const sortData = (dataArray, columnName, sortOrder) => {
        if (columnName === '') {
            return dataArray
        } else {
            return dataArray.sort((a, b) => {
                const valueA = a[columnName];
                const valueB = b[columnName];

                // Check if both values are numbers
                if (typeof valueA === 'number' && typeof valueB === 'number') {
                    // Compare numbers directly
                    return sortOrder === 'asc' ? valueA - valueB : valueB - valueA;
                } else {
                    // Use localeCompare for strings
                    return sortOrder === 'asc' ? String(valueA).localeCompare(String(valueB)) : String(valueB).localeCompare(String(valueA));
                }
            });
        }
    };

    const sortedData = sortData(data, sortBy, sortOrder);

    const dataPerPage = 5;

    const [currentPage, setCurrentPage] = useState(1);

    const handleNextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage(prevPage => prevPage - 1);
    };

    // Calculate total number of pages
    const totalPages = Math.ceil(sortedData.length / dataPerPage);

    // Calculate starting and ending indexes for the current page
    const startIndex = (currentPage - 1) * dataPerPage;
    const endIndex = Math.min(startIndex + dataPerPage, sortedData.length);

    // Get data for the current page
    const currentPageData = sortedData.slice(startIndex, endIndex);


    // CSV PART

    const currentpagecsvdataHandler = () => {
        // Convert dates to a consistent format ("YYYY-MM-DD")
        const formattedData = currentPageData.map(row => ({
            ...row,
            DieReceipt: formatDate(row.DieReceipt),
            BumpIn: formatDate(row.BumpIn),
            BumpOut: formatDate(row.BumpOut),
            ProbeIn: formatDate(row.ProbeIn),
            ProbeOut: formatDate(row.ProbeOut),
            AssemblyIn: formatDate(row.AssemblyIn),
            AssemblyOut: formatDate(row.AssemblyOut),
            TestIn: formatDate(row.TestIn),
            TestOut: formatDate(row.TestOut),
            ShipOut: formatDate(row.ShipOut)
        }));

        // Convert formatted data to CSV format
        const csvContent = "data:text/csv;charset=utf-8," +
            formattedData.map(row => Object.values(row).join(",")).join("\n");

        // Create a virtual link element to trigger the download
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "current_page_data.csv");
        document.body.appendChild(link);

        // Trigger the download
        link.click();
    };

    const entirepagecsvdataHandler = () => {
        console.log("EntireCSVData ", data)

        // Convert dates to a consistent format ("YYYY-MM-DD")
        const formattedData = data.map(row => ({
            ...row,
            DieReceipt: formatDate(row.DieReceipt),
            BumpIn: formatDate(row.BumpIn),
            BumpOut: formatDate(row.BumpOut),
            ProbeIn: formatDate(row.ProbeIn),
            ProbeOut: formatDate(row.ProbeOut),
            AssemblyIn: formatDate(row.AssemblyIn),
            AssemblyOut: formatDate(row.AssemblyOut),
            TestIn: formatDate(row.TestIn),
            TestOut: formatDate(row.TestOut),
            ShipOut: formatDate(row.ShipOut)
        }));

        // Convert formatted data to CSV format
        const csvContent = "data:text/csv;charset=utf-8," +
            formattedData.map(row => Object.values(row).join(",")).join("\n");

        // Create a virtual link element to trigger the download
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "current_page_data.csv");
        document.body.appendChild(link);

        // Trigger the download
        link.click();
    }


    // Function to format date strings (assuming input format is "YYYY-MM-DD")
    const formatDate = (dateString) => {
        // Check if the input string contains a forward slash ("/")
        if (dateString.includes("/")) {
            // Replace forward slashes with dashes ("-")
            return dateString.replaceAll("/", "-");
        } else {
            return dateString; // If already in the correct format, return as is
        }
    };

    //FILTERING DONE HERE

    const [filterBy, setFilterBy] = useState('');
    const [filterBydate, setFilterBydate] = useState("")

    const applyFilter = (dataArray, filterValue) => {
        return dataArray.filter((item) => {
            return (
                item.LotNo.toLowerCase().includes(filterValue.toLowerCase())
            )
        }
        );
    };

    const applyFilterByDate = (dataArray, filterDateValue) => {
        return dataArray.filter((item) => {
            return (
                item.DieReceipt.toLowerCase().includes(filterDateValue.toLowerCase()) ||
                item.BumpIn.toLowerCase().includes(filterDateValue.toLowerCase()) ||
                item.BumpOut.toLowerCase().includes(filterDateValue.toLowerCase()) ||
                item.ProbeIn.toLowerCase().includes(filterDateValue.toLowerCase()) ||
                item.ProbeOut.toLowerCase().includes(filterDateValue.toLowerCase()) ||
                item.AssemblyIn.toLowerCase().includes(filterDateValue.toLowerCase()) ||
                item.AssemblyOut.toLowerCase().includes(filterDateValue.toLowerCase()) ||
                item.TestIn.toLowerCase().includes(filterDateValue.toLowerCase()) ||
                item.TestOut.toLowerCase().includes(filterDateValue.toLowerCase()) ||
                item.ShipOut.toLowerCase().includes(filterDateValue.toLowerCase())
            )
        }
        );
    };

    const filteredData = filterBy && filterBy !== "" ? applyFilter(data, filterBy) : applyFilterByDate(data, filterBydate);


    console.log(filteredData)

    const removeFilter = () => {
        setFilterBy("")
        setFilterBydate("")
    }

    // search for 2021-02-20 in calender

    return (
        <main className='data6_container'>
            <div className='data6_top_bx'>
                <div className='data6_top_searchbox'>
                    <input
                        type="text"
                        placeholder='Search By LotNo.'
                        value={filterBy}
                        onChange={(e) => setFilterBy(e.target.value)}
                    />
                </div>

                <div className='data6_top_selectdatebx'>
                    <input
                        type="date"
                        value={filterBydate}
                        onChange={(e) => setFilterBydate(e.target.value)}
                    />
                </div>

                <button onClick={removeFilter} className='remove-filter-input'>remove filter</button>

                <div className='data6_top_showhide_bx'>
                    <button onClick={() => setShowColumn((prev) => !prev)}>Filter Columns</button>

                    {showColumn && <div className='data6_top_showhide_bx_content'>
                        <div>
                            <input type="checkbox" onClick={toggleHandle} checked={showtoggleall} />
                            <p>Toggle All</p>
                        </div>

                        <div>
                            <input type="checkbox" onClick={() => setShowlotno((prev) => !prev)} checked={showlotno} />
                            <p>Lot No.</p>
                        </div>

                        <div>
                            <input type="checkbox" onClick={() => setShowdiereceipt((prev) => !prev)} checked={showdiereceipt} />
                            <p>DieReceipt</p>
                        </div>

                        <div>
                            <input type="checkbox" onClick={() => setShowday1((prev) => !prev)} checked={showday1} />
                            <p>Day 1</p>
                        </div>

                        <div>
                            <input type="checkbox" onClick={() => setShowBumpIn((prev) => !prev)} checked={showBumpIn} />
                            <p>BumpIn</p>
                        </div>

                        <div>
                            <input type="checkbox" onClick={() => setShowday2((prev) => !prev)} checked={showday2} />
                            <p>Day 2</p>
                        </div>

                        <div>
                            <input type="checkbox" onClick={() => setShowBumpOut((prev) => !prev)} checked={showBumpOut} />
                            <p>BumpOut</p>
                        </div>

                        <div>
                            <input type="checkbox" onClick={() => setShowday3((prev) => !prev)} checked={showday3} />
                            <p>Day 3</p>
                        </div>

                        <div>
                            <input type="checkbox" onClick={() => setShowProbeIn((prev) => !prev)} checked={showProbeIn} />
                            <p>ProbeIn</p>
                        </div>

                        <div>
                            <input type="checkbox" onClick={() => setShowday4((prev) => !prev)} checked={showday4} />
                            <p>Day 4</p>
                        </div>

                        <div>
                            <input type="checkbox" onClick={() => setShowProbeOut((prev) => !prev)} checked={showProbeOut} />
                            <p>ProbeOut</p>
                        </div>

                        <div>
                            <input type="checkbox" onClick={() => setShowday5((prev) => !prev)} checked={showday5} />
                            <p>Day 5</p>
                        </div>

                        <div>
                            <input type="checkbox" onClick={() => setShowAssemblyIn((prev) => !prev)} checked={showAssemblyIn} />
                            <p>AssemblyIn</p>
                        </div>

                        <div>
                            <input type="checkbox" onClick={() => setShowday6((prev) => !prev)} checked={showday6} />
                            <p>Day 6</p>
                        </div>

                        <div>
                            <input type="checkbox" onClick={() => setShowAssemblyOut((prev) => !prev)} checked={showAssemblyOut} />
                            <p>AssemblyOut</p>
                        </div>

                        <div>
                            <input type="checkbox" onClick={() => setShowday7((prev) => !prev)} checked={showday7} />
                            <p>Day 7</p>
                        </div>

                        <div>
                            <input type="checkbox" onClick={() => setShowTestIn((prev) => !prev)} checked={showTestIn} />
                            <p>TestIn</p>
                        </div>

                        <div>
                            <input type="checkbox" onClick={() => setShowday8((prev) => !prev)} checked={showday8} />
                            <p>Day 8</p>
                        </div>

                        <div>
                            <input type="checkbox" onClick={() => setShowTestOut((prev) => !prev)} checked={showTestOut} />
                            <p>TestOut</p>
                        </div>

                        <div>
                            <input type="checkbox" onClick={() => setShowday9((prev) => !prev)} checked={showday9} />
                            <p>Day 9</p>
                        </div>

                        <div>
                            <input type="checkbox" onClick={() => setShowShipOut((prev) => !prev)} checked={showShipOut} />
                            <p>ShipOut</p>
                        </div>

                    </div>}
                </div>

            </div>
            <div className='data6_content'>
                <div className='data6_content_head'>
                    {showlotno && <div className='data6_content_head_same' onClick={() => toggleSortOrder('LotNo')}>
                        <div style={{ borderRight: "1px solid black" }}>
                            <p>Lot No.</p>
                            {sortBy === 'LotNo' ? sortOrder === 'asc' ? <span>&#9650;</span> : <span>&#9660;</span> : <span></span>}
                        </div>
                    </div>}

                    {showdiereceipt && <div className='data6_content_head_same' onClick={() => toggleSortOrder('DieReceipt')}>
                        <div>
                            <p>DieReceipt</p>
                            {sortBy === 'DieReceipt' ? sortOrder === 'asc' ? <span>&#9650;</span> : <span>&#9660;</span> : <span></span>}
                        </div>
                    </div>}

                    {showday1 && <div className='data6_content_head_diff' onClick={() => toggleSortOrder('day1')}>
                        <div>
                            <div />
                            {sortBy === 'day1' ? (sortOrder === 'asc' ? <div><span>&#9650;</span></div> : <div><span>&#9660;</span></div>) : <div><span>&#9660;</span></div>}
                        </div>
                    </div>}

                    {showBumpIn && <div className='data6_content_head_same' onClick={() => toggleSortOrder('BumpIn')}>
                        <div>
                            <p>BumpIn</p>
                            {sortBy === 'BumpIn' ? sortOrder === 'asc' ? <span>&#9650;</span> : <span>&#9660;</span> : <span></span>}
                        </div>
                    </div>}

                    {showday2 && <div className='data6_content_head_diff' onClick={() => toggleSortOrder('day2')}>
                        <div>
                            <div />
                            {sortBy === 'day2' ? (sortOrder === 'asc' ? <div><span>&#9650;</span></div> : <div><span>&#9660;</span></div>) : <div><span>&#9660;</span></div>}
                        </div>
                    </div>}

                    {showBumpOut && <div className='data6_content_head_same' onClick={() => toggleSortOrder('BumpOut')}>
                        <div>
                            <p>BumpOut</p>
                            {sortBy === 'BumpOut' ? sortOrder === 'asc' ? <span>&#9650;</span> : <span>&#9660;</span> : <span></span>}
                        </div>
                    </div>}

                    {showday3 && <div className='data6_content_head_diff' onClick={() => toggleSortOrder('day3')}>
                        <div>
                            <div />
                            {sortBy === 'day3' ? (sortOrder === 'asc' ? <div><span>&#9650;</span></div> : <div><span>&#9660;</span></div>) : <div><span>&#9660;</span></div>}
                        </div>
                    </div>}

                    {showProbeIn && <div className='data6_content_head_same' onClick={() => toggleSortOrder('ProbeIn')}>
                        <div>
                            <p>ProbeIn</p>
                            {sortBy === 'ProbeIn' ? sortOrder === 'asc' ? <span>&#9650;</span> : <span>&#9660;</span> : <span></span>}
                        </div>
                    </div>}

                    {showday4 && <div className='data6_content_head_diff' onClick={() => toggleSortOrder('day4')}>
                        <div>
                            <div />
                            {sortBy === 'day4' ? (sortOrder === 'asc' ? <div><span>&#9650;</span></div> : <div><span>&#9660;</span></div>) : <div><span>&#9660;</span></div>}
                        </div>
                    </div>}

                    {showProbeOut && <div className='data6_content_head_same' onClick={() => toggleSortOrder('ProbeOut')}>
                        <div>
                            <p>ProbeOut</p>
                            {sortBy === 'ProbeOut' ? sortOrder === 'asc' ? <span>&#9650;</span> : <span>&#9660;</span> : <span></span>}
                        </div>
                    </div>}

                    {showday5 && <div className='data6_content_head_diff' onClick={() => toggleSortOrder('day5')}>
                        <div>
                            <div />
                            {sortBy === 'day5' ? (sortOrder === 'asc' ? <div><span>&#9650;</span></div> : <div><span>&#9660;</span></div>) : <div><span>&#9660;</span></div>}
                        </div>
                    </div>}

                    {showAssemblyIn && <div className='data6_content_head_same' onClick={() => toggleSortOrder('AssemblyIn')}>
                        <div>
                            <p>AssemblyIn</p>
                            {sortBy === 'AssemblyIn' ? sortOrder === 'asc' ? <span>&#9650;</span> : <span>&#9660;</span> : <span></span>}
                        </div>
                    </div>}


                    {showday6 && <div className='data6_content_head_diff' onClick={() => toggleSortOrder('day6')}>
                        <div>
                            <div />
                            {sortBy === 'day6' ? (sortOrder === 'asc' ? <div><span>&#9650;</span></div> : <div><span>&#9660;</span></div>) : <div><span>&#9660;</span></div>}
                        </div>
                    </div>}

                    {showAssemblyOut && <div className='data6_content_head_same' onClick={() => toggleSortOrder('AssemblyOut')}>
                        <div>
                            <p>AssemblyOut</p>
                            {sortBy === 'AssemblyOut' ? sortOrder === 'asc' ? <span>&#9650;</span> : <span>&#9660;</span> : <span></span>}
                        </div>
                    </div>}

                    {showday7 && <div className='data6_content_head_diff' onClick={() => toggleSortOrder('day7')}>
                        <div>
                            <div />
                            {sortBy === 'day7' ? (sortOrder === 'asc' ? <div><span>&#9650;</span></div> : <div><span>&#9660;</span></div>) : <div><span>&#9660;</span></div>}
                        </div>
                    </div>}

                    {showTestIn && <div className='data6_content_head_same' onClick={() => toggleSortOrder('TestIn')}>
                        <div>
                            <p>TestIn</p>
                            {sortBy === 'TestIn' ? sortOrder === 'asc' ? <span>&#9650;</span> : <span>&#9660;</span> : <span></span>}
                        </div>
                    </div>}

                    {showday8 && <div className='data6_content_head_diff' onClick={() => toggleSortOrder('day8')}>
                        <div>
                            <div />
                            {sortBy === 'day8' ? (sortOrder === 'asc' ? <div><span>&#9650;</span></div> : <div><span>&#9660;</span></div>) : <div><span>&#9660;</span></div>}
                        </div>
                    </div>}

                    {showTestOut && <div className='data6_content_head_same' onClick={() => toggleSortOrder('TestOut')}>
                        <div>
                            <p>TestOut</p>
                            {sortBy === 'TestOut' ? sortOrder === 'asc' ? <span>&#9650;</span> : <span>&#9660;</span> : <span></span>}
                        </div>
                    </div>}

                    {showday9 && <div className='data6_content_head_diff' onClick={() => toggleSortOrder('day9')}>
                        <div>
                            <div />
                            {sortBy === 'day9' ? (sortOrder === 'asc' ? <div><span>&#9650;</span></div> : <div><span>&#9660;</span></div>) : <div><span>&#9660;</span></div>}
                        </div>
                    </div>}

                    {showShipOut && <div className='data6_content_head_same' onClick={() => toggleSortOrder('ShipOut')}>
                        <div>
                            <p>ShipOut</p>
                            {sortBy === 'ShipOut' ? sortOrder === 'asc' ? <span>&#9650;</span> : <span>&#9660;</span> : <span></span>}
                        </div>
                    </div>}
                </div>


                {
                    filterBy && filterBy !== '' || filterBydate && filterBydate !== '' ? (
                        filteredData.map((t) => (
                            <div className='data6_content_body' key={t._id}>
                                {showlotno && <div className='data6_content_body_same'>
                                    <div style={{ borderRight: "1px solid black", background: "var(--bg-color-1)" }}>
                                        <p>{t.LotNo}</p>
                                    </div>
                                </div>}

                                {showdiereceipt && <div className='data6_content_body_same'>
                                    <div style={{ background: "var(--bg-color-4)" }}>
                                        <p>{t.DieReceipt}</p>
                                    </div>
                                </div>}

                                {showday1 && <div className='data6_content_body_diff'>
                                    <div>
                                        <div />
                                        <div>{t.day1} days</div>
                                    </div>
                                </div>}

                                {showBumpIn && <div className='data6_content_body_same'>
                                    <div style={{ background: "var(--bg-color-4)" }}>
                                        <p>{t.BumpIn}</p>
                                    </div>
                                </div>}

                                {  showday2 && <div className='data6_content_body_diff'>
                                    <div>
                                        <div />
                                        <div>{t.day2} days</div>
                                    </div>
                                </div> }

                                { showBumpOut && <div className='data6_content_body_same'>
                                    <div style={{ background: "var(--bg-color-3)" }}>
                                        <p>{t.BumpOut}</p>
                                    </div>
                                </div> }

                                { showday3 && <div className='data6_content_body_diff'>
                                    <div>
                                        <div />
                                        <div>{t.day3} days</div>
                                    </div>
                                </div> }

                                { showProbeIn && <div className='data6_content_body_same'>
                                    <div style={{ background: "var(--bg-color-3)" }}>
                                        <p>{t.ProbeIn}</p>
                                    </div>
                                </div> }

                               { showday4 && <div className='data6_content_body_diff'>
                                    <div>
                                        <div />
                                        <div>{t.day4} days</div>
                                    </div>
                                </div> }

                                { showProbeOut && <div className='data6_content_body_same'>
                                    <div style={{ background: "var(--bg-color-1)" }}>
                                        <p>{t.ProbeOut}</p>
                                    </div>
                                </div> }

                                { showday5 && <div className='data6_content_body_diff'>
                                    <div>
                                        <div />
                                        <div>{t.day5} days</div>
                                    </div>
                                </div> }
                                { showAssemblyIn && <div className='data6_content_body_same'>
                                    <div style={{ background: "var(--bg-color-2)" }}>
                                        <p>{t.AssemblyIn}</p>
                                    </div>
                                </div> }

                                { showday6 && <div className='data6_content_body_diff'>
                                    <div>
                                        <div />
                                        <div>{t.day6} days</div>
                                    </div>
                                </div> }
                                
                                { showAssemblyOut && <div className='data6_content_body_same'>
                                    <div style={{ background: "var(--bg-color-2)" }}>
                                        <p>{t.AssemblyOut}</p>
                                    </div>
                                </div> }
                                
                                { showday7 && <div className='data6_content_body_diff'>
                                    <div>
                                        <div />
                                        <div>{t.day7} days</div>
                                    </div>
                                </div> }

                                { showTestIn && <div className='data6_content_body_same'>
                                    <div style={{ background: "var(--bg-color-3)" }}>
                                        <p>{t.TestIn}</p>
                                    </div>
                                </div> }

                                {  showday8 && <div className='data6_content_body_diff'>
                                    <div>
                                        <div />
                                        <div>{t.day8} days</div>
                                    </div>
                                </div> }

                                { showTestOut && <div className='data6_content_body_same'>
                                    <div style={{ background: "var(--bg-color-4)" }}>
                                        <p>{t.TestOut}</p>
                                    </div>
                                </div> }

                                { showday9 && <div className='data6_content_body_diff'>
                                    <div>
                                        <div />
                                        <div>{t.day9}</div>
                                    </div>
                                </div> }

                                { showShipOut && <div className='data6_content_body_same'>
                                    <div style={{ background: "var(--bg-color-4)" }}>
                                        <p>{t.ShipOut}</p>
                                    </div>
                                </div> }
                            </div>
                        ))
                    ) : (
                        currentPageData.map((t) => (
                            <div className='data6_content_body' key={t._id}>
                                {showlotno && <div className='data6_content_body_same'>
                                    <div style={{ borderRight: "1px solid black", background: "var(--bg-color-1)" }}>
                                        <p>{t.LotNo}</p>
                                    </div>
                                </div>}

                                {showdiereceipt && <div className='data6_content_body_same'>
                                    <div style={{ background: "var(--bg-color-4)" }}>
                                        <p>{t.DieReceipt}</p>
                                    </div>
                                </div>}

                                {showday1 && <div className='data6_content_body_diff'>
                                    <div>
                                        <div />
                                        <div>{t.day1} days</div>
                                    </div>
                                </div>}

                                {showBumpIn && <div className='data6_content_body_same'>
                                    <div style={{ background: "var(--bg-color-4)" }}>
                                        <p>{t.BumpIn}</p>
                                    </div>
                                </div>}

                                {showday2 && <div className='data6_content_body_diff'>
                                    <div>
                                        <div />
                                        <div>{t.day2} days</div>
                                    </div>
                                </div>}

                                {showBumpOut && <div className='data6_content_body_same'>
                                    <div style={{ background: "var(--bg-color-3)" }}>
                                        <p>{t.BumpOut}</p>
                                    </div>
                                </div>}

                                {showday3 && <div className='data6_content_body_diff'>
                                    <div>
                                        <div />
                                        <div>{t.day3} days</div>
                                    </div>
                                </div>}

                                {showProbeIn && <div className='data6_content_body_same'>
                                    <div style={{ background: "var(--bg-color-3)" }}>
                                        <p>{t.ProbeIn}</p>
                                    </div>
                                </div>}

                                {showday4 && <div className='data6_content_body_diff'>
                                    <div>
                                        <div />
                                        <div>{t.day4} days</div>
                                    </div>
                                </div>}

                                {showProbeOut && <div className='data6_content_body_same'>
                                    <div style={{ background: "var(--bg-color-1)" }}>
                                        <p>{t.ProbeOut}</p>
                                    </div>
                                </div>}

                                {showday5 && <div className='data6_content_body_diff'>
                                    <div>
                                        <div />
                                        <div>{t.day5} days</div>
                                    </div>
                                </div>}
                                {showAssemblyIn && <div className='data6_content_body_same'>
                                    <div style={{ background: "var(--bg-color-2)" }}>
                                        <p>{t.AssemblyIn}</p>
                                    </div>
                                </div>}

                                {showday6 && <div className='data6_content_body_diff'>
                                    <div>
                                        <div />
                                        <div>{t.day6} days</div>
                                    </div>
                                </div>}

                                {showAssemblyOut && <div className='data6_content_body_same'>
                                    <div style={{ background: "var(--bg-color-2)" }}>
                                        <p>{t.AssemblyOut}</p>
                                    </div>
                                </div>}

                                {showday7 && <div className='data6_content_body_diff'>
                                    <div>
                                        <div />
                                        <div>{t.day7} days</div>
                                    </div>
                                </div>}

                                {showTestIn && <div className='data6_content_body_same'>
                                    <div style={{ background: "var(--bg-color-3)" }}>
                                        <p>{t.TestIn}</p>
                                    </div>
                                </div>}

                                {showday8 && <div className='data6_content_body_diff'>
                                    <div>
                                        <div />
                                        <div>{t.day8} days</div>
                                    </div>
                                </div>}

                                {showTestOut && <div className='data6_content_body_same'>
                                    <div style={{ background: "var(--bg-color-4)" }}>
                                        <p>{t.TestOut}</p>
                                    </div>
                                </div>}

                                {showday9 && <div className='data6_content_body_diff'>
                                    <div>
                                        <div />
                                        <div>{t.day9}</div>
                                    </div>
                                </div>}

                                {showShipOut && <div className='data6_content_body_same'>
                                    <div style={{ background: "var(--bg-color-4)" }}>
                                        <p>{t.ShipOut}</p>
                                    </div>
                                </div>}
                            </div>
                        ))
                    )
                }

            </div>
            <div className="data6_pagination">
                <div>
                    <p>Showing of </p>
                    <select
                        value={`${startIndex + 1} - ${endIndex}`}
                        onChange={(e) => setCurrentPage(Math.ceil(Number(e.target.value.split(" - ")[0]) / dataPerPage))}
                    >
                        {
                            Array.from({ length: totalPages }, (_, index) => (
                                <option key={index} value={`${index * dataPerPage + 1} - ${Math.min((index + 1) * dataPerPage, sortedData.length)}`}>
                                    {index * dataPerPage + 1} - {Math.min((index + 1) * dataPerPage, sortedData.length)}
                                </option>
                            ))
                        }
                    </select>
                </div>
                <div>
                    <button onClick={handlePrevPage} disabled={currentPage === 1}><FaChevronLeft /></button>
                    <span>{currentPage} of {totalPages}</span>
                    <button onClick={handleNextPage} disabled={currentPage === totalPages}><FaChevronRight /></button>
                </div>
            </div>

            <div className='data6_csv'>
                <button onClick={currentpagecsvdataHandler}>Current Page CSV Data</button>
                <button onClick={entirepagecsvdataHandler}>Entire CSV Data</button>
            </div>
        </main>
    )
}

export default Datagrid6