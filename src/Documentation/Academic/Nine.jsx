import SubjectMemi from '../../Utilities/subjectsHandlar/SubjectMemi';
import BanglaGrammar9 from "../E_Book_Self/SSC_TEXT/BanglaGrammar9.pdf";
import ClassNineMath from "../E_Book_Self/SSC_TEXT/ClassNineMath.pdf";
import ClassNineHigherMath from "../E_Book_Self/SSC_TEXT/ClassNineHigherMath.pdf";
import Biology9 from "../E_Book_Self/SSC_TEXT/Biology9.pdf";
import Physics9 from "../E_Book_Self/SSC_TEXT/Physics9.pdf";
import Science9 from "../E_Book_Self/SSC_TEXT/Science9.pdf";
import BGS9 from "../E_Book_Self/SSC_TEXT/BGS9.pdf";
import ICT9 from "../E_Book_Self/SSC_TEXT/ICT9.pdf";
import ClassNineChemistry from "../E_Book_Self/SSC_TEXT/ClassNineChemistry.pdf";
import Demi from '../../Utilities/subjectsHandlar/Demi';
const subTopics = [
  { id: 1, lesson: "Hello We Bangladesh", page: 1 },
  { id: 2, lesson: "Hello We Bangladesh", page: 20 },
  { id: 3, lesson: "Hello We Bangladesh", page: 40 },
  { id: 4, lesson: "Hello We Bangladesh", page: 60 },
  { id: 5, lesson: "Hello We Bangladesh", page: 70 },
  { id: 6, lesson: "Hello We Bangladesh", page: 80 },
  { id: 7, lesson: "Hello We Bangladesh", page: 90 },
  { id: 8, lesson: "Hello We Bangladesh", page: 100 },
  { id: 9, lesson: "Hello We Bangladesh", page: 110 },
];
const Subjects = [
 
  {
    id: 2,
    name: "বাংলা ব্যাকরণ",
    
    content: <SubjectMemi sub={BanglaGrammar9} topic={subTopics} />,
  },
 
  {
    id: 3,
    name: "গণিত",
    
    content: <SubjectMemi sub={ClassNineMath} topic={subTopics} />,
  },
  {
    id: 6,
    name: "রসায়ন",
    
    content: <SubjectMemi sub={ClassNineChemistry} topic={subTopics} />,
  },
  {
    id: 7,
    name: "পদার্থবিজ্ঞান",
    
    content: <SubjectMemi sub={Physics9} topic={subTopics} />,
  },
  {
    id: 8,
    name: "জীববিজ্ঞান",
    
    content: <SubjectMemi sub={Biology9} topic={subTopics} />,
  },
  {
    id: 9,
    name: "উচ্চতর গণিত",
    
    content: <SubjectMemi sub={ClassNineHigherMath} topic={subTopics} />,
  },
  {
    id: 10,
    name: "বা.বি.প",
    
    content: <SubjectMemi sub={BGS9} topic={subTopics} />,
  },
  {
    id: 11,
    name: "ICT",
    
    content: <SubjectMemi sub={ICT9} topic={subTopics} />,
  },
  {
    id: 12,
    name: "বিজ্ঞান",
    
    content: <SubjectMemi sub={Science9} topic={subTopics} />,
  },
  
];
const Nine = () => {
  console.log(Subjects);
  return (
    <>
      <Demi sub={Subjects} />
    </>
  );
};
export default Nine;
