import React, { useMemo } from 'react'
import './ReactTable2.css'
import { useReactTable, getCoreRowModel, flexRender, getPaginationRowModel, getSortedRowModel, getFilteredRowModel } from '@tanstack/react-table'
import { useState } from 'react'

const ReactTable2 = () => {

    // const data = useMemo(() => [
    //     {
    //         _id: 1,
    //         LotNo: "00001",
    //         DieReceipt: "22-05-24",
    //         day1: 5,
    //         BumpIn: "23-05-24",
    //         day2: 6,
    //         BumpOut: "24-05-24",
    //         day3: 7,
    //         ProbeIn: "25-05-24",
    //         day4: 8,
    //         ProbeOut: "26-05-24",
    //         day5: 9,
    //         AssemblyIn: "27-05-24",
    //         day6: 4,
    //         AssemblyOut: "28-05-24",
    //         day7: 3,
    //         TestIn: "29-05-24",
    //         day8: 2,
    //         TestOut: "21-05-24",
    //         day9: 1,
    //         ShipOut: "19-05-24"
    //     },
    //     {
    //         _id: 2,
    //         LotNo: "00002",
    //         DieReceipt: "22-04-24",
    //         day1: 4,
    //         BumpIn: "10-04-24",
    //         day2: 3,
    //         BumpOut: "11-04-24",
    //         day3: 8,
    //         ProbeIn: "12-04-24",
    //         day4: 8,
    //         ProbeOut: "14-04-24",
    //         day5: 5,
    //         AssemblyIn: "15-04-24",
    //         day6: 4,
    //         AssemblyOut: "28-05-24",
    //         day7: 3,
    //         TestIn: "29-05-24",
    //         day8: 2,
    //         TestOut: "21-05-24",
    //         day9: 1,
    //         ShipOut: "19-05-24"
    //     },
    //     {
    //         _id: 3,
    //         LotNo: "00003",
    //         DieReceipt: "22-05-24",
    //         day1: 5,
    //         BumpIn: "23-05-24",
    //         day2: 6,
    //         BumpOut: "24-05-24",
    //         day3: 7,
    //         ProbeIn: "25-05-24",
    //         day4: 8,
    //         ProbeOut: "26-05-24",
    //         day5: 9,
    //         AssemblyIn: "27-05-24",
    //         day6: 4,
    //         AssemblyOut: "28-05-24",
    //         day7: 3,
    //         TestIn: "29-05-24",
    //         day8: 2,
    //         TestOut: "21-05-24",
    //         day9: 1,
    //         ShipOut: "19-05-24"
    //     }
    // ], [])

    const data = useMemo(() => [
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
    ], [])

    const columns = [
        {
            header: "Lot No",
            accessorKey: "LotNo",
        },
        {
            header: "DieReceipt",
            accessorKey: "DieReceipt"
        },
        {
            header: "day1",
            accessorKey: "day1"
        },
        {
            header: "BumpIn",
            accessorKey: "BumpIn"
        },

        {
            header: "day2",
            accessorKey: "day2",
        },
        {
            header: "BumpOut",
            accessorKey: "BumpOut"
        },
        {
            header: "day3",
            accessorKey: "day3"
        },
        {
            header: "ProbeIn",
            accessorKey: "ProbeIn"
        },

        {
            header: "day4",
            accessorKey: "day4",
        },
        {
            header: "ProbeOut",
            accessorKey: "ProbeOut"
        },
        {
            header: "day5",
            accessorKey: "day5"
        },
        {
            header: "AssemblyIn",
            accessorKey: "AssemblyIn"
        },

        {
            header: "day6",
            accessorKey: "day6",
        },
        {
            header: "AssemblyOut",
            accessorKey: "AssemblyOut"
        },
        {
            header: "day7",
            accessorKey: "day7"
        },
        {
            header: "TestIn",
            accessorKey: "TestIn"
        },

        {
            header: "day8",
            accessorKey: "day8",
        },
        {
            header: "TestOut",
            accessorKey: "TestOut"
        },
        {
            header: "day9",
            accessorKey: "day9"
        },
        {
            header: "ShipOut",
            accessorKey: "ShipOut"
        },
    ]

    const [sorting, setSorting] = useState([])
    const [filtering, setFiltering] = useState('')
    const [columnVisibility, setColumnVisibility] = React.useState({})
    const [pagination, setPagination] = useState({
        pageIndex: 0, //initial page index
        pageSize: 4, //default page size
    });

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            sorting: sorting,
            globalFilter: filtering,
            columnVisibility: columnVisibility,
            pagination: pagination,
        },
        onSortingChange: setSorting,
        onGlobalFilterChange: setFiltering,
        onColumnVisibilityChange: setColumnVisibility,
        onPaginationChange: (newPagination) => setPagination(newPagination),
    })

    const handlePageChange = (pageIndex) => {
        setPagination({ ...pagination, pageIndex })
    }

    const getPageRanges = () => {
        const { pageSize } = pagination;
        const pageCount = table.getPageCount();
        const pageRanges = [];
        let startIndex = 0;

        for (let i = 0; i < pageCount; i++) {
            const endIndex = Math.min(startIndex + pageSize, data.length);
            pageRanges.push({
                label: `${startIndex + 1} - ${endIndex}`,
                pageIndex: i,
            });
            startIndex = endIndex;
        }

        return pageRanges;
    }

    const [opendrop, setOpenDrop] = useState(false)

    // const colors = ['#ff00002b', '#00ff002b', '#0000ff2b', '#ffff002b'];

    return (<>
        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            <input
                type="text"
                value={filtering}
                onChange={(e) => setFiltering(e.target.value)}
                className='filter-box'
                placeholder='Search'
            />

            <div className='column_hiding'>
                <div>Show/Hide Column</div>
                <div onClick={() => setOpenDrop((prev) => !prev)}>v</div>
            </div>

            {
                opendrop && <div className='column_open'>{table.getAllLeafColumns().map(column => {
                    return (
                        <div key={column.id} className="px-1">
                            <label>
                                <input
                                    {...{
                                        type: 'checkbox',
                                        checked: column.getIsVisible(),
                                        onChange: column.getToggleVisibilityHandler(),
                                    }}
                                />{' '}
                                {column.id}
                            </label>
                        </div>
                    )
                })}</div>
            }
        </div>
        <main className='react2_container'>
            <div className='react2_container_table'>
                <div className='react2_container_table_head'>

                    {table.getHeaderGroups().map(headerGroup => (
                        <div key={headerGroup.id}>
                            {headerGroup.headers.map((h) => h.column.columnDef.header.startsWith('d') ? <div key={h.id} className='react2_container_table_head_day'>
                                <div />
                                <div onClick={h.column.getToggleSortingHandler()}>{
                                    { asc: <p style={{ color: "red", marginLeft: "5px" }}>A</p>, desc: <p style={{ color: "red", marginLeft: "5px" }}>D</p> }[h.column.getIsSorted() ?? null]
                                }</div>
                            </div> : <div key={h.id} onClick={h.column.getToggleSortingHandler()}>{flexRender(h.column.columnDef.header, h.getContext())}
                                {
                                    { asc: <p style={{ color: "red", marginLeft: "5px" }}>A</p>, desc: <p style={{ color: "red", marginLeft: "5px" }}>D</p> }[h.column.getIsSorted() ?? null]
                                }
                            </div>)}
                        </div>
                    ))}

                </div>

                <div className='react2_container_table_body'>

                    {/* {table.getRowModel().rows.map((row) => (
                        <div key={row.id}>
                            {
                                row.getVisibleCells().map((cell) => (
                                    // console.log(cell.column.columnDef.header.startsWith('d'))
                                    cell.column.columnDef.header.startsWith('d') ? <div className='react2_container_table_body_day' key={cell.id}>
                                        <div />
                                        <div>{flexRender(cell.column.columnDef.cell, cell.getContext())} days</div>
                                    </div> : <div key={cell.id} style={{background:"#ff00002b"}}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</div>
                                ))
                            }
                        </div>
                    ))} */}

                    {table.getRowModel().rows.map((row) => (
                        <div key={row.id}>
                            {
                                row.getVisibleCells().map((cell, index) => {
                                    // Define an array of seven different colors
                                    const colors = ['#ff00002b', '#00ff002b', '#0000ff2b', '#ff00ff2b', '#ffff002b', '#00ffff2b', '#ff80002b'];

                                    // Determine which color to use based on the index
                                    const colorIndex = index % colors.length;
                                    const backgroundColor = colors[colorIndex];

                                    return (
                                        cell.column.columnDef.header.startsWith('d') ?
                                            <div className='react2_container_table_body_day' key={cell.id}
                                            // style={{background}}
                                            >
                                                <div />
                                                <div>
                                                    {flexRender(cell.column.columnDef.cell, cell.getContext())} days
                                                </div>
                                            </div>
                                            :
                                            <div key={cell.id} style={{ background: backgroundColor }}>
                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                            </div>
                                    );
                                })
                            }
                        </div>
                    ))}




                    {/* <div>
                        <div>Lot No</div>
                        <div>DieReceipt</div>
                        <div className='react2_container_table_body_day'>
                            <div />
                            <div>v</div>
                        </div>
                        <div>BumpIn</div>
                        <div className='react2_container_table_body_day'>
                            <div />
                            <div>v</div>
                        </div>
                        <div>BumpOut</div>
                        <div className='react2_container_table_body_day'>
                            <div />
                            <div>v</div>
                        </div>
                        <div>ProbeIn</div>
                        <div className='react2_container_table_body_day'>
                            <div />
                            <div>v</div>
                        </div>
                        <div>ProbeOut</div>
                        <div className='react2_container_table_body_day'>
                            <div />
                            <div>v</div>
                        </div>
                        <div>AssemblyIn</div>
                        <div className='react2_container_table_body_day'>
                            <div />
                            <div>v</div>
                        </div>
                        <div>AssemblyOut</div>
                        <div className='react2_container_table_body_day'>
                            <div />
                            <div>v</div>
                        </div>
                        <div>TestIn</div>
                        <div className='react2_container_table_body_day'>
                            <div />
                            <div>v</div>
                        </div>
                        <div>TestOut</div>
                        <div className='react2_container_table_body_day'>
                            <div />
                            <div>v</div>
                        </div>
                        <div>ShipOut</div>
                    </div> */}


                </div>
            </div>
        </main>

        <div className='pagination_container'>
            {/* <button disabled={!table.getCanPreviousPage()} onClick={() => table.setPageIndex(0)}>First Page</button> */}
            <button disabled={!table.getCanPreviousPage()} onClick={() => table.previousPage()}>{"<"}</button>
            <button disabled={!table.getCanNextPage()} onClick={() => table.nextPage()}>{">"}</button>
            {/* <button disabled={!table.getCanNextPage()} onClick={() => table.setPageIndex(table.getPageCount() - 1)}>Last Page</button> */}


            <p>Showing <select
                value={pagination.pageIndex}
                onChange={(e) => handlePageChange(Number(e.target.value))}
            >
                {getPageRanges().map((range) => (
                    <option key={range.pageIndex} value={range.pageIndex}>
                        {range.pageIndex === table.getPageCount() - 1
                            ? `${range.label.split('-')[0]} - ${data.length}` // Adjust label for last page
                            : range.label}
                    </option>
                ))}
            </select> of {table.getPageCount()}</p>
        </div>
    </>
    )
}

export default ReactTable2

