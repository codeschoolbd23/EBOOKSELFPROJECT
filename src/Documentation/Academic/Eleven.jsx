import SubjectMemi from '../../Utilities/subjectsHandlar/SubjectMemi';
import Math_4 from "../../../public/Science_4.pdf";
import Science_4 from "../../../public/Science_4.pdf";
import BGS_4 from ".../../../public/BGS_4.pdf";
import Demi from '../../Utilities/subjectsHandlar/Demi';
import SubjectTopics from '../../Utilities/subjectsHandlar/SubjectTopics';
const {Topics_BGS_9}=SubjectTopics;
const Subjects = [
  {
    id: 2,
    name: "প্রথম অধ্যায়",
    content: <SubjectMemi sub={Math_4} topic={Topics_BGS_9}/>,
  },

  {
    id: 3,
    name: "দ্বিতীয় অধ্যায়",
    
    content: <SubjectMemi sub={BGS_4} topic={Topics_BGS_9}/>,
  },

  {
    id: 4,
    name: "তৃতীয় অধ্যায়",
    
    content: <SubjectMemi sub={Science_4} topic={Topics_BGS_9}/>,
  },
  
];
const Eleven = () => {
  console.log(Subjects);
  return (
    <>
      <Demi sub={Subjects} />
    </>
  );
};
export default Eleven;
