import Banglabekoron_6 from "../E_Book_Self/SIX_TEXT/Banglabekoron_6.pdf";
import Math_6 from "../E_Book_Self/SIX_TEXT/Math_6.pdf";
import Science_6 from "../E_Book_Self/SIX_TEXT/Science_6.pdf";
import BGS_6 from "../E_Book_Self/SIX_TEXT/BGS_6.pdf";
import ICT_6 from "../E_Book_Self/SIX_TEXT/ICT_6.pdf";
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
    
    content: <SubjectMemi sub={Banglabekoron_6} topic={subTopics}/>,
  },
  {
    id: 4,
    name: "গণিত",
    
    content: <SubjectMemi sub={Math_6} topic={subTopics}/>,
  },

  {
    id: 5,
    name: "বা.বি.প",
    
    content: <SubjectMemi sub={BGS_6} topic={subTopics}/>,
  },
  {
    id: 6,
    name: "ICT",
    
    content: <SubjectMemi sub={ICT_6} topic={subTopics}/>,
  },
  {
    id: 7,
    name: "বিজ্ঞান",
    
    content: <SubjectMemi sub={Science_6} topic={subTopics}/>,
  },
 
];
const Six = () => {
  console.log(Subjects);
  return (
    <>
      <Demi sub={Subjects} />
    </>
  );
};
export default Six;
