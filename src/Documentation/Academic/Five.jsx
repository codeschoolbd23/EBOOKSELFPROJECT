import SubjectMemi from '../../Utilities/subjectsHandlar/SubjectMemi';
import Math_5 from "../E_Book_Self/FIVE_TEXT/Math_5.pdf";
import Science_5 from "../E_Book_Self/FIVE_TEXT/Science_5.pdf";
import BGS_5 from "../E_Book_Self/FIVE_TEXT/BGS_5.pdf";
import Demi from '../../Utilities/subjectsHandlar/Demi';
import SubjectTopics from '../../Utilities/subjectsHandlar/SubjectTopics';
const {Topics_BGS_9}=SubjectTopics;
const Subjects = [
  {
    id: 2,
    name: "গণিত",
    
    content: <SubjectMemi sub={Math_5} topic={Topics_BGS_9}/>,
  },

  {
    id: 3,
    name: "বা.বি.প",
    
    content: <SubjectMemi sub={BGS_5} topic={Topics_BGS_9}/>,
  },

  {
    id: 4,
    name: "বিজ্ঞান",
    
    content: <SubjectMemi sub={Science_5} topic={Topics_BGS_9}/>,
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