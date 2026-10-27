import SubjectMemi from '../../Utilities/subjectsHandlar/SubjectMemi';
import Math_4 from "../E_Book_Self/FOUR_TEXT/Math_4.Pdf";
import Science_4 from "../E_Book_Self/FOUR_TEXT/Science_4.pdf";
import BGS_4 from "../E_Book_Self/FOUR_TEXT/BGS_4.pdf";
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
    
    content: <SubjectMemi sub={Math_4} topic={subTopics}/>,
  },

  {
    id: 3,
    name: "বা.বি.প",
    
    content: <SubjectMemi sub={BGS_4} topic={subTopics}/>,
  },

  {
    id: 4,
    name: "বিজ্ঞান",
    
    content: <SubjectMemi sub={Science_4} topic={subTopics}/>,
  },
  
];
const Four = () => {
  console.log(Subjects);
  return (
    <>
      <Demi sub={Subjects} />
    </>
  );
};
export default Four;
