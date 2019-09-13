import React, { Fragment, useState } from "react";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { DatePicker } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import "moment";


const Calendar = (props) => {
    function changeDate(item){
      props.setDate(item.toISOString("T")[0])
    }

  return (
    <Fragment>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <DatePicker
            variant="inline"
            label="Pick a Date"
            value={props.imgDate}
            onChange={changeDate}
          />
        
      </MuiPickersUtilsProvider>
    </Fragment>
  );
};

export default Calendar;