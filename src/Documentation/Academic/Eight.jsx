import BanglaBakoron_8 from "../E_Book_Self/EIGHT_TEXT/8_BanglaGrammar.pdf";
import Math_8 from "../E_Book_Self/EIGHT_TEXT/8_Math.pdf";
import Science_8 from "../E_Book_Self/EIGHT_TEXT/8_Science.pdf";
import BGS_8 from "../E_Book_Self/EIGHT_TEXT/8_BGS.pdf";
import ICT_8 from "../E_Book_Self/EIGHT_TEXT/8_ICT.pdf";
import SubjectMemi from '../../Utilities/subjectsHandlar/SubjectMemi';
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
    id: 3,
    name: "বাংলা ব্যাকরণ",
    
    content: <SubjectMemi sub={BanglaBakoron_8} topic={subTopics}/>,
  },
  {
    id: 4,
    name: "গণিত",
    
    content: <SubjectMemi sub={Math_8} topic={subTopics}/>,
  },

  {
    id: 5,
    name: "বা.বি.প",
    
    content: <SubjectMemi sub={BGS_8} topic={subTopics}/>,
  },
  {
    id: 6,
    name: "ICT",
    
    content: <SubjectMemi sub={ICT_8} topic={subTopics}/>,
  },
  {
    id: 7,
    name: "বিজ্ঞান",
    
    content: <SubjectMemi sub={Science_8} topic={subTopics}/>,
  },
  
];
const Eight = () => {
  console.log(Subjects);
  return (
    <>
      <Demi sub={Subjects} />
    </>
  );
};
export default Eight;