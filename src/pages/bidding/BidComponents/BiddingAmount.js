import React from 'react';
import { Link } from 'react-router-dom';
import BiddingAnimation from '../../../Animations/BiddingAnimation';

const BiddingAmount = () => {
    return (
        <div className=" my-16">
            <div className=" py-7">
                <h1 className=" text-xl font-bold font-mono text-center underline underline-offset-8">
                    Bidd Here
                </h1>
            </div>
            <div className=" grid grid-cols-2  px-5 xl:px-20">
                <div className=" border border-sky-400 hover:border-indigo-500 rounded-xl shadow-lg w-full h-full px-5 xl:p-10 ">
                    <div className=' flex justify-end'>
                        <button className=" rounded-xl p-2 text-xl font-bold bg-sky-300 animate-pulse ">
                            Lowest Bidd : 40000 BDT
                        </button>
                    </div>

                    <div className=' grid place-items-center m-10'>
                        <input placeholder=' Bidd Your Expected Amount' className=' p-3 w-full border-2 rounded-lg  border-sky-500' type="number" name="" id="" />
                    </div>
                    <div className=' flex gap-2'>
                        <Link to="/bidding">
                            <button className=' mt-2 text-center font-bold px-10 py-2 rounded-xl text-white  bg-indigo-600 hover:bg-indigo-700 '>
                                See All Post
                            </button>
                        </Link>
                        <button className=' mt-2 text-center font-bold px-10 py-2 rounded-xl text-white  bg-green-500 hover:bg-green-600 '>
                            Bidd
                        </button>
                        <Link to="/bidding_history">
                            <button className=' mt-2 text-center font-bold px-10 py-2 rounded-xl text-white bg-teal-500 hover:bg-teal-600  '>
                                See  Bidd History
                            </button>
                        </Link>


                    </div>

                </div>
                <div>
                    <BiddingAnimation />
                </div>
            </div>
        </div>
    );
};

export default BiddingAmount;