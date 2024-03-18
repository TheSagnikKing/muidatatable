import React from 'react';
import './Datagrid4.css'
import MUIDataTable from "mui-datatables";

function YourCustomRowComponent(props) {
    const { name, cardNumber, cvc, expiry } = props;

    return (
        <div>
            <h1>
                {name}
            </h1>
            <p>
                Number: {cardNumber} <br />
                CVC: {cvc} <br />
                expiry: {expiry}
            </p>
        </div>
    );
}

const creditCards = [
    {
        name: "Tom Tallis",
        cardNumber: "5500005555555559",
        cvc: "582",
        expiry: "02/24"
    },
    {
        name: "Rich Harris",
        cardNumber: "4444444444444448",
        cvc: "172",
        expiry: "03/22"
    },
    {
        name: "Moby Dixon",
        cardNumber: "3566003566003566",
        cvc: "230",
        expiry: "12/25"
    }
];

const columnata = [
    {
        name: "LotNo",
        label: "LotNo",

    },
    {
        name: "cardNumber",
        label: "Card Number"
    },
    {
        name: "cvc",
        label: "CVC"
    },
    {
        name: "expiry",
        label: "Expiry"
    },
]


const customdata = [
    {
        _id: 1,
        LotNo: "Lot No",
        DieReceipt: "DieReceipt",
        day1: "5 days",
        BumpIn: "BumpIn",
        day2: "5 day",
        BumpOut: "BumpOut",
        day3: "5 day",
        ProbeIn: "ProbeIn",
        day4: "5 day",
        ProbeOut: "ProbeOut",
        day5: "5 day",
        AssemblyIn: "AssemblyIn",
        day6: "5 day",
        AssemblyOut: "AssemblyOut",
        day7: "5 day",
        TestIn: "TestIn",
        day8: "5 day",
        TestOut: "TestOut",
        day9: "5 day",
        ShipOut: "ShipOut"
    },
]

function Example() {
    return (
        <MUIDataTable
            title="Cards"
            data={creditCards}
            columns={columnata}
            options={{
                selectableRows: "none",
                responsive: "standard",
                customToolbar: null,
                search: true,
                customSearchRender: (searchText, handleSearch, hideSearch, options) => {
                    return (
                        //   <CustomSearchRender
                        //     searchText={searchText}
                        //     onSearch={handleSearch}
                        //     onHide={hideSearch}
                        //     options={options}
                        //   />
                        <h1>Search</h1>
                    );
                },
                customRowRender: data => {
                    const [LotNo, DieReceipt, day1, BumpIn, day2, BumpOut, day3, ProbeIn, day4, ProbeOut, day5, AssemblyIn, day6,AssemblyOut,day7, TestIn,day8, TestOut,day9,ShipOut] = customdata;

                    return (


                        <tr key={LotNo}>
                            <td colSpan={4}>
                                <CustomRow
                                    LotNo={LotNo}
                                    DieReceipt={DieReceipt}
                                    day1={day1}
                                    BumpIn={BumpIn}
                                    day2={day2}
                                    BumpOut={BumpOut}
                                    day3={day3}
                                    ProbeIn={ProbeIn}
                                    day4={day4}
                                    ProbeOut={ProbeOut}
                                    day5={day5}
                                    AssemblyIn={AssemblyIn}
                                    day6={day6}
                                    AssemblyOut={AssemblyOut}
                                    day7={day7}
                                    TestIn={TestIn}
                                    day8={day8}
                                    TestOut={TestOut}
                                    day9={day9}
                                    ShipOut={ShipOut}
                                />
                            </td>
                        </tr>

                    );
                },
            }}
        />
    );
}

const CustomRow = ({ LotNo, DieReceipt, day1, BumpIn, day2, BumpOut, day3, ProbeIn, day4, ProbeOut, day5, AssemblyIn, day6,AssemblyOut,day7, TestIn,day8, TestOut,day9,ShipOut }) => {
    return (

            <main className='custom_row_render'>
                <div><p>{LotNo}</p></div>
                <div><p>{DieReceipt}</p></div>
                <div className='day_c'>
                    <div />
                    <div><p>{day1}</p></div>
                </div>
                <div><p>{BumpIn}</p></div>
                <div className='day_c'>
                    <div />
                    <div><p>{day2}</p></div>
                </div>
                <div><p>{BumpOut}</p></div>
                <div className='day_c'>
                    <div />
                    <div><p>{day3}</p></div>
                </div>
                <div><p>{ProbeIn}</p></div>
                <div className='day_c'>
                    <div />
                    <div><p>{day4}</p></div>
                </div>
                <div><p>{ProbeOut}</p></div>
                <div className='day_c'>
                    <div />
                    <div><p>{day5}</p></div>
                </div>
                <div><p>{AssemblyIn}</p></div>
                <div className='day_c'>
                    <div />
                    <div><p>{day6}</p></div>
                </div>
                <div><p>{AssemblyOut}</p></div>
                <div className='day_c'>
                    <div />
                    <div><p>{day7}</p></div>
                </div>
                <div><p>{TestIn}</p></div>
                <div className='day_c'>
                    <div />
                    <div><p>{day8}</p></div>
                </div>
                <div><p>{TestOut}</p></div>
                <div className='day_c'>
                    <div />
                    <div><p>{day9}</p></div>
                </div>
                <div><p>{ShipOut}</p></div>
            </main>
    )
}

export default Example;


// columns
// options: {
//     filter: true,
//     sort: true,
//     sortDirection: 'asc', // Initial sort direction (ascending)
//     customHeadRender: (columnMeta) => <CreditCardDetails name={columnMeta.label} />,
//     // customSort: (data, colIndex, order) => {
//     //     // Implement custom sorting logic for the "Name" column
//     //     return data.sort((a, b) => {
//     //       // Assuming 'name' is a string, perform string comparison
//     //       return order === 'asc' ? a[colIndex].localeCompare(b[colIndex]) : b[colIndex].localeCompare(a[colIndex]);
//     //     });
//     //   }
// },

const data = [
    { _id: 1, name: "John", gender: "male", salary: 30000 },
    { _id: 2, name: "Jane", gender: "female", salary: 35000 },
    { _id: 3, name: "Michael", gender: "male", salary: 40000 },
    { _id: 4, name: "Olivia", gender: "female", salary: 28000 },
    { _id: 5, name: "David", gender: "male", salary: 52000 },
    { _id: 6, name: "Sophia", gender: "female", salary: 38000 },
    { _id: 7, name: "William", gender: "male", salary: 45000 },
    { _id: 8, name: "Isabella", gender: "female", salary: 32000 },
    { _id: 9, name: "James", gender: "male", salary: 60000 },
    { _id: 10, name: "Charlotte", gender: "female", salary: 25000 },
    { _id: 11, name: "Robert", gender: "male", salary: 42000 },
    { _id: 12, name: "Ava", gender: "female", salary: 39000 },
    { _id: 13, name: "Richard", gender: "male", salary: 55000 },
    { _id: 14, name: "Mia", gender: "female", salary: 31000 },
    { _id: 15, name: "Joseph", gender: "male", salary: 48000 },
    { _id: 16, name: "Evelyn", gender: "female", salary: 27000 },
    { _id: 17, name: "Charles", gender: "male", salary: 62000 },
    { _id: 18, name: "Harper", gender: "female", salary: 34000 },
    { _id: 19, name: "Thomas", gender: "male", salary: 50000 },
    { _id: 20, name: "Amelia", gender: "female", salary: 29000 },
    { _id: 21, name: "Christopher", gender: "male", salary: 43000 },
    { _id: 22, name: "Luna", gender: "female", salary: 40000 },
    { _id: 23, name: "Daniel", gender: "male", salary: 58000 },
    { _id: 24, name: "Sofia", gender: "female", salary: 36000 },
    { _id: 25, name: "Matthew", gender: "male", salary: 46000 }
];