import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import cat1 from "../../Assets/icons/cat1.png";
import cat3 from "../../Assets/icons/cat3.png";
import cat4 from "../../Assets/icons/cat4.png";
import cat5 from "../../Assets/icons/cat5.png";
import cat6 from "../../Assets/icons/cat6.png";
import cat7 from "../../Assets/icons/cat7.png";
import cat8 from "../../Assets/icons/cat8.png";
import cat9 from "../../Assets/icons/cat9.png";
import cat10 from "../../Assets/icons/cat10.png";
import womentcat1 from "../../Assets/icons/womentcat1.png";
import womentcat2 from "../../Assets/icons/womentcat2.png";
import womentcat3 from "../../Assets/icons/womentcat3.png";
import { Link } from "react-router-dom";
const Consultation = () => {
  return (
    <div className=" p-10 mt-10">
      <div>
        <h1 className=" text-4xl font-bold italic text-gray-800 hober:text-gold">
          Please select a speciality
        </h1>
      </div>
      <div className=" grid grid-cols-4 mt-8 gap-5">
        <div className=" shadow-lg p-5 rounded-xl cursor-pointer ">
          <Link to="/advocates">
            <div className=" w-20 py-3">
              <img src={cat1} alt="catIcon" />
            </div>
            <div>
              <h1 className=" text-xl font-bold hover:text-gold">
                Criminal Lawyer
              </h1>

              <p className=" pt-4 text-gray-500 font-medium">
                If you or a loved one has been charged with a crime, a criminal lawyer is the type of lawyer you should turn to. A criminal lawyer will be knowledgeable in areas related to criminal law, including issues related to bail, arraignment, arrest, pleas and any issues relating to the criminal trial itself.{" "}
              </p>
              <p className=" text-right py-2  animate-pulse font-extrabold  text-gold ">
                {" "}
                <ArrowRightAltIcon fontSize="large" />{" "}
              </p>
            </div>
          </Link>
        </div>
        <div className=" shadow-lg p-5 rounded-xl cursor-pointer">
          <Link to="/advocates">
            <div className=" w-20 py-3">
              <img src={cat10} alt="catIcon" />
            </div>
            <div>
              <h1 className=" text-xl font-bold hover:text-gold">
                Estate Planning Lawyer
              </h1>

              <p className=" pt-4 text-gray-500 font-medium">
                The estate planning lawyer specializes in wills and trusts, and can help you to draw up a will to pass on your assets. Among other estate planning legal services, this type of lawyer can help you set up a trust which will help take care of your children’s financial needs.{" "}
              </p>
              <p className=" text-right py-2  animate-pulse font-extrabold  text-gold ">
                {" "}
                <ArrowRightAltIcon fontSize="large" />{" "}
              </p>
            </div>
          </Link>

        </div>
        <div className=" shadow-lg p-5 rounded-xl cursor-pointer">
          <Link to="/advocates">
            <div className=" w-20 py-3">
              <img src={cat3} alt="catIcon" />
            </div>
            <div>
              <h1 className=" text-xl font-bold hover:text-gold">
                Bankruptcy Lawyer
              </h1>

              <p className=" pt-4 text-gray-500 font-medium">
                If you’re having financial difficulties and are contemplating bankruptcy proceedings, you’ll want to consult with a bankruptcy attorney. This type of lawyer can advise you on your eligibility for bankruptcy, the types of bankruptcy you’ll want to consider and which type would be best for your particular circumstances, as well as any potential alternatives to bankruptcy which you may want to explore.{" "}
              </p>
              <p className=" text-right py-2  animate-pulse font-extrabold  text-gold ">
                {" "}
                <ArrowRightAltIcon fontSize="large" />{" "}
              </p>
            </div>
          </Link>

        </div>
        <div className=" shadow-lg p-5 rounded-xl cursor-pointer">
          <Link to="/advocates">
            <div className=" w-20 py-3">
              <img src={cat4} alt="catIcon" />
            </div>
            <div>
              <h1 className=" text-xl font-bold hover:text-gold">
                Employment Lawyer
              </h1>

              <p className=" pt-4 text-gray-500 font-medium">
                Whether you’re a company that’s having a problem with an employee, or an individual who’s having problems with the company you work for, an employment lawyer can generally provide advice about legal issues which arise from an employment contract or within an employment relationship.
              </p>
              <p className=" text-right py-2  animate-pulse font-extrabold  text-gold ">
                {" "}
                <ArrowRightAltIcon fontSize="large" />{" "}
              </p>
            </div>
          </Link>

        </div>
        <div className=" shadow-lg p-5 rounded-xl cursor-pointer">
          <Link to="/advocates">
            <div className=" w-20 py-3">
              <img src={cat5} alt="catIcon" />
            </div>
            <div>
              <h1 className=" text-xl font-bold hover:text-gold">
                Corporate Lawyer
              </h1>

              <p className=" pt-4 text-gray-500 font-medium">
                If you own a corporation, you’ll likely find yourself consulting with a corporate attorney on many different occasions. A corporate lawyer will be able to help you with issues related to the formation of your corporation, general corporate governance issues and corporate compliance issues.{" "}
              </p>
              <p className=" text-right py-2  animate-pulse font-extrabold  text-gold ">
                {" "}
                <ArrowRightAltIcon fontSize="large" />{" "}
              </p>
            </div>
          </Link>

        </div>
        <div className=" shadow-lg p-5 rounded-xl cursor-pointer">
          <Link to="/advocates">
            <div className=" w-20 py-3">
              <img src={cat6} alt="catIcon" />
            </div>
            <div>
              <h1 className=" text-xl font-bold hover:text-gold">
                Immigration Lawyer
              </h1>

              <p className=" pt-4 text-gray-500 font-medium">
                When you’re dealing with immigration issues, you’ll want to consult with an immigration lawyer. This type of lawyer should be well versed in dealing with immigration issues such as visas, citizenship, refugee or asylum and green cards.{" "}
              </p>
              <p className=" text-right py-2  animate-pulse font-extrabold  text-gold ">
                {" "}
                <ArrowRightAltIcon fontSize="large" />{" "}
              </p>
            </div>
          </Link>

        </div>
        <div className=" shadow-lg p-5 rounded-xl cursor-pointer">
          <Link to="/advocates">
            <div className=" w-20 py-3">
              <img src={cat7} alt="catIcon" />
            </div>
            <div>
              <h1 className=" text-xl font-bold hover:text-gold">
                Medical Malpractice Lawyer
              </h1>

              <p className=" pt-4 text-gray-500 font-medium">
                Doctors do occasionally make mistakes, and if you’re facing the consequences of a medical mistake such as a medical misdiagnosis or inaccurate treatment, a lawyer who specializes in medical malpractice issues can be particular helpful.{" "}
              </p>
              <p className=" text-right py-2  animate-pulse font-extrabold  text-gold ">
                {" "}
                <ArrowRightAltIcon fontSize="large" />{" "}
              </p>
            </div>
          </Link>

        </div>
        <div className=" shadow-lg p-5 rounded-xl cursor-pointer">
          <Link to="/advocates">
            <div className=" w-20 py-3">
              <img src={cat8} alt="catIcon" />
            </div>
            <div>
              <h1 className=" text-xl font-bold hover:text-gold">
                Tax Lawyer
              </h1>

              <p className=" pt-4 text-gray-500 font-medium">
                Getting into trouble with the IRS is no fun. A tax attorney specializes in the many intricacies of federal, state and local tax laws, and should be able to provide advice on the particular tax issue you face.
              </p>
              <p className=" text-right py-2  animate-pulse font-extrabold  text-gold ">
                {" "}
                <ArrowRightAltIcon fontSize="large" />{" "}
              </p>
            </div>
          </Link>

        </div>
        <div className=" shadow-lg p-5 rounded-xl cursor-pointer">
          <Link to="/advocates">
            <div className=" w-20 py-3">
              <img src={cat9} alt="catIcon" />
            </div>
            <div>
              <h1 className=" text-xl font-bold hover:text-gold">
                Family Lawyer
              </h1>

              <p className=" pt-4 text-gray-500 font-medium">
                Whether you’re in need of a prenuptial agreement, engaged in divorce proceedings or involved in a child custody or spousal support battle, a family lawyer is the type of lawyer who’ll be best equipped to guide you through the process which lies before you.
              </p>
              <p className=" text-right py-2  animate-pulse font-extrabold  text-gold ">
                {" "}
                <ArrowRightAltIcon fontSize="large" />{" "}
              </p>
            </div>
          </Link>

        </div>
        <div className=" shadow-lg p-5 rounded-xl cursor-pointer">
          <Link to="/advocates">
            <div className=" w-20 py-3">
              <img src={womentcat3} alt="catIcon" />
            </div>
            <div>
              <h1 className=" text-xl font-bold hover:text-gold">
                Contract Lawyer
              </h1>

              <p className=" pt-4 text-gray-500 font-medium">
                A contract lawyer specializes in the handling of issues arising from contracts, and can be consulted for a wide range of contract-related issues. Whether you’re unsure if you should sign a particular contract, or if something has gone wrong with a contract you’ve already signed, an attorney who specializes in contracts is the type of lawyer who should have the experience and expertise required to help you resolve your contractual issues.
              </p>
              <p className=" text-right py-2  animate-pulse font-extrabold  text-gold ">
                {" "}
                <ArrowRightAltIcon fontSize="large" />{" "}
              </p>
            </div>
          </Link>

        </div>
        <div className=" shadow-lg p-5 rounded-xl cursor-pointer">
          <Link to="/advocates">
            <div className=" w-20 py-3">
              <img src={womentcat2} alt="catIcon" />
            </div>
            <div>
              <h1 className=" text-xl font-bold hover:text-gold">
                Civil Litigation Lawyer
              </h1>

              <p className=" pt-4 text-gray-500 font-medium">
                Suing someone, or responding to someone’s lawsuit against you? An attorney who specializes in civil litigation will be your best legal option. You may also find that different attorneys will specialize in different litigation areas as well. For example, a corporate litigation lawyer should have the expertise to help you with commercial litigation issues.
              </p>
              <p className=" text-right py-2  animate-pulse font-extrabold  text-gold ">
                {" "}
                <ArrowRightAltIcon fontSize="large" />{" "}
              </p>
            </div>
          </Link>

        </div>
        <div className=" shadow-lg p-5 rounded-xl cursor-pointer">
          <Link to="/advocates">
            <div className=" w-20 py-3">
              <img src={womentcat1} alt="catIcon" />
            </div>
            <div>
              <h1 className=" text-xl font-bold hover:text-gold">
                General Practice Lawyer
              </h1>

              <p className=" pt-4 text-gray-500 font-medium">
                Unlike lawyers who specialize in a particular area of law, a general practice lawyer has a practice that handles a wide range of legal issues. Different general practice attorneys will have different areas of law with which they are most comfortable, so if you consult with a general practice lawyer, it’s always prudent to discuss his or her experience in handling the type of legal issue you’re facing.
              </p>
              <p className=" text-right py-2  animate-pulse font-extrabold  text-gold ">
                {" "}
                <ArrowRightAltIcon fontSize="large" />{" "}
              </p>
            </div>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Consultation;
