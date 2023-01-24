import React, { useState, useEffect } from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import cat1 from "../../assets/icons/cat1.png";
import cat3 from "../../assets/icons/cat3.png";
import cat4 from "../../assets/icons/cat4.png";
import cat5 from "../../assets/icons/cat5.png";
import cat6 from "../../assets/icons/cat6.png";
import cat7 from "../../assets/icons/cat7.png";
import cat8 from "../../assets/icons/cat8.png";
import cat9 from "../../assets/icons/cat9.png";
import cat10 from "../../assets/icons/cat10.png";
import womentcat1 from "../../assets/icons/womentcat1.png";
import womentcat2 from "../../assets/icons/womentcat2.png";
import womentcat3 from "../../assets/icons/womentcat3.png";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase/Firebase-config";
import { Link } from "react-router-dom";
const Consultation = () => {
  const [category, setCategory] = useState([]);
  console.log(category);

  const categorysCollectionRef = collection(db, "categorys");

  useEffect(() => {

    const getcategory = async () => {

      const data = await getDocs(categorysCollectionRef);

      console.log(data, "data");
      setCategory(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getcategory();
  }, []);
  return (
    <div className=" p-10 mt-10">
      <div>
        <h1 className=" text-4xl font-bold italic text-gray-800 hober:text-gold">
          Please select a speciality
        </h1>
      </div>
      {category ? <div className=" grid grid-cols-4 mt-8 gap-5">
        {category?.map((elem) => (
          <div key={elem?.id} className=" shadow-lg p-5 rounded-xl cursor-pointer ">
            <Link to={`/advocates/${elem.id}`}>
              <div className=" w-20 py-3">
                <img src={elem?.img} alt="catIcon" />
              </div>
              <div>
                <h1 className=" text-xl font-bold hover:text-gold">
                  {elem?.name}
                </h1>

                <p className=" pt-4 text-gray-500 font-medium">
                  {elem?.description}{" "}
                </p>
                <p className=" text-right py-2  animate-pulse font-extrabold  text-gold ">
                  {" "}
                  <ArrowRightAltIcon fontSize="large" />{" "}
                </p>
              </div>
            </Link>
          </div>))}


      </div> : <>hello</>}

    </div>
  );
};

export default Consultation;
