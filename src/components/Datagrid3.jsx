import React from 'react'
import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { IconButton } from '@mui/material';
import { GridCloseIcon } from '@mui/x-data-grid';

const Datagrid3 = () => {

    // const columns = [
    //     {
    //         name: "gender",
    //         label: "Gender",
    //         options: {
    //             customHeadRender: () => (
    //                 <th style={{background:"#1e293b"}}><p>Action</p></th>
    //             ),
    //             customBodyRender: (value) => (
    //                 <p style={{ background: "" }} onClick={() => alert("yes clicekd")}>HEllo</p>
    //             )
    //         }

    //     }
    // ]



    const columns = [
        {
            name: "Lot No",
            options: {
                customHeadRender: () => (
                    <th style={{ background: "#1e293b", width:"100px",borderBottom: "1px solid white", borderRight: "1px solid white" }}>
                        <p style={{ textAlign: "center" }}>Lot No</p>
                    </th>
                ),
                customBodyRender: (value) => (
                    <div className='th-col' style={{ borderRight: "1px solid white" }}>
                        <p style={{ textAlign: "center", color: "white" }}>{value}</p>
                    </div>
                ),
            }
        },
        {
            name: "DieReceipt",
            options: {
                // customHeadRender: () => (
                //     <th style={{ background: "#1e293b", borderBottom: "1px solid white" }}>
                //         <p style={{ textAlign: "center" }}>DieReceipt</p>
                //     </th>
                // ),
                customBodyRender: (value) => (
                    <div className='th-col-2'>
                        <p style={{ textAlign: "center", color: "#8F00FF" }}>{value}</p>
                    </div>
                )
            }
        },

        {
            options: {
                customHeadRender: (value) => (
                    <th className='diff_div_head_3' style={{ borderBottom: "1px solid white", borderRight: "none" }}>
                        <div className='diff_div_head_3'>
                            <div />
                            <div>
                                V
                            </div>
                        </div>
                    </th>
                ),
                customBodyRender: (value) => (
                    <div className='diff_div_3'>
                        <div />
                        <div>
                            {value} days
                        </div>
                    </div>
                ),
                filter: false,
                viewColumns: false
            }
        },

        {
            name: "DumpIn",
            options: {
                // customHeadRender: () => (
                //     <th style={{ background: "#1e293b", borderBottom: "1px solid white" }}>
                //         <p style={{ textAlign: "center" }}>DumpIn</p>
                //     </th>
                // ),
                customBodyRender: (value) => (
                    <div className='th-col-2'>
                        <p style={{ textAlign: "center", color: "red" }}>{value}</p>
                    </div>
                )
            }
        },
        {
            options: {
                customHeadRender: (value) => (
                    <th className='diff_div_head_3' style={{ borderBottom: "1px solid white", borderRight: "none" }}>
                        <div className='diff_div_head_3'>
                            <div />
                            <div>
                                V
                            </div>
                        </div>
                    </th>
                ),
                customBodyRender: (value) => (
                    <div className='diff_div_3'>
                        <div />
                        <div>
                            {value} days
                        </div>
                    </div>
                ),
                filter: false,
                viewColumns: false
            }
        },

        {
            name: "PumpOut",
            options: {
                // customHeadRender: () => (
                //     <th style={{ background: "#1e293b", borderBottom: "1px solid white" }}>
                //         <p style={{ textAlign: "center" }}>BumpOut</p>
                //     </th>
                // ),
                customBodyRender: (value) => (
                    <div className='th-col-2'>
                        <p style={{ textAlign: "center", color: "orangered" }}>{value}</p>
                    </div>
                )
            }
        },
        {
            options: {
                customHeadRender: (value) => (
                    <th className='diff_div_head_3' style={{ borderBottom: "1px solid white", borderRight: "none" }}>
                        <div className='diff_div_head_3'>
                            <div />
                            <div>
                                V
                            </div>
                        </div>
                    </th>
                ),
                customBodyRender: (value) => (
                    <div className='diff_div_3'>
                        <div />
                        <div>
                            {value} days
                        </div>
                    </div>
                ),
                filter: false,
                viewColumns: false
            }
        },


        {
            name: "ProbeIn",
            options: {
                // customHeadRender: () => (
                //     <th style={{ background: "#1e293b", borderBottom: "1px solid white" }}>
                //         <p style={{ textAlign: "center" }}>ProbeIn</p>
                //     </th>
                // ),
                customBodyRender: (value) => (
                    <div className='th-col-2'>
                        <p style={{ textAlign: "center", color: "yellow" }}>{value}</p>
                    </div>
                )
            }
        },
        {
            options: {
                customHeadRender: (value) => (
                    <th className='diff_div_head_3' style={{ borderBottom: "1px solid white", borderRight: "none" }}>
                        <div className='diff_div_head_3'>
                            <div />
                            <div>
                                V
                            </div>
                        </div>
                    </th>
                ),
                customBodyRender: (value) => (
                    <div className='diff_div_3'>
                        <div />
                        <div>
                            {value} days
                        </div>
                    </div>
                ),
                filter: false,
                viewColumns: false
            }
        },

        {
            name: "ProbeOut",
            options: {
                // customHeadRender: () => (
                //     <th style={{ background: "#1e293b", borderBottom: "1px solid white" }}>
                //         <p style={{ textAlign: "center" }}>ProbeOut</p>
                //     </th>
                // ),
                customBodyRender: (value) => (
                    <div className='th-col-2'>
                        <p style={{ textAlign: "center", color: "green" }}>{value}</p>
                    </div>
                )
            }
        },
        {
            options: {
                customHeadRender: (value) => (
                    <th className='diff_div_head_3' style={{ borderBottom: "1px solid white", borderRight: "none" }}>
                        <div className='diff_div_head_3'>
                            <div />
                            <div>
                                V
                            </div>
                        </div>
                    </th>
                ),
                customBodyRender: (value) => (
                    <div className='diff_div_3'>
                        <div />
                        <div>
                            {value} days
                        </div>
                    </div>
                ),
                filter: false,
                viewColumns: false
            }
        },

        {
            name: "AssemblyIn",
            options: {
                // customHeadRender: () => (
                //     <th style={{ background: "#1e293b", borderBottom: "1px solid white" }}>
                //         <p style={{ textAlign: "center" }}>AssemblyIn</p>
                //     </th>
                // ),
                customBodyRender: (value) => (
                    <div className='th-col-2'>
                        <p style={{ textAlign: "center", color: "red" }}>22-05-09</p>
                    </div>
                ),
            }
        },
    ]

    const data = [
        ["00009", "-", 5, "-", 5, "-", 5, "22-05-05", 5, "-"],
        ["00009", "-", 5, "22-05-05", 5, "22-05-05", 5, "22-05-05", 5, "22-05-05"],
        ["00009", "22-05-05", 5, "22-05-05", 5, "-", 5, "-", 5, "22-05-05"],
        ["00009", "22-05-05", 5, "22-05-05", 5, "22-05-05", 5, "22-05-05", 5, "-"],
        ["00009", "26-05-05", 6, "-", 6, "26-05-05", 6, "26-05-05", 6, "-"],
        ["00009", "27-05-05", 7, "27-05-05", 7, "-", 7, "27-05-05", 7, "27-05-05"],
    ];

    
const CustomSearchComponent = ({ searchText, onSearch, onHide, options }) => (
    <div className='he'>
      {/* Render the search input inside the hello div */}
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={(e) => onSearch(e.target.value)}
      />
      {/* Render the hide icon */}
      <IconButton onClick={onHide}>
        <GridCloseIcon />
      </IconButton>
    </div>
  );
  

  const CustomShowHideColumnDropdown = ({ onChange }) => {
    const [selectedColumns, setSelectedColumns] = React.useState([]);
  
    const handleDropdownChange = (event) => {
      const { value } = event.target;
      setSelectedColumns(value);
      onChange(value);
    };
}
    const options = {
        selectableRows: false,
        elevation: 10,
        rowsPerPage: 6,
        rowsPerPageOptions: [6, 12, 18, 24],
        filter: false,
        customSearchRender: (searchText, handleSearch, hideSearch, options) => {
            // Use your custom search component here
            return (
              <CustomSearchComponent
                searchText={searchText}
                onSearch={handleSearch}
                // onHide={hideSearch}
                options={options}
              />
            );
          },
          customToolbar: () => {
            const handleCustomDropdownChange = (selectedColumns) => {
              // Implement your logic for handling show/hide columns
              setTableAction('columns', { visible: selectedColumns });
            };
      
            return <CustomShowHideColumnDropdown onChange={handleCustomDropdownChange} />;
          },
    };

    const getMuiTheme = () => createTheme({
        typography: {
            // fontFamily:"Poppins"
        },
        palette: {
            background: {
                paper: "#1e293b",
                default: "#0f172a",
            },
            mode: 'dark'
        },
        components: {
            MuiTableCell: {
                styleOverrides: {
                    head: {
                        padding: "10px",
                        background: "#1e293b"
                    },
                    body: {
                        background: "#1e293b",
                        paddingInline: "0px",
                        paddingBlock: "0px"
                    },
                    footer: {
                    }
                }
            }
        }
    })

    return (
        <div className='container'>
            <ThemeProvider theme={getMuiTheme()}>
                <MUIDataTable
                    title={"Lots Status Tracking"}
                    data={data}
                    columns={columns}
                    options={options}
                /></ThemeProvider></div>
    )
}

