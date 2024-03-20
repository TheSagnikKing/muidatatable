import React, { useEffect, useState } from 'react'
import './Datagrid6.css'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { fakedata } from './fakedata';


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

    const data = fakedata; //cominmg from api
    const copydata = [...fakedata]

    // console.log("Data ",data)
    // console.log("Copydata ",copydata)


    const [sortOrder, setSortOrder] = useState('asc');
    const [sortBy, setSortBy] = useState('');

    const toggleSortOrder = (columnName) => {
        setSortBy(columnName);
        setSortOrder((prevOrder) => {
            if (prevOrder === 'asc') {
                return 'desc';
            } else if (prevOrder === 'desc') {
                return 'initial';
            } else {
                // If previous order is 'initial' or any other state, toggle to 'asc'
                return 'asc';
            }
        });
    };


    const sortData = (dataArray, columnName, sortOrder, copydata) => {
        if (columnName === '') {
            // No sorting if no column is specified
            return dataArray;
        } else if (sortOrder === "initial") {
            console.log("Initial")
            return dataArray
        } else if (sortOrder === 'asc') {
            console.log("Ascending")
            return copydata.sort((a, b) => {
                const valueA = a[columnName];
                const valueB = b[columnName];

                // Check if both values are numbers
                if (typeof valueA === 'number' && typeof valueB === 'number') {
                    // Compare numbers directly
                    return valueA - valueB
                } else {
                    // Use localeCompare for strings
                    return String(valueA).localeCompare(String(valueB))
                }
            });
        } else if (sortOrder === 'desc') {
            console.log("Descending")
            return copydata.sort((a, b) => {
                const valueA = a[columnName];
                const valueB = b[columnName];

                // Check if both values are numbers
                if (typeof valueA === 'number' && typeof valueB === 'number') {
                    // Compare numbers directly
                    return valueB - valueA
                } else {
                    // Use localeCompare for strings
                    return String(valueB).localeCompare(String(valueA))
                }
            });
        }
    };

    const sortedData = sortData(data, sortBy, sortOrder, copydata);

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

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const applyFilter = (dataArray, filterValue) => {
        return dataArray.filter((item) => {
            return (
                item.LotNo.toLowerCase().includes(filterValue.toLowerCase()) ||
                item.BumpIn.toLowerCase().includes(filterValue.toLowerCase())
            )
        }
        );
    };

    const applyFilterByDateRange = (dataArray, startDateValue, endDateValue) => {
        return dataArray.filter((item) => {
            const dieReceiptDate = new Date(item.DieReceipt);
            const BumpInDate = new Date(item.BumpIn);
            const startDate = new Date(startDateValue);
            const endDate = new Date(endDateValue);

            return (dieReceiptDate >= startDate && dieReceiptDate <= endDate)

        });
    };


    const filteredData = filterBy && filterBy !== "" ? applyFilter(data, filterBy) : applyFilterByDateRange(data, startDate, endDate);
    // console.log(filteredData)

    const removeFilter = () => {
        setFilterBy("")
        setStartDate("");
        setEndDate("");
    }

    const dataPerFilterPage = 5;

    const [currentFilterPage, setCurrentFilterPage] = useState(1);

    const handleNextFilterPage = () => {
        setCurrentFilterPage(prevPage => prevPage + 1);
    };

    const handlePrevFilterPage = () => {
        setCurrentFilterPage(prevPage => prevPage - 1);
    };

    const totalFilterPages = Math.ceil(filteredData.length / dataPerFilterPage);

    const filterStartIndex = (currentFilterPage - 1) * dataPerPage;
    const filterEndIndex = Math.min(filterStartIndex + dataPerFilterPage, filteredData.length);

    // Get data for the current page
    const currentPageFilteredData = filteredData.slice(filterStartIndex, filterEndIndex);

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
                    <div>
                        <input type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                        />
                    </div>

                    <div>
                        <input type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                        />
                    </div>

                    <button onClick={removeFilter} className='remove-filter-input'>remove filter</button>
                </div>

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
                            {/* {sortBy === 'LotNo' ? sortOrder === 'asc' ? <span>&#9650;</span> : <span>&#9660;</span> : <span></span>} */}

                            {sortBy === 'LotNo' &&
                                (sortOrder === 'asc' ? <span>&#9650;</span> : (sortOrder === 'desc' ? <span>&#9660;</span> : sortOrder === 'initial' && <span></span>))
                            }
                        </div>
                    </div>}

                    {showdiereceipt && <div className='data6_content_head_same' onClick={() => toggleSortOrder('DieReceipt')}>
                        <div>
                            <p>DieReceipt</p>
                            {sortBy === 'DieReceipt' &&
                                (sortOrder === 'asc' ? <span>&#9650;</span> : (sortOrder === 'desc' ? <span>&#9660;</span> : sortOrder === 'initial' && <span></span>))
                            }
                        </div>
                    </div>}

                    {showday1 && <div className='data6_content_head_diff' onClick={() => toggleSortOrder('day1')}>
                        <div>
                            <div />
                            {sortBy === 'day1' ?
                                (sortOrder === 'asc' ? <div><span>&#9650;</span></div> : (sortOrder === 'desc' ? <div><span>&#9660;</span></div> : sortOrder === 'initial' && <div>-</div>))
                                : <div><span>-</span></div>}

                        </div>
                    </div>}

                    {showBumpIn && <div className='data6_content_head_same' onClick={() => toggleSortOrder('BumpIn')}>
                        <div>
                            <p>BumpIn</p>
                            {sortBy === 'BumpIn' &&
                                (sortOrder === 'asc' ? <span>&#9650;</span> : (sortOrder === 'desc' ? <span>&#9660;</span> : sortOrder === 'initial' && <span></span>))
                            }
                        </div>
                    </div>}

                    {showday2 && <div className='data6_content_head_diff' onClick={() => toggleSortOrder('day2')}>
                        <div>
                            <div />
                            {sortBy === 'day2' ?
                                (sortOrder === 'asc' ? <div><span>&#9650;</span></div> : (sortOrder === 'desc' ? <div><span>&#9660;</span></div> : sortOrder === 'initial' && <div>-</div>))
                                : <div><span>-</span></div>}

                        </div>
                    </div>}

                    {showBumpOut && <div className='data6_content_head_same' onClick={() => toggleSortOrder('BumpOut')}>
                        <div>
                            <p>BumpOut</p>
                            {sortBy === 'BumpOut' &&
                                (sortOrder === 'asc' ? <span>&#9650;</span> : (sortOrder === 'desc' ? <span>&#9660;</span> : sortOrder === 'initial' && <span></span>))
                            }
                        </div>
                    </div>}

                    {showday3 && <div className='data6_content_head_diff' onClick={() => toggleSortOrder('day3')}>
                        <div>
                            <div />
                            {sortBy === 'day3' ?
                                (sortOrder === 'asc' ? <div><span>&#9650;</span></div> : (sortOrder === 'desc' ? <div><span>&#9660;</span></div> : sortOrder === 'initial' && <div>-</div>))
                                : <div><span>-</span></div>}

                        </div>
                    </div>}

                    {showProbeIn && <div className='data6_content_head_same' onClick={() => toggleSortOrder('ProbeIn')}>
                        <div>
                            <p>ProbeIn</p>
                            {sortBy === 'ProbeIn' &&
                                (sortOrder === 'asc' ? <span>&#9650;</span> : (sortOrder === 'desc' ? <span>&#9660;</span> : sortOrder === 'initial' && <span></span>))
                            }
                        </div>
                    </div>}

                    {showday4 && <div className='data6_content_head_diff' onClick={() => toggleSortOrder('day4')}>
                        <div>
                            <div />
                            {sortBy === 'day4' ?
                                (sortOrder === 'asc' ? <div><span>&#9650;</span></div> : (sortOrder === 'desc' ? <div><span>&#9660;</span></div> : sortOrder === 'initial' && <div>-</div>))
                                : <div><span>-</span></div>}

                        </div>
                    </div>}

                    {showProbeOut && <div className='data6_content_head_same' onClick={() => toggleSortOrder('ProbeOut')}>
                        <div>
                            <p>ProbeOut</p>
                            {sortBy === 'ProbeOut' &&
                                (sortOrder === 'asc' ? <span>&#9650;</span> : (sortOrder === 'desc' ? <span>&#9660;</span> : sortOrder === 'initial' && <span></span>))
                            }
                        </div>
                    </div>}

                    {showday5 && <div className='data6_content_head_diff' onClick={() => toggleSortOrder('day5')}>
                        <div>
                            <div />
                            {sortBy === 'day5' ?
                                (sortOrder === 'asc' ? <div><span>&#9650;</span></div> : (sortOrder === 'desc' ? <div><span>&#9660;</span></div> : sortOrder === 'initial' && <div>-</div>))
                                : <div><span>-</span></div>}

                        </div>
                    </div>}

                    {showAssemblyIn && <div className='data6_content_head_same' onClick={() => toggleSortOrder('AssemblyIn')}>
                        <div>
                            <p>AssemblyIn</p>
                            {sortBy === 'AssemblyIn' &&
                                (sortOrder === 'asc' ? <span>&#9650;</span> : (sortOrder === 'desc' ? <span>&#9660;</span> : sortOrder === 'initial' && <span></span>))
                            }
                        </div>
                    </div>}


                    {showday6 && <div className='data6_content_head_diff' onClick={() => toggleSortOrder('day6')}>
                        <div>
                            <div />
                            {sortBy === 'day6' ?
                                (sortOrder === 'asc' ? <div><span>&#9650;</span></div> : (sortOrder === 'desc' ? <div><span>&#9660;</span></div> : sortOrder === 'initial' && <div>-</div>))
                                : <div><span>-</span></div>}

                        </div>
                    </div>}

                    {showAssemblyOut && <div className='data6_content_head_same' onClick={() => toggleSortOrder('AssemblyOut')}>
                        <div>
                            <p>AssemblyOut</p>
                            {sortBy === 'AssemblyOut' &&
                                (sortOrder === 'asc' ? <span>&#9650;</span> : (sortOrder === 'desc' ? <span>&#9660;</span> : sortOrder === 'initial' && <span></span>))
                            }
                        </div>
                    </div>}

                    {showday7 && <div className='data6_content_head_diff' onClick={() => toggleSortOrder('day7')}>
                        <div>
                            <div />
                            {sortBy === 'day7' ?
                                (sortOrder === 'asc' ? <div><span>&#9650;</span></div> : (sortOrder === 'desc' ? <div><span>&#9660;</span></div> : sortOrder === 'initial' && <div>-</div>))
                                : <div><span>-</span></div>}

                        </div>
                    </div>}

                    {showTestIn && <div className='data6_content_head_same' onClick={() => toggleSortOrder('TestIn')}>
                        <div>
                            <p>TestIn</p>
                            {sortBy === 'TestIn' &&
                                (sortOrder === 'asc' ? <span>&#9650;</span> : (sortOrder === 'desc' ? <span>&#9660;</span> : sortOrder === 'initial' && <span></span>))
                            }
                        </div>
                    </div>}

                    {showday8 && <div className='data6_content_head_diff' onClick={() => toggleSortOrder('day8')}>
                        <div>
                            <div />
                            {sortBy === 'day8' ?
                                (sortOrder === 'asc' ? <div><span>&#9650;</span></div> : (sortOrder === 'desc' ? <div><span>&#9660;</span></div> : sortOrder === 'initial' && <div>-</div>))
                                : <div><span>-</span></div>}

                        </div>
                    </div>}

                    {showTestOut && <div className='data6_content_head_same' onClick={() => toggleSortOrder('TestOut')}>
                        <div>
                            <p>TestOut</p>
                            {sortBy === 'TestOut' &&
                                (sortOrder === 'asc' ? <span>&#9650;</span> : (sortOrder === 'desc' ? <span>&#9660;</span> : sortOrder === 'initial' && <span></span>))
                            }
                        </div>
                    </div>}

                    {showday9 && <div className='data6_content_head_diff' onClick={() => toggleSortOrder('day9')}>
                        <div>
                            <div />
                            {sortBy === 'day9' ?
                                (sortOrder === 'asc' ? <div><span>&#9650;</span></div> : (sortOrder === 'desc' ? <div><span>&#9660;</span></div> : sortOrder === 'initial' && <div>-</div>))
                                : <div><span>-</span></div>}

                        </div>
                    </div>}

                    {showShipOut && <div className='data6_content_head_same' onClick={() => toggleSortOrder('ShipOut')}>
                        <div>
                            <p>ShipOut</p>
                            {sortBy === 'ShipOut' &&
                                (sortOrder === 'asc' ? <span>&#9650;</span> : (sortOrder === 'desc' ? <span>&#9660;</span> : sortOrder === 'initial' && <span></span>))
                            }
                        </div>
                    </div>}
                </div>

                {
                    filterBy && filterBy !== '' || startDate && endDate && startDate !== '' && endDate !== '' ? (
                        currentPageFilteredData.map((t) => (
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
                                    <div style={{ background: "linear-gradient(to right, var(--bg-color-4) 50%, var(--bg-color-4) 50%)" }}>
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
                                    <div style={{ background: "linear-gradient(to right, var(--bg-color-4) 50%, var(--bg-color-3) 50%)" }}>
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
                                    <div style={{ background: "linear-gradient(to right, var(--bg-color-3) 50%, var(--bg-color-3) 50%)" }}>
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
                                    <div style={{ background: "linear-gradient(to right, var(--bg-color-3) 50%, var(--bg-color-1) 50%)" }}>
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
                                    <div style={{ background: "linear-gradient(to right, var(--bg-color-1) 50%, var(--bg-color-2) 50%)" }}>
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
                                    <div style={{ background: "linear-gradient(to right, var(--bg-color-2) 50%, var(--bg-color-2) 50%)" }}>
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
                                    <div style={{ background: "linear-gradient(to right, var(--bg-color-2) 50%, var(--bg-color-3) 50%)" }}>
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
                                    <div style={{ background: "linear-gradient(to right, var(--bg-color-3) 50%, var(--bg-color-4) 50%)" }}>
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
                                    <div style={{ background: "linear-gradient(to right, var(--bg-color-4) 50%, var(--bg-color-4) 50%)" }}>
                                        <div />
                                        <div>{t.day9} days</div>
                                    </div>
                                </div>}

                                {showShipOut && <div className='data6_content_body_same'>
                                    <div style={{ background: "var(--bg-color-4)" }}>
                                        <p>{t.ShipOut}</p>
                                    </div>
                                </div>}
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
                                    <div style={{ background: "linear-gradient(to right, var(--bg-color-4) 50%, var(--bg-color-4) 50%)" }}>
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
                                    <div style={{ background: "linear-gradient(to right, var(--bg-color-4) 50%, var(--bg-color-3) 50%)" }}>
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
                                    <div style={{ background: "linear-gradient(to right, var(--bg-color-3) 50%, var(--bg-color-3) 50%)" }}>
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
                                    <div style={{ background: "linear-gradient(to right, var(--bg-color-3) 50%, var(--bg-color-2) 50%)" }}>
                                        <div />
                                        <div>{t.day4} days</div>
                                    </div>
                                </div>}

                                {showProbeOut && <div className='data6_content_body_same'>
                                    <div style={{ background: "var(--bg-color-2)" }}>
                                        <p>{t.ProbeOut}</p>
                                    </div>
                                </div>}

                                {showday5 && <div className='data6_content_body_diff'>
                                    <div style={{ background: "linear-gradient(to right, var(--bg-color-2) 50%, var(--bg-color-2) 50%)" }}>
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
                                    <div style={{ background: "linear-gradient(to right, var(--bg-color-2) 50%, var(--bg-color-3) 50%)" }}>
                                        <div />
                                        <div>{t.day6} days</div>
                                    </div>
                                </div>}

                                {showAssemblyOut && <div className='data6_content_body_same'>
                                    <div style={{ background: "var(--bg-color-3)" }}>
                                        <p>{t.AssemblyOut}</p>
                                    </div>
                                </div>}

                                {showday7 && <div className='data6_content_body_diff'>
                                    <div style={{ background: "linear-gradient(to right, var(--bg-color-3) 50%, var(--bg-color-3) 50%)" }}>
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
                                    <div style={{ background: "linear-gradient(to right, var(--bg-color-3) 50%, var(--bg-color-4) 50%)" }}>
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
                                    <div style={{ background: "linear-gradient(to right, var(--bg-color-4) 50%, var(--bg-color-4) 50%)" }}>
                                        <div />
                                        <div>{t.day9} days</div>
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

                {
                    filterBy && filterBy !== '' || startDate && endDate && startDate !== '' && endDate !== '' ? <>
                        <div>
                            <p>Showing of </p>
                            <select
                                value={`${filterStartIndex + 1} - ${filterEndIndex}`}
                                onChange={(e) => setCurrentFilterPage(Math.ceil(Number(e.target.value.split(" - ")[0]) / dataPerFilterPage))}
                            >
                                {Array.from({ length: totalFilterPages }, (_, index) => {
                                    const start = index * dataPerFilterPage + 1;
                                    const end = Math.min((index + 1) * dataPerFilterPage, filteredData.length);
                                    const optionValue = `${start} - ${end}`;
                                    return (
                                        <option
                                            key={index}
                                            value={optionValue}
                                            style={{ background: optionValue === `${filterStartIndex + 1} - ${filterEndIndex}` ? "var(--bg-color-1)" : "inherit" }}
                                        >
                                            {optionValue}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <div>
                            <button onClick={handlePrevFilterPage} disabled={currentFilterPage === 1}><FaChevronLeft /></button>
                            <span>{currentFilterPage} of {totalFilterPages}</span>
                            <button onClick={handleNextFilterPage} disabled={currentFilterPage === totalFilterPages}><FaChevronRight /></button>
                        </div>
                    </> : <>
                        <div>
                            <p>Showing of </p>
                            <select
                                value={`${startIndex + 1} - ${endIndex}`}
                                onChange={(e) => setCurrentPage(Math.ceil(Number(e.target.value.split(" - ")[0]) / dataPerPage))}
                            >
                                {Array.from({ length: totalPages }, (_, index) => {
                                    const start = index * dataPerPage + 1;
                                    const end = Math.min((index + 1) * dataPerPage, sortedData.length);
                                    const optionValue = `${start} - ${end}`;
                                    return (
                                        <option
                                            key={index}
                                            value={optionValue}
                                            style={{ background: optionValue === `${startIndex + 1} - ${endIndex}` ? "var(--bg-color-1)" : "inherit" }}
                                        >
                                            {optionValue}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <div>
                            <button onClick={handlePrevPage} disabled={currentPage === 1}><FaChevronLeft /></button>
                            <span>{currentPage} of {totalPages}</span>
                            <button onClick={handleNextPage} disabled={currentPage === totalPages}><FaChevronRight /></button>
                        </div>
                    </>
                }

            </div>

            <div className='data6_csv'>
                <button onClick={currentpagecsvdataHandler}>Current Page CSV Data</button>
                <button onClick={entirepagecsvdataHandler}>Entire CSV Data</button>
            </div>

        </main >
    )
}

export default Datagrid6