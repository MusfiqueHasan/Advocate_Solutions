import React, { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FaqsAnimation from "./../../Animations/FaqsAnimation";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase/Firebase-config";
import { Link } from 'react-router-dom';
const FAQ = () => {
  const faqsData = [
    {
      id: "1",
      question: "What is Advocate solution",
      answer:
        "Advocate solutionAdvocate solutionAdvocate solutionAdvocate solutionAdvocate solutionAdvocate solutionAdvocate solution",
    },
    {
      id: "2",
      question: "What is Advocate solution",
      answer:
        "Advocate solutionAdvocate solutionAdvocate solutionAdvocate solutionAdvocate solutionAdvocate solutionAdvocate solution",
    },
    {
      id: "3",
      question: "What is Advocate solution",
      answer:
        "Advocate solutionAdvocate solutionAdvocate solutionAdvocate solutionAdvocate solutionAdvocate solutionAdvocate solution",
    },
    {
      id: "4",
      question: "What is Advocate solution",
      answer:
        "Advocate solutionAdvocate solutionAdvocate solutionAdvocate solutionAdvocate solutionAdvocate solutionAdvocate solution",
    },
  ];
  const [faqes, setFaqs] = useState([]);

  const faqsCollectionRef = collection(db, "faqs");

  useEffect(() => {

    const getfaqs = async () => {

      const data = await getDocs(faqsCollectionRef);
      setFaqs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getfaqs();
  }, []);
  return (
    <div className=" mt-16">
      <div className=" py-7">
        <h1 className=" text-xl font-bold font-mono text-center underline underline-offset-8">
          Frequently Asked Questions
        </h1>
      </div>
      <div className=" grid grid-cols-2  px-5 xl:px-20">
        <div>
          {" "}
          {faqes?.map((faqs) => (
            <div key={faqs?.id} className="mb-4 font-body">
              <Accordion className="  p-3 mx-4 rounded-2xl">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon className="text-slate-800" />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  className="rounded-2xl"
                >
                  <Typography className="text-slate-800">
                    {faqs?.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className="">
                  <Typography className="text-slate-800">
                    {faqs?.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          ))}
        </div>
        <div className=" w-full h-full">
          <FaqsAnimation />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
