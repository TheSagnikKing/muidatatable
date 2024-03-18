import React, { useMemo } from 'react'
import './ReactTable2.css'
import { useReactTable, getCoreRowModel, flexRender, getPaginationRowModel, getSortedRowModel, getFilteredRowModel } from '@tanstack/react-table'
import { useState } from 'react'

const ReactTable2 = () => {

    const data = useMemo(() => [
        {
            _id: 1,
            LotNo: "00001",
            DieReceipt: "22-05-24",
            day1: 5,
            BumpIn: "23-05-24",
            day2: 6,
            BumpOut: "24-05-24",
            day3: 7,
            ProbeIn: "25-05-24",
            day4: 8,
            ProbeOut: "26-05-24",
            day5: 9,
            AssemblyIn: "27-05-24",
            day6: 4,
            AssemblyOut: "28-05-24",
            day7: 3,
            TestIn: "29-05-24",
            day8: 2,
            TestOut: "21-05-24",
            day9: 1,
            ShipOut: "19-05-24"
        },
        {
            _id: 2,
            LotNo: "00002",
            DieReceipt: "22-04-24",
            day1: 4,
            BumpIn: "10-04-24",
            day2: 3,
            BumpOut: "11-04-24",
            day3: 8,
            ProbeIn: "12-04-24",
            day4: 8,
            ProbeOut: "14-04-24",
            day5: 5,
            AssemblyIn: "15-04-24",
            day6: 4,
            AssemblyOut: "28-05-24",
            day7: 3,
            TestIn: "29-05-24",
            day8: 2,
            TestOut: "21-05-24",
            day9: 1,
            ShipOut: "19-05-24"
        },
        {
            _id: 3,
            LotNo: "00003",
            DieReceipt: "22-05-24",
            day1: 5,
            BumpIn: "23-05-24",
            day2: 6,
            BumpOut: "24-05-24",
            day3: 7,
            ProbeIn: "25-05-24",
            day4: 8,
            ProbeOut: "26-05-24",
            day5: 9,
            AssemblyIn: "27-05-24",
            day6: 4,
            AssemblyOut: "28-05-24",
            day7: 3,
            TestIn: "29-05-24",
            day8: 2,
            TestOut: "21-05-24",
            day9: 1,
            ShipOut: "19-05-24"
        }
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

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            sorting: sorting,
            globalFilter: filtering,
        },
        onSortingChange: setSorting,
    })

    const [opendrop, setOpenDrop] = useState(false)

    return (<>
        <div style={{display:"flex",alignItems:"center",gap:"2rem"}}>
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
                                    { asc: <p>A</p>, desc: <p>D</p> }[h.column.getIsSorted() ?? null]
                                }</div>
                            </div> : <div key={h.id} onClick={h.column.getToggleSortingHandler()}>{flexRender(h.column.columnDef.header, h.getContext())}
                                {
                                    { asc: <p>A</p>, desc: <p>D</p> }[h.column.getIsSorted() ?? null]
                                }
                            </div>)}
                        </div>
                    ))}

                </div>

                <div className='react2_container_table_body'>

                    {table.getRowModel().rows.map((row) => (
                        <div key={row.id}>
                            {
                                row.getVisibleCells().map((cell) => (
                                    // console.log(cell.column.columnDef.header.startsWith('d'))
                                    cell.column.columnDef.header.startsWith('d') ? <div className='react2_container_table_body_day' key={cell.id}>
                                        <div />
                                        <div>{flexRender(cell.column.columnDef.cell, cell.getContext())} days</div>
                                    </div> : <div key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</div>
                                ))
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
    </>
    )
}

export default ReactTable2