import { collection, getDocs } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { db } from "../../Firebase/Firebase-config";

const DataPrint = () => {
  const advocatesCollectionRef = collection(db, "collectionName");
  const [demo, setDemo] = useState([]);

  useEffect(() => {
    const getadvocates = async () => {
      const data = await getDocs(advocatesCollectionRef);
      setDemo(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getadvocates();
  }, []);

  const exportData = () => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(demo)
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "demo.json";

    link.click();
  };
  return (
    <button type="button" className="text-black" onClick={exportData}>
      Export Data
    </button>
  );
};

export default DataPrint;
