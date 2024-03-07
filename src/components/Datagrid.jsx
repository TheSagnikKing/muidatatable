// import React, { useEffect, useState } from 'react'
// import { DataGrid, GridToolbar } from '@mui/x-data-grid';
// import axios from "axios"

// const Datagrid = () => {

//     const [data, setData] = useState([])

//     useEffect(() => {
//         const getNBATeamData = async () => {
//             const { data } = await axios.get("https://www.balldontlie.io/api/v1/teams")
//             setData(data.data)
//         }
//         getNBATeamData()
//     }, [])

//     const columns = [
//         { field: 'id', headerName: 'ID', width: 90 },
//         { field: 'city', headerName: 'City', width: 150 },
//         { field: 'abbreviation', headerName: 'Abbreviations', width: 150 },
//         { field: 'conference', headerName: 'Conference', width: 150 },
//         { field: 'division', headerName: 'Division', width: 150 },
//         {renderHeader: (params) => (
//             <strong>
//               {'Birthday '}
//               <span role="img" aria-label="enjoy">
//                 🎂
//               </span>
//             </strong>
//           )},
//     ];

//     const rows =data.map((row) => ({
//         id:row.id,
//         abbreviation:row.abbreviation,
//         city:row.city,
//         conference:row.conference,
//         division:row.division
//     }))

//     console.log(data)

//     return (
//         <>
//         <div style={{
//             width:"80%",
//             height: "80vh",
//             margin:"auto"
//         }}>
//            <DataGrid 
//            rows={rows}
//            columns={columns}
//            pageSizeOptions={[5,10,25]}
//         //    slots={{
//         //     toolbar: GridToolbar,
//         //    }}
//         slots={{ toolbar: GridToolbar }}
//         slotProps={{
//           toolbar: {
//             showQuickFilter: true,
//             quickFilterProps: { debounceMs: 500 },
//           },
//         }}
//            />
//         </div>
//         </>
//     )
// }

// export default Datagrid

import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';

const CustomDataGrid = ({ data, columns }) => {
  const [selectedRow, setSelectedRow] = useState(null);

  const handleRowClick = (row) => {
    setSelectedRow(row);
    console.log('Selected Row:', row); // Log selected row data
  };

  return (
    <DataGrid
      rows={data}
      columns={columns}
      pageSize={5} // Adjust as needed
      rowsPerPageOptions={[5, 10, 20]} // Optional: rows per page options
      selectionModel={true} // Enable row selection
      onRowClick={handleRowClick}
      // Add other optional features as needed:
      // - sorting
      // - filtering
      // - editing
      // - custom components
    />
  );
};

// Example usage
const MyComponent = () => {
  const sampleData = [
    { id: 1, name: 'John Doe', age: 30, city: 'New York' },
    { id: 2, name: 'Jane Smith', age: 25, city: 'London' },
    { id: 3, name: 'Michael Brown', age: 40, city: 'Paris' },
  ];

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'age', headerName: 'Age', width: 100 },
    { field: 'city', headerName: 'City', width: 150 },
  ];

  return <CustomDataGrid data={sampleData} columns={columns} />;
};

export default MyComponent;
