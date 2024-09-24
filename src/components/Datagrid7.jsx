import React, { useEffect, useRef, useState } from 'react'
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


    //These are calender checkboxes
    const [diereceptcheckbox, setDiereceiptcheckbox] = useState(true)
    const [Bumpcheckbox, setBumpCheckbox] = useState(true)
    const [Probecheckbox, setProbeCheckbox] = useState(true)
    const [Assemblycheckbox, setAssemblyCheckbox] = useState(true)
    const [Testcheckbox, setTestCheckbox] = useState(true)
    const [shipcheckbox, setShipCheckbox] = useState(true)

    //These is for active state in calender dates
    const [selectedDateBtnStyle, setSelectedDateBtnStyle] = useState(null);

    //These are for sorting
    const [sortOrder, setSortOrder] = useState('asc');
    const [sortBy, setSortBy] = useState('');


    //These are for filtering
    const [filterBy, setFilterBy] = useState('');
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')

    //These are for Show/Hide Columns
    const [DurationCheck, setDurationCheck] = useState(true)
    const [DatesCheck, setDatesCheck] = useState(true)
    const [YieldCheck, setYieldCheck] = useState(true)

    //These is used for opening and closing the calender
    const [openRangeCalender, setOpenRangeCalender] = useState(false)

    //This useState is taking the calender date value on selection
    const [selectedDates, setSelectedDates] = useState([]);

    // Pagination States
    const [dataPerPageState, setDataPerPageState] = useState(10)
    const [currentFilterPage, setCurrentFilterPage] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);



    // I copied the real api data so that i can do sorting on it.

    // Sorting of Data Starts from here

    const data = fakedata; //cominmg from api
    const copydata = [...fakedata]

    const toggleSortOrder = (columnName) => {
        setSortBy(columnName);
        setSortOrder((prevOrder) => {
            if (prevOrder === 'asc') {
                return 'desc';
            }
            // else if (prevOrder === 'desc') {
            //     return 'initial';
            // } 
            else {
                return 'asc';
            }
        });
    };


    const sortData = (dataArray, columnName, sortOrder, copydata) => {
        if (columnName === '') {
            // No sorting if no column is specified
            return dataArray;
        }
        else if (sortOrder === "initial") {
            return dataArray
        }
        else if (sortOrder === 'asc') {
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

    // Sorting of Data Ends here


    // Filtering Starts From Here====================

    useEffect(() => {
        const startDate = dayjs('2019-01-01');
        const endDate = dayjs(); // Current date
        const allTimeRange = [startDate, endDate.endOf('day')];
        setSelectedDates(allTimeRange);
        setSelectedDateBtnStyle(11);
    }, []);

    const handleDateChange = (dates) => {
        console.log(dates)
        setSelectedDates(dates);
    };


    useEffect(() => {
        const formattedDates = selectedDates.map(date => date.format("YYYY-MM-DD"));

        if (formattedDates.length === 2) {
            setStartDate(formattedDates[0]);
            setEndDate(formattedDates[1]);
        }
    }, [selectedDates]);


    // This function is for Lot Number Filtering
    const applyFilter = (dataArray, filterValue) => {
        return dataArray.filter((item) => {
            return (
                item.LotNumber.toLowerCase().includes(filterValue.toLowerCase())
            )
        }
        );
    };

    // This function is for rest of the Filtering columns
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

    useEffect(() => {
        if (filterBy) {
            setCurrentFilterPage(1)
        } else if (startDate && endDate) {
            setCurrentFilterPage(1)
        }
    }, [filterBy, startDate, endDate])

    // console.log("Filter Check" ,filtercheck)

    // const copyFilteredDate = [...filteredData]

    // const sortedFilteredData = filteredData && sortData(filteredData, sortBy, sortOrder, copyFilteredDate);

    // Filtering Ends From Here

    // These Functions are for show/Hide Columns
    const DatesCheckClicked = (e) => {
        setDatesCheck((prev) => {
            if (prev) {
                setDurationCheck(false)
                setShowReceiptBumpDuration(false)
                setShowBumpDuration(false)
                setShowBumpProbeDuration(false)
                setShowProbeDuration(false)
                setShowProbeAssemblyDuration(false)
                setShowAssemblyDuration(false)
                setShowAssemblyTestDuration(false)
                setShowTestDuration(false)
                setShowTestShipDuration(false)
            }
            return !prev
        })
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
    //==========================================


    // This function is for removing filters
    const removeFilter = () => {
        setFilterBy("")

        const startDate = dayjs('2019-01-01');
        const endDate = dayjs(); // Current date
        const allTimeRange = [startDate, endDate.endOf('day')];
        setSelectedDates(allTimeRange);
        setSelectedDateBtnStyle(11);
        setStartDate("")
        setEndDate("")
        setOpenRangeCalender(false)
        setCurrentFilterPage(1)
    }

    // Dates of the Calender button Start
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
                console.log(lastyear)
                setSelectedDates(lastyear)
                setSelectedDateBtnStyle(10);
            }
        },
        {
            _id: 11,
            name: "All time",
            dateHandler: () => {
                const startDate = dayjs('2019-01-01');
                const endDate = dayjs(); // Current date
                const allTimeRange = [startDate, endDate.endOf('day')];
                setSelectedDates(allTimeRange);
                setSelectedDateBtnStyle(11);
            }
        }
    ];

    // Dates of the Calender button End


    // Table Columns and Headers. I have break the table row into three different column because of design
    // Table Column Start
    // Color Code generator Code for the last Column
    function ColorGenerator(percentage) {
        var r, g, b = 0;

        if (isNaN(percentage)) {
            g = 255;
            r = 0;
        }
        else if (percentage < 50) {
            g = 255;
            r = Math.round(5.1 * percentage);
        }
        else {
            r = 255;
            g = Math.round(510 - 5.10 * percentage);
        }

        var h = (r * 0x10000) + (g * 0x100) + (b * 0x1);
        return '#' + ('000000' + h.toString(16)).slice(-6);
    }

    const columnConfigs = [
        {
            key: "LotNumber",
            className: "data7_content_body_same",
            background: "#fff",
            show: showLotNumber,
            render: (value) => <p style={{ fontWeight: "500" }}>{value}</p>
        },
        {
            key: "DieReceipt",
            className: "data7_content_body_same",
            background: "var(--bg-color-1)",
            show: showDieReceipt,
            render: (value) => value ? <p style={{ color: "var(--text-color-1)" }}>{value}</p> : <p style={{ color: "var(--text-color-1)" }}>-</p>
        },
        {
            key: "ReceiptBumpDuration",
            className: "data7_content_body_diff",
            background: "linear-gradient(to right, var(--bg-color-1) 50%, var(--bg-color-2) 50%)",
            show: showReceiptBumpDuration,
            render: (value) => <div>{value !== undefined ? `${value} days` : 'days'}</div>
        },

        {
            key: "BumpIn",
            className: "data7_content_body_same",
            background: "var(--bg-color-2)",
            show: showBumpIn,
            render: (value) => value ? <p style={{ color: "var(--text-color-2)" }}>{value}</p> : <p style={{ color: "var(--text-color-2)" }}>-</p>
        },

        {
            key: "BumpDuration",
            className: "data7_content_body_diff",
            background: "linear-gradient(to right, var(--bg-color-2) 50%, var(--bg-color-2) 50%)",
            show: showReceiptBumpDuration,
            render: (value) => <div>{value !== undefined ? `${value} days` : 'days'}</div>
        },

        {
            key: "BumpOut",
            className: "data7_content_body_same",
            background: "var(--bg-color-2)",
            show: showBumpOut,
            render: (value) => value ? <p style={{ color: "var(--text-color-2)" }}>{value}</p> : <p style={{ color: "var(--text-color-2)" }}>-</p>
        },

        {
            key: "BumpProbeDuration",
            className: "data7_content_body_diff",
            background: "linear-gradient(to right, var(--bg-color-2) 50%, var(--bg-color-3) 50%)",
            show: showBumpProbeDuration,
            render: (value) => <div>{value !== undefined ? `${value} days` : 'days'}</div>
        },

        {
            key: "ProbeIn",
            className: "data7_content_body_same",
            background: "var(--bg-color-3)",
            show: showProbeIn,
            render: (value) => value ? <p style={{ color: "var(--text-color-3)" }}>{value}</p> : <p style={{ color: "var(--text-color-3)" }}>-</p>
        },

        {
            key: "ProbeDuration",
            className: "data7_content_body_diff",
            background: "linear-gradient(to right, var(--bg-color-3) 50%, var(--bg-color-3) 50%)",
            show: showProbeDuration,
            render: (value) => <div>{value !== undefined ? `${value} days` : 'days'}</div>
        },

        {
            key: "ProbeOut",
            className: "data7_content_body_same",
            background: "var(--bg-color-3)",
            show: showProbeOut,
            render: (value) => value ? <p style={{ color: "var(--text-color-3)" }}>{value}</p> : <p style={{ color: "var(--text-color-3)" }}>-</p>
        },

        {
            key: "ProbeAssemblyDuration",
            className: "data7_content_body_diff",
            background: "linear-gradient(to right, var(--bg-color-3) 50%, var(--bg-color-4) 50%)",
            show: showProbeAssemblyDuration,
            render: (value) => <div>{value !== undefined ? `${value} days` : 'days'}</div>
        },

        {
            key: "AssemblyIn",
            className: "data7_content_body_same",
            background: "var(--bg-color-4)",
            show: showAssemblyIn,
            render: (value) => value ? <p style={{ color: "var(--text-color-4)" }}>{value}</p> : <p style={{ color: "var(--text-color-4)" }}>-</p>
        },

        {
            key: "AssemblyDuration",
            className: "data7_content_body_diff",
            background: "linear-gradient(to right, var(--bg-color-4) 50%, var(--bg-color-4) 50%)",
            show: showAssemblyDuration,
            render: (value) => <div>{value !== undefined ? `${value} days` : 'days'}</div>
        },

        {
            key: "AssemblyOut",
            className: "data7_content_body_same",
            background: "var(--bg-color-4)",
            show: showAssemblyOut,
            render: (value) => value ? <p style={{ color: "var(--text-color-4)" }}>{value}</p> : <p style={{ color: "var(--text-color-4)" }}>-</p>
        },

        {
            key: "AssemblyTestDuration",
            className: "data7_content_body_diff",
            background: "linear-gradient(to right, var(--bg-color-4) 50%, var(--bg-color-5) 50%)",
            show: showAssemblyTestDuration,
            render: (value) => <div>{value !== undefined ? `${value} days` : 'days'}</div>
        },

        {
            key: "TestIn",
            className: "data7_content_body_same",
            background: "var(--bg-color-5)",
            show: showTestIn,
            render: (value) => value ? <p style={{ color: "var(--text-color-5)" }}>{value}</p> : <p style={{ color: "var(--text-color-5)" }}>-</p>
        },

        {
            key: "TestDuration",
            className: "data7_content_body_diff",
            background: "linear-gradient(to right, var(--bg-color-5) 50%, var(--bg-color-5) 50%)",
            show: showTestDuration,
            render: (value) => <div>{value !== undefined ? `${value} days` : 'days'}</div>
        },

        {
            key: "TestOut",
            className: "data7_content_body_same",
            background: "var(--bg-color-5)",
            show: showTestOut,
            render: (value) => value ? <p style={{ color: "var(--text-color-5)" }}>{value}</p> : <p style={{ color: "var(--text-color-6)" }}>-</p>
        },

        {
            key: "TestShipDuration",
            className: "data7_content_body_diff",
            background: "linear-gradient(to right, var(--bg-color-5) 50%, var(--bg-color-6) 50%)",
            show: showTestShipDuration,
            render: (value) => <div>{value !== undefined ? `${value} days` : 'days'}</div>
        },

        {
            key: "ShipOut",
            className: "data7_content_body_same",
            background: "var(--bg-color-6)",
            show: showShipOut,
            render: (value) => value ? <p style={{ color: "var(--text-color-6)" }}>{value}</p> : <p style={{ color: "var(--text-color-6)" }}>-</p>
        },
    ];

    const columnConfigs2 = [
        {
            className: "data7_content_body_same_yield",
            background: "var(--bg-color-3)",
            color: "var(--progress-bg-color-1)",
            show: showBumpYield,
            render: (data, column) => (
                <>
                    {data?.BumpYield && data?.BumpOutDie ? (
                        <div>
                            <div>
                                <span style={{ color: column.color }}>{data.BumpYield}%</span>{" "}
                                <span>{data.BumpOutDie}</span>
                            </div>
                            <div>
                                <div
                                    style={{
                                        width: data.BumpYield > 100 ? "100%" : `${data.BumpYield}%`,
                                        background: column.color,
                                    }}
                                ></div>
                            </div>
                        </div>
                    ) : (
                        <div style={{ textAlign: "center" }}>
                            <span style={{ color: column.color }}>-</span>
                        </div>
                    )}
                </>
            ),
        },

        {
            className: "data7_content_body_same_yield",
            background: "var(--bg-color-3)",
            color: "var(--progress-bg-color-2)",
            show: showProbeYield,
            render: (data, column) => (
                <>
                    {data?.ProbeYield && data?.ProbeOutDie ? (
                        <div>
                            <div>
                                <span style={{ color: column.color }}>{data.ProbeYield}%</span>{" "}
                                <span>{data.ProbeOutDie}</span>
                            </div>
                            <div>
                                <div
                                    style={{
                                        width: data.ProbeYield > 100 ? "100%" : `${data.ProbeYield}%`,
                                        background: column.color,
                                    }}
                                ></div>
                            </div>
                        </div>
                    ) : (
                        <div style={{ textAlign: "center" }}>
                            <span style={{ color: column.color }}>-</span>
                        </div>
                    )}
                </>
            ),
        },

        {
            className: "data7_content_body_same_yield",
            background: "var(--bg-color-4)",
            color: "var(--progress-bg-color-3)",
            show: showAssemblyYield,
            render: (data, column) => (
                <>
                    {data?.AssemblyYield && data?.AssemblyOutDie ? (
                        <div>
                            <div>
                                <span style={{ color: column.color }}>{data.AssemblyYield}%</span>{" "}
                                <span>{data.AssemblyOutDie}</span>
                            </div>
                            <div>
                                <div
                                    style={{
                                        width: data.AssemblyYield > 100 ? "100%" : `${data.AssemblyYield}%`,
                                        background: column.color,
                                    }}
                                ></div>
                            </div>
                        </div>
                    ) : (
                        <div style={{ textAlign: "center" }}>
                            <span style={{ color: column.color }}>-</span>
                        </div>
                    )}
                </>
            ),
        },

        {
            className: "data7_content_body_same_yield",
            background: "var(--bg-color-5)",
            color: "var(--progress-bg-color-4)",
            show: showTestYield,
            render: (data, column) => (
                <>
                    {data?.TestYield && data?.TestOutDie ? (
                        <div>
                            <div>
                                <span style={{ color: column.color }}>{data.TestYield}%</span>{" "}
                                <span>{data.TestOutDie}</span>
                            </div>
                            <div>
                                <div
                                    style={{
                                        width: data.TestYield > 100 ? "100%" : `${data.TestYield}%`,
                                        background: column.color,
                                    }}
                                ></div>
                            </div>
                        </div>
                    ) : (
                        <div style={{ textAlign: "center" }}>
                            <span style={{ color: column.color }}>-</span>
                        </div>
                    )}
                </>
            ),
        },
    ];

    const columnConfigs3 = [
        {
            className: "data7_content_body_same_taka",
            background: "var(--mcm-taka-d-bg-color)",
            color: "red",
            show: showMCMTakaD,
            render: (data, column) => (
                <>
                    {data?.TestOutDieM ? <p style={{ color: column.color }}>{data.TestOutDieM}</p> : <p style={{ color: column.color }}>-</p>}
                </>
            )
        },
        {
            className: "data7_content_body_same_taka",
            background: "var(--mcm-taka-bg-color)",
            color: "green",
            show: showMCMTaka,
            render: (data, column) => (
                <>
                    {data?.TestOutDieN ? <p style={{ color: column.color }}>{data.TestOutDieN}</p> : <p style={{ color: column.color }}>-</p>}
                </>
            )
        },
        {
            className: "data7_content_body_same_taka",
            color: "black",
            show: showTakaDRatio,
            render: (data, column) => (
                <>
                    {data?.TakaDRatio ? <p style={{ color: column.color }}>{data.TakaDRatio}</p> : <p style={{ color: column.color }}>-</p>}
                </>
            )
        }
    ]


    const columnConfigshead = [
        {
            key: "LotNumber",
            title: "Lot No.",
            className: "data7_content_head_same",
            show: showLotNumber,
            render: (column) => (
                <div
                    style={{
                        minWidth: !showBumpYield && !showDieReceipt && !showBumpDuration && "100%",
                        maxWidth: !showBumpYield && !showDieReceipt && !showBumpDuration && "100%",
                        // borderRight: !showBumpYield && !showDieReceipt && !showBumpDuration && "1px solid black"
                    }}
                >
                    <p>{column.title}</p>
                    {sortBy === column.key ?
                        (sortOrder === 'asc' ? <span className='data7_arrow'><FaArrowUp /></span> : (sortOrder === 'desc' && <span className='data7_arrow'><FaArrowDown /></span>)) :
                        <div className='defaulticon'><span><FaSortDown /></span></div>
                    }
                </div>
            )
        },
        {
            key: "DieReceipt",
            title: "DieReceipt",
            className: "data7_content_head_same",
            show: showDieReceipt,
            render: (column) => (
                <div>
                    <p>{column.title}</p>
                    {sortBy === column.key ?
                        (sortOrder === 'asc' ?
                            <span className='data7_arrow'><FaArrowUp /></span> :
                            (sortOrder === 'desc' && <span className='data7_arrow'><FaArrowDown /></span>))
                            : <div className='defaulticon'><span><FaSortDown /></span></div>
                    }
                </div>
            )
        },
        {
            key: "ReceiptBumpDuration",
            className: "data7_content_head_diff",
            show: showReceiptBumpDuration,
            render: (column) => (
                <div>

                    <div />
                    {sortBy === column.key ? (
                        sortOrder === 'asc' ? (
                            <div><span className='data7_arrow'><FaArrowUp /></span></div>
                        ) : sortOrder === 'desc' ? (
                            <div><span className='data7_arrow'><FaArrowDown /></span></div>
                        ) : sortOrder === 'initial' && (
                            <div><span><FaSortDown /></span></div>
                        )
                    ) : (
                        <div><span><FaSortDown /></span></div>
                    )}

                </div>
            )
        },
        {
            key: "BumpIn",
            title: "BumpIn",
            className: "data7_content_head_same",
            show: showBumpIn,
            render: (column) => (
                <div>

                    <p>{column.title}</p>
                    {sortBy === column.key &&
                        (sortOrder === 'asc' ? <span className='data7_arrow'><FaArrowUp /></span> : (sortOrder === 'desc' ? <span className='data7_arrow'><FaArrowDown /></span> : sortOrder === 'initial' && <span></span>))
                    }

                </div>
            )
        },

        {
            key: "BumpDuration",
            className: "data7_content_head_diff",
            show: showBumpDuration,
            render: (column) => (
                <div>

                    <div />
                    {sortBy === column.key ? (
                        sortOrder === 'asc' ? (
                            <div><span className='data7_arrow'><FaArrowUp /></span></div>
                        ) : sortOrder === 'desc' ? (
                            <div><span className='data7_arrow'><FaArrowDown /></span></div>
                        ) : sortOrder === 'initial' && (
                            <div><span><FaSortDown /></span></div>
                        )
                    ) : (
                        <div><span><FaSortDown /></span></div>
                    )}

                </div>
            )
        },

        {
            key: "BumpOut",
            title: "BumpOut",
            className: "data7_content_head_same",
            show: showBumpOut,
            render: (column) => (
                <div>

                    <p>{column.title}</p>
                    {sortBy === column.key &&
                        (sortOrder === 'asc' ? <span className='data7_arrow'><FaArrowUp /></span> : (sortOrder === 'desc' ? <span className='data7_arrow'><FaArrowDown /></span> : sortOrder === 'initial' && <span></span>))
                    }

                </div>
            )
        },

        {
            key: "BumpProbeDuration",
            className: "data7_content_head_diff",
            show: showBumpProbeDuration,
            render: (column) => (
                <div>

                    <div />
                    {sortBy === column.key ? (
                        sortOrder === 'asc' ? (
                            <div><span className='data7_arrow'><FaArrowUp /></span></div>
                        ) : sortOrder === 'desc' ? (
                            <div><span className='data7_arrow'><FaArrowDown /></span></div>
                        ) : sortOrder === 'initial' && (
                            <div><span><FaSortDown /></span></div>
                        )
                    ) : (
                        <div><span><FaSortDown /></span></div>
                    )}


                </div>
            )
        },

        {
            key: "ProbeIn",
            title: "ProbeIn",
            className: "data7_content_head_same",
            show: showProbeIn,
            render: (column) => (
                <div>

                    <p>{column.title}</p>
                    {sortBy === column.key &&
                        (sortOrder === 'asc' ? <span className='data7_arrow'><FaArrowUp /></span> : (sortOrder === 'desc' ? <span className='data7_arrow'><FaArrowDown /></span> : sortOrder === 'initial' && <span></span>))
                    }

                </div>
            )
        },

        {
            key: "ProbeDuration",
            className: "data7_content_head_diff",
            show: showProbeDuration,
            render: (column) => (
                <div>

                    <div />
                    {sortBy === column.key ? (
                        sortOrder === 'asc' ? (
                            <div><span className='data7_arrow'><FaArrowUp /></span></div>
                        ) : sortOrder === 'desc' ? (
                            <div><span className='data7_arrow'><FaArrowDown /></span></div>
                        ) : sortOrder === 'initial' && (
                            <div><span><FaSortDown /></span></div>
                        )
                    ) : (
                        <div><span><FaSortDown /></span></div>
                    )}


                </div>
            )
        },

        {
            key: "ProbeOut",
            title: "ProbeOut",
            className: "data7_content_head_same",
            show: showProbeOut,
            render: (column) => (
                <div>

                    <p>{column.title}</p>
                    {sortBy === column.key &&
                        (sortOrder === 'asc' ? <span className='data7_arrow'><FaArrowUp /></span> : (sortOrder === 'desc' ? <span className='data7_arrow'><FaArrowDown /></span> : sortOrder === 'initial' && <span></span>))
                    }

                </div>
            )
        },

        {
            key: "ProbeAssemblyDuration",
            className: "data7_content_head_diff",
            show: showProbeAssemblyDuration,
            render: (column) => (
                <div>

                    <div />
                    {sortBy === column.key ? (
                        sortOrder === 'asc' ? (
                            <div><span className='data7_arrow'><FaArrowUp /></span></div>
                        ) : sortOrder === 'desc' ? (
                            <div><span className='data7_arrow'><FaArrowDown /></span></div>
                        ) : sortOrder === 'initial' && (
                            <div><span><FaSortDown /></span></div>
                        )
                    ) : (
                        <div><span><FaSortDown /></span></div>
                    )}

                </div>
            )
        },

        {
            key: "AssemblyIn",
            title: "AssemblyIn",
            className: "data7_content_head_same",
            show: showAssemblyIn,
            render: (column) => (
                <div>

                    <p>{column.title}</p>
                    {sortBy === column.key &&
                        (sortOrder === 'asc' ? <span className='data7_arrow'><FaArrowUp /></span> : (sortOrder === 'desc' ? <span className='data7_arrow'><FaArrowDown /></span> : sortOrder === 'initial' && <span></span>))
                    }

                </div>
            )
        },

        {
            key: "AssemblyDuration",
            className: "data7_content_head_diff",
            show: showAssemblyDuration,
            render: (column) => (
                <div>

                    <div />
                    {sortBy === column.key ? (
                        sortOrder === 'asc' ? (
                            <div><span className='data7_arrow'><FaArrowUp /></span></div>
                        ) : sortOrder === 'desc' ? (
                            <div><span className='data7_arrow'><FaArrowDown /></span></div>
                        ) : sortOrder === 'initial' && (
                            <div><span><FaSortDown /></span></div>
                        )
                    ) : (
                        <div><span><FaSortDown /></span></div>
                    )}


                </div>
            )
        },

        {
            key: "AssemblyOut",
            title: "AssemblyOut",
            className: "data7_content_head_same",
            show: showAssemblyOut,
            render: (column) => (
                <div>

                    <p>{column.title}</p>
                    {sortBy === column.key &&
                        (sortOrder === 'asc' ? <span className='data7_arrow'><FaArrowUp /></span> : (sortOrder === 'desc' ? <span className='data7_arrow'><FaArrowDown /></span> : sortOrder === 'initial' && <span></span>))
                    }

                </div>
            )
        },

        {
            key: "AssemblyTestDuration",
            className: "data7_content_head_diff",
            show: showAssemblyTestDuration,
            render: (column) => (
                <div>

                    <div />
                    {sortBy === column.key ? (
                        sortOrder === 'asc' ? (
                            <div><span className='data7_arrow'><FaArrowUp /></span></div>
                        ) : sortOrder === 'desc' ? (
                            <div><span className='data7_arrow'><FaArrowDown /></span></div>
                        ) : sortOrder === 'initial' && (
                            <div><span><FaSortDown /></span></div>
                        )
                    ) : (
                        <div><span><FaSortDown /></span></div>
                    )}

                </div>
            )
        },

        {
            key: "TestIn",
            title: "TestIn",
            className: "data7_content_head_same",
            show: showTestIn,
            render: (column) => (
                <div>

                    <p>{column.title}</p>
                    {sortBy === column.key &&
                        (sortOrder === 'asc' ? <span className='data7_arrow'><FaArrowUp /></span> : (sortOrder === 'desc' ? <span className='data7_arrow'><FaArrowDown /></span> : sortOrder === 'initial' && <span></span>))
                    }

                </div>
            )
        },

        {
            key: "TestDuration",
            className: "data7_content_head_diff",
            show: showTestDuration,
            render: (column) => (
                <div>

                    <div />
                    {sortBy === column.key ? (
                        sortOrder === 'asc' ? (
                            <div><span className='data7_arrow'><FaArrowUp /></span></div>
                        ) : sortOrder === 'desc' ? (
                            <div><span className='data7_arrow'><FaArrowDown /></span></div>
                        ) : sortOrder === 'initial' && (
                            <div><span><FaSortDown /></span></div>
                        )
                    ) : (
                        <div><span><FaSortDown /></span></div>
                    )}


                </div>
            )
        },

        {
            key: "TestOut",
            title: "TestOut",
            className: "data7_content_head_same",
            show: showTestOut,
            render: (column) => (
                <div>

                    <p>{column.title}</p>
                    {sortBy === column.key &&
                        (sortOrder === 'asc' ? <span className='data7_arrow'><FaArrowUp /></span> : (sortOrder === 'desc' ? <span className='data7_arrow'><FaArrowDown /></span> : sortOrder === 'initial' && <span></span>))
                    }

                </div>
            )
        },

        {
            key: "TestShipDuration",
            className: "data7_content_head_diff",
            show: showTestShipDuration,
            render: (column) => (
                <div>

                    <div />
                    {sortBy === column.key ? (
                        sortOrder === 'asc' ? (
                            <div><span className='data7_arrow'><FaArrowUp /></span></div>
                        ) : sortOrder === 'desc' ? (
                            <div><span className='data7_arrow'><FaArrowDown /></span></div>
                        ) : sortOrder === 'initial' && (
                            <div><span><FaSortDown /></span></div>
                        )
                    ) : (
                        <div><span><FaSortDown /></span></div>
                    )}


                </div>
            )
        },

        {
            key: "ShipOut",
            title: "ShipOut",
            className: "data7_content_head_same",
            show: showShipOut,
            render: (column) => (
                <div>

                    <p>{column.title}</p>
                    {sortBy === column.key &&
                        (sortOrder === 'asc' ? <span className='data7_arrow'><FaArrowUp /></span> : (sortOrder === 'desc' ? <span className='data7_arrow'><FaArrowDown /></span> : sortOrder === 'initial' && <span></span>))
                    }

                </div>
            )
        }
    ]

    const columnConfigshead2 = [
        {
            key: "BumpYield",
            title: "BumpIn",
            className: "data7_content_head_same_yield",
            show: showBumpYield,
            render: (column) => (
                <div>

                    <p>{column.title}</p>
                    {sortBy === column.key &&
                        (sortOrder === 'asc' ? <span className='data7_arrow'><FaArrowUp /></span> : (sortOrder === 'desc' ? <span className='data7_arrow'><FaArrowDown /></span> : sortOrder === 'initial' && <span></span>))
                    }

                </div>
            )
        },

        {
            key: "ProbeYield",
            title: "ProbeIn",
            className: "data7_content_head_same_yield",
            show: showProbeYield,
            render: (column) => (
                <div>

                    <p>{column.title}</p>
                    {sortBy === column.key &&
                        (sortOrder === 'asc' ? <span className='data7_arrow'><FaArrowUp /></span> : (sortOrder === 'desc' ? <span className='data7_arrow'><FaArrowDown /></span> : sortOrder === 'initial' && <span></span>))
                    }

                </div>
            )
        },

        {
            key: "AssemblyYield",
            title: "AssemblyIn",
            className: "data7_content_head_same_yield",
            show: showAssemblyYield,
            render: (column) => (
                <div>

                    <p>{column.title}</p>
                    {sortBy === column.key &&
                        (sortOrder === 'asc' ? <span className='data7_arrow'><FaArrowUp /></span> : (sortOrder === 'desc' ? <span className='data7_arrow'><FaArrowDown /></span> : sortOrder === 'initial' && <span></span>))
                    }

                </div>
            )
        },

        {
            key: "TestYield",
            title: "TestIn",
            className: "data7_content_head_same_yield",
            show: showTestYield,
            render: (column) => (
                <div>

                    <p>{column.title}</p>
                    {sortBy === column.key &&
                        (sortOrder === 'asc' ? <span className='data7_arrow'><FaArrowUp /></span> : (sortOrder === 'desc' ? <span className='data7_arrow'><FaArrowDown /></span> : sortOrder === 'initial' && <span></span>))
                    }

                </div>
            )
        },
    ]

    const columnConfigshead3 = [
        {
            key: "TestOutDieM",
            title: "MCM Taka D",
            className: "data7_content_head_same_taka",
            show: showMCMTakaD,
            render: (column) => (
                <div>
                    <p>{column.title}</p>
                    {sortBy === column.key &&
                        (sortOrder === 'asc' ? <span className='data7_arrow'><FaArrowUp /></span> : (sortOrder === 'desc' ? <span className='data7_arrow'><FaArrowDown /></span> : sortOrder === 'initial' && <span></span>))
                    }
                </div>
            )
        },

        {
            key: "TestOutDieN",
            title: "MCM Taka",
            className: "data7_content_head_same_taka",
            show: showMCMTaka,
            render: (column) => (
                <div>
                    <p>{column.title}</p>
                    {sortBy === column.key &&
                        (sortOrder === 'asc' ? <span className='data7_arrow'><FaArrowUp /></span> : (sortOrder === 'desc' ? <span className='data7_arrow'><FaArrowDown /></span> : sortOrder === 'initial' && <span></span>))
                    }
                </div>
            )
        },

        {
            key: "TakaDRatio",
            title: "Taka Ratio",
            className: "data7_content_head_same_taka",
            show: showTakaDRatio,
            render: (column) => (
                <div>
                    <p>{column.title}</p>
                    {sortBy === column.key &&
                        (sortOrder === 'asc' ? <span className='data7_arrow'><FaArrowUp /></span> : (sortOrder === 'desc' ? <span className='data7_arrow'><FaArrowDown /></span> : sortOrder === 'initial' && <span></span>))
                    }
                </div>
            )
        },
    ]


    // Table Column End

    // Total Data Pagination Starts Here

    const dataPerPage = dataPerPageState;

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

    // Total Data Pagination Ends Here

    // Filter Pagiantion Starts From Here

    const dataPerFilterPage = dataPerPageState;

    const handleNextFilterPage = () => {
        setCurrentFilterPage(prevPage => prevPage + 1);
    };

    const handlePrevFilterPage = () => {
        setCurrentFilterPage(prevPage => prevPage - 1);
    };

    const copyFilteredDate = [...filteredData]

    const sortedFilteredData = filteredData && sortData(filteredData, sortBy, sortOrder, copyFilteredDate);

    const totalFilterPages = Math.ceil(sortedFilteredData.length / dataPerFilterPage);

    const filterStartIndex = (currentFilterPage - 1) * dataPerPage;
    const filterEndIndex = Math.min(filterStartIndex + dataPerFilterPage, sortedFilteredData.length);

    // Get data for the current page
    // const currentPageFilteredData = sortedFilteredData.slice(filterStartIndex, filterEndIndex);
    const currentPageFilteredData = sortedFilteredData.slice(filterStartIndex, filterEndIndex)

    const paginationFilterLogic = filterBy && filterBy !== '' || startDate && endDate && startDate !== '' && endDate !== ''

    // Filter Pagiantion Starts Ends Here

    // CSV DownLoad Part
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
            filteredData.map(row => headers.map(header => row[header]).join(",")).join("\n");

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


    const [darkTheme, setDarktheme] = useState(false)

    let datewidth = 1350
    //Here 150 is the value of total margin present in the duration
    let durationwidth = 450 + 150
    let yldwidth = 945
    let lotnowidth = 135

    let columnRef = useRef()

    useEffect(() => {
        let handler = (e) => {
            if (!columnRef.current.contains(e.target)) {
                setShowColumn(false)
            }
        }

        document.addEventListener('mousedown', handler)

        return () => {
            document.removeEventListener('mousedown', handler)
        }
    }, [])


    let calenderRef = useRef()
    let calenderinputRef = useRef()


    console.log(calenderinputRef.current)

    useEffect(() => {
        let calenderhandler = (e) => {
            if (!calenderRef.current.contains(e.target)) {
                setOpenRangeCalender(false)
            }
        }

        document.addEventListener('mousedown', calenderhandler)

        return () => {
            document.removeEventListener('mousedown', calenderhandler)
        }
    }, [])

    console.log("openCalender ", openRangeCalender)

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

                    <div className='data7_top_selectdatebx'>
                        <div onClick={() => setOpenRangeCalender(prev => !prev)}>
                            <div>
                                <p>
                                    {
                                        selectedDates.map((date, index) => (
                                            <React.Fragment key={index}>
                                                {index !== 0 && " - "}
                                                {date.format("YYYY-MM-DD")}
                                            </React.Fragment>
                                        ))
                                    }
                                </p>
                            </div>
                            <div><FaSortDown /></div>
                        </div>

                        <main className={`data7_top_selectdatebx_calender ${openRangeCalender ? "calenderActive" : "calenderInActive"}`} onClick={(e) => e.stopPropagation()} ref={calenderRef}>
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

                            <div className='data7_calender_selectdate_button_container'
                            >
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

                                <button
                                    onClick={() => setOpenRangeCalender(false)}>OK</button>
                            </div>
                        </main>

                    </div>



                    <div className='data7_top_showhide_bx' >
                        <div onClick={() => setShowColumn((prev) => !prev)}>
                            <p>Show/Hide Columns </p>
                            <div><FaSortDown /></div>
                        </div>

                        <div className={`data7_top_showhide_bx_content ${showColumn ? 'columnActive' : 'columnInActive'}`} ref={columnRef}>
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
                        </div>
                    </div>

                    <button onClick={removeFilter} className='remove-filter-input' style={{ fontSize: "20px" }}
                        title="Clear All Filters"
                    ><MdFilterAltOff /></button>

                    <button className='dwn_crt_csv_data_btn' onClick={currentpagecsvdataHandler} style={{ fontSize: "20px" }}
                        title="Download Current Entries"
                    ><RiDownload2Fill /></button>

                    <button className='dwn_crt_entire_data_btn' onClick={entirepagecsvdataHandler} style={{ fontSize: "20px" }}
                        title="Download All Entries"
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
                <div className='data7_content_box'

                >
                    <div className='data7_content'
                        style={{ background: darkTheme ? "black" : "white" }}
                    >
                        <div className='data7_content_head'
                            style={{
                                minWidth:
                                    showBumpYield && !showDieReceipt && !showBumpDuration ? "100%" :
                                        !showBumpYield && showDieReceipt && !showBumpDuration ? "100%" :
                                            !showBumpYield && !showDieReceipt && showBumpDuration ? "100%" :
                                                !showBumpYield && showDieReceipt && showBumpDuration ? "1935px" :
                                                    !showBumpYield && !showDieReceipt && !showBumpDuration ? "100%" : "2910px",
                                borderBottom: "1px solid black"
                            }}
                        >
                            {
                                columnConfigshead.map((column, i) => (
                                    column.show && (
                                        <div className={column.className} onClick={column.show ? () => toggleSortOrder(column.key) : null}
                                            key={column.key}
                                        >
                                            {column.render(column)}
                                        </div>

                                    )
                                ))
                            }


                            {
                                columnConfigshead2.map((column, i) => (
                                    column.show && (
                                        <div className={column.className} onClick={column.show ? () => toggleSortOrder(column.key) : null}
                                            key={column.key}
                                            style={{
                                                borderLeft: i === 0 && "3px solid var(--bg-primary-color)",
                                                borderRight: "1px solid #000"
                                            }}
                                        >
                                            {column.render(column)}
                                        </div>)
                                ))
                            }

                            {
                                columnConfigshead3.map((column, i) => (
                                    column.show && (
                                        <div className={column.className} onClick={column.show ? () => toggleSortOrder(column.key) : null}
                                            key={column.key}
                                            style={{
                                                borderRight: i === columnConfigs3.length - 1 ? "none" : "1px solid #000"
                                            }}
                                        >
                                            {column.render(column)}
                                        </div>)
                                ))
                            }
                        </div>

                        {
                            filterBy && filterBy !== '' || startDate && endDate && startDate !== '' && endDate !== '' ? (
                                (currentPageFilteredData.map((data, i) => (
                                    <div className='data7_content_body' key={i}
                                        style={{
                                            borderBottom: (currentPageData.length - 1) === i ? "none" : "1px solid black",
                                            minWidth:
                                                showBumpYield && !showDieReceipt && !showBumpDuration ? "100%" :
                                                    !showBumpYield && showDieReceipt && !showBumpDuration ? "100%" :
                                                        !showBumpYield && !showDieReceipt && showBumpDuration ? "100%" :
                                                            !showBumpYield && showDieReceipt && showBumpDuration ? "1935px" :
                                                                !showBumpYield && !showDieReceipt && !showBumpDuration ? "100%" : "2910px"
                                        }}
                                    >
                                        {columnConfigs.map((column, j) => (
                                            column.show && (<div className={column.className} key={j} style={{
                                                background: `${column.background}`,
                                            }}>
                                                <div
                                                    style={{
                                                        // borderRight: !showBumpYield && !showDieReceipt && !showBumpDuration && "1px solid black",
                                                        minWidth: !showBumpYield && !showDieReceipt && !showBumpDuration && "100%",
                                                        maxWidth: !showBumpYield && !showDieReceipt && !showBumpDuration && "100%"
                                                    }}
                                                >
                                                    {column.className === "data7_content_body_diff" && <div />}
                                                    {column.show && column.render(data[column.key])}
                                                </div>
                                            </div>)
                                        ))}

                                        {columnConfigs2.map((column, j) => (
                                            column.show && (
                                                <div className={column.className} style={{
                                                    background: `${column.background}`,
                                                    borderLeft: j === 0 && "3px solid var(--bg-primary-color)",
                                                    borderRight: "1px solid #000"
                                                }} key={j}>
                                                    {column.render(data, column)}
                                                </div>
                                            )
                                        ))}

                                        {columnConfigs3.map((column, j) => (
                                            column.show && (
                                                <div className={column.className} style={{
                                                    background: columnConfigs3.length - 1 === j ? ColorGenerator(data?.TakaDRatio) : column.background,
                                                    borderRight: j === columnConfigs3.length - 1 ? "none" : "1px solid #000"
                                                }} key={j}>
                                                    {column.render(data, column)}
                                                </div>
                                            )
                                        ))}
                                    </div>
                                )))
                            ) :
                                (currentPageData.map((data, i) => (
                                    <div className='data7_content_body' key={i} style={{
                                        borderBottom: (currentPageData.length - 1) === i ? "none" : "1px solid black",
                                    }}>
                                        {columnConfigs.map((column, j) => (
                                            column.show && (<div className={column.className} key={j} style={{
                                                background: `${column.background}`,
                                            }}>
                                                <div>
                                                    {column.className === "data7_content_body_diff" && <div />}
                                                    {column.render(data[column.key])}
                                                </div>
                                            </div>)
                                        ))}

                                        {columnConfigs2.map((column, j) => (
                                            column.show && (
                                                <div className={column.className} style={{
                                                    background: `${column.background}`,
                                                    borderLeft: j === 0 && "3px solid var(--bg-primary-color)",
                                                    borderRight: "1px solid #000"
                                                }} key={j}>
                                                    {column.render(data, column)}
                                                </div>
                                            )
                                        ))}

                                        {columnConfigs3.map((column, j) => (
                                            column.show && (
                                                <div className={column.className} style={{
                                                    background: columnConfigs3.length - 1 === j ? ColorGenerator(data?.TakaDRatio) : column.background,
                                                    borderRight: j === columnConfigs3.length - 1 ? "none" : "1px solid #000"
                                                }} key={j}>
                                                    {column.render(data, column)}
                                                </div>
                                            )
                                        ))}
                                    </div>
                                )))
                        }

                    </div>
                </div>
                <div className="data7_pagination">

                    <div>
                        <div>
                            <button onClick={paginationFilterLogic ? handlePrevFilterPage : handlePrevPage} disabled={paginationFilterLogic ? currentFilterPage === 1 : currentPage === 1}><FaChevronLeft /></button>
                            <span>{paginationFilterLogic ? `${currentFilterPage} of ${totalFilterPages}` : `${currentPage} of ${totalPages}`}</span>
                            <button onClick={paginationFilterLogic ? handleNextFilterPage : handleNextPage} disabled={paginationFilterLogic ? currentFilterPage === totalFilterPages || filteredData.length === 0 : currentPage === totalPages} ><FaChevronRight /></button>
                        </div>
                        <div>
                            <div>
                                <p>Rows Per Page</p>
                                <select
                                    value={dataPerPageState}
                                    onChange={paginationFilterLogic ? (e) => {
                                        setDataPerPageState(parseInt(e.target.value));
                                        setCurrentFilterPage(1);
                                    } : (e) => {
                                        setDataPerPageState(parseInt(e.target.value));
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
                                    value={paginationFilterLogic ? `${filterStartIndex + 1} - ${filterEndIndex}` : `${startIndex + 1} - ${endIndex}`}
                                    onChange={paginationFilterLogic ? (e) => setCurrentFilterPage(Math.ceil(Number(e.target.value.split(" - ")[0]) / dataPerFilterPage)) : (e) => setCurrentPage(Math.ceil(Number(e.target.value.split(" - ")[0]) / dataPerPage))}
                                >
                                    {
                                        paginationFilterLogic ? (
                                            Array.from({ length: totalFilterPages }, (_, index) => {
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
                                            })
                                        ) : (
                                            Array.from({ length: totalPages }, (_, index) => {
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
                                            })
                                        )
                                    }



                                </select>
                                <p>of {paginationFilterLogic ? filteredData.length : fakedata.length}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </main >
    )
}

export default Datagrid7