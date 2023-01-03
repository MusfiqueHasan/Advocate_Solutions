import { Autocomplete, Button, Grid, TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { Box } from "@mui/system";
import React from "react";
import dayjs from "dayjs";

const AppointmentForm = () => {
    const [value, setValue] = React.useState(dayjs(''));

    const handleChange = (newValue) => {
      setValue(newValue);
    };
  
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField fullWidth size="small" label="Name" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth size="small" label="Email" />
          </Grid>
          <Grid item xs={12}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                label="Date&Time picker"
                value={value}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} fullWidth size="small" label="Appointment Time"/>}
              />
            </LocalizationProvider>
          </Grid>
        </Grid>
      </Box>
      <div className="mt-52 flex justify-end">
        <button
          style={{
            color: "white",
            backgroundColor: "blue",
            padding: "8px 20px",
            borderRadius: "10px",
          }}
          onClick={() => {
            // handleFilter();
            // setIsShow(false);
          }}
        >
          Submit
        </button>
      </div>
    </Box>
  );
};

export default AppointmentForm;
