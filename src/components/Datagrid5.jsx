import React from 'react'
import './Datagrid5.css'
import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { IconButton } from '@mui/material';
import { GridCloseIcon } from '@mui/x-data-grid';

const Datagrid5 = () => {

    // const columns = [
    //     {
    //         name: "Lot No",
    //         options: {
    //             customHeadRender: () => (
    //                 <th style={{ background: "#1e293b", width:"100px",borderBottom: "1px solid white", borderRight: "1px solid white" }}>
    //                     <p style={{ textAlign: "center" }}>Lot No</p>
    //                 </th>
    //             ),
    //             customBodyRender: (value) => (
    //                 <div className='th-col' style={{ borderRight: "1px solid white" }}>
    //                     <p style={{ textAlign: "center", color: "white" }}>{value}</p>
    //                 </div>
    //             ),
    //         }
    //     },
    //     {
    //         name: "DieReceipt",
    //         options: {
    //             // customHeadRender: () => (
    //             //     <th style={{ background: "#1e293b", borderBottom: "1px solid white" }}>
    //             //         <p style={{ textAlign: "center" }}>DieReceipt</p>
    //             //     </th>
    //             // ),
    //             customBodyRender: (value) => (
    //                 <div className='th-col-2'>
    //                     <p style={{ textAlign: "center", color: "#8F00FF" }}>{value}</p>
    //                 </div>
    //             )
    //         }
    //     },

    //     {
    //         options: {
    //             customHeadRender: (value) => (
    //                 <th className='diff_div_head_3' style={{ borderBottom: "1px solid white", borderRight: "none" }}>
    //                     <div className='diff_div_head_3'>
    //                         <div />
    //                         <div>
    //                             V
    //                         </div>
    //                     </div>
    //                 </th>
    //             ),
    //             customBodyRender: (value) => (
    //                 <div className='diff_div_3'>
    //                     <div />
    //                     <div>
    //                         {value} days
    //                     </div>
    //                 </div>
    //             ),
    //             filter: false,
    //             viewColumns: false
    //         }
    //     },

    //     {
    //         name: "DumpIn",
    //         options: {
    //             // customHeadRender: () => (
    //             //     <th style={{ background: "#1e293b", borderBottom: "1px solid white" }}>
    //             //         <p style={{ textAlign: "center" }}>DumpIn</p>
    //             //     </th>
    //             // ),
    //             customBodyRender: (value) => (
    //                 <div className='th-col-2'>
    //                     <p style={{ textAlign: "center", color: "red" }}>{value}</p>
    //                 </div>
    //             )
    //         }
    //     },
    //     {
    //         options: {
    //             customHeadRender: (value) => (
    //                 <th className='diff_div_head_3' style={{ borderBottom: "1px solid white", borderRight: "none" }}>
    //                     <div className='diff_div_head_3'>
    //                         <div />
    //                         <div>
    //                             V
    //                         </div>
    //                     </div>
    //                 </th>
    //             ),
    //             customBodyRender: (value) => (
    //                 <div className='diff_div_3'>
    //                     <div />
    //                     <div>
    //                         {value} days
    //                     </div>
    //                 </div>
    //             ),
    //             filter: false,
    //             viewColumns: false
    //         }
    //     },

    //     {
    //         name: "PumpOut",
    //         options: {
    //             // customHeadRender: () => (
    //             //     <th style={{ background: "#1e293b", borderBottom: "1px solid white" }}>
    //             //         <p style={{ textAlign: "center" }}>BumpOut</p>
    //             //     </th>
    //             // ),
    //             customBodyRender: (value) => (
    //                 <div className='th-col-2'>
    //                     <p style={{ textAlign: "center", color: "orangered" }}>{value}</p>
    //                 </div>
    //             )
    //         }
    //     },
    //     {
    //         options: {
    //             customHeadRender: (value) => (
    //                 <th className='diff_div_head_3' style={{ borderBottom: "1px solid white", borderRight: "none" }}>
    //                     <div className='diff_div_head_3'>
    //                         <div />
    //                         <div>
    //                             V
    //                         </div>
    //                     </div>
    //                 </th>
    //             ),
    //             customBodyRender: (value) => (
    //                 <div className='diff_div_3'>
    //                     <div />
    //                     <div>
    //                         {value} days
    //                     </div>
    //                 </div>
    //             ),
    //             filter: false,
    //             viewColumns: false
    //         }
    //     },


    //     {
    //         name: "ProbeIn",
    //         options: {
    //             // customHeadRender: () => (
    //             //     <th style={{ background: "#1e293b", borderBottom: "1px solid white" }}>
    //             //         <p style={{ textAlign: "center" }}>ProbeIn</p>
    //             //     </th>
    //             // ),
    //             customBodyRender: (value) => (
    //                 <div className='th-col-2'>
    //                     <p style={{ textAlign: "center", color: "yellow" }}>{value}</p>
    //                 </div>
    //             )
    //         }
    //     },
    //     {
    //         options: {
    //             customHeadRender: (value) => (
    //                 <th className='diff_div_head_3' style={{ borderBottom: "1px solid white", borderRight: "none" }}>
    //                     <div className='diff_div_head_3'>
    //                         <div />
    //                         <div>
    //                             V
    //                         </div>
    //                     </div>
    //                 </th>
    //             ),
    //             customBodyRender: (value) => (
    //                 <div className='diff_div_3'>
    //                     <div />
    //                     <div>
    //                         {value} days
    //                     </div>
    //                 </div>
    //             ),
    //             filter: false,
    //             viewColumns: false
    //         }
    //     },

    //     {
    //         name: "ProbeOut",
    //         options: {
    //             // customHeadRender: () => (
    //             //     <th style={{ background: "#1e293b", borderBottom: "1px solid white" }}>
    //             //         <p style={{ textAlign: "center" }}>ProbeOut</p>
    //             //     </th>
    //             // ),
    //             customBodyRender: (value) => (
    //                 <div className='th-col-2'>
    //                     <p style={{ textAlign: "center", color: "green" }}>{value}</p>
    //                 </div>
    //             )
    //         }
    //     },
    //     {
    //         options: {
    //             customHeadRender: (value) => (
    //                 <th className='diff_div_head_3' style={{ borderBottom: "1px solid white", borderRight: "none" }}>
    //                     <div className='diff_div_head_3'>
    //                         <div />
    //                         <div>
    //                             V
    //                         </div>
    //                     </div>
    //                 </th>
    //             ),
    //             customBodyRender: (value) => (
    //                 <div className='diff_div_3'>
    //                     <div />
    //                     <div>
    //                         {value} days
    //                     </div>
    //                 </div>
    //             ),
    //             filter: false,
    //             viewColumns: false
    //         }
    //     },

    //     {
    //         name: "AssemblyIn",
    //         options: {
    //             // customHeadRender: () => (
    //             //     <th style={{ background: "#1e293b", borderBottom: "1px solid white" }}>
    //             //         <p style={{ textAlign: "center" }}>AssemblyIn</p>
    //             //     </th>
    //             // ),
    //             customBodyRender: (value) => (
    //                 <div className='th-col-2'>
    //                     <p style={{ textAlign: "center", color: "red" }}>22-05-09</p>
    //                 </div>
    //             ),
    //         }
    //     },
    // ]

    const columns = [
        {
            name: "LotNo",
            label: "Lot No",
            options: {
                customBodyRender: (value) => (
                    <div className='grid5_div_col_body'>
                        <p>{value}</p>
                    </div>
                ),
            }
        },
        {
            name: "DieReceipt",
            label: "DieReceipt",
            options: {
                customBodyRender: (value) => (
                    <div className='grid5_div_col_body'>
                        <p>{value}</p>
                    </div>
                )
            }
        },

        {
            name: "day1",
            label: "day1",
            options: {
                customBodyRender: (value) => (
                    <div className='grid5_div_col_body'>
                        <div />
                        <div>
                            <p>{value} days</p>
                        </div>
                    </div>
                ),
                filter: false,
                viewColumns: false
            }
        },

        {
            name: "BumpIn",
            label: "BumpIn",
            options: {
                customBodyRender: (value) => (
                    <div className='grid5_div_col_body'>
                        <p>{value}</p>
                    </div>
                )
            }
        },
        {
            name: "day2",
            label: "day2",
            options: {
                customBodyRender: (value) => (
                    <div className='grid5_div_col_body'>
                        <div />
                        <div>
                            <p>{value} days</p>
                        </div>
                    </div>
                ),
                filter: false,
                viewColumns: false
            }
        },

        {
            name: "BumpOut",
            label: "BumpOut",
            options: {
                customBodyRender: (value) => (
                    <div className='grid5_div_col_body'>
                        <p>{value}</p>
                    </div>
                )
            }
        },
        {
            name: "day3",
            label: "day3",
            options: {
                customBodyRender: (value) => (
                    <div className='grid5_div_col_body'>
                        <div />
                        <div>
                            <p>{value} days</p>
                        </div>
                    </div>
                ),
                filter: false,
                viewColumns: false
            }
        },


        {
            name: "ProbeIn",
            label: "ProbeIn",
            options: {
                customBodyRender: (value) => (
                    <div className='grid5_div_col_body'>
                        <p>{value}</p>
                    </div>
                )
            }
        },
        {
            name: "day4",
            label: "day4",
            options: {
                customBodyRender: (value) => (
                    <div className='grid5_div_col_body'>
                        <div />
                        <div>
                            <p>{value} days</p>
                        </div>
                    </div>
                ),
                filter: false,
                viewColumns: false
            }
        },

        {
            name: "ProbeOut",
            label: "ProbeOut",
            options: {
                customBodyRender: (value) => (
                    <div className='grid5_div_col_body'>
                        <p>{value}</p>
                    </div>
                )
            }
        },
        {
            name: "day5",
            label: "day5",
            options: {
                customBodyRender: (value) => (
                    <div className='grid5_div_col_body'>
                        <div />
                        <div>
                            <p>{value} days</p>
                        </div>
                    </div>
                ),
                filter: false,
                viewColumns: false
            }
        },

        {
            name: "AssemblyIn",
            label: "AssemblyIn",
            options: {
                customBodyRender: (value) => (
                    <div className='grid5_div_col_body'>
                        <p>22-05-09</p>
                    </div>
                ),
            }
        },

        {
            name: "day6",
            label: "day6",
            options: {
                customBodyRender: (value) => (
                    <div className='grid5_div_col_body'>
                        <div />
                        <div>
                            <p>{value} days</p>
                        </div>
                    </div>
                ),
                filter: false,
                viewColumns: false
            }
        },

        {
            name: "AssemblyOut",
            label: "AssemblyOut",
            options: {
                customBodyRender: (value) => (
                    <div className='grid5_div_col_body'>
                        <p>22-05-09</p>
                    </div>
                ),
            }
        },

        {
            name: "day7",
            label: "day7",
            options: {
                customBodyRender: (value) => (
                    <div className='grid5_div_col_body'>
                        <div />
                        <div>
                            <p>{value} days</p>
                        </div>
                    </div>
                ),
                filter: false,
                viewColumns: false
            }
        },

        {
            name: "TestIn",
            label: "TestIn",
            options: {
                customBodyRender: (value) => (
                    <div className='grid5_div_col_body'>
                        <p>22-05-09</p>
                    </div>
                ),
            }
        },

        {
            name: "day8",
            label: "day8",
            options: {
                customBodyRender: (value) => (
                    <div className='grid5_div_col_body'>
                        <div />
                        <div>
                            <p>{value} days</p>
                        </div>
                    </div>
                ),
                filter: false,
                viewColumns: false
            }
        },

        {
            name: "TestOut",
            label: "TestOut",
            options: {
                customBodyRender: (value) => (
                    <div className='grid5_div_col_body'>
                        <p>22-05-09</p>
                    </div>
                ),
            }
        },
        {
            name: "day9",
            label: "day9",
            options: {
                customBodyRender: (value) => (
                    <div className='grid5_div_col_body'>
                        <div />
                        <div>
                            <p>{value} days</p>
                        </div>
                    </div>
                ),
                filter: false,
                viewColumns: false
            }
        },

        {
            name: "ShipOut",
            label: "ShipOut",
            options: {
                customBodyRender: (value) => (
                    <div className='grid5_div_col_body'>
                        <p>22-05-09</p>
                    </div>
                ),
            }
        },
    ]

    const customdata = [
        {
            _id: 1,
            LotNo: "00009",
            DieReceipt: "22-05-05",
            day1: 5,
            BumpIn: "22-05-05",
            day2: 5,
            BumpOut: "22-05-05",
            day3: 5,
            ProbeIn: "22-05-05",
            day4: 5,
            ProbeOut: "22-05-05",
            day5: 5,
            AssemblyIn: "22-05-05",
            day6: 5,
            AssemblyOut: "22-05-05",
            day7: 5,
            TestIn: "22-05-05",
            day8: 5,
            TestOut: "22-05-05",
            day9: 5,
            ShipOut: "22-05-05"
        },
    ]


    const options = {
        selectableRows: false,
        elevation: 10,
        rowsPerPage: 6,
        rowsPerPageOptions: [6, 12, 18, 24],
        filter: false
    };


    return (
        <div className=''>
            <MUIDataTable
                title={"Lots Status Tracking"}
                data={customdata}
                columns={columns}
                options={options}
            /></div>
    )
}

export default Datagrid5
