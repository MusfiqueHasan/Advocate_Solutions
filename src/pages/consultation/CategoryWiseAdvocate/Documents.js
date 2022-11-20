const Documents = () => {
    return (
      <div className="w-[100%]">
        <div className="flex lg:w-[100%] mb-5">
          <p className=" w-[40%]">NID</p>
          <p className=" font-bold">23245465768</p>
          {/* <img src={nid} alt="" /> */}
        </div>
  
        <div className="flex lg:w-[100%] mb-3">
          <p className=" w-[40%]">ID</p>
          <p className=" font-bold">03840</p>
        </div>
        <div className="flex lg:w-[100%] mb-3">
          <p className=" w-[40%]">Message</p>
          <p className=" font-bold w-[50%]">
            {" "}
            "Biometric verification FAILED","The document uploaded is fake"
          </p>
        </div>
        <div className="flex lg:w-[100%] mb-3">
          <p className=" w-[40%]">Status</p>
          <p className=" font-bold"> Failed</p>
        </div>
      </div>
    );
  };
  
  export default Documents;