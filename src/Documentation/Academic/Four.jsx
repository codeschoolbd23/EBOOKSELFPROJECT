import SubjectMemi from '../../Utilities/subjectsHandlar/SubjectMemi';
import Math_4 from "../../../public/Math_4.pdf";
import Science_4 from "../../../public/Science_4.pdf";
import BGS_4 from "../../../public//BGS_4.pdf";
import Demi from '../../Utilities/subjectsHandlar/Demi';
import SubjectTopics from '../../Utilities/subjectsHandlar/SubjectTopics';

const { Topics_BGS_4, Topics_Math_4, Topics_Science_4} = SubjectTopics;
const Subjects = [
  {
    id: 2,
    name: "গণিত",
    class: "Four",
    content: <SubjectMemi sub={Math_4} topic={Topics_Math_4} />,
  },

  {
    id: 3,
    name: "বা.বি.প",
    class: "Four",
    content: <SubjectMemi sub={BGS_4} topic={Topics_BGS_4} />,
  },

  {
    id: 4,
    name: "বিজ্ঞান",
    class: "Four",
    content: <SubjectMemi sub={Science_4} topic={Topics_Science_4} />,
  },
];
const Four = () => {
  console.log(Subjects);
  return (
    <>
    
      <Demi sub={Subjects}/>
    </>
  );
};
export default Four;
