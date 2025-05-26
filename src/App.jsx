import { useState } from 'react'
import './App.css'


const FaqItem =({question,answer}) =>{

  const[show,setShow] = useState(false);

  const toggleShow = () =>
    {
      setShow(!show);
    }
  
  return(
    <div className={`faq-item ${show ? "active" : ""}`}>
    <div className="faq-item-question" onClick={toggleShow}>{question}</div>
      <div className="faq-item-body">
        <div className="faq-item-body-content">
          {answer}
        </div>
      </div>
    </div>

  );
}

const data = [
  {
    id: 1,
    question: "What is the full form of VIT?",
    answer: "VIT stands for Vellore Institute of Technology."
  },
  {
    id: 2,
    question: "Where is VIT located?",
    answer: "VIT has multiple campuses, with the main campus located in Vellore, Tamil Nadu, India."
  },
  {
    id: 3,
    question: "Is VIT a private or government university?",
    answer: "VIT is a private deemed university."
  },
  {
    id: 4,
    question: "How can I get admission into VIT?",
    answer: "Admissions to undergraduate programs like B.Tech are primarily through the VITEEE (VIT Engineering Entrance Examination)."
  },
  {
    id: 5,
    question: "Does VIT accept JEE Main scores?",
    answer: "No, VIT does not accept JEE Main scores. It conducts its own entrance exam called VITEEE."
  },
  {
    id: 6,
    question: "What courses are offered at VIT Vellore?",
    answer: "VIT Vellore offers a wide range of undergraduate, postgraduate, and doctoral programs in engineering, sciences, management, law, and more."
  },
  {
    id: 7,
    question: "What is the NIRF ranking of VIT?",
    answer: "As per the latest NIRF rankings, VIT is ranked among the top engineering institutions in India."
  },
  {
    id: 8,
    question: "What are the placement statistics at VIT?",
    answer: "VIT has a strong placement record, with top companies like Microsoft, Amazon, and TCS recruiting students every year. The highest packages often exceed ₹1 crore for international offers."
  },
  {
    id: 9,
    question: "Are there hostel facilities at VIT Vellore?",
    answer: "Yes, VIT Vellore provides well-maintained hostel facilities for both boys and girls with options like AC, non-AC, single, double, and shared rooms."
  },
  {
    id: 10,
    question: "Is there an international exchange program at VIT?",
    answer: "Yes, VIT has collaborations with various international universities for student exchange programs, internships, and research opportunities."
  }
];




const FaqAccordion = (props) =>{

  return(
    <div className="faq-accordion">
      <h2>FAQs</h2>
      {props.data.map((item) => (
        <FaqItem key={item.id} question={item.question} answer={item.answer}/>
      ))}
    </div>

  );

}









function App() {


  return (
    <>
      <div className="app">
        <FaqAccordion data={data}/>
      </div>
      
      <div className="copyrights">
        <p>Designed By <span>Kaarthik</span></p>
      </div>
    </>
  )
}

export default App
