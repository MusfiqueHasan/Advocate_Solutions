import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { Box } from "@mui/system";
import { addDoc, collection, doc, getDocs, setDoc } from "firebase/firestore";
import dayjs from "dayjs";
import { db } from '../../../Firebase/Firebase-config';
import { toast } from 'react-toastify';

const AppointmentForm = (params) => {
  const advocate = params?.findAdv;
  const [appointment, setAppointment] = useState({
    name: '',
    date: '',
    trxId: '',
    address: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!appointment.trxId) {
      toast.warning("Please Give Your Transection Id Before Appoinment Booking  ");
      return
    }
    await addDoc(collection(db, "appointments"), {
      name: appointment.name,
      date: appointment.date,
      trxId: appointment.trxId,
      address: appointment.address,
    }).then(() => {
      console.log("Appointment added to Firestore!");
      toast.success("Appointment SuccessFully Booked ");
      setAppointment({ name: '', date: '', trxId: '', address: '' });
    })
      .catch((error) => {
        console.error("Error adding appointment to Firestore: ", error);
      });
  }

  const handleChange = (event) => {
    setAppointment({
      ...appointment,
      [event.target.name]: event.target.value,
    });
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <form onSubmit={handleSubmit}>
        <h1 className=' font-bold text-lg py-2'>Enter Your Full Name : </h1>
        <input
          className=' text-lg p-3 border-2 border-sky-500 w-full rounded-lg'
          type="text"
          name="name"
          placeholder="Name"
          value={appointment.name}
          onChange={handleChange}
        />
        <h1 className=' font-bold text-lg py-2'>Enter Your Address : </h1>
        <input
          className=' text-lg p-3 border-2 border-sky-500 w-full rounded-lg'
          type="text"
          name="address"
          placeholder="Your Address"
          value={appointment.address}
          onChange={handleChange}
        />

        <h1 className=' font-bold text-lg py-2'>Enter Your Transection Id : </h1>
        <input
          className=' text-lg p-3 border-2 border-sky-500 w-full rounded-lg'
          type="text"
          name="trxId"
          value={appointment.trxId}
          placeholder="Transection Id"
          onChange={handleChange}
        />
        <p className=' text-xs'> ** NB: Please Send <span className='font-bold text-sm'> {advocate?.fees} Tk</span> To  <span className='font-bold text-sm'>"018xxxxxxxx"</span>  Number by Bkash Before Appointment is Booked. </p>
        <h1 className=' font-bold text-lg py-2'>Select a Date For Appointment  : </h1>
        <input
          className=' text-lg p-3 border-2 border-sky-500 w-full rounded-lg my-3'
          type="date"
          name="date"
          
          value={appointment.date}
          onChange={handleChange}
        />

        <div className=' grid place-items-center py-4'>
          <button className=' bg-green-500 font-bold py-2 px-5 text-center rounded-xl text-white ' type="submit">Book Appointment</button>
        </div>


      </form>

    </Box>
  );
};

export default AppointmentForm;
