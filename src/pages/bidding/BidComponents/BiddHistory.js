import React from 'react';
import { Link } from 'react-router-dom';

import HistoryAnimation from '../../../Animations/HistoryAnimation';

const BiddHistory = () => {
    return (
        <div className=" my-16">
            <div className=" py-7">
                <h1 className=" text-xl font-bold font-mono text-center underline underline-offset-8">
                    All Bid History
                </h1>
            </div>
            <div className=" grid grid-cols-2  px-5 xl:px-20">
                <div className=" border border-sky-400 hover:border-indigo-500 rounded-xl shadow-lg w-full h-full px-5 xl:p-10 ">
                    <div className=' flex justify-end'>
                        <button className=" rounded-xl p-2 text-xl font-bold bg-sky-300 animate-pulse ">
                            Lowest Bid : 40000 BDT
                        </button>
                    </div>

                    <div className=' my-10'>
                        <table class="table-auto">
                            <thead className=' border-2 p-5 '>
                                <tr className=' border-2 bg-sky-100'>
                                    <th className=' p-5' >Candidate Name</th>
                                    <th className=' p-5'>Biding Amount</th>
                                    <th className=' p-5'>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className=' border-2 '>
                                    <td className=' p-5'>Adv. SirajuL Islam</td>
                                    <td className=' p-5'>70000</td>
                                    <td className=' p-5'>
                                        <button className=' mt-2 text-center font-bold px-10 py-2 rounded-xl text-white  bg-sky-500 hover:bg-sky-600  '>
                                            pending
                                        </button>
                                    </td>
                                </tr>
                                <tr className=' border-2 '>
                                    <td className=' p-5'>Adv. Anisul Islam</td>
                                    <td className=' p-5'>50000</td>
                                    <td className=' p-5'>
                                        <button className=' mt-2 text-center font-bold px-10 py-2 rounded-xl text-white  bg-sky-500 hover:bg-sky-600 '>
                                            pending
                                        </button>
                                    </td>
                                </tr>
                                <tr className=' border-2 '>
                                    <td className=' p-5'>Adv. Rashed Khan</td>
                                    <td className=' p-5'>40000</td>
                                    <td className=' p-5'>
                                        <button className=' mt-2 text-center font-bold px-10 py-2 rounded-xl text-white  bg-green-500 hover:bg-green-600 '>
                                            Confirmed
                                        </button>
                                    </td>
                                </tr>


                            </tbody>
                        </table>
                    </div>
                    <div className=' flex justify-center gap-2'>
                        <Link to="/bidding">
                            <button className=' mt-2 text-center font-bold px-10 py-2 rounded-xl text-white  bg-indigo-600 hover:bg-indigo-700 '>
                                See All Post
                            </button>
                        </Link>

                    </div>

                </div>
                <div>
                    <HistoryAnimation />
                </div>
            </div>
        </div>
    );
};

export default BiddHistory;