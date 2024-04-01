import React, { useEffect, useState } from 'react'
import './Datagrid7.css'
import { FaArrowUp, FaChevronLeft, FaChevronRight, FaPlus, FaSortDown } from "react-icons/fa6";
import { fakedata } from './fakedata';
import { FaArrowDown } from "react-icons/fa6";
import { RiDeleteBin6Line, RiDownload2Fill } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { IoIosLink } from "react-icons/io";
import { MdFilterAltOff } from "react-icons/md";

import { Calendar } from "react-multi-date-picker";
import dayjs from 'dayjs';

const Datagrid7 = () => {

    const [showColumn, setShowColumn] = useState(false)

    const [showLotNumber, setShowLotNumber] = useState(true)
    const [showDieReceipt, setShowDieReceipt] = useState(true)
    //day1
    const [showReceiptBumpDuration, setShowReceiptBumpDuration] = useState(true)
    const [showBumpIn, setShowBumpIn] = useState(true)

    //day2
    const [showBumpDuration, setShowBumpDuration] = useState(true)
    const [showBumpOut, setShowBumpOut] = useState(true)

    //day3
    const [showBumpProbeDuration, setShowBumpProbeDuration] = useState(true)
    const [showProbeIn, setShowProbeIn] = useState(true)

    //day4
    const [showProbeDuration, setShowProbeDuration] = useState(true)
    const [showProbeOut, setShowProbeOut] = useState(true)

    //day5
    const [showProbeAssemblyDuration, setShowProbeAssemblyDuration] = useState(true)
    const [showAssemblyIn, setShowAssemblyIn] = useState(true)

    //day6
    const [showAssemblyDuration, setShowAssemblyDuration] = useState(true)
    const [showAssemblyOut, setShowAssemblyOut] = useState(true)

    //day7
    const [showAssemblyTestDuration, setShowAssemblyTestDuration] = useState(true)
    const [showTestIn, setShowTestIn] = useState(true)

    //day8
    const [showTestDuration, setShowTestDuration] = useState(true)
    const [showTestOut, setShowTestOut] = useState(true)

    //day9
    const [showTestShipDuration, setShowTestShipDuration] = useState(true)
    const [showShipOut, setShowShipOut] = useState(true)

    const [showBumpYield, setShowBumpYield] = useState(true)
    const [showProbeYield, setShowProbeYield] = useState(true)
    const [showAssemblyYield, setShowAssemblyYield] = useState(true)
    const [showTestYield, setShowTestYield] = useState(true)

    const [showMCMTakaD, setShowMCMTakaD] = useState(true)
    const [showMCMTaka, setShowMCMTaka] = useState(true)
    const [showTakaDRatio, setShowTakaDRatio] = useState(true)


    const data = fakedata; //cominmg from api

    console.log(data)

    const copydata = [...fakedata]


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
        }
        else if (sortOrder === 'asc') {
            console.log("Ascending")
            return copydata.sort((a, b) => {
                const valueA = a[columnName];
                const valueB = b[columnName];

                console.log(valueA)
                console.log(valueB)

                // Check if both values are numbers
                if (typeof valueA === 'number' && typeof valueB === 'number') {
                    // Compare numbers directly
                    return valueA - valueB
                } else {
                    // Use localeCompare for strings
                    return String(valueA).localeCompare(String(valueB))
                }
            });
        }

        else if (sortOrder === 'desc') {
            console.log("Descending")
            return copydata.sort((a, b) => {
                const valueA = a[columnName];
                const valueB = b[columnName];

                // Check if both values are numbers
                if (typeof valueA === 'number' && typeof valueB === 'number') {
                    // Compare numbers directly
                    return valueB - valueA;
                } else {
                    // Handle empty values
                    if (!valueA && !valueB) {
                        // If both values are empty, consider them equal
                        return 0;
                    } else if (!valueA) {
                        // If valueA is empty, move it to the end
                        return 1;
                    } else if (!valueB) {
                        // If valueB is empty, move it to the end
                        return -1;
                    } else {
                        // Use localeCompare for strings
                        return String(valueB).localeCompare(String(valueA));
                    }
                }
            });
        }

    }



    const sortedData = sortData(data, sortBy, sortOrder, copydata);

    const [dataPerPageState, setDataPerPageState] = useState(10)

    const dataPerPage = dataPerPageState;

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
        // Define headers
        const headers = [
            "LotNumber",
            "DieReceipt",
            "ReceiptBumpDuration",
            "BumpIn",
            "BumpDuration",
            "BumpOut",
            "BumpProbeDuration",
            "ProbeIn",
            "ProbeDuration",
            "ProbeOut",
            "ProbeAssemblyDuration",
            "AssemblyIn",
            "AssemblyDuration",
            "AssemblyOut",
            "AssemblyTestDuration",
            "TestIn",
            "TestDuration",
            "TestOut",
            "TestShipDuration",
            "ShipOut",
            "BumpYield",
            "BumpOutDie",
            "ProbeYield",
            "ProbeOutDie",
            "AssemblyYield",
            "AssemblyOutDie",
            "TestYield",
            "TestOutDie",
            "TestOutDieM",
            "TestOutDieN",
            "TakaDRatio"
        ];

        // Convert data to CSV format
        const csvContent = "data:text/csv;charset=utf-8," +
            headers.join(",") + "\n" +
            currentPageData.map(row => headers.map(header => row[header]).join(",")).join("\n");

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
        // Define headers
        const headers = [
            "LotNumber",
            "DieReceipt",
            "ReceiptBumpDuration",
            "BumpIn",
            "BumpDuration",
            "BumpOut",
            "BumpProbeDuration",
            "ProbeIn",
            "ProbeDuration",
            "ProbeOut",
            "ProbeAssemblyDuration",
            "AssemblyIn",
            "AssemblyDuration",
            "AssemblyOut",
            "AssemblyTestDuration",
            "TestIn",
            "TestDuration",
            "TestOut",
            "TestShipDuration",
            "ShipOut",
            "BumpYield",
            "BumpOutDie",
            "ProbeYield",
            "ProbeOutDie",
            "AssemblyYield",
            "AssemblyOutDie",
            "TestYield",
            "TestOutDie",
            "TestOutDieM",
            "TestOutDieN",
            "TakaDRatio"
        ];

        // Convert data to CSV format
        const csvContent = "data:text/csv;charset=utf-8," +
            headers.join(",") + "\n" +
            data.map(row => headers.map(header => row[header]).join(",")).join("\n");

        // Create a virtual link element to trigger the download
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "current_page_data.csv");
        document.body.appendChild(link);

        // Trigger the download
        link.click();
    }

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
        console.log(dates)
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



    const applyFilter = (dataArray, filterValue) => {
        return dataArray.filter((item) => {
            return (
                item.LotNumber.toLowerCase().includes(filterValue.toLowerCase())
            )
        }
        );
    };

    const [diereceptcheckbox, setDiereceiptcheckbox] = useState(false)
    const [Bumpcheckbox, setBumpCheckbox] = useState(false)
    const [Probecheckbox, setProbeCheckbox] = useState(false)
    const [Assemblycheckbox, setAssemblyCheckbox] = useState(false)
    const [Testcheckbox, setTestCheckbox] = useState(false)
    const [shipcheckbox, setShipCheckbox] = useState(false)


    const applyFilterByDateRange = (dataArray, startDateValue, endDateValue, diereceptcheckbox, Bumpcheckbox, Probecheckbox, Assemblycheckbox, Testcheckbox, shipcheckbox) => {
        return dataArray.filter((item) => {
            const dieReceiptDate = new Date(item?.DieReceipt);
            const BumpInDate = new Date(item?.BumpIn);
            const BumpOutDate = new Date(item?.BumpOut);
            const ProbeInDate = new Date(item?.ProbeIn);
            const ProbeOutDate = new Date(item?.ProbeOut);
            const AssemblyInDate = new Date(item?.AssemblyIn);
            const AssemblyOutDate = new Date(item?.AssemblyOut);
            const TestInDate = new Date(item?.TestIn);
            const TestOutDate = new Date(item?.TestOut);
            const ShipOutDate = new Date(item?.ShipOut);

            const startDate = new Date(startDateValue);
            const endDate = new Date(endDateValue);

            let filterResult = (
                (diereceptcheckbox && (dieReceiptDate >= startDate && dieReceiptDate <= endDate)) ||
                (Bumpcheckbox && (
                    (BumpInDate >= startDate && BumpInDate <= endDate) ||
                    (BumpOutDate >= startDate && BumpOutDate <= endDate)
                )) ||
                (Probecheckbox && (
                    (ProbeInDate >= startDate && ProbeInDate <= endDate) ||
                    (ProbeOutDate >= startDate && ProbeOutDate <= endDate)
                )) ||
                (Assemblycheckbox && (
                    (AssemblyInDate >= startDate && AssemblyInDate <= endDate) ||
                    (AssemblyOutDate >= startDate && AssemblyOutDate <= endDate)
                )) ||
                (Testcheckbox && (
                    (TestInDate >= startDate && TestInDate <= endDate) ||
                    (TestOutDate >= startDate && TestOutDate <= endDate)
                )) ||
                (shipcheckbox && (
                    (ShipOutDate >= startDate && ShipOutDate <= endDate)
                ))
            );

            return filterResult;
        });
    };


    const filteredData = filterBy && filterBy !== "" ? applyFilter(data, filterBy) : applyFilterByDateRange(data, startDate, endDate, diereceptcheckbox, Bumpcheckbox, Probecheckbox, Assemblycheckbox, Testcheckbox, shipcheckbox);


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


    const dataPerFilterPage = dataPerPageState;

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

    const [openRangeCalender, setOpenRangeCalender] = useState(false)


    const [DurationCheck, setDurationCheck] = useState(true)
    const [DatesCheck, setDatesCheck] = useState(true)
    const [YieldCheck, setYieldCheck] = useState(true)


    const DatesCheckClicked = (e) => {
        setDatesCheck((prev) => (!prev))
        setShowDieReceipt((prev) => !prev)
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

    const DurationCheckClicked = (e) => {
        setDurationCheck((prev) => !prev)
        setShowReceiptBumpDuration((prev) => !prev)
        setShowBumpDuration((prev) => !prev)
        setShowBumpProbeDuration((prev) => !prev)
        setShowProbeDuration((prev) => !prev)
        setShowProbeAssemblyDuration((prev) => !prev)
        setShowAssemblyDuration((prev) => !prev)
        setShowAssemblyTestDuration((prev) => !prev)
        setShowTestDuration((prev) => !prev)
        setShowTestShipDuration((prev) => !prev)
    }

    const YieldCheckClicked = (e) => {
        setYieldCheck((prev) => !prev)
        setShowBumpYield((prev) => !prev)
        setShowProbeYield((prev) => !prev)
        setShowAssemblyYield((prev) => !prev)
        setShowTestYield((prev) => !prev)
        setShowMCMTakaD((prev) => !prev)
        setShowMCMTaka((prev) => !prev)
        setShowTakaDRatio((prev) => !prev)
    }

    const [selectedDateBtnStyle, setSelectedDateBtnStyle] = useState(null);

    const today = dayjs();

    const datebtnarray = [
        {
            _id: 1,
            name: "Today",
            dateHandler: () => {
                const currentday = [today.startOf('day'), today.endOf('day')]
                setSelectedDates(currentday)
                setSelectedDateBtnStyle(1);
            }
        },
        {
            _id: 2,
            name: "Yesterday",
            dateHandler: () => {
                const yesterday = [today.subtract(1, 'day').startOf('day'), today.subtract(1, 'day').endOf('day')]
                setSelectedDates(yesterday)
                setSelectedDateBtnStyle(2);
            }
        },
        {
            _id: 3,
            name: "This week",
            dateHandler: () => {
                const Weekvalue = [today.startOf('week'), today.endOf('week')]
                setSelectedDates(Weekvalue)
                setSelectedDateBtnStyle(3);
            }
        },
        {
            _id: 4,
            name: "Last 7 days",
            dateHandler: () => {
                const last7day = [today.subtract(6, 'day').startOf('day'), today.endOf('day')]
                setSelectedDates(last7day)
                setSelectedDateBtnStyle(4);
            }
        },
        {
            _id: 5,
            name: "Last 14 days",
            dateHandler: () => {
                const last14day = [today.subtract(13, 'day').startOf('day'), today.endOf('day')]
                setSelectedDates(last14day)
                setSelectedDateBtnStyle(5);
            }
        },
        {
            _id: 6,
            name: "Last 30 days",
            dateHandler: () => {
                const last30day = [today.subtract(29, 'day').startOf('day'), today.endOf('day')]
                setSelectedDates(last30day)
                setSelectedDateBtnStyle(6);
            }
        },
        {
            _id: 7,
            name: "This month",
            dateHandler: () => {
                const thismonth = [today.startOf('month'), today.endOf('month')]
                setSelectedDates(thismonth)
                setSelectedDateBtnStyle(7);
            }
        },
        {
            _id: 8,
            name: "Last month",
            dateHandler: () => {
                const lastmonth = [today.subtract(1, 'month').startOf('month'), today.subtract(1, 'month').endOf('month')]
                setSelectedDates(lastmonth)
                setSelectedDateBtnStyle(8);
            }
        },
        {
            _id: 9,
            name: "This year",
            dateHandler: () => {
                const thisyear = [today.startOf('year'), today.endOf('year')]
                setSelectedDates(thisyear)
                setSelectedDateBtnStyle(9);
            }
        },
        {
            _id: 10,
            name: "Last year",
            dateHandler: () => {
                const lastyear = [today.subtract(1, 'year').startOf('year'), today.subtract(1, 'year').endOf('year')]
                setSelectedDates(lastyear)
                setSelectedDateBtnStyle(10);
            }
        },
        {
            _id: 11,
            name: "All time",
            dateHandler: () => {
                const alltime = [dayjs(0), today.endOf('day')]
                setSelectedDates(alltime)
                setSelectedDateBtnStyle(11);
            }
        }
    ];

    function ColorGenerator(percentage){
        var r , g, b = 0;
    
        if(isNaN(percentage)){
            g = 255;
            r = 0;
        }
        else if(percentage < 50){
            g = 255;
            r = Math.round(5.1 * percentage);
        }
        else{
            r = 255;
            g = Math.round(510 - 5.10 * percentage);
        }
    
        var h = (r * 0x10000) + (g * 0x100) + (b * 0x1);
        return '#' + ('000000' + h.toString(16)).slice(-6);
    }

    const columnConfigs = [
        {
            key: "LotNumber",
            header: "Lot Number",
            className: "data7_content_body_same",
            render: (value) => <p>{value}</p>
        },
        {
            key: "DieReceipt",
            header: "Die Receipt",
            className: "data7_content_body_same",
            render: (value) => value ? <p style={{ color: "var(--text-color-1)" }}>{value}</p> : <p style={{ color: "var(--text-color-1)" }}>-</p>
        },
        {
            key: "ReceiptBumpDuration",
            header: "Receipt Bump Duration",
            className: "data7_content_body_diff",
            render: (value) => <div>{value !== undefined ? `${value} days` : 'days'}</div>
        },
    ];
    
    console.log(columnConfigs)
    
    return (
        <main className='data7_container' >
            <div className='data7_top_bx'>
                <p>Lots Status Tracking</p>

                <div>
                    <div className='data7_top_searchbox'>
                        <input
                            type="text"
                            placeholder='Search By Lot No.'
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
                                        value={selectedDates.map(d => d.format('YYYY-MM-DD'))}
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
                                            onChange={(e) => setDiereceiptcheckbox((prev) => !prev)}
                                            style={{ accentColor: diereceptcheckbox ? "var(--checkbox-bg-color)" : "" }}
                                        />
                                        <p>Die Receipt</p>
                                    </div>

                                    <div>
                                        <input
                                            type="checkbox"
                                            checked={Bumpcheckbox}
                                            onChange={(e) => setBumpCheckbox((prev) => !prev)}
                                            style={{ accentColor: Bumpcheckbox ? "var(--checkbox-bg-color)" : "" }}
                                        />
                                        <p>Bump</p>
                                    </div>

                                    <div>
                                        <input
                                            type="checkbox"
                                            checked={Probecheckbox}
                                            onChange={(e) => setProbeCheckbox((prev) => !prev)}
                                            style={{ accentColor: Probecheckbox ? "var(--checkbox-bg-color)" : "" }}
                                        />
                                        <p>Probe</p>
                                    </div>

                                    <div>
                                        <input
                                            type="checkbox"
                                            checked={Assemblycheckbox}
                                            onChange={(e) => setAssemblyCheckbox((prev) => !prev)}
                                            style={{ accentColor: Assemblycheckbox ? "var(--checkbox-bg-color)" : "" }}
                                        />
                                        <p>Assembly</p>
                                    </div>

                                    <div>
                                        <input type="checkbox"
                                            checked={Testcheckbox}
                                            onChange={(e) => setTestCheckbox((prev) => !prev)}
                                            style={{ accentColor: Testcheckbox ? "var(--checkbox-bg-color)" : "" }}
                                        />
                                        <p>Test</p>
                                    </div>

                                    <div>
                                        <input type="checkbox"
                                            checked={shipcheckbox}
                                            onChange={(e) => setShipCheckbox((prev) => !prev)}
                                            style={{ accentColor: shipcheckbox ? "var(--checkbox-bg-color)" : "" }}
                                        />
                                        <p>Ship</p>
                                    </div>
                                </div>

                                <div className='data7_calender_selectdate_button_container'>
                                    {
                                        datebtnarray.map((c) => (
                                            <button key={c._id}
                                                onClick={c.dateHandler}
                                                disabled={c._id === selectedDateBtnStyle}
                                                style={{
                                                    background: selectedDateBtnStyle === c._id ? "var(--checkbox-bg-color)" : "",
                                                    color: selectedDateBtnStyle === c._id ? "#fff" : "#000"
                                                }}
                                            >{c.name}</button>
                                        ))
                                    }
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
                                    style={{ accentColor: DatesCheck ? "var(--checkbox-bg-color)" : "" }}
                                />
                                <p>Dates</p>
                            </div>

                            <div>
                                <input
                                    type="checkbox"
                                    checked={DurationCheck}
                                    onChange={(e) => DurationCheckClicked(e)}
                                    style={{ accentColor: DurationCheck ? "var(--checkbox-bg-color)" : "" }}
                                />
                                <p>Duration</p>
                            </div>

                            <div>
                                <input
                                    type="checkbox"
                                    checked={YieldCheck}
                                    onChange={(e) => YieldCheckClicked(e)}
                                    style={{ accentColor: YieldCheck ? "var(--checkbox-bg-color)" : "" }}
                                />
                                <p>Yield / Quantity</p>
                            </div>
                        </div>}
                    </div>

                    <button onClick={removeFilter} className='remove-filter-input' style={{fontSize:"20px"}}
                    title="Clear All Filters"
                    ><MdFilterAltOff /></button>

                    <button className='dwn_crt_csv_data_btn' onClick={currentpagecsvdataHandler} style={{fontSize:"20px"}}
                    title="Download Current Entry"
                    ><RiDownload2Fill /></button>

                    <button className='dwn_crt_entire_data_btn' onClick={entirepagecsvdataHandler} style={{fontSize:"20px"}}
                    title="Download Entire Entry"
                    ><RiDownload2Fill /></button>
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
                                        onChange={(e) => setDiereceiptcheckbox((prev) => !prev)}
                                    />
                                    <p>Die Receipt</p>
                                </div>

                                <div>
                                    <input
                                        type="checkbox"
                                        checked={Bumpcheckbox}
                                        onChange={(e) => setBumpCheckbox((prev) => !prev)}
                                    />
                                    <p>Bump</p>
                                </div>

                                <div>
                                    <input
                                        type="checkbox"
                                        checked={Probecheckbox}
                                        onChange={(e) => setAssemblyCheckbox((prev) => !prev)} />
                                    <p>Probe</p>
                                </div>

                                <div>
                                    <input
                                        type="checkbox"
                                        checked={Assemblycheckbox}
                                        onChange={(e) => setAssemblyCheckbox((prev) => !prev)} />
                                    <p>Assembly</p>
                                </div>

                                <div>
                                    <input type="checkbox"
                                        checked={Testcheckbox}
                                        onChange={(e) => setTestCheckbox((prev) => !prev)} />
                                    <p>Test</p>
                                </div>

                                <div>
                                    <input type="checkbox"
                                        checked={shipcheckbox}
                                        onChange={(e) => setShipCheckbox((prev) => !prev)}
                                        style={{ accentColor: shipcheckbox ? "var(--checkbox-bg-color)" : "" }}
                                    />
                                    <p>Ship</p>
                                </div>
                            </div>

                            <div className='data7_calender_selectdate_button_container'>
                                {
                                    datebtnarray.map((c) => (
                                        <button key={c._id}
                                            onClick={c.dateHandler}
                                            disabled={c._id === selectedDateBtnStyle}
                                            style={{
                                                background: selectedDateBtnStyle === c._id ? "var(--checkbox-bg-color)" : "",
                                                color: selectedDateBtnStyle === c._id ? "#fff" : "#000"
                                            }}
                                        >{c.name}</button>
                                    ))
                                }
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
                            <input
                                type="checkbox"
                                value={YieldCheck}
                                onChange={(e) => YieldCheckClicked(e)}

                            />
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
                <div className='data7_content_box'>
                    <div className='data7_content'>
                        <div className='data7_content_head'>
                            {showLotNumber && <div className='data7_content_head_same' onClick={() => toggleSortOrder('LotNumber')}>
                                <div style={{ borderRight: "1px solid black" }}>
                                    <p>Lot No.</p>
                                    {sortBy === 'LotNumber' &&
                                        (sortOrder === 'asc' ? <span className='data7_arrow'><FaArrowUp /></span> : (sortOrder === 'desc' ? <span className='data7_arrow'><FaArrowDown /></span> : sortOrder === 'initial' && <span></span>))
                                    }
                                </div>
                            </div>}

                            {showDieReceipt && <div className='data7_content_head_same' onClick={() => toggleSortOrder('DieReceipt')}>
                                <div>
                                    <p>DieReceipt</p>
                                    {sortBy === 'DieReceipt' &&
                                        (sortOrder === 'asc' ? <span className='data7_arrow'><FaArrowUp /></span> : (sortOrder === 'desc' ? <span className='data7_arrow'><FaArrowDown /></span> : sortOrder === 'initial' && <span></span>))
                                    }
                                </div>
                            </div>}

                            {showReceiptBumpDuration && <div className='data7_content_head_diff' onClick={() => toggleSortOrder('ReceiptBumpDuration')}>
                                <div>
                                    <div />
                                    {sortBy === 'ReceiptBumpDuration' ?
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

                            {showBumpDuration && <div className='data7_content_head_diff' onClick={() => toggleSortOrder('BumpDuration')}>
                                <div>
                                    <div />
                                    {sortBy === 'BumpDuration' ?
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

                            {showBumpProbeDuration && <div className='data7_content_head_diff' onClick={() => toggleSortOrder('BumpProbeDuration')}>
                                <div>
                                    <div />
                                    {sortBy === 'BumpProbeDuration' ?
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

                            {showProbeDuration && <div className='data7_content_head_diff' onClick={() => toggleSortOrder('ProbeDuration')}>
                                <div>
                                    <div />
                                    {sortBy === 'ProbeDuration' ?
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

                            {showProbeAssemblyDuration && <div className='data7_content_head_diff' onClick={() => toggleSortOrder('ProbeAssemblyDuration')}>
                                <div>
                                    <div />
                                    {sortBy === 'ProbeAssemblyDuration' ?
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


                            {showAssemblyDuration && <div className='data7_content_head_diff' onClick={() => toggleSortOrder('AssemblyDuration')}>
                                <div>
                                    <div />
                                    {sortBy === 'AssemblyDuration' ?
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

                            {showAssemblyTestDuration && <div className='data7_content_head_diff' onClick={() => toggleSortOrder('AssemblyTestDuration')}>
                                <div>
                                    <div />
                                    {sortBy === 'AssemblyTestDuration' ?
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

                            {showTestDuration && <div className='data7_content_head_diff' onClick={() => toggleSortOrder('TestDuration')}>
                                <div>
                                    <div />
                                    {sortBy === 'TestDuration' ?
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

                            {showTestShipDuration && <div className='data7_content_head_diff' onClick={() => toggleSortOrder('TestShipDuration')}>
                                <div>
                                    <div />
                                    {sortBy === 'TestShipDuration' ?
                                        (sortOrder === 'asc' ? <div><span className='data7_arrow'><FaArrowUp /></span></div> : (sortOrder === 'desc' ? <div><span className='data7_arrow'><FaArrowDown /></span></div> : sortOrder === 'initial' && <div><span><FaSortDown /></span></div>))
                                        : <div><span><FaSortDown /></span></div>}

                                </div>
                            </div>}

                            {showShipOut && <div className='data7_content_head_same' onClick={() => toggleSortOrder('ShipOut')} style={{ width: "135px" }}>
                                <div>
                                    <p>ShipOut</p>
                                    {sortBy === 'ShipOut' &&
                                        (sortOrder === 'asc' ? <span className='data7_arrow'><FaArrowUp /></span> : (sortOrder === 'desc' ? <span className='data7_arrow'><FaArrowDown /></span> : sortOrder === 'initial' && <span></span>))
                                    }
                                </div>
                            </div>}

                            {
                                showBumpYield && <div className='data7_content_head_same' onClick={() => toggleSortOrder('BumpYield')} style={{
                                    borderLeft: "3px solid var(--bg-primary-color)",
                                    borderRight: "1px solid #000"
                                }}>
                                    <div>
                                        <p>BumpIn</p>
                                        {sortBy === 'BumpYield' &&
                                            (sortOrder === 'asc' ? <span className='data7_arrow'><FaArrowUp /></span> : (sortOrder === 'desc' ? <span className='data7_arrow'><FaArrowDown /></span> : sortOrder === 'initial' && <span></span>))
                                        }
                                    </div>
                                </div>
                            }

                            {
                                showProbeYield && <div className='data7_content_head_same' onClick={() => toggleSortOrder('ProbeYield')}
                                    style={{
                                        borderRight: "1px solid #000"
                                    }}
                                >
                                    <div>
                                        <p>ProbeIn</p>
                                        {sortBy === 'ProbeYield' &&
                                            (sortOrder === 'asc' ? <span className='data7_arrow'><FaArrowUp /></span> : (sortOrder === 'desc' ? <span className='data7_arrow'><FaArrowDown /></span> : sortOrder === 'initial' && <span></span>))
                                        }
                                    </div>
                                </div>
                            }


                            {
                                showAssemblyYield && <div className='data7_content_head_same' onClick={() => toggleSortOrder('AssemblyYield')}
                                    style={{
                                        borderRight: "1px solid #000"
                                    }}
                                >
                                    <div>
                                        <p>AssemblyIn</p>
                                        {sortBy === 'AssemblyYield' &&
                                            (sortOrder === 'asc' ? <span className='data7_arrow'><FaArrowUp /></span> : (sortOrder === 'desc' ? <span className='data7_arrow'><FaArrowDown /></span> : sortOrder === 'initial' && <span></span>))
                                        }
                                    </div>
                                </div>
                            }

                            {
                                showTestYield && <div className='data7_content_head_same' onClick={() => toggleSortOrder('TestYield')}
                                    style={{
                                        borderRight: "1px solid #000"
                                    }}
                                >
                                    <div>
                                        <p>TestIn</p>
                                        {sortBy === 'TestYield' &&
                                            (sortOrder === 'asc' ? <span className='data7_arrow'><FaArrowUp /></span> : (sortOrder === 'desc' ? <span className='data7_arrow'><FaArrowDown /></span> : sortOrder === 'initial' && <span></span>))
                                        }
                                    </div>
                                </div>
                            }

                            {
                                showMCMTakaD && <div className='data7_content_head_same' onClick={() => toggleSortOrder('TestOutDieM')}
                                    style={{
                                        borderRight: "1px solid #000"
                                    }}
                                >
                                    <div>
                                        <p>MCM Taka D</p>
                                        {sortBy === 'TestOutDieM' &&
                                            (sortOrder === 'asc' ? <span className='data7_arrow'><FaArrowUp /></span> : (sortOrder === 'desc' ? <span className='data7_arrow'><FaArrowDown /></span> : sortOrder === 'initial' && <span></span>))
                                        }
                                    </div>
                                </div>
                            }

                            {
                                showMCMTaka && <div className='data7_content_head_same' onClick={() => toggleSortOrder('TestOutDieN')}
                                    style={{
                                        borderRight: "1px solid #000"
                                    }}
                                >
                                    <div>
                                        <p>MCM Taka</p>
                                        {sortBy === 'TestOutDieN' &&
                                            (sortOrder === 'asc' ? <span className='data7_arrow'><FaArrowUp /></span> : (sortOrder === 'desc' ? <span className='data7_arrow'><FaArrowDown /></span> : sortOrder === 'initial' && <span></span>))
                                        }
                                    </div>
                                </div>
                            }

                            {
                                showTakaDRatio && <div className='data7_content_head_same' onClick={() => toggleSortOrder('TakaDRatio')}>
                                    <div>
                                        <p>Taka Ratio</p>
                                        {sortBy === 'TakaDRatio' &&
                                            (sortOrder === 'asc' ? <span className='data7_arrow'><FaArrowUp /></span> : (sortOrder === 'desc' ? <span className='data7_arrow'><FaArrowDown /></span> : sortOrder === 'initial' && <span></span>))
                                        }
                                    </div>
                                </div>

                            }

                        </div>

                        {
                            filterBy && filterBy !== '' || startDate && endDate && startDate !== '' && endDate !== '' ? (
                                currentPageFilteredData.map((t, i) => (
                                    <div className='data7_content_body' key={t.LotNo}
                                        style={{ borderBottom: (currentPageFilteredData.length - 1) === i ? "none" : "1px solid black" }}
                                    >
                                        {showLotNumber && <div className='data7_content_body_same'>
                                            <div style={{ borderRight: "1px solid black" }}>
                                                <p>{t.LotNumber}</p>
                                            </div>
                                        </div>}

                                        {showDieReceipt && <div className='data7_content_body_same'>
                                            <div style={{ background: "var(--bg-color-1)" }}>
                                                {
                                                    t?.DieReceipt ? <p style={{ color: "var(--text-color-1)" }}>{t.DieReceipt}</p> : <p style={{ color: "var(--text-color-1)" }}>-</p>
                                                }

                                            </div>
                                        </div>}

                                        {showReceiptBumpDuration && <div className='data7_content_body_diff'>
                                            <div style={{ background: "linear-gradient(to right, var(--bg-color-1) 50%, var(--bg-color-2) 50%)" }}>
                                                <div />
                                                {
                                                    t?.ReceiptBumpDuration || t?.ReceiptBumpDuration === 0 ? <div>{t.ReceiptBumpDuration} days</div> : <div>days</div>
                                                }
                                            </div>
                                        </div>}

                                        {showBumpIn && <div className='data7_content_body_same'>
                                            <div style={{ background: "var(--bg-color-2)" }}>
                                                {
                                                    t?.BumpIn ? <p style={{ color: "var(--text-color-2)" }}>{t.BumpIn}</p> : <p style={{ color: "var(--text-color-2)" }}>-</p>
                                                }
                                            </div>
                                        </div>}

                                        {showBumpDuration && <div className='data7_content_body_diff'>
                                            <div style={{ background: "linear-gradient(to right, var(--bg-color-2) 50%, var(--bg-color-2) 50%)" }}>
                                                <div />
                                                {
                                                    t?.BumpDuration || t?.BumpDuration === 0 ? <div>{t.BumpDuration} days</div> : <div>days</div>
                                                }
                                            </div>
                                        </div>}

                                        {showBumpOut && <div className='data7_content_body_same'>
                                            <div style={{ background: "var(--bg-color-2)" }}>
                                                {
                                                    t?.BumpOut ? <p style={{ color: "var(--text-color-2)" }}>{t.BumpOut}</p> : <p style={{ color: "var(--text-color-2)" }}>-</p>
                                                }
                                            </div>
                                        </div>}

                                        {showBumpProbeDuration && <div className='data7_content_body_diff'>
                                            <div style={{ background: "linear-gradient(to right, var(--bg-color-2) 50%, var(--bg-color-3) 50%)" }}>
                                                <div />
                                                {
                                                    t?.BumpProbeDuration || t?.BumpProbeDuration === 0 ? <div>{t.BumpProbeDuration} days</div> : <div>days</div>
                                                }
                                            </div>
                                        </div>}

                                        {showProbeIn && <div className='data7_content_body_same'>
                                            <div style={{ background: "var(--bg-color-3)" }}>
                                                {
                                                    t?.ProbeIn ? <p style={{ color: "var(--text-color-3)" }}>{t.ProbeIn}</p> : <p style={{ color: "var(--text-color-3)" }}>-</p>
                                                }
                                            </div>
                                        </div>}

                                        {showProbeDuration && <div className='data7_content_body_diff'>
                                            <div style={{ background: "linear-gradient(to right, var(--bg-color-3) 50%, var(--bg-color-3) 50%)" }}>
                                                <div />
                                                {
                                                    t?.ProbeDuration || t?.ProbeDuration === 0 ? <div>{t.ProbeDuration} days</div> : <div>days</div>
                                                }
                                            </div>
                                        </div>}

                                        {showProbeOut && <div className='data7_content_body_same'>
                                            <div style={{ background: "var(--bg-color-3)" }}>
                                                {
                                                    t?.ProbeOut ? <p style={{ color: "var(--text-color-3)" }}>{t.ProbeOut}</p> : <p style={{ color: "var(--text-color-3)" }}>-</p>
                                                }
                                            </div>
                                        </div>}

                                        {showProbeAssemblyDuration && <div className='data7_content_body_diff'>
                                            <div style={{ background: "linear-gradient(to right, var(--bg-color-3) 50%, var(--bg-color-4) 50%)" }}>
                                                <div />
                                                {
                                                    t?.ProbeAssemblyDuration || t?.ProbeAssemblyDuration === 0 ? <div>{t.ProbeAssemblyDuration} days</div> : <div>days</div>
                                                }
                                            </div>
                                        </div>}
                                        {showAssemblyIn && <div className='data7_content_body_same'>
                                            <div style={{ background: "var(--bg-color-4)" }}>
                                                {
                                                    t?.AssemblyIn ? <p style={{ color: "var(--text-color-4)" }}>{t.AssemblyIn}</p> : <p style={{ color: "var(--text-color-4)" }}>-</p>
                                                }
                                            </div>
                                        </div>}

                                        {showAssemblyDuration && <div className='data7_content_body_diff'>
                                            <div style={{ background: "linear-gradient(to right, var(--bg-color-4) 50%, var(--bg-color-4) 50%)" }}>
                                                <div />
                                                {
                                                    t?.AssemblyDuration || t?.AssemblyDuration === 0 ? <div>{t.AssemblyDuration} days</div> : <div>days</div>
                                                }
                                            </div>
                                        </div>}

                                        {showAssemblyOut && <div className='data7_content_body_same'>
                                            <div style={{ background: "var(--bg-color-4)" }}>
                                                {
                                                    t?.AssemblyOut ? <p style={{ color: "var(--text-color-4)" }}>{t.AssemblyOut}</p> : <p style={{ color: "var(--text-color-4)" }}>-</p>
                                                }
                                            </div>
                                        </div>}

                                        {showAssemblyTestDuration && <div className='data7_content_body_diff'>
                                            <div style={{ background: "linear-gradient(to right, var(--bg-color-4) 50%, var(--bg-color-5) 50%)" }}>
                                                <div />
                                                {
                                                    t?.AssemblyTestDuration || t?.AssemblyTestDuration === 0 ? <div>{t.AssemblyTestDuration} days</div> : <div>days</div>
                                                }
                                            </div>
                                        </div>}

                                        {showTestIn && <div className='data7_content_body_same'>
                                            <div style={{ background: "var(--bg-color-5)" }}>
                                                {
                                                    t?.TestIn ? <p style={{ color: "var(--text-color-5)" }}>{t.TestIn}</p> : <p style={{ color: "var(--text-color-5)" }}>-</p>
                                                }
                                            </div>
                                        </div>}

                                        {showTestDuration && <div className='data7_content_body_diff'>
                                            <div style={{ background: "linear-gradient(to right, var(--bg-color-5) 50%, var(--bg-color-5) 50%)" }}>
                                                <div />
                                                {
                                                    t?.TestDuration || t?.TestDuration === 0 ? <div>{t.TestDuration} days</div> : <div>days</div>
                                                }
                                            </div>
                                        </div>}

                                        {showTestOut && <div className='data7_content_body_same'>
                                            <div style={{ background: "var(--bg-color-5)" }}>
                                                {
                                                    t?.TestOut ? <p style={{ color: "var(--text-color-5)" }}>{t.TestOut}</p> : <p style={{ color: "var(--text-color-6)" }}>-</p>
                                                }
                                            </div>
                                        </div>}

                                        {showTestShipDuration && <div className='data7_content_body_diff'>
                                            <div style={{ background: "linear-gradient(to right, var(--bg-color-5) 50%, var(--bg-color-6) 50%)" }}>
                                                <div />
                                                {
                                                    t?.TestShipDuration || t?.TestShipDuration === 0 ? <div>{t.TestShipDuration} days</div> : <div>days</div>
                                                }
                                            </div>
                                        </div>}

                                        {showShipOut && <div className='data7_content_body_same'>
                                            <div style={{ background: "var(--bg-color-6)" }}>
                                                {
                                                    t?.ShipOut ? <p style={{ color: "var(--text-color-6)" }}>{t.ShipOut}</p> : <p style={{ color: "var(--text-color-6)" }}>-</p>
                                                }
                                            </div>
                                        </div>}

                                        {
                                            showBumpYield && <div className='data7_content_body_same_yield' style={{
                                                background: "var(--bg-color-3)",
                                                borderLeft: "3px solid var(--bg-primary-color)",
                                                borderRight: "1px solid #000"
                                            }}>
                                                {
                                                    t?.BumpYield && t?.BumpOutDie ? (<div>
                                                        <div>
                                                            <span style={{ color: "var(--progress-bg-color-1)" }}>{t.BumpYield}%</span> <span>{t.BumpOutDie}</span>
                                                        </div>
                                                        <div>
                                                            <div style={{ width: t.BumpYield > 100 ? '100%' : `${t.BumpYield}%`, background: "var(--progress-bg-color-1)" }}></div>
                                                        </div>
                                                    </div>) : (
                                                        <div style={{ textAlign: "center" }}><span style={{ color: "var(--progress-bg-color-1)" }}>-</span></div>
                                                    )
                                                }

                                            </div>
                                        }


                                        {
                                            showProbeYield && <div className='data7_content_body_same_yield' style={{
                                                background: "var(--bg-color-3)",
                                                borderRight: "1px solid #000"
                                            }}>
                                                {
                                                    t?.ProbeYield && t?.ProbeOutDie ? (<div>
                                                        <div>
                                                            <span style={{ color: "var(--progress-bg-color-2)" }}>{t.ProbeYield}%</span> <span>{t.ProbeOutDie}</span>
                                                        </div>
                                                        <div>
                                                            <div style={{ width: t.ProbeYield > 100 ? '100%' : `${t.ProbeYield}%`, background: "var(--progress-bg-color-2)" }}></div>
                                                        </div>
                                                    </div>) : (
                                                        <div style={{ textAlign: "center" }}><span style={{ color: "var(--progress-bg-color-2)" }}>-</span></div>
                                                    )
                                                }
                                            </div>
                                        }

                                        {
                                            showAssemblyYield && <div className='data7_content_body_same_yield' style={{
                                                background: "var(--bg-color-4)",
                                                borderRight: "1px solid #000"
                                            }}>
                                                {
                                                    t?.AssemblyYield && t?.AssemblyOutDie ? (<div>
                                                        <div>
                                                            <span style={{ color: "var(--progress-bg-color-3)" }}>{t.AssemblyYield}%</span> <span>{t.AssemblyOutDie}</span>
                                                        </div>
                                                        <div>
                                                            <div style={{ width: t.AssemblyYield > 100 ? '100%' : `${t.AssemblyYield}%`, background: "var(--progress-bg-color-3)" }}></div>
                                                        </div>
                                                    </div>) : (
                                                        <div style={{ textAlign: "center" }}><span style={{ color: "var(--progress-bg-color-3)" }}>-</span></div>
                                                    )
                                                }
                                            </div>
                                        }

                                        {
                                            showTestYield && <div className='data7_content_body_same_yield' style={{
                                                background: "var(--bg-color-5)",
                                                borderRight: "1px solid #000"
                                            }}>
                                                {
                                                    t?.TestYield && t?.TestOutDie ? (<div>
                                                        <div>
                                                            <span style={{ color: "var(--progress-bg-color-4)" }}>{t.TestYield}%</span> <span>{t.TestOutDie}</span>
                                                        </div>
                                                        <div>
                                                            <div style={{ width: t.TestYield > 100 ? '100%' : `${t.AssemblyYield}%`, background: "var(--progress-bg-color-4)" }}></div>
                                                        </div>
                                                    </div>) : (
                                                        <div style={{ textAlign: "center" }}><span style={{ color: "var(--progress-bg-color-4)" }}>-</span></div>
                                                    )
                                                }
                                            </div>
                                        }


                                        {
                                            showMCMTakaD && <div className='data7_content_body_same_taka' style={{
                                                background: "var(--mcm-taka-d-bg-color)",
                                                borderRight: "1px solid #000"
                                            }}>
                                                {
                                                    t?.TestOutDieM ? <p style={{ color: "red" }}>{t.TestOutDieM}</p> : <p style={{ color: "red" }}>-</p>
                                                }
                                            </div>
                                        }

                                        {
                                            showMCMTaka && <div className='data7_content_body_same_taka' style={{
                                                background: "var(--mcm-taka-bg-color)",
                                                borderRight: "1px solid #000"
                                            }}>
                                                {
                                                    t?.TestOutDieN ? <p style={{ color: "green" }}>{t.TestOutDieN}</p> : <p style={{ color: "green" }}>-</p>
                                                }
                                            </div>
                                        }

                                        {
                                            showTakaDRatio && <div className='data7_content_body_same_taka' style={{ background: t.TakaDRatio <= 50 ? "var(--mcm-taka-ratio-bg-color-1)" : (t.TakaDRatio > 50 && t.TakaDRatio <= 70) ? "var(--mcm-taka-ratio-bg-color-2)" : (t.TakaDRatio > 70 ? "orange" : (t.TakaDRatio === "-" ? "var(--mcm-taka-ratio-bg-color-1)" : "")) }}>
                                                {
                                                    t?.TakaDRatio ? <p style={{ color: "black" }}>{t.TakaDRatio}</p> : <p style={{ color: "black" }}>-</p>
                                                }
                                            </div>
                                        }

                                    </div>
                                ))
                            ) : (
                                currentPageData.map((t, i) => (
                                    <div className='data7_content_body' key={t.LotNumber}
                                        style={{ borderBottom: (data.length - 1) === i ? "none" : "1px solid black" }}
                                    >
                                        {showLotNumber && <div className='data7_content_body_same'>
                                            <div style={{ borderRight: "1px solid black" }}>
                                                <p>{t.LotNumber}</p>
                                            </div>
                                        </div>}

                                        {showDieReceipt && <div className='data7_content_body_same'>
                                            <div style={{ background: "var(--bg-color-1)" }}>
                                                {
                                                    t?.DieReceipt ? <p style={{ color: "var(--text-color-1)" }}>{t.DieReceipt}</p> : <p style={{ color: "var(--text-color-1)" }}>-</p>
                                                }

                                            </div>
                                        </div>}

                                        {showReceiptBumpDuration && <div className='data7_content_body_diff'>
                                            <div style={{ background: "linear-gradient(to right, var(--bg-color-1) 50%, var(--bg-color-2) 50%)" }}>
                                                <div />
                                                {
                                                    t?.ReceiptBumpDuration || t?.ReceiptBumpDuration === 0 ? <div>{t.ReceiptBumpDuration} days</div> : <div>days</div>
                                                }
                                            </div>
                                        </div>}

                                        {showBumpIn && <div className='data7_content_body_same'>
                                            <div style={{ background: "var(--bg-color-2)" }}>
                                                {
                                                    t?.BumpIn ? <p style={{ color: "var(--text-color-2)" }}>{t.BumpIn}</p> : <p style={{ color: "var(--text-color-2)" }}>-</p>
                                                }
                                            </div>
                                        </div>}

                                        {showBumpDuration && <div className='data7_content_body_diff'>
                                            <div style={{ background: "linear-gradient(to right, var(--bg-color-2) 50%, var(--bg-color-2) 50%)" }}>
                                                <div />
                                                {
                                                    t?.BumpDuration || t?.BumpDuration === 0 ? <div>{t.BumpDuration} days</div> : <div>days</div>
                                                }
                                            </div>
                                        </div>}

                                        {showBumpOut && <div className='data7_content_body_same'>
                                            <div style={{ background: "var(--bg-color-2)" }}>
                                                {
                                                    t?.BumpOut ? <p style={{ color: "var(--text-color-2)" }}>{t.BumpOut}</p> : <p style={{ color: "var(--text-color-2)" }}>-</p>
                                                }
                                            </div>
                                        </div>}

                                        {showBumpProbeDuration && <div className='data7_content_body_diff'>
                                            <div style={{ background: "linear-gradient(to right, var(--bg-color-2) 50%, var(--bg-color-3) 50%)" }}>
                                                <div />
                                                {
                                                    t?.BumpProbeDuration || t?.BumpProbeDuration === 0 ? <div>{t.BumpProbeDuration} days</div> : <div>days</div>
                                                }
                                            </div>
                                        </div>}

                                        {showProbeIn && <div className='data7_content_body_same'>
                                            <div style={{ background: "var(--bg-color-3)" }}>
                                                {
                                                    t?.ProbeIn ? <p style={{ color: "var(--text-color-3)" }}>{t.ProbeIn}</p> : <p style={{ color: "var(--text-color-3)" }}>-</p>
                                                }
                                            </div>
                                        </div>}

                                        {showProbeDuration && <div className='data7_content_body_diff'>
                                            <div style={{ background: "linear-gradient(to right, var(--bg-color-3) 50%, var(--bg-color-3) 50%)" }}>
                                                <div />
                                                {
                                                    t?.ProbeDuration || t?.ProbeDuration === 0 ? <div>{t.ProbeDuration} days</div> : <div>days</div>
                                                }
                                            </div>
                                        </div>}

                                        {showProbeOut && <div className='data7_content_body_same'>
                                            <div style={{ background: "var(--bg-color-3)" }}>
                                                {
                                                    t?.ProbeOut ? <p style={{ color: "var(--text-color-3)" }}>{t.ProbeOut}</p> : <p style={{ color: "var(--text-color-3)" }}>-</p>
                                                }
                                            </div>
                                        </div>}

                                        {showProbeAssemblyDuration && <div className='data7_content_body_diff'>
                                            <div style={{ background: "linear-gradient(to right, var(--bg-color-3) 50%, var(--bg-color-4) 50%)" }}>
                                                <div />
                                                {
                                                    t?.ProbeAssemblyDuration || t?.ProbeAssemblyDuration === 0 ? <div>{t.ProbeAssemblyDuration} days</div> : <div>days</div>
                                                }
                                            </div>
                                        </div>}
                                        {showAssemblyIn && <div className='data7_content_body_same'>
                                            <div style={{ background: "var(--bg-color-4)" }}>
                                                {
                                                    t?.AssemblyIn ? <p style={{ color: "var(--text-color-4)" }}>{t.AssemblyIn}</p> : <p style={{ color: "var(--text-color-4)" }}>-</p>
                                                }
                                            </div>
                                        </div>}

                                        {showAssemblyDuration && <div className='data7_content_body_diff'>
                                            <div style={{ background: "linear-gradient(to right, var(--bg-color-4) 50%, var(--bg-color-4) 50%)" }}>
                                                <div />
                                                {
                                                    t?.AssemblyDuration || t?.AssemblyDuration === 0 ? <div>{t.AssemblyDuration} days</div> : <div>days</div>
                                                }
                                            </div>
                                        </div>}

                                        {showAssemblyOut && <div className='data7_content_body_same'>
                                            <div style={{ background: "var(--bg-color-4)" }}>
                                                {
                                                    t?.AssemblyOut ? <p style={{ color: "var(--text-color-4)" }}>{t.AssemblyOut}</p> : <p style={{ color: "var(--text-color-4)" }}>-</p>
                                                }
                                            </div>
                                        </div>}

                                        {showAssemblyTestDuration && <div className='data7_content_body_diff'>
                                            <div style={{ background: "linear-gradient(to right, var(--bg-color-4) 50%, var(--bg-color-5) 50%)" }}>
                                                <div />
                                                {
                                                    t?.AssemblyTestDuration || t?.AssemblyTestDuration === 0 ? <div>{t.AssemblyTestDuration} days</div> : <div>days</div>
                                                }
                                            </div>
                                        </div>}

                                        {showTestIn && <div className='data7_content_body_same'>
                                            <div style={{ background: "var(--bg-color-5)" }}>
                                                {
                                                    t?.TestIn ? <p style={{ color: "var(--text-color-5)" }}>{t.TestIn}</p> : <p style={{ color: "var(--text-color-5)" }}>-</p>
                                                }
                                            </div>
                                        </div>}

                                        {showTestDuration && <div className='data7_content_body_diff'>
                                            <div style={{ background: "linear-gradient(to right, var(--bg-color-5) 50%, var(--bg-color-5) 50%)" }}>
                                                <div />
                                                {
                                                    t?.TestDuration || t?.TestDuration === 0 ? <div>{t.TestDuration} days</div> : <div>days</div>
                                                }
                                            </div>
                                        </div>}

                                        {showTestOut && <div className='data7_content_body_same'>
                                            <div style={{ background: "var(--bg-color-5)" }}>
                                                {
                                                    t?.TestOut ? <p style={{ color: "var(--text-color-5)" }}>{t.TestOut}</p> : <p style={{ color: "var(--text-color-5)" }}>-</p>
                                                }
                                            </div>
                                        </div>}

                                        {showTestShipDuration && <div className='data7_content_body_diff'>
                                            <div style={{ background: "linear-gradient(to right, var(--bg-color-5) 50%, var(--bg-color-6) 50%)" }}>
                                                <div />
                                                {
                                                    t?.TestShipDuration || t?.TestShipDuration === 0 ? <div>{t.TestShipDuration} days</div> : <div>days</div>
                                                }
                                            </div>
                                        </div>}

                                        {showShipOut && <div className='data7_content_body_same'>
                                            <div style={{ background: "var(--bg-color-6)" }}>
                                                {
                                                    t?.ShipOut ? <p style={{ color: "var(--text-color-6)" }}>{t.ShipOut}</p> : <p style={{ color: "var(--text-color-6)" }}>-</p>
                                                }
                                            </div>
                                        </div>}

                                        {
                                            showBumpYield && <div className='data7_content_body_same_yield' style={{
                                                background: "var(--bg-color-3)",
                                                borderLeft: "3px solid var(--bg-primary-color)",
                                                borderRight: "1px solid #000"
                                            }}>
                                                {
                                                    t?.BumpYield && t?.BumpOutDie ? (<div>
                                                        <div>
                                                            <span style={{ color: "var(--progress-bg-color-1)" }}>{t.BumpYield}%</span> <span>{t.BumpOutDie}</span>
                                                        </div>
                                                        <div>
                                                            <div style={{ width: t.BumpYield > 100 ? '100%' : `${t.BumpYield}%`, background: "var(--progress-bg-color-1)" }}></div>
                                                        </div>
                                                    </div>) : (
                                                        <div style={{ textAlign: "center" }}><span style={{ color: "var(--progress-bg-color-1)" }}>-</span></div>
                                                    )
                                                }

                                            </div>
                                        }


                                        {
                                            showProbeYield && <div className='data7_content_body_same_yield' style={{
                                                background: "var(--bg-color-3)",
                                                borderRight: "1px solid #000"
                                            }}>
                                                {
                                                    t?.ProbeYield && t?.ProbeOutDie ? (<div>
                                                        <div>
                                                            <span style={{ color: "var(--progress-bg-color-2)" }}>{t.ProbeYield}%</span> <span>{t.ProbeOutDie}</span>
                                                        </div>
                                                        <div>
                                                            <div style={{ width: t.ProbeYield > 100 ? '100%' : `${t.ProbeYield}%`, background: "var(--progress-bg-color-2)" }}></div>
                                                        </div>
                                                    </div>) : (
                                                        <div style={{ textAlign: "center" }}><span style={{ color: "var(--progress-bg-color-2)" }}>-</span></div>
                                                    )
                                                }
                                            </div>
                                        }

                                        {
                                            showAssemblyYield && <div className='data7_content_body_same_yield' style={{
                                                background: "var(--bg-color-4)",
                                                borderRight: "1px solid #000"
                                            }}>
                                                {
                                                    t?.AssemblyYield && t?.AssemblyOutDie ? (<div>
                                                        <div>
                                                            <span style={{ color: "var(--progress-bg-color-3)" }}>{t.AssemblyYield}%</span> <span>{t.AssemblyOutDie}</span>
                                                        </div>
                                                        <div>
                                                            <div style={{ width: t.AssemblyYield > 100 ? '100%' : `${t.AssemblyYield}%`, background: "var(--progress-bg-color-3)" }}></div>
                                                        </div>
                                                    </div>) : (
                                                        <div style={{ textAlign: "center" }}><span style={{ color: "var(--progress-bg-color-3)" }}>-</span></div>
                                                    )
                                                }
                                            </div>
                                        }

                                        {
                                            showTestYield && <div className='data7_content_body_same_yield' style={{
                                                background: "var(--bg-color-5)",
                                                borderRight: "1px solid #000"
                                            }}>
                                                {
                                                    t?.TestYield && t?.TestOutDie ? (<div>
                                                        <div>
                                                            <span style={{ color: "var(--progress-bg-color-4)" }}>{t.TestYield}%</span> <span>{t.TestOutDie}</span>
                                                        </div>
                                                        <div>
                                                            <div style={{ width: t.TestYield > 100 ? '100%' : `${t.AssemblyYield}%`, background: "var(--progress-bg-color-4)" }}></div>
                                                        </div>
                                                    </div>) : (
                                                        <div style={{ textAlign: "center" }}><span style={{ color: "var(--progress-bg-color-4)" }}>-</span></div>
                                                    )
                                                }
                                            </div>
                                        }


                                        {
                                            showMCMTakaD && <div className='data7_content_body_same_taka' style={{
                                                background: "var(--mcm-taka-d-bg-color)",
                                                borderRight: "1px solid #000"
                                            }}>
                                                {
                                                    t?.TestOutDieM ? <p style={{ color: "red" }}>{t.TestOutDieM}</p> : <p style={{ color: "red" }}>-</p>
                                                }
                                            </div>
                                        }

                                        {
                                            showMCMTaka && <div className='data7_content_body_same_taka' style={{
                                                background: "var(--mcm-taka-bg-color)",
                                                borderRight: "1px solid #000"
                                            }}>
                                                {
                                                    t?.TestOutDieN ? <p style={{ color: "green" }}>{t.TestOutDieN}</p> : <p style={{ color: "green" }}>-</p>
                                                }
                                            </div>
                                        }

                                        {
                                            showTakaDRatio && <div className='data7_content_body_same_taka' style={{ background: ColorGenerator(t?.TakaDRatio) }}>
                                                {
                                                    t?.TakaDRatio ? <p style={{ color: "black" }}>{t.TakaDRatio}</p> : <p style={{ color: "black" }}>-</p>
                                                }
                                            </div>
                                        }


                                    </div>
                                ))
                            )
                        }

                    </div>
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
                                <div>
                                    <p>Rows Per Page</p>
                                    <select
                                        value={dataPerPageState}
                                        onChange={(e) => {
                                            setDataPerPageState(e.target.value);
                                            setCurrentPage(1); 
                                        }}
                                    >
                                        <option value="10" style={{ backgroundColor: dataPerPageState == 10 ? 'var(--bg-color-2)' : 'initial' }}>10</option>
                                        <option value="25" style={{ backgroundColor: dataPerPageState == 25 ? 'var(--bg-color-2)' : 'initial' }}>25</option>
                                        <option value="50" style={{ backgroundColor: dataPerPageState == 50 ? 'var(--bg-color-2)' : 'initial' }}>50</option>
                                        <option value="100" style={{ backgroundColor: dataPerPageState == 100 ? 'var(--bg-color-2)' : 'initial' }}>100</option>
                                    </select>
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
                            </div>
                        </div> : <div>

                            <div>
                                <button onClick={handlePrevPage} disabled={currentPage === 1}><FaChevronLeft /></button>
                                <span>{currentPage} of {totalPages}</span>
                                <button onClick={handleNextPage} disabled={currentPage === totalPages}><FaChevronRight /></button>
                            </div>

                            <div>
                                <div>
                                    <p>Rows Per Page</p>
                                    <select
                                        value={dataPerPageState}
                                        onChange={(e) => {
                                            setDataPerPageState(e.target.value);
                                            setCurrentPage(1); 
                                        }}
                                    >
                                        <option value="10" style={{ backgroundColor: dataPerPageState == 10 ? 'var(--bg-color-2)' : 'initial' }}>10</option>
                                        <option value="25" style={{ backgroundColor: dataPerPageState == 25 ? 'var(--bg-color-2)' : 'initial' }}>25</option>
                                        <option value="50" style={{ backgroundColor: dataPerPageState == 50 ? 'var(--bg-color-2)' : 'initial' }}>50</option>
                                        <option value="100" style={{ backgroundColor: dataPerPageState == 100 ? 'var(--bg-color-2)' : 'initial' }}>100</option>
                                    </select>
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
                                    <p>of {fakedata.length}</p>
                                </div>
                            </div>

                        </div>
                    }

                </div>
            </div>

        </main >
    )
}

export default Datagrid7