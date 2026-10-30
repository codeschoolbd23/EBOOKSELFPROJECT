import SubjectMemi from '../../Utilities/subjectsHandlar/SubjectMemi';
import Math_3 from "../E_Book_Self/THREE_TEXT/Math_3.pdf";
import Science_3 from "../E_Book_Self/THREE_TEXT/Science_3.pdf";
import BGS_3 from "../E_Book_Self/THREE_TEXT/BGS_3.pdf";
import Bangla_3 from "../E_Book_Self/THREE_TEXT/Bangla_3.pdf";
import Demi from '../../Utilities/subjectsHandlar/Demi';
import SubjectTopics from '../../Utilities/subjectsHandlar/SubjectTopics';

const {Topics_BGS_5,Topics_Science_5}=SubjectTopics;
const Subjects = [
  {
    id: 1,
    name: "আমার বাংলা বই",
    class: "Three",
    content: <SubjectMemi sub={Bangla_3} topic={Topics_BGS_5} />,
  },
  {
    id: 2,
    name: "প্রাথমিক গণিত",
    class: "Three",
    content: <SubjectMemi sub={Math_3} topic={Topics_BGS_5} />,
  },

  {
    id: 3,
    name: "English For Today",
    class: "Three",
    content: <SubjectMemi sub={BGS_3} topic={Topics_BGS_5} />,
  },

  {
    id: 4,
    name: "বা.বি.প",
    class: "Three",
    content: <SubjectMemi sub={BGS_3} topic={Topics_BGS_5} />,
  },

  {
    id: 5,
    name: "বিজ্ঞান",
    class: "Three",
    content: <SubjectMemi sub={Science_3} topic={Topics_Science_5} />,
  },
];
const Three = () => {
  console.log(Subjects);
  return (
    <>
      <Demi sub={Subjects}/>
    </>
  );
};
export default Three;