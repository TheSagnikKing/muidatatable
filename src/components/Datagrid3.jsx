import React, { useState } from 'react';
import "./Datagrid3.css";
import colors from "react-multi-date-picker/plugins/colors"


import { Calendar, DateObject } from "react-multi-date-picker";
import Footer from "react-multi-date-picker/plugins/range_picker_footer";

const Datagrid3 = () => {

    const [selectedDates, setSelectedDates] = useState([]);

    const handleDateChange = (dates) => {
        setSelectedDates(dates);
    };

    const [openCalender, setOpenCalender] = useState(false)

    const [check, setCheck] = useState(false)

    return (
        <div>
            <button onClick={() => setOpenCalender((prev) => !prev)} style={{
                cursor: "pointer",
                background: "#fff",
                border: "2px solid #efefef",
                outline: "none",
                borderRadius: "5px",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                margin: "20px",
                padding: "10px 15px"
            }}>Open/Close</button>

            {openCalender && <div style={{
                maxWidth: "510px",
                margin: "20px"
                // overflow:"auto"
            }}>
                <Calendar
                    range
                    numberOfMonths={2}
                    value={selectedDates}
                    onChange={handleDateChange}
                    plugins={[
                        // colors({ defaultColor: "green" })
                    ]}
                />
                <div>
                    {/* Display selected dates */}
                    {/* {selectedDates && selectedDates.length > 0 && (
                        <div>
                            <p>Selected Dates:</p>
                            {selectedDates.map((date, index) => (
                                <p key={index}>{date.format("YYYY-MM-DD")}</p>
                            ))}
                        </div>
                    )} */}

                    <input type="checkbox" checked={check} onChange={(e) => setCheck((prev) => !prev)} />
                </div>

            </div>}

        </div>
    );
};

export default Datagrid3;
