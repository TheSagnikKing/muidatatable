// import * as React from 'react';
// import './Datagrid5.css'
// import dayjs from 'dayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { StaticDateRangePicker } from '@mui/x-date-pickers-pro/StaticDateRangePicker';

// export default function BasicRangeShortcuts() {
//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <StaticDateRangePicker
//         slotProps={{
//           actionBar: { actions: [] },
//         }}
//         calendars={2}
//       />
//     </LocalizationProvider>
//   );
// }


import React, { useEffect, useState } from 'react';
import './Datagrid5.css'
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { StaticDateRangePicker } from '@mui/x-date-pickers-pro/StaticDateRangePicker';

export default function BasicRangeShortcuts() {
  const [selectedDateRange, setSelectedDateRange] = useState(null);

  const handleDateChange = (dateRange) => {
    setSelectedDateRange(dateRange);
  };

  console.log(selectedDateRange)

  useEffect(() => {
    // Accessing the date objects from the array
    const startDateObject = selectedDateRange?.[0]?.$d;
    const endDateObject = selectedDateRange?.[1]?.$d;

    if (startDateObject && endDateObject) {
        // Formatting the dates in "YYYY-MM-DD" format
        const formatDateString = (dateObject) => {
            const year = dateObject.getFullYear();
            const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
            const day = dateObject.getDate().toString().padStart(2, '0');
            return `${year}-${month}-${day}`;
        };

        const startDateFormatted = formatDateString(startDateObject);
        const endDateFormatted = formatDateString(endDateObject);

        console.log('Start Date:', startDateFormatted);
        console.log('End Date:', endDateFormatted);

        // setStartDate(startDateFormatted);
        // setEndDate(endDateFormatted);
    } else {
        console.log('Error: Dates are null');
    }
}, [selectedDateRange]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDateRangePicker
        calendars={2}
        onChange={handleDateChange}
      />
      {/* {selectedDateRange && (
        <div>
          Selected Start Date: {dayjs(selectedDateRange.start).format('YYYY-MM-DD')}
          <br />
          Selected End Date: {dayjs(selectedDateRange.end).format('YYYY-MM-DD')}
        </div>
      )} */}
    </LocalizationProvider>
  );
}



// import React, { useState } from 'react';
// import dayjs from 'dayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { StaticDateRangePicker } from '@mui/x-date-pickers-pro/StaticDateRangePicker';

// export default function BasicRangeShortcuts() {
//   const [startDate, setStartDate] = useState(dayjs());
//   const [endDate, setEndDate] = useState(dayjs().add(1, 'day'));

//   const handlePreviousYear = () => {
//     setStartDate(startDate.subtract(1, 'year'));
//     setEndDate(endDate.subtract(1, 'year'));
//   };

//   const handleNextYear = () => {
//     setStartDate(startDate.add(1, 'year'));
//     setEndDate(endDate.add(1, 'year'));
//   };

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <div>
//         <button onClick={handlePreviousYear}>Previous Year</button>
//         <button onClick={handleNextYear}>Next Year</button>
//         <StaticDateRangePicker
//           value={[startDate, endDate]}
//           onChange={(newValue) => {
//             setStartDate(newValue[0]);
//             setEndDate(newValue[1]);
//           }}
//           calendars={2}
//         />
//       </div>
//     </LocalizationProvider>
//   );
// }


