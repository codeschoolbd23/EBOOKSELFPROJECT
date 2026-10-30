import BanglaBakoron_8 from "../E_Book_Self/EIGHT_TEXT/8_BanglaGrammar.pdf";
import Math_8 from "../E_Book_Self/EIGHT_TEXT/8_Math.pdf";
import Science_8 from "../E_Book_Self/EIGHT_TEXT/8_Science.pdf";
import BGS_8 from "../E_Book_Self/EIGHT_TEXT/8_BGS.pdf";
import ICT_8 from "../E_Book_Self/EIGHT_TEXT/8_ICT.pdf";
import SubjectMemi from '../../Utilities/subjectsHandlar/SubjectMemi';
import Demi from '../../Utilities/subjectsHandlar/Demi';
import SubjectTopics from '../../Utilities/subjectsHandlar/SubjectTopics';
const {Topics_BGS_9}=SubjectTopics;

const Subjects = [
  
  {
    id: 3,
    name: "বাংলা ব্যাকরণ",
    class:"Eight",
    content: <SubjectMemi sub={BanglaBakoron_8} topic={Topics_BGS_9}/>,
  },
  {
    id: 4,
    name: "গণিত",
    class:"Eight",
    content: <SubjectMemi sub={Math_8} topic={Topics_BGS_9}/>,
  },

  {
    id: 5,
    name: "বা.বি.প",
    class:"Eight",
    content: <SubjectMemi sub={BGS_8} topic={Topics_BGS_9}/>,
  },
  {
    id: 6,
    name: "ICT",
    class:"Eight",
    content: <SubjectMemi sub={ICT_8} topic={Topics_BGS_9}/>,
  },
  {
    id: 7,
    name: "বিজ্ঞান",
    class:"Eight",
    content: <SubjectMemi sub={Science_8} topic={Topics_BGS_9}/>,
  },
  
];
const Eight = () => {
  console.log(Subjects);
  return (
    <>
      <Demi sub={Subjects} />
    </>
  );
};
export default Eight;