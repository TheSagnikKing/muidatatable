import React from 'react'
import './Datagrid8.css'

const dataarray = [
  {
    _id: 1,
    FirstName: "Aagnik",
    LastName: "Nandy",
    section: "A",
    Roll: "30"
  },
  {
    _id: 2,
    FirstName: "Bagnik",
    LastName: "Nandy",
    section: "A",
    Roll: "30"
  },
  {
    _id: 3,
    FirstName: "Cagnik",
    LastName: "Nandy",
    section: "A",
    Roll: "30"
  },
  {
    _id: 4,
    FirstName: "Dagnik",
    LastName: "Nandy",
    section: "A",
    Roll: "30"
  },
  {
    _id: 5,
    FirstName: "Eagnik",
    LastName: "Nandy",
    section: "A",
    Roll: "30"
  },
  {
    _id: 6,
    FirstName: "Fagnik",
    LastName: "Nandy",
    section: "A",
    Roll: "30"
  },
  {
    _id: 7,
    FirstName: "Gagnik",
    LastName: "Nandy",
    section: "A",
    Roll: "30"
  },
  {
    _id: 8,
    FirstName: "Hagnik",
    LastName: "Nandy",
    section: "A",
    Roll: "30"
  },
  {
    _id: 9,
    FirstName: "Iagnik",
    LastName: "Nandy",
    section: "A",
    Roll: "30"
  },
  {
    _id: 10,
    FirstName: "Jagnik",
    LastName: "Nandy",
    section: "A",
    Roll: "30"
  },
  {
    _id: 11,
    FirstName: "Kagnik",
    LastName: "Nandy",
    section: "A",
    Roll: "30"
  },
  {
    _id: 12,
    FirstName: "Lagnik",
    LastName: "Nandy",
    section: "A",
    Roll: "30"
  },
  {
    _id: 13,
    FirstName: "Magnik",
    LastName: "Nandy",
    section: "A",
    Roll: "30"
  },
  {
    _id: 14,
    FirstName: "Nagnik",
    LastName: "Nandy",
    section: "A",
    Roll: "30"
  },
  {
    _id: 15,
    FirstName: "Oagnik",
    LastName: "Nandy",
    section: "A",
    Roll: "30"
  },
  {
    _id: 16,
    FirstName: "Pagnik",
    LastName: "Nandy",
    section: "A",
    Roll: "30"
  },
  {
    _id: 17,
    FirstName: "Qagnik",
    LastName: "Nandy",
    section: "A",
    Roll: "30"
  },
  {
    _id: 18,
    FirstName: "Ragnik",
    LastName: "Nandy",
    section: "A",
    Roll: "30"
  },
  {
    _id: 19,
    FirstName: "Sagnik",
    LastName: "Nandy",
    section: "A",
    Roll: "30"
  },
  {
    _id: 20,
    FirstName: "Tagnik",
    LastName: "Nandy",
    section: "A",
    Roll: "30"
  }
]

const Datagrid8 = () => {

  return (
    <div className='grid8_c'>
      < div div className='grid8_c_table_box' >
        <div className='grid8_c_table_container'>
          <div className='grid8_c_header_c'>
            <div><p>ID</p></div>
            <div><p>First Name</p></div>
            <div><p>Last Name</p></div>
            <div><p>Section</p></div>
            <div><p>Roll</p></div>
          </div>

          {
            dataarray.map((c) => (
              <div className='grid8_c_body_c' key={c._id}>
                <div><p>{c._id}</p></div>
                <div><p>{c.FirstName}</p></div>
                <div><p>{c.LastName}</p></div>
                <div><p>{c.section}</p></div>
                <div><p>{c.Roll}</p></div>
              </div>
            ))
          }
        </div>
      </div>
    </div >
  )
}

export default Datagrid8



