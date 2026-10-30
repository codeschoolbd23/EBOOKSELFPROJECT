import SubjectMemi from '../../Utilities/subjectsHandlar/SubjectMemi';
import Bangla_1 from "../E_Book_Self/ONE_TEXT/Bangla_1.pdf";
import Math_1 from "../E_Book_Self/ONE_TEXT/Math_1.pdf";
import English_1 from "../E_Book_Self/ONE_TEXT/English_1.pdf";
import Demi from '../../Utilities/subjectsHandlar/Demi';
import SubjectTopics from '../../Utilities/subjectsHandlar/SubjectTopics';

const { Topics_BGS_4, Topics_Math_4} = SubjectTopics;
const Subjects = [
  {
    id: 1,
    name: "আমার বাংলা বই",
    class: "One",
    content: <SubjectMemi sub={Bangla_1} topic={Topics_Math_4} />,
  },
  {
    id: 2,
    name: "প্রাথমিক গণিত",
    class: "One",
    content: <SubjectMemi sub={Math_1} topic={Topics_Math_4} />,
  },

  {
    id: 3,
    name: "English For Today",
    class: "One",
    content: <SubjectMemi sub={English_1} topic={Topics_BGS_4} />,
  },

];
const One = () => {
  console.log(Subjects);
  return (
    <>
    
      <Demi sub={Subjects}/>
    </>
  );
};
export default One;