export default Datagrid3

// import React, { useState } from 'react';

// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import MUIDataTable from "mui-datatables";

// function Example() {
//   const [responsive, setResponsive] = useState('vertical');
//   const [tableBodyHeight, setTableBodyHeight] = useState('400px');
//   const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState('');
//   const [searchBtn, setSearchBtn] = useState(true);
//   const [downloadBtn, setDownloadBtn] = useState(true);
//   const [printBtn, setPrintBtn] = useState(true);
//   const [viewColumnBtn, setViewColumnBtn] = useState(true);
//   const [filterBtn, setFilterBtn] = useState(true);

//   const columns = [{ name: 'Name', options: { filterOptions: { fullWidth: true } } }, 'Title', 'Location'];

//   const options = {
//     search: searchBtn,
//     download: downloadBtn,
//     print: printBtn,
//     viewColumns: viewColumnBtn,
//     filter: filterBtn,
//     filterType: 'dropdown',
//     responsive,
//     tableBodyHeight,
//     tableBodyMaxHeight,
//     onTableChange: (action, state) => {
//       console.log(action);
//       console.dir(state);
//     },
//   };

//   const data = [
//     ['Gabby George', 'Business Analyst', 'Minneapolis'],
//     ['Aiden Lloyd', "Business Consultant for an International Company and CEO of Tony's Burger Palace", 'Dallas'],
//     ['Jaden Collins', 'Attorney', 'Santa Ana'],
//     ['Franky Rees', 'Business Analyst', 'St. Petersburg'],
//     ['Aaren Rose', null, 'Toledo'],
//     ['Johnny Jones', 'Business Analyst', 'St. Petersburg'],
//     ['Jimmy Johns', 'Business Analyst', 'Baltimore'],
//     ['Jack Jackson', 'Business Analyst', 'El Paso'],
//     ['Joe Jones', 'Computer Programmer', 'El Paso'],
//     ['Jacky Jackson', 'Business Consultant', 'Baltimore'],
//     ['Jo Jo', 'Software Developer', 'Washington DC'],
//     ['Donna Marie', 'Business Manager', 'Annapolis'],
//   ];

