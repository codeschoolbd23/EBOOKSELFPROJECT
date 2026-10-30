import SubjectMemi from '../../Utilities/subjectsHandlar/SubjectMemi';
import Bangla_2 from "../E_Book_Self/TWO_TEXT/Bangla_2.pdf";
import Math_2 from "../E_Book_Self/TWO_TEXT/Math_2.pdf";
import Demi from '../../Utilities/subjectsHandlar/Demi';
import SubjectTopics from '../../Utilities/subjectsHandlar/SubjectTopics';

const {Topics_Math_4} = SubjectTopics;
const Subjects = [
  {
    id: 1,
    name: "আমার বাংলা বই",
    class: "Two",
    content: <SubjectMemi sub={Bangla_2} topic={Topics_Math_4} />,
  },
  {
    id: 2,
    name: "প্রাথমিক গণিত",
    class: "Two",
    content: <SubjectMemi sub={Math_2} topic={Topics_Math_4} />,
  },

];
const Two = () => {
  console.log(Subjects);
  return (
    <>
    
      <Demi sub={Subjects}/>
    </>
  );
};
export default Two;
