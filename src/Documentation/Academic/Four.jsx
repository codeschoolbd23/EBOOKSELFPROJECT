import SubjectMemi from '../../Utilities/subjectsHandlar/SubjectMemi';
import Math_4 from "../../../public/Math_4.pdf";
import Science_4 from "../../../public/Science_4.pdf";
import BGS_4 from "../../../public//BGS_4.pdf";
import Demi from '../../Utilities/subjectsHandlar/Demi';
import SubjectTopics from '../../Utilities/subjectsHandlar/SubjectTopics';
const {Topics_BGS_9}=SubjectTopics;
const Subjects = [
  {
    id: 2,
    name: "গণিত",
    
    content: <SubjectMemi sub={Math_4} topic={Topics_BGS_9}/>,
  },

  {
    id: 3,
    name: "বা.বি.প",
    
    content: <SubjectMemi sub={BGS_4} topic={Topics_BGS_9}/>,
  },

  {
    id: 4,
    name: "বিজ্ঞান",
    
    content: <SubjectMemi sub={Science_4} topic={Topics_BGS_9}/>,
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
