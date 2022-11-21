import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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
  return (
    <div className=" m-16">
      <div className=" py-7">
        <h1 className=" text-xl font-bold font-mono text-center underline underline-offset-8">
          Frequently Asked Questions
        </h1>
      </div>
      {faqsData?.map((faqs) => (
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
              <Typography className="text-slate-800">{faqs?.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
