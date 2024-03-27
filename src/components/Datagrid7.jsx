import React, { useEffect, useRef, useState } from 'react'
import './Datagrid7.css'
import { FaArrowUp, FaChevronLeft, FaChevronRight, FaPlus, FaSortDown } from "react-icons/fa6";
import { fakedata } from './fakedata';
import { FaArrowDown } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { IoIosLink } from "react-icons/io";

import { DatePicker } from 'antd';
import { getISOWeek } from 'date-fns';
import { Calendar, DateObject } from "react-multi-date-picker";

const { RangePicker } = DatePicker;


const Datagrid7 = () => {

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
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [date, setDate] = useState(null);

    const [openDateBox, setOpenDateBox] = useState(false)

    const onChange = (dates) => {
        console.log('onChange: ', dates);

        // setDiereceiptcheckbox(false)
        // setBumpCheckbox(false)
        // alert("Yes")
        setDate(dates);
        if (dates) {
            setOpenDateBox(false)
        }
    };


    const [selectedDates, setSelectedDates] = useState([]);

    const handleDateChange = (dates) => {
        setSelectedDates(dates);
    };


    useEffect(() => {
        const formattedDates = selectedDates.map(date => date.format("YYYY-MM-DD"));

        // Assuming you want to set the first date as startDate and the second date as endDate
        if (formattedDates.length === 2) {
            setStartDate(formattedDates[0]);
            setEndDate(formattedDates[1]);
        }
    }, [selectedDates]);


    console.log("StartDate ", startDate)
    console.log("End Date ", endDate)


    const applyFilter = (dataArray, filterValue) => {
        return dataArray.filter((item) => {
            return (
                item.LotNo.toLowerCase().includes(filterValue.toLowerCase())
            )
        }
        );
    };

    const [diereceptcheckbox, setDiereceiptcheckbox] = useState(false)
    const [Bumpcheckbox, setBumpCheckbox] = useState(false)
    const [Probecheckbox, setProbeCheckbox] = useState(false)
    const [Assemblycheckbox, setAssemblyCheckbox] = useState(false)
    const [Testcheckbox, setTestCheckbox] = useState(false)



    const [newFilterData, setNewFilterData] = useState([])


    const handleCheckboxChange = (checkboxState, setCheckbox, message, dataArray, startDateValue, endDateValue) => {
        setCheckbox(prev => !prev);
        if (!checkboxState) {

            if (message === 'Diereceipt') {
                setBumpCheckbox(false)
                setProbeCheckbox(false)
                setAssemblyCheckbox(false)
                setTestCheckbox(false)

                const newdata = dataArray.filter((item) => {
                    const dieReceiptDate = new Date(item.DieReceipt);

                    const startDate = new Date(startDateValue);
                    const endDate = new Date(endDateValue);

                    return dieReceiptDate >= startDate && dieReceiptDate <= endDate

                })

                setNewFilterData(newdata)

            } else if (message === 'Bump') {
                setDiereceiptcheckbox(false)
                setProbeCheckbox(false)
                setAssemblyCheckbox(false)
                setTestCheckbox(false)

                const newdata = dataArray.filter((item) => {
                    const BumpInDate = new Date(item.BumpIn);
                    const BumpOutDate = new Date(item.BumpOut);

                    const startDate = new Date(startDateValue);
                    const endDate = new Date(endDateValue);

                    return (BumpInDate >= startDate && BumpInDate <= endDate) ||
                        (BumpOutDate >= startDate && BumpOutDate <= endDate)
                })

                setNewFilterData(newdata)

            } else if (message === 'Probe') {
                setDiereceiptcheckbox(false)
                setBumpCheckbox(false)
                setAssemblyCheckbox(false)
                setTestCheckbox(false)

                const newdata = dataArray.filter((item) => {
                    const ProbeInDate = new Date(item.ProbeIn);
                    const ProbeOutDate = new Date(item.ProbeOut);

                    const startDate = new Date(startDateValue);
                    const endDate = new Date(endDateValue);

                    return (ProbeInDate >= startDate && ProbeInDate <= endDate) ||
                        (ProbeOutDate >= startDate && ProbeOutDate <= endDate)
                })

                setNewFilterData(newdata)

            } else if (message === 'Assembly') {
                setDiereceiptcheckbox(false)
                setBumpCheckbox(false)
                setTestCheckbox(false)
                setProbeCheckbox(false)

                const newdata = dataArray.filter((item) => {
                    const AssemblyInDate = new Date(item.AssemblyIn);
                    const AssemblyOutDate = new Date(item.AssemblyOut);

                    const startDate = new Date(startDateValue);
                    const endDate = new Date(endDateValue);

                    return (AssemblyInDate >= startDate && AssemblyInDate <= endDate) ||
                        (AssemblyOutDate >= startDate && AssemblyOutDate <= endDate)
                })

                setNewFilterData(newdata)

            } else if (message === 'Test') {
                setDiereceiptcheckbox(false)
                setBumpCheckbox(false)
                setAssemblyCheckbox(false)
                setProbeCheckbox(false)

                const newdata = dataArray.filter((item) => {
                    const TestInDate = new Date(item.TestIn);
                    const TestOutDate = new Date(item.TestOut);

                    const startDate = new Date(startDateValue);
                    const endDate = new Date(endDateValue);

                    return (TestInDate >= startDate && TestInDate <= endDate) ||
                        (TestOutDate >= startDate && TestOutDate <= endDate)
                })

                setNewFilterData(newdata)
            }

        } else {
            setNewFilterData([])
        }
    };

    const handleDiereceiptChange = () => {
        if (startDate !== "" && endDate !== "") {
            handleCheckboxChange(diereceptcheckbox, setDiereceiptcheckbox, "Diereceipt", data, startDate, endDate);
        } else {
            alert("Please select Date First")
        }

    };

    const handleBumpChange = () => {
        if (startDate !== "" && endDate !== "") {
            handleCheckboxChange(Bumpcheckbox, setBumpCheckbox, "Bump", data, startDate, endDate);
        } else {
            alert("Please select Date First")
        }
    };

    const handleProbeChange = () => {
        if (startDate !== "" && endDate !== "") {
            handleCheckboxChange(Probecheckbox, setProbeCheckbox, "Probe", data, startDate, endDate);
        } else {
            alert("Please select Date First")
        }
    };


    const handleAssemblyChange = () => {
        if (startDate !== "" && endDate !== "") {
            handleCheckboxChange(Assemblycheckbox, setAssemblyCheckbox, "Assembly", data, startDate, endDate);
        } else {
            alert("Please select Date First")
        }
    }

    const handleTestChange = () => {
        if (startDate !== "" && endDate !== "") {
            handleCheckboxChange(Testcheckbox, setTestCheckbox, "Test", data, startDate, endDate);
        } else {
            alert("Please select Date First")
        }
    }

    const filteredData = filterBy && filterBy !== "" ? applyFilter(data, filterBy) : newFilterData


    const removeFilter = () => {
        setFilterBy("")
        setSelectedDates([])
        setDiereceiptcheckbox(false)
        setBumpCheckbox(false)
        setProbeCheckbox(false)
        setAssemblyCheckbox(false)
        setTestCheckbox(false)
        setStartDate("")
        setEndDate("")
        setOpenRangeCalender(false)

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

    const handleOpenChange = () => {
        setOpenDateBox((prev) => !prev)
        if (boxOpen) {
            setOpenDateBox(true)
        }
    };

    const [boxOpen, setBoxOpen] = useState(false)

    const openHandler = () => {
        setBoxOpen(true)
    }

    console.log(diereceptcheckbox, "diecheck")

    const [openRangeCalender, setOpenRangeCalender] = useState(false)


    const [DurationCheck, setDurationCheck] = useState(false)
    const [DatesCheck, setDatesCheck] = useState(false)

    console.log("DurationCheck  ",DurationCheck)


    const DatesCheckClicked = (e) => {
        setDatesCheck((prev) => !prev)
        setShowday1((prev) => !prev)
        setShowday2((prev) => !prev)
        setShowday3((prev) => !prev)
        setShowday4((prev) => !prev)
        setShowday5((prev) => !prev)
        setShowday6((prev) => !prev)
        setShowday7((prev) => !prev)
        setShowday8((prev) => !prev)
        setShowday9((prev) => !prev)
    }

    const DurationCheckClicked = (e) => {
        setDurationCheck((prev) => !prev)
        setShowdiereceipt((prev) => !prev)
        setShowBumpIn((prev) => !prev)
        setShowBumpOut((prev) => !prev)
        setShowProbeIn((prev) => !prev)
        setShowProbeOut((prev) => !prev)
        setShowAssemblyIn((prev) => !prev)
        setShowAssemblyOut((prev) => !prev)
        setShowTestIn((prev) => !prev)
        setShowTestOut((prev) => !prev)
        setShowShipOut((prev) => !prev)
    }

    return (
        <main className='data7_container' >
            <div className='data7_top_bx'>
                <p>Lots Status Tracking</p>

                <div>
                    <div className='data7_top_searchbox'>
                        <input
                            type="text"
                            placeholder='Search'
                            value={filterBy}
                            onChange={(e) => setFilterBy(e.target.value)}
                        />

                        <div><IoSearch /></div>
                    </div>

                    <div className='data7_top_selectdatebx' onClick={() => setOpenRangeCalender(prev => !prev)}>
                        <div>
                            <div>Select Dates</div>
                            <div><FaSortDown /></div>
                        </div>

                        {
                            openRangeCalender && <main className='data7_top_selectdatebx_calender' onClick={(e) => e.stopPropagation()}>
                                <div>
                                    <Calendar
                                        range
                                        numberOfMonths={2}
                                        value={selectedDates}
                                        onChange={handleDateChange}
                                        plugins={[
                                            // colors({ defaultColor: "green" })
                                        ]}
                                    />
                                </div>

                                <div>
                                    {selectedDates && (
                                        <p>
                                            {selectedDates.map((date, index) => (
                                                <React.Fragment key={index}>
                                                    {index !== 0 && " - "}
                                                    {date.format("YYYY-MM-DD")}
                                                </React.Fragment>
                                            ))}
                                        </p>
                                    )}

                                </div>

                                <div>
                                    <div>
                                        <input
                                            type="checkbox"
                                            checked={diereceptcheckbox}
                                            onChange={handleDiereceiptChange}
                                        />
                                        <p>Die Receipt</p>
                                    </div>

                                    <div>
                                        <input
                                            type="checkbox"
                                            checked={Bumpcheckbox}
                                            onChange={handleBumpChange}
                                        />
                                        <p>Bump</p>
                                    </div>

                                    <div>
                                        <input
                                            type="checkbox"
                                            checked={Probecheckbox}
                                            onChange={handleProbeChange} />
                                        <p>Probe</p>
                                    </div>

                                    <div>
                                        <input
                                            type="checkbox"
                                            checked={Assemblycheckbox}
                                            onChange={handleAssemblyChange} />
                                        <p>Assembly</p>
                                    </div>

                                    <div>
                                        <input type="checkbox"
                                            checked={Testcheckbox}
                                            onChange={handleTestChange} />
                                        <p>Test</p>
                                    </div>
                                </div>
                            </main>
                        }
                    </div>



                    <div className='data7_top_showhide_bx' >
                        <div onClick={() => setShowColumn((prev) => !prev)}>
                            <p>Show/Hide Columns </p>
                            <div><FaSortDown /></div>
                        </div>

                        {showColumn && <div className='data7_top_showhide_bx_content'>
                            <div>
                                <input
                                    type="checkbox"
                                    checked={DatesCheck}
                                    onChange={(e) => DatesCheckClicked(e)}
                                />
                                <p>Dates</p>
                            </div>

                            <div>
                                <input
                                    type="checkbox"
                                    checked={DurationCheck}
                                    onChange={(e) => DurationCheckClicked(e)}
                                />
                                <p>Duration</p>
                            </div>

                            <div>
                                <input type="checkbox" />
                                <p>Yield / Quantity</p>
                            </div>
                        </div>}
                    </div>

                    <button onClick={removeFilter} className='remove-filter-input'><RiDeleteBin6Line /></button>

                    <button className='dwn_crt_csv_data_btn' onClick={currentpagecsvdataHandler}><FaPlus /></button>

                    <button className='dwn_crt_entire_data_btn' onClick={entirepagecsvdataHandler}><IoIosLink /></button>
                </div>
            </div>

            <div className='data7_top_bx_mobile'>
                <p>Lots Status Tracking</p>

                <div className='data7_top_searchbox'>
                    <input
                        type="text"
                        placeholder='Search'
                        value={filterBy}
                        onChange={(e) => setFilterBy(e.target.value)}
                    />

                    <div><IoSearch /></div>
                </div>

                <div className='data7_top_mobile_selectdatebx' onClick={() => setOpenRangeCalender(prev => !prev)}>
                    <div>
                        <div>Select Dates</div>
                        <div><FaSortDown /></div>
                    </div>

                    {
                        openRangeCalender && <main className='data7_top_mobile_selectdatebx_calender' onClick={(e) => e.stopPropagation()}>
                            <div>
                                <Calendar
                                    range
                                    numberOfMonths={2}
                                    value={selectedDates}
                                    onChange={handleDateChange}
                                    plugins={[
                                        // colors({ defaultColor: "green" })
                                    ]}
                                />
                            </div>

                            <div>
                                {selectedDates && (
                                    <p>
                                        {selectedDates.map((date, index) => (
                                            <React.Fragment key={index}>
                                                {index !== 0 && " - "}
                                                {date.format("YYYY-MM-DD")}
                                            </React.Fragment>
                                        ))}
                                    </p>
                                )}

                            </div>

                            <div>
                                <div>
                                    <input
                                        type="checkbox"
                                        checked={diereceptcheckbox}
                                        onChange={handleDiereceiptChange}
                                    />
                                    <p>Die Receipt</p>
                                </div>

                                <div>
                                    <input
                                        type="checkbox"
                                        checked={Bumpcheckbox}
                                        onChange={handleBumpChange}
                                    />
                                    <p>Bump</p>
                                </div>

                                <div>
                                    <input
                                        type="checkbox"
                                        checked={Probecheckbox}
                                        onChange={handleProbeChange} />
                                    <p>Probe</p>
                                </div>

                                <div>
                                    <input
                                        type="checkbox"
                                        checked={Assemblycheckbox}
                                        onChange={handleAssemblyChange} />
                                    <p>Assembly</p>
                                </div>

                                <div>
                                    <input type="checkbox"
                                        checked={Testcheckbox}
                                        onChange={handleTestChange} />
                                    <p>Test</p>
                                </div>
                            </div>
                        </main>
                    }
                </div>

                <div className='data7_top_showhide_bx'>
                    <div onClick={() => setShowColumn((prev) => !prev)}>
                        <p>Show/Hide Columns </p>
                        <div><FaSortDown /></div>
                    </div>

                    {showColumn && <div className='data7_top_showhide_bx_content'>
                        <div>
                            <input
                                type="checkbox"
                                checked={DatesCheck}
                                onChange={(e) => DatesCheckClicked(e)}
                            />
                            <p>Dates</p>
                        </div>

                        <div>
                            <input
                                type="checkbox"
                                checked={DurationCheck}
                                onChange={(e) => DurationCheckClicked(e)}
                            />
                            <p>Duration</p>
                        </div>

                        <div>
                            <input type="checkbox" />
                            <p>Yield / Quantity</p>
                        </div>
                    </div>}
                </div>

                <div className='mobile_fl_csv_box'>
                    <button onClick={removeFilter} className='remove-filter-input'><RiDeleteBin6Line /></button>

                    <button className='dwn_crt_csv_data_btn' onClick={currentpagecsvdataHandler}><FaPlus /></button>

                    <button className='dwn_crt_entire_data_btn' onClick={entirepagecsvdataHandler}><IoIosLink /></button>

                </div>
            </div>

            <div className='data7_content_pagination_box'>
                <div className='data7_content'>
                    <div className='data7_content_head'>
                        {showlotno && <div className='data7_content_head_same' onClick={() => toggleSortOrder('LotNo')}>
                            <div style={{ borderRight: "1px solid black" }}>
                                <p>Lot No.</p>
                                {sortBy === 'LotNo' &&
                                    (sortOrder === 'asc' ? <span className='data7_arrow'><FaArrowUp /></span> : (sortOrder === 'desc' ? <span className='data7_arrow'><FaArrowDown /></span> : sortOrder === 'initial' && <span></span>))
                                }
                            </div>
                        </div>}

                        {showdiereceipt && <div className='data7_content_head_same' onClick={() => toggleSortOrder('DieReceipt')}>
                            <div>
                                <p>DieReceipt</p>
                                {sortBy === 'DieReceipt' &&
                                    (sortOrder === 'asc' ? <span className='data7_arrow'><FaArrowUp /></span> : (sortOrder === 'desc' ? <span className='data7_arrow'><FaArrowDown /></span> : sortOrder === 'initial' && <span></span>))
                                }
                            </div>
                        </div>}

                        {showday1 && <div className='data7_content_head_diff' onClick={() => toggleSortOrder('day1')}>
                            <div>
                                <div />
                                {sortBy === 'day1' ?
                                    (sortOrder === 'asc' ? <div><span className='data7_arrow'><FaArrowUp /></span></div> : (sortOrder === 'desc' ? <div><span className='data7_arrow'><FaArrowDown /></span></div> : sortOrder === 'initial' && <div><span><FaSortDown /></span></div>))
                                    : <div><span><FaSortDown /></span></div>}

                            </div>
                        </div>}

                        {showBumpIn && <div className='data7_content_head_same' onClick={() => toggleSortOrder('BumpIn')}>
                            <div>
                                <p>BumpIn</p>
                                {sortBy === 'BumpIn' &&
                                    (sortOrder === 'asc' ? <span className='data7_arrow'><FaArrowUp /></span> : (sortOrder === 'desc' ? <span className='data7_arrow'><FaArrowDown /></span> : sortOrder === 'initial' && <span></span>))
                                }
                            </div>
                        </div>}

                        {showday2 && <div className='data7_content_head_diff' onClick={() => toggleSortOrder('day2')}>
                            <div>
                                <div />
                                {sortBy === 'day2' ?
                                    (sortOrder === 'asc' ? <div><span className='data7_arrow'><FaArrowUp /></span></div> : (sortOrder === 'desc' ? <div><span className='data7_arrow'><FaArrowDown /></span></div> : sortOrder === 'initial' && <div><span><FaSortDown /></span></div>))
                                    : <div><span><FaSortDown /></span></div>}
                            </div>
                        </div>}

                        {showBumpOut && <div className='data7_content_head_same' onClick={() => toggleSortOrder('BumpOut')}>
                            <div>
                                <p>BumpOut</p>
                                {sortBy === 'BumpOut' &&
                                    (sortOrder === 'asc' ? <span className='data7_arrow'><FaArrowUp /></span> : (sortOrder === 'desc' ? <span className='data7_arrow'><FaArrowDown /></span> : sortOrder === 'initial' && <span></span>))
                                }
                            </div>
                        </div>}

                        {showday3 && <div className='data7_content_head_diff' onClick={() => toggleSortOrder('day3')}>
                            <div>
                                <div />
                                {sortBy === 'day3' ?
                                    (sortOrder === 'asc' ? <div><span className='data7_arrow'><FaArrowUp /></span></div> : (sortOrder === 'desc' ? <div><span className='data7_arrow'><FaArrowDown /></span></div> : sortOrder === 'initial' && <div><span><FaSortDown /></span></div>))
                                    : <div><span><FaSortDown /></span></div>}

                            </div>
                        </div>}

                        {showProbeIn && <div className='data7_content_head_same' onClick={() => toggleSortOrder('ProbeIn')}>
                            <div>
                                <p>ProbeIn</p>
                                {sortBy === 'ProbeIn' &&
                                    (sortOrder === 'asc' ? <div className='data7_arrow'><FaArrowUp /></div> : (sortOrder === 'desc' ? <div className='data7_arrow'><FaArrowDown /></div> : sortOrder === 'initial' && <span></span>))
                                }
                            </div>
                        </div>}

                        {showday4 && <div className='data7_content_head_diff' onClick={() => toggleSortOrder('day4')}>
                            <div>
                                <div />
                                {sortBy === 'day4' ?
                                    (sortOrder === 'asc' ? <div><span className='data7_arrow'><FaArrowUp /></span></div> : (sortOrder === 'desc' ? <div><span className='data7_arrow'><FaArrowDown /></span></div> : sortOrder === 'initial' && <div><span><FaSortDown /></span></div>))
                                    : <div><span><FaSortDown /></span></div>}

                            </div>
                        </div>}

                        {showProbeOut && <div className='data7_content_head_same' onClick={() => toggleSortOrder('ProbeOut')}>
                            <div>
                                <p>ProbeOut</p>
                                {sortBy === 'ProbeOut' &&
                                    (sortOrder === 'asc' ? <span className='data7_arrow'><FaArrowUp /></span> : (sortOrder === 'desc' ? <span className='data7_arrow'><FaArrowDown /></span> : sortOrder === 'initial' && <span></span>))
                                }
                            </div>
                        </div>}

                        {showday5 && <div className='data7_content_head_diff' onClick={() => toggleSortOrder('day5')}>
                            <div>
                                <div />
                                {sortBy === 'day5' ?
                                    (sortOrder === 'asc' ? <div><span className='data7_arrow'><FaArrowUp /></span></div> : (sortOrder === 'desc' ? <div><span className='data7_arrow'><FaArrowDown /></span></div> : sortOrder === 'initial' && <div><span><FaSortDown /></span></div>))
                                    : <div><span><FaSortDown /></span></div>}

                            </div>
                        </div>}

                        {showAssemblyIn && <div className='data7_content_head_same' onClick={() => toggleSortOrder('AssemblyIn')}>
                            <div>
                                <p>AssemblyIn</p>
                                {sortBy === 'AssemblyIn' &&
                                    (sortOrder === 'asc' ? <span className='data7_arrow'><FaArrowUp /></span> : (sortOrder === 'desc' ? <span className='data7_arrow'><FaArrowDown /></span> : sortOrder === 'initial' && <span></span>))
                                }
                            </div>
                        </div>}


                        {showday6 && <div className='data7_content_head_diff' onClick={() => toggleSortOrder('day6')}>
                            <div>
                                <div />
                                {sortBy === 'day6' ?
                                    (sortOrder === 'asc' ? <div><span className='data7_arrow'><FaArrowUp /></span></div> : (sortOrder === 'desc' ? <div><span className='data7_arrow'><FaArrowDown /></span></div> : sortOrder === 'initial' && <div><span><FaSortDown /></span></div>))
                                    : <div><span><FaSortDown /></span></div>}
                            </div>
                        </div>}

                        {showAssemblyOut && <div className='data7_content_head_same' onClick={() => toggleSortOrder('AssemblyOut')}>
                            <div>
                                <p>AssemblyOut</p>
                                {sortBy === 'AssemblyOut' &&
                                    (sortOrder === 'asc' ? <span className='data7_arrow'><FaArrowUp /></span> : (sortOrder === 'desc' ? <span className='data7_arrow'><FaArrowDown /></span> : sortOrder === 'initial' && <span></span>))
                                }
                            </div>
                        </div>}

                        {showday7 && <div className='data7_content_head_diff' onClick={() => toggleSortOrder('day7')}>
                            <div>
                                <div />
                                {sortBy === 'day7' ?
                                    (sortOrder === 'asc' ? <div><span className='data7_arrow'><FaArrowUp /></span></div> : (sortOrder === 'desc' ? <div><span className='data7_arrow'><FaArrowDown /></span></div> : sortOrder === 'initial' && <div><span><FaSortDown /></span></div>))
                                    : <div><span><FaSortDown /></span></div>}

                            </div>
                        </div>}

                        {showTestIn && <div className='data7_content_head_same' onClick={() => toggleSortOrder('TestIn')}>
                            <div>
                                <p>TestIn</p>
                                {sortBy === 'TestIn' &&
                                    (sortOrder === 'asc' ? <span className='data7_arrow'><FaArrowUp /></span> : (sortOrder === 'desc' ? <span className='data7_arrow'><FaArrowDown /></span> : sortOrder === 'initial' && <span></span>))
                                }
                            </div>
                        </div>}

                        {showday8 && <div className='data7_content_head_diff' onClick={() => toggleSortOrder('day8')}>
                            <div>
                                <div />
                                {sortBy === 'day8' ?
                                    (sortOrder === 'asc' ? <div><span className='data7_arrow'><FaArrowUp /></span></div> : (sortOrder === 'desc' ? <div><span className='data7_arrow'><FaArrowDown /></span></div> : sortOrder === 'initial' && <div><span><FaSortDown /></span></div>))
                                    : <div><span><FaSortDown /></span></div>}

                            </div>
                        </div>}

                        {showTestOut && <div className='data7_content_head_same' onClick={() => toggleSortOrder('TestOut')}>
                            <div>
                                <p>TestOut</p>
                                {sortBy === 'TestOut' &&
                                    (sortOrder === 'asc' ? <span className='data7_arrow'><FaArrowUp /></span> : (sortOrder === 'desc' ? <span className='data7_arrow'><FaArrowDown /></span> : sortOrder === 'initial' && <span></span>))
                                }
                            </div>
                        </div>}

                        {showday9 && <div className='data7_content_head_diff' onClick={() => toggleSortOrder('day9')}>
                            <div>
                                <div />
                                {sortBy === 'day9' ?
                                    (sortOrder === 'asc' ? <div><span className='data7_arrow'><FaArrowUp /></span></div> : (sortOrder === 'desc' ? <div><span className='data7_arrow'><FaArrowDown /></span></div> : sortOrder === 'initial' && <div><span><FaSortDown /></span></div>))
                                    : <div><span><FaSortDown /></span></div>}

                            </div>
                        </div>}

                        {showShipOut && <div className='data7_content_head_same' onClick={() => toggleSortOrder('ShipOut')}>
                            <div>
                                <p>ShipOut</p>
                                {sortBy === 'ShipOut' &&
                                    (sortOrder === 'asc' ? <span className='data7_arrow'><FaArrowUp /></span> : (sortOrder === 'desc' ? <span className='data7_arrow'><FaArrowDown /></span> : sortOrder === 'initial' && <span></span>))
                                }
                            </div>
                        </div>}
                    </div>

                    {
                        filterBy && filterBy !== '' || startDate && endDate && startDate !== '' && endDate !== '' ? (
                            currentPageFilteredData.map((t) => (
                                <div className='data7_content_body' key={t._id}>
                                    {showlotno && <div className='data7_content_body_same'>
                                        <div style={{ borderRight: "1px solid black" }}>
                                            <p>{t.LotNo}</p>
                                        </div>
                                    </div>}

                                    {showdiereceipt && <div className='data7_content_body_same'>
                                        <div style={{ background: "var(--bg-color-1)" }}>
                                            <p style={{ color: "var(--text-color-1)" }}>{t.DieReceipt}</p>
                                        </div>
                                    </div>}

                                    {showday1 && <div className='data7_content_body_diff'>
                                        <div style={{ background: "linear-gradient(to right, var(--bg-color-1) 50%, var(--bg-color-2) 50%)" }}>
                                            <div />
                                            <div>{t.day1} days</div>
                                        </div>
                                    </div>}

                                    {showBumpIn && <div className='data7_content_body_same'>
                                        <div style={{ background: "var(--bg-color-2)" }}>
                                            <p style={{ color: "var(--text-color-2)" }}>{t.BumpIn}</p>
                                        </div>
                                    </div>}

                                    {showday2 && <div className='data7_content_body_diff'>
                                        <div style={{ background: "linear-gradient(to right, var(--bg-color-2) 50%, var(--bg-color-2) 50%)" }}>
                                            <div />
                                            <div>{t.day2} days</div>
                                        </div>
                                    </div>}

                                    {showBumpOut && <div className='data7_content_body_same'>
                                        <div style={{ background: "var(--bg-color-2)" }}>
                                            <p style={{ color: "var(--text-color-2)" }}>{t.BumpOut}</p>
                                        </div>
                                    </div>}

                                    {showday3 && <div className='data7_content_body_diff'>
                                        <div style={{ background: "linear-gradient(to right, var(--bg-color-2) 50%, var(--bg-color-3) 50%)" }}>
                                            <div />
                                            <div>{t.day3} days</div>
                                        </div>
                                    </div>}

                                    {showProbeIn && <div className='data7_content_body_same'>
                                        <div style={{ background: "var(--bg-color-3)" }}>
                                            <p style={{ color: "var(--text-color-3)" }}>{t.ProbeIn}</p>
                                        </div>
                                    </div>}

                                    {showday4 && <div className='data7_content_body_diff'>
                                        <div style={{ background: "linear-gradient(to right, var(--bg-color-3) 50%, var(--bg-color-3) 50%)" }}>
                                            <div />
                                            <div>{t.day4} days</div>
                                        </div>
                                    </div>}

                                    {showProbeOut && <div className='data7_content_body_same'>
                                        <div style={{ background: "var(--bg-color-3)" }}>
                                            <p style={{ color: "var(--text-color-3)" }}>{t.ProbeOut}</p>
                                        </div>
                                    </div>}

                                    {showday5 && <div className='data7_content_body_diff'>
                                        <div style={{ background: "linear-gradient(to right, var(--bg-color-3) 50%, var(--bg-color-4) 50%)" }}>
                                            <div />
                                            <div>{t.day5} days</div>
                                        </div>
                                    </div>}
                                    {showAssemblyIn && <div className='data7_content_body_same'>
                                        <div style={{ background: "var(--bg-color-4)" }}>
                                            <p style={{ color: "var(--text-color-4)" }}>{t.AssemblyIn}</p>
                                        </div>
                                    </div>}

                                    {showday6 && <div className='data7_content_body_diff'>
                                        <div style={{ background: "linear-gradient(to right, var(--bg-color-4) 50%, var(--bg-color-4) 50%)" }}>
                                            <div />
                                            <div>{t.day6} days</div>
                                        </div>
                                    </div>}

                                    {showAssemblyOut && <div className='data7_content_body_same'>
                                        <div style={{ background: "var(--bg-color-4)" }}>
                                            <p style={{ color: "var(--text-color-4)" }}>{t.AssemblyOut}</p>
                                        </div>
                                    </div>}

                                    {showday7 && <div className='data7_content_body_diff'>
                                        <div style={{ background: "linear-gradient(to right, var(--bg-color-4) 50%, var(--bg-color-5) 50%)" }}>
                                            <div />
                                            <div>{t.day7} days</div>
                                        </div>
                                    </div>}

                                    {showTestIn && <div className='data7_content_body_same'>
                                        <div style={{ background: "var(--bg-color-5)" }}>
                                            <p style={{ color: "var(--text-color-5)" }}>{t.TestIn}</p>
                                        </div>
                                    </div>}

                                    {showday8 && <div className='data7_content_body_diff'>
                                        <div style={{ background: "linear-gradient(to right, var(--bg-color-5) 50%, var(--bg-color-5) 50%)" }}>
                                            <div />
                                            <div>{t.day8} days</div>
                                        </div>
                                    </div>}

                                    {showTestOut && <div className='data7_content_body_same'>
                                        <div style={{ background: "var(--bg-color-5)" }}>
                                            <p style={{ color: "var(--text-color-5)" }}>{t.TestOut}</p>
                                        </div>
                                    </div>}

                                    {showday9 && <div className='data7_content_body_diff'>
                                        <div style={{ background: "linear-gradient(to right, var(--bg-color-5) 50%, var(--bg-color-6) 50%)" }}>
                                            <div />
                                            <div>{t.day9} days</div>
                                        </div>
                                    </div>}

                                    {showShipOut && <div className='data7_content_body_same'>
                                        <div style={{ background: "var(--bg-color-6)" }}>
                                            <p style={{ color: "var(--text-color-6)" }}>{t.ShipOut}</p>
                                        </div>
                                    </div>}
                                </div>
                            ))
                        ) : (
                            currentPageData.map((t) => (
                                <div className='data7_content_body' key={t._id}>
                                    {showlotno && <div className='data7_content_body_same'>
                                        <div style={{ borderRight: "1px solid black" }}>
                                            <p>{t.LotNo}</p>
                                        </div>
                                    </div>}

                                    {showdiereceipt && <div className='data7_content_body_same'>
                                        <div style={{ background: "var(--bg-color-1)" }}>
                                            <p style={{ color: "var(--text-color-1)" }}>{t.DieReceipt}</p>
                                        </div>
                                    </div>}

                                    {showday1 && <div className='data7_content_body_diff'>
                                        <div style={{ background: "linear-gradient(to right, var(--bg-color-1) 50%, var(--bg-color-2) 50%)" }}>
                                            <div />
                                            <div>{t.day1} days</div>
                                        </div>
                                    </div>}

                                    {showBumpIn && <div className='data7_content_body_same'>
                                        <div style={{ background: "var(--bg-color-2)" }}>
                                            <p style={{ color: "var(--text-color-2)" }}>{t.BumpIn}</p>
                                        </div>
                                    </div>}

                                    {showday2 && <div className='data7_content_body_diff'>
                                        <div style={{ background: "linear-gradient(to right, var(--bg-color-2) 50%, var(--bg-color-2) 50%)" }}>
                                            <div />
                                            <div>{t.day2} days</div>
                                        </div>
                                    </div>}

                                    {showBumpOut && <div className='data7_content_body_same'>
                                        <div style={{ background: "var(--bg-color-2)" }}>
                                            <p style={{ color: "var(--text-color-2)" }}>{t.BumpOut}</p>
                                        </div>
                                    </div>}

                                    {showday3 && <div className='data7_content_body_diff'>
                                        <div style={{ background: "linear-gradient(to right, var(--bg-color-2) 50%, var(--bg-color-3) 50%)" }}>
                                            <div />
                                            <div>{t.day3} days</div>
                                        </div>
                                    </div>}

                                    {showProbeIn && <div className='data7_content_body_same'>
                                        <div style={{ background: "var(--bg-color-3)" }}>
                                            <p style={{ color: "var(--text-color-3)" }}>{t.ProbeIn}</p>
                                        </div>
                                    </div>}

                                    {showday4 && <div className='data7_content_body_diff'>
                                        <div style={{ background: "linear-gradient(to right, var(--bg-color-3) 50%, var(--bg-color-3) 50%)" }}>
                                            <div />
                                            <div>{t.day4} days</div>
                                        </div>
                                    </div>}

                                    {showProbeOut && <div className='data7_content_body_same'>
                                        <div style={{ background: "var(--bg-color-3)" }}>
                                            <p style={{ color: "var(--text-color-3)" }}>{t.ProbeOut}</p>
                                        </div>
                                    </div>}

                                    {showday5 && <div className='data7_content_body_diff'>
                                        <div style={{ background: "linear-gradient(to right, var(--bg-color-3) 50%, var(--bg-color-4) 50%)" }}>
                                            <div />
                                            <div>{t.day5} days</div>
                                        </div>
                                    </div>}
                                    {showAssemblyIn && <div className='data7_content_body_same'>
                                        <div style={{ background: "var(--bg-color-4)" }}>
                                            <p style={{ color: "var(--text-color-4)" }}>{t.AssemblyIn}</p>
                                        </div>
                                    </div>}

                                    {showday6 && <div className='data7_content_body_diff'>
                                        <div style={{ background: "linear-gradient(to right, var(--bg-color-4) 50%, var(--bg-color-4) 50%)" }}>
                                            <div />
                                            <div>{t.day6} days</div>
                                        </div>
                                    </div>}

                                    {showAssemblyOut && <div className='data7_content_body_same'>
                                        <div style={{ background: "var(--bg-color-4)" }}>
                                            <p style={{ color: "var(--text-color-4)" }}>{t.AssemblyOut}</p>
                                        </div>
                                    </div>}

                                    {showday7 && <div className='data7_content_body_diff'>
                                        <div style={{ background: "linear-gradient(to right, var(--bg-color-4) 50%, var(--bg-color-5) 50%)" }}>
                                            <div />
                                            <div>{t.day7} days</div>
                                        </div>
                                    </div>}

                                    {showTestIn && <div className='data7_content_body_same'>
                                        <div style={{ background: "var(--bg-color-5)" }}>
                                            <p style={{ color: "var(--text-color-5)" }}>{t.TestIn}</p>
                                        </div>
                                    </div>}

                                    {showday8 && <div className='data7_content_body_diff'>
                                        <div style={{ background: "linear-gradient(to right, var(--bg-color-5) 50%, var(--bg-color-5) 50%)" }}>
                                            <div />
                                            <div>{t.day8} days</div>
                                        </div>
                                    </div>}

                                    {showTestOut && <div className='data7_content_body_same'>
                                        <div style={{ background: "var(--bg-color-5)" }}>
                                            <p style={{ color: "var(--text-color-5)" }}>{t.TestOut}</p>
                                        </div>
                                    </div>}

                                    {showday9 && <div className='data7_content_body_diff'>
                                        <div style={{ background: "linear-gradient(to right, var(--bg-color-5) 50%, var(--bg-color-6) 50%)" }}>
                                            <div />
                                            <div>{t.day9} days</div>
                                        </div>
                                    </div>}

                                    {showShipOut && <div className='data7_content_body_same'>
                                        <div style={{ background: "var(--bg-color-6)" }}>
                                            <p style={{ color: "var(--text-color-6)" }}>{t.ShipOut}</p>
                                        </div>
                                    </div>}
                                </div>
                            ))
                        )
                    }

                </div>
                <div className="data7_pagination">

                    {
                        filterBy && filterBy !== '' || startDate && endDate && startDate !== '' && endDate !== '' ? <div>
                            <div>
                                <button onClick={handlePrevFilterPage} disabled={currentFilterPage === 1}><FaChevronLeft /></button>
                                <span>{currentFilterPage} of {totalFilterPages}</span>
                                <button onClick={handleNextFilterPage} disabled={currentFilterPage === totalFilterPages || filteredData.length === 0}><FaChevronRight /></button>
                            </div>
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
                                                style={{ background: optionValue === `${filterStartIndex + 1} - ${filterEndIndex}` ? "var(--bg-color-2)" : "inherit" }}
                                            >
                                                {optionValue}
                                            </option>
                                        );
                                    })}
                                </select>
                                <p>of {totalPages}</p>
                            </div>
                        </div> : <div>

                            <div>
                                <button onClick={handlePrevPage} disabled={currentPage === 1}><FaChevronLeft /></button>
                                <span>{currentPage} of {totalPages}</span>
                                <button onClick={handleNextPage} disabled={currentPage === totalPages}><FaChevronRight /></button>
                            </div>
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
                                                style={{ background: optionValue === `${startIndex + 1} - ${endIndex}` ? "var(--bg-color-2)" : "inherit" }}
                                            >
                                                {optionValue}
                                            </option>
                                        );
                                    })}
                                </select>
                                <p>of {totalPages}</p>
                            </div>
                        </div>
                    }

                </div>
            </div>

            {/* <div className='data7_top_selectdatebox_filterbox_2'>
                <div>
                    <input
                        type="checkbox"
                        checked={diereceptcheckbox}
                        onChange={handleDiereceiptChange}
                    />
                    <p>Die Receipt</p>
                </div>

                <div>
                    <input
                        type="checkbox"
                        checked={Bumpcheckbox}
                        onChange={handleBumpChange}
                    />
                    <p>Bump</p>
                </div>

                <div>
                    <input
                        type="checkbox"
                        checked={Probecheckbox}
                        onChange={handleProbeChange} />
                    <p>Probe</p>
                </div>

                <div>
                    <input
                        type="checkbox"
                        checked={Assemblycheckbox}
                        onChange={handleAssemblyChange} />
                    <p>Assembly</p>
                </div>

                <div>
                    <input type="checkbox"
                        checked={Testcheckbox}
                        onChange={handleTestChange} />
                    <p>Test</p>
                </div>
            </div> */}
        </main >
    )
}

export default Datagrid7