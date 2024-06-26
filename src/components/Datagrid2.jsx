import React, { useState } from 'react';
import "./Datagrid2.css"
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Pagination from '@mui/material/Pagination';

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'firstName',
        headerName: 'First name',
        width: 150,
        editable: true,
    },
    {
        field: 'lastName',
        headerName: 'Last name',
        width: 150,
        editable: true,
    },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 110,
        editable: true,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },

    { id: 10, lastName: 'Snow', firstName: 'Jon', age: 14 },
    { id: 11, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
    { id: 12, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
    { id: 13, lastName: 'Stark', firstName: 'Arya', age: 11 },
    { id: 14, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 15, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 16, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 17, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 18, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const Datagrid2 = () => {

    const [rowsPerPage, setRowsPerPage] = useState(5)

    const [page, setPage] = useState(1);
    const pageSize = rowsPerPage;
    const totalRows = rows.length;
    const totalPages = Math.ceil(totalRows / pageSize);

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    //This code is calculating the start and endIndex of each page
    const paginatedRows = rows.slice((page - 1) * pageSize, page * pageSize);

    const startIndex = (page - 1) * pageSize
    const endIndex = Math.min(page * pageSize,totalRows)

    console.log("start - end Index ", startIndex, endIndex)

    const rowsperpageHandler = (e) => {
        parseInt(setRowsPerPage(e.target.value))
        setPage(1)
    }

    return (
        <Box sx={{ height: 400, width: '80%', margin: 'auto', marginTop: '30px' }}>
            <DataGrid
                rows={paginatedRows}
                columns={columns}
                pageSize={pageSize}
                checkboxSelection={false}
                disableRowSelectionOnClick
                hideFooterPagination
                disableColumnMenu={true} 
                hideFooter
            />

            <div className='data2_pagination_container'>
                <div>
                    <Pagination
                        count={totalPages}
                        page={page}
                        color="secondary"
                        onChange={handlePageChange}
                    />
                </div>

                <div>
                    <div>
                        <label style={{ marginRight: "30px" }}>Rows Per Page</label>
                        <select
                            value={rowsPerPage}
                            onChange={rowsperpageHandler}
                        >

                            <option value="5" style={{ backgroundColor: pageSize == 5 ? 'limegreen' : 'initial' }}>5</option>
                            <option value="10" style={{ backgroundColor: pageSize == 10 ? 'limegreen' : 'initial' }}>10</option>
                            <option value="18" style={{ backgroundColor: pageSize == 18 ? 'limegreen' : 'initial' }}>18</option>
                        </select>
                    </div>


                    <div>
                        <label>Showing of </label>
                        <select
                            value={`${startIndex + 1} - ${endIndex}`}
                            onChange={(e) => setPage(Math.ceil(Number(e.target.value.split(" - ")[0]) / pageSize))}
                        >
                            {
                                Array.from({ length: totalPages }, (_, index) => {
                                    const start = index * pageSize + 1;
                                    const end = Math.min((index + 1) * pageSize, totalRows);
                                    const optionValue = `${start} - ${end}`;

                                    return (
                                        <option
                                            key={index}
                                            value={optionValue}
                                            style={{ background: optionValue === `${startIndex + 1} - ${endIndex}` ? "skyblue" : "inherit" }}
                                        >
                                            {optionValue}
                                        </option>
                                    );
                                })
                            }
                        </select>
                    </div>





                </div>
            </div>
        </Box>
    );
};

export default Datagrid2;
