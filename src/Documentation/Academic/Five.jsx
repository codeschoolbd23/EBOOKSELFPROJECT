import SubjectMemi from '../../Utilities/subjectsHandlar/SubjectMemi';
import Math_5 from "../E_Book_Self/FIVE_TEXT/Math_5.Pdf";
import Science_5 from "../E_Book_Self/FIVE_TEXT/Science_5.Pdf";
import BGS_5 from "../E_Book_Self/FIVE_TEXT/BGS_5.Pdf";
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
    name: "গণিত",
    
    content: <SubjectMemi sub={Math_5} topic={subTopics}/>,
  },

  {
    id: 3,
    name: "বা.বি.প",
    
    content: <SubjectMemi sub={BGS_5} topic={subTopics}/>,
  },

  {
    id: 4,
    name: "বিজ্ঞান",
    
    content: <SubjectMemi sub={Science_5} topic={subTopics}/>,
  },
 
];
const Five = () => {
  console.log(Subjects);
  return (
    <>
      <Demi sub={Subjects} />
    </>
  );
};
export default Five;