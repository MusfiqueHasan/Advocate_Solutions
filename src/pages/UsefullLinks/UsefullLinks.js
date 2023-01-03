import React from "react";

import UsefullLinksAnimation from "./../../Animations/UsefullLinksAnimation";

const UsefullLinks = () => {
  return (
    <div className=" m-16">
      <div className=" py-7">
        <h1 className=" text-xl font-bold font-mono text-center underline underline-offset-8">
          UseFull Link's
        </h1>
      </div>
      <div className=" grid grid-cols-5  px-5 xl:px-14">
        <div className=" col-span-3 border border-sky-400 hover:border-indigo-500 rounded-xl shadow-lg w-full h-full px-5 xl:px-10 py-20 ">
          {/* <h1 className=" text-xl font-bold text-center">
            Basically, this feature is for the only law student's .
          </h1>
          <h3 className=" text-sm text-slate-800 text-center font-semibold font-serif py-10">
            Currently we are not working here, in future we can develop this
            feature
          </h3> */}
          <p className="text-lg font-bold py-2">
            1. Ministry of Law: <a className=" hover:text-sky-500 font-semibold
            " href="http://www.lawjusticediv.gov.bd/">http://www.lawjusticediv.gov.bd/</a>
          </p>
          <p className="text-lg font-bold py-2">

            2. Laws of Bangladesh: <a className=" hover:text-sky-500 font-semibold
            " href="http://bdlaws.minlaw.gov.bd/laws-of-bangladesh.html">http://bdlaws.minlaw.gov.bd/laws-of-bangladesh.html</a>
          </p>
          <p className="text-lg font-bold py-2">

            3. Supreme Court: <a className=" hover:text-sky-500 font-semibold
            " href="https://supremecourt.gov.bd/web/"> https://supremecourt.gov.bd/web/</a>
          </p>
          <p className="text-lg font-bold py-2">

            4. Bangladesh Bar Council: <a className=" hover:text-sky-500 font-semibold
            " href="https://www.barcouncil.gov.bd/">https://www.barcouncil.gov.bd/</a>
          </p>
          <p className="text-lg font-bold py-2">

            5. Bangladesh Legal Aid & Service Trust: <a className=" hover:text-sky-500 font-semibold
            " href="https://www.blast.org.bd/">https://www.blast.org.bd/</a>
          </p>
          <p className="text-lg font-bold py-2">

            6. Bangladesh National Women Lawyers' Association: <a className=" hover:text-sky-500 font-semibold
            " href="http://bnwla-bd.org/">http://bnwla-bd.org/</a>
          </p>
          <p className="text-lg font-bold py-2">

            7. National Legal Aid Service organization: <a className=" hover:text-sky-500 font-semibold
            " href="http://www.nlaso.gov.bd/">http://www.nlaso.gov.bd/</a>
          </p>
          <p className="text-lg font-bold py-2">

            8. International Law association: <a className=" hover:text-sky-500 font-semibold
            " href="https://www.ila-hq.org/en_GB/branches/bangladesh"> https://www.ila-hq.org/en_GB/branches/bangladesh</a>
          </p>
          <p className="text-lg font-bold py-2">

            9. Bangladesh Institute of law and international affairs: <a className=" hover:text-sky-500 font-semibold
            " href="https://www.biliabd.org/"> https://www.biliabd.org/</a>
          </p>









        </div>
        <div>
          <UsefullLinksAnimation />
        </div>
      </div>
    </div>
  );
};

export default UsefullLinks;
