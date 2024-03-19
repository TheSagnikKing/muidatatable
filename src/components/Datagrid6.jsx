import React, { useState } from 'react'
import './Datagrid6.css'

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

    const [showlotno, setShowlotno] = useState(true)
    const [showdiereceipt, setShowdiereceipt] = useState(true)
    const [showday1, setShowday1] = useState(true)


    const [sortOrder, setSortOrder] = useState('asc');
    const [sortBy, setSortBy] = useState('LotNo');

    const toggleSortOrder = (columnName) => {
        setSortBy(columnName);
        setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
    };

    console.log(sortBy)

    const sortData = (dataArray, columnName, sortOrder) => {
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
    };

    const sortedData = sortData(data, sortBy, sortOrder);

    // "_id": 1,
    //     "LotNo": "A1B2C3",
    //     "DieReceipt": "2023-11-21",
    //     "day1": 3,
    //     "BumpIn": "2023-11-22",
    //     "day2": 8,
    //     "BumpOut": "2023-11-23",
    //     "day3": 5,
    //     "ProbeIn": "2023-11-24",
    //     "day4": 7,
    //     "ProbeOut": "2023-11-25",
    //     "day5": 2,
    //     "AssemblyIn": "2023-11-26",
    //     "day6": 1,
    //     "AssemblyOut": "2023-11-27",
    //     "day7": 9,
    //     "TestIn": "2023-11-28",
    //     "day8": 4,
    //     "TestOut": "2023-11-29",
    //     "day9": 6,
    //     "ShipOut": "2023-11-30"

    return (
        <main className='data6_container'>
            <div className='data6_top_bx'>
                <div className='data6_top_searchbox'>
                    Search
                </div>

                <div className='data6_top_selectdatebx'>
                    Select Date
                </div>

                <div className='data6_top_showhide_bx'>
                    <button onClick={() => setShowColumn((prev) => !prev)}>Filter Columns</button>

                    {showColumn && <div className='data6_top_showhide_bx_content'>
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
                            {sortBy === 'day1' ? (sortOrder === 'asc' ? <div><span>&#9650;</span></div> : <div><span>&#9660;</span></div>): <div><span>&#9660;</span></div>}
                        </div>
                    </div>}

                    <div className='data6_content_head_same'>
                        <div>
                            <p>BumpIn</p>
                            <div>Sr</div>
                        </div>
                    </div>
                    <div className='data6_content_head_diff'>
                        <div>
                            <div />
                            <div>V</div>
                        </div>
                    </div>
                    <div className='data6_content_head_same'>
                        <div>
                            <p>BumpOut</p>
                            <div>Sr</div>
                        </div>
                    </div>
                    <div className='data6_content_head_diff'>
                        <div>
                            <div />
                            <div>V</div>
                        </div>
                    </div>
                    <div className='data6_content_head_same'>
                        <div>
                            <p>ProbeIn</p>
                            <div>Sr</div>
                        </div>
                    </div>
                    <div className='data6_content_head_diff'>
                        <div>
                            <div />
                            <div>V</div>
                        </div>
                    </div>
                    <div className='data6_content_head_same'>
                        <div>
                            <p>ProbeOut</p>
                            <div>Sr</div>
                        </div>
                    </div>
                    <div className='data6_content_head_diff'>
                        <div>
                            <div />
                            <div>V</div>
                        </div>
                    </div>
                    <div className='data6_content_head_same'>
                        <div>
                            <p>AssemblyIn</p>
                            <div>Sr</div>
                        </div>
                    </div>

                    <div className='data6_content_head_diff'>
                        <div>
                            <div />
                            <div>V</div>
                        </div>
                    </div>
                    <div className='data6_content_head_same'>
                        <div>
                            <p>AssemblyOut</p>
                            <div>Sr</div>
                        </div>
                    </div>
                    <div className='data6_content_head_diff'>
                        <div>
                            <div />
                            <div>V</div>
                        </div>
                    </div>
                    <div className='data6_content_head_same'>
                        <div>
                            <p>TestIn</p>
                            <div>Sr</div>
                        </div>
                    </div>

                    <div className='data6_content_head_diff'>
                        <div>
                            <div />
                            <div>V</div>
                        </div>
                    </div>
                    <div className='data6_content_head_same'>
                        <div>
                            <p>TestOut</p>
                            <div>Sr</div>
                        </div>
                    </div>
                    <div className='data6_content_head_diff'>
                        <div>
                            <div />
                            <div>V</div>
                        </div>
                    </div>
                    <div className='data6_content_head_same'>
                        <div>
                            <p>ShipOut</p>
                            <div>Sr</div>
                        </div>
                    </div>
                </div>

                {
                    sortedData.map((t) => (
                        <div className='data6_content_body' key={t._id}>
                            {showlotno && <div className='data6_content_body_same'>
                                <div style={{ borderRight: "1px solid black" }}>
                                    <p>{t.LotNo}</p>
                                </div>
                            </div>}

                            {showdiereceipt && <div className='data6_content_body_same'>
                                <div>
                                    <p>{t.DieReceipt}</p>
                                </div>
                            </div>}

                            {showday1 && <div className='data6_content_body_diff'>
                                <div>
                                    <div />
                                    <div>{t.day1} days</div>
                                </div>
                            </div>}

                            <div className='data6_content_body_same'>
                                <div>
                                    <p>{t.BumpIn}</p>
                                </div>
                            </div>
                            <div className='data6_content_body_diff'>
                                <div>
                                    <div />
                                    <div>{t.day2} days</div>
                                </div>
                            </div>
                            <div className='data6_content_body_same'>
                                <div>
                                    <p>{t.BumpOut}</p>
                                </div>
                            </div>
                            <div className='data6_content_body_diff'>
                                <div>
                                    <div />
                                    <div>{t.day3} days</div>
                                </div>
                            </div>
                            <div className='data6_content_body_same'>
                                <div>
                                    <p>{t.ProbeIn}</p>
                                </div>
                            </div>
                            <div className='data6_content_body_diff'>
                                <div>
                                    <div />
                                    <div>{t.day4} days</div>
                                </div>
                            </div>
                            <div className='data6_content_body_same'>
                                <div>
                                    <p>{t.ProbeOut}</p>
                                </div>
                            </div>
                            <div className='data6_content_body_diff'>
                                <div>
                                    <div />
                                    <div>{t.day5} days</div>
                                </div>
                            </div>
                            <div className='data6_content_body_same'>
                                <div>
                                    <p>{t.AssemblyIn}</p>
                                </div>
                            </div>

                            <div className='data6_content_body_diff'>
                                <div>
                                    <div />
                                    <div>{t.day6} days</div>
                                </div>
                            </div>
                            <div className='data6_content_body_same'>
                                <div>
                                    <p>{t.AssemblyOut}</p>
                                </div>
                            </div>
                            <div className='data6_content_body_diff'>
                                <div>
                                    <div />
                                    <div>{t.day7} days</div>
                                </div>
                            </div>
                            <div className='data6_content_body_same'>
                                <div>
                                    <p>{t.TestIn}</p>
                                </div>
                            </div>

                            <div className='data6_content_body_diff'>
                                <div>
                                    <div />
                                    <div>{t.day8} days</div>
                                </div>
                            </div>
                            <div className='data6_content_body_same'>
                                <div>
                                    <p>{t.TestOut}</p>
                                </div>
                            </div>
                            <div className='data6_content_body_diff'>
                                <div>
                                    <div />
                                    <div>{t.day9}</div>
                                </div>
                            </div>
                            <div className='data6_content_body_same'>
                                <div>
                                    <p>{t.ShipOut}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </main>
    )
}

export default Datagrid6