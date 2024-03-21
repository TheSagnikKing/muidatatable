import React, { useState } from 'react';
import { DatePicker } from 'antd';
import { getISOWeek } from 'date-fns';

const { RangePicker } = DatePicker;

const MyRangePicker = () => {
  
    const [date, setDate] = useState(null);

    const onChange = (dates) => {
        console.log('onChange: ', dates);
        setDate(dates);
    };

    // Accessing the date objects from the array
    const startDateObject = date && date[0].$d;
    const endDateObject = date && date[1].$d;

    // Extracting the date values from the date objects
    const startDate1 = startDateObject && startDateObject.toISOString().split('T')[0]; // Convert to string in desired format
    const endDate1 = endDateObject && endDateObject.toISOString().split('T')[0]; // Convert to string in desired format

    console.log('Start Date:', startDate1);
    console.log('End Date:', endDate1);


    const getWeek = (dates) => {
        console.log('week: ', dates.map(getISOWeek));
    };

  return (
    <div>
      <RangePicker onChange={onChange} />
      <br />
      <RangePicker showTime onChange={onChange} />
      <br />
      <RangePicker mode="week" onChange={getWeek} />
      <br />
      <RangePicker mode="month" onChange={onChange} />
      <br />
      <RangePicker mode="year" onChange={onChange} />
    </div>
  );
};

export default MyRangePicker;