//   return (
//     <React.Fragment>
//       <FormControl>
//         <InputLabel id="demo-simple-select-label">Responsive Option</InputLabel>
//         <Select
//           labelId="demo-simple-select-label"
//           id="demo-simple-select"
//           value={responsive}
//           style={{ width: '200px', marginBottom: '10px', marginRight: 10 }}
//           onChange={e => setResponsive(e.target.value)}>
//           <MenuItem value={'vertical'}>vertical</MenuItem>
//           <MenuItem value={'standard'}>standard</MenuItem>
//           <MenuItem value={'simple'}>simple</MenuItem>

//           <MenuItem value={'scroll'}>scroll (deprecated)</MenuItem>
//           <MenuItem value={'scrollMaxHeight'}>scrollMaxHeight (deprecated)</MenuItem>
//           <MenuItem value={'stacked'}>stacked (deprecated)</MenuItem>
//         </Select>
//       </FormControl>
//       <FormControl>
//         <InputLabel id="demo-simple-select-label">Table Body Height</InputLabel>
//         <Select
//           labelId="demo-simple-select-label"
//           id="demo-simple-select"
//           value={tableBodyHeight}
//           style={{ width: '200px', marginBottom: '10px', marginRight: 10 }}
//           onChange={e => setTableBodyHeight(e.target.value)}>
//           <MenuItem value={''}>[blank]</MenuItem>
//           <MenuItem value={'400px'}>400px</MenuItem>
//           <MenuItem value={'800px'}>800px</MenuItem>
//           <MenuItem value={'100%'}>100%</MenuItem>
//         </Select>
//       </FormControl>
//       <FormControl>
//         <InputLabel id="demo-simple-select-label">Max Table Body Height</InputLabel>
//         <Select
//           labelId="demo-simple-select-label"
//           id="demo-simple-select"
//           value={tableBodyMaxHeight}
//           style={{ width: '200px', marginBottom: '10px' }}
//           onChange={e => setTableBodyMaxHeight(e.target.value)}>
//           <MenuItem value={''}>[blank]</MenuItem>
//           <MenuItem value={'400px'}>400px</MenuItem>
//           <MenuItem value={'800px'}>800px</MenuItem>
//           <MenuItem value={'100%'}>100%</MenuItem>
//         </Select>
//       </FormControl>
//       <FormControl>
//         <InputLabel id="demo-simple-select-label">Search Button</InputLabel>
//         <Select
//           labelId="demo-simple-select-label"
//           id="demo-simple-select"
//           value={searchBtn}
//           style={{ width: '200px', marginBottom: '10px' }}
//           onChange={e => setSearchBtn(e.target.value)}>
//           <MenuItem value={'true'}>{'true'}</MenuItem>
//           <MenuItem value={'false'}>{'false'}</MenuItem>
//           <MenuItem value={'disabled'}>disabled</MenuItem>
//         </Select>
//       </FormControl>
//       <FormControl>
//         <InputLabel id="demo-simple-select-label">Download Button</InputLabel>
//         <Select
//           labelId="demo-simple-select-label"
//           id="demo-simple-select"
//           value={downloadBtn}
//           style={{ width: '200px', marginBottom: '10px' }}
//           onChange={e => setDownloadBtn(e.target.value)}>
//           <MenuItem value={'true'}>{'true'}</MenuItem>
//           <MenuItem value={'false'}>{'false'}</MenuItem>
//           <MenuItem value={'disabled'}>disabled</MenuItem>
//         </Select>
//       </FormControl>
//       <FormControl>
//         <InputLabel id="demo-simple-select-label">Print Button</InputLabel>
//         <Select
//           labelId="demo-simple-select-label"
//           id="demo-simple-select"
//           value={printBtn}
//           style={{ width: '200px', marginBottom: '10px' }}
//           onChange={e => setPrintBtn(e.target.value)}>
//           <MenuItem value={'true'}>{'true'}</MenuItem>
//           <MenuItem value={'false'}>{'false'}</MenuItem>
//           <MenuItem value={'disabled'}>disabled</MenuItem>
//         </Select>
//       </FormControl>
//       <FormControl>
//         <InputLabel id="demo-simple-select-label">View Column Button</InputLabel>
//         <Select
//           labelId="demo-simple-select-label"
//           id="demo-simple-select"
//           value={viewColumnBtn}
//           style={{ width: '200px', marginBottom: '10px' }}
//           onChange={e => setViewColumnBtn(e.target.value)}>
//           <MenuItem value={'true'}>{'true'}</MenuItem>
//           <MenuItem value={'false'}>{'false'}</MenuItem>
//           <MenuItem value={'disabled'}>disabled</MenuItem>
//         </Select>
//       </FormControl>
//       <FormControl>
//         <InputLabel id="demo-simple-select-label">Filter Button</InputLabel>
//         <Select
//           labelId="demo-simple-select-label"
//           id="demo-simple-select"
//           value={filterBtn}
//           style={{ width: '200px', marginBottom: '10px' }}
//           onChange={e => setFilterBtn(e.target.value)}>
//           <MenuItem value={'true'}>{'true'}</MenuItem>
//           <MenuItem value={'false'}>{'false'}</MenuItem>
//           <MenuItem value={'disabled'}>disabled</MenuItem>
//         </Select>
//       </FormControl>
//       <MUIDataTable title={'ACME Employee list'} data={data} columns={columns} options={options} />
//     </React.Fragment>
//   );
// }

// export default Example;