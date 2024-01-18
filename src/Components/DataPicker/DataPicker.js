import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DataPicker(props) {

  
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
      return (
          <>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          showTimeSelect
          timeIntervals={15}
          isClearable
          dateFormat="MMMM d, yyyy h:mm aa"
          minDate={new Date()}
          showDisabledMonthNavigation
        />
        <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        showTimeSelect
        timeIntervals={15}
        isClearable
        dateFormat="MMMM d, yyyy h:mm aa"
        minDate={new Date()}
        showDisabledMonthNavigation
      />
      </>
      );
}

export default DataPicker;
