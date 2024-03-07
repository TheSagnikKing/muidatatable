import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { createTheme } from '@mui/material';

const CustomDataGrid = ({ data }) => {

    const handleDelete = (row) => {
        console.log('Deleted Row:', row); // Log deleted row data
    };

    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 70,
            disableColumnMenu: true,
        },
        {
            field: '',
            headerName: '',
            width: 80,
            sortable:false,
            disableColumnMenu: true,
            renderHeader: () => {
                return <div className='diff_div_head'>
                    <div />
                    <div>
                        V
                    </div>
                </div>
            },
            renderCell: (params) => {
                const value = params.value; // Access the cell value
                return <div className='diff_div'>
                    <div />
                    <div>
                        5 days
                    </div>
                </div>
            },
        },
        { field: 'name', headerName: 'Name', width: 150,disableColumnMenu: true, },
        {
            field: '',
            headerName: '',
            width: 80,
            sortable:false,
            disableColumnMenu: true,
            renderCell: (params) => {
                const value = params.value; // Access the cell value
                return <div className='diff_div'>
                    <div />
                    <div>
                        5 days
                    </div>
                </div>
            },
        },
        { field: 'age', headerName: 'Age', width: 100,disableColumnMenu: true, },
        {
            field: '',
            headerName: '',
            width: 80,
            sortable:false,
            disableColumnMenu: true,
            renderCell: (params) => {
                const value = params.value; // Access the cell value
                return <div className='diff_div'>
                    <div />
                    <div>
                        5 days
                    </div>
                </div>
            },
        },
        { field: 'name', headerName: 'Name', width: 150,disableColumnMenu: true, },
        {
            field: '',
            headerName: '',
            width: 80,
            sortable:false,
            disableColumnMenu: true,
            renderCell: (params) => {
                const value = params.row; // Access the cell value
                console.log(value)
                return <div className='diff_div'>
                    <div />
                    <div>
                        5 days
                    </div>
                </div>
            },
        },
        { field: 'name', headerName: 'Name', width: 120 },
        // {
        //     field: 'actions',
        //     headerName: 'Actions',
        //     width: 100,
        //     renderCell: (params) => {
        //         return (
        //             <button onClick={() => handleDelete(params.row)}>Delete</button>
        //         );
        //     },
        // },
    ];

    const theme = createTheme({
        components: {
          MuiDataGrid: {
            styleOverrides: {
              root: {
                width: '80%', // Set table width to 80%
              },
            },
          },
        },
      });

    return (
        <div className='container'>
        <DataGrid
            theme={theme}
            rows={data}
            columns={columns}
            pageSize={5} // Adjust as needed
            rowsPerPageOptions={[5, 10, 20]} // Optional: rows per page options
            selectionModel={true} // Enable row selection
        // Add other optional features as needed:
        // - sorting
        // - filtering
        // - editing
        // - custom components
        />
        </div>
    );
};

// Example usage
const MyComponent = () => {
    const sampleData = [
        { id: 1, day1: 5,name: 'John Doe', day1: 7, age: 30 ,day1: 10,},
        { id: 2, day1: 12,name: 'Jane Smith',day1:20, age: 25,day1: 30, },
        { id: 3, day1: 8,name: 'Michael Brown', day1: 35,age: 40,day1: 45, },
    ];

    return <CustomDataGrid data={sampleData} />;
};

export default MyComponent;



// In MUI DataGrid, both customBodyRender and renderCell props are used to customize the rendering of cells within the table. However, they have subtle differences:

// 1. Scope:

// customBodyRender: This prop applies to the entire body content of a cell, including text, icons, or any other components you want to display. It allows you to render the entire cell content according to your needs.
// renderCell: This prop focuses specifically on rendering the cell's value. It's suitable for situations where you only need to modify the way the value is presented (e.g., formatting, adding units).
// 2. Usage Context:

// customBodyRender: This prop is commonly used for complex cell content that requires more control over the layout and components within the cell. It offers more flexibility for creating custom cell rendering logic.
// renderCell: This prop is often used for simpler value modifications, such as formatting numbers, adding prefixes/suffixes, or conditionally applying styles based on the value. It's a more lightweight option for basic value manipulation.