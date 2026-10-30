import Banglabekoron_6 from "../E_Book_Self/SIX_TEXT/Banglabekoron_6.pdf";
import Math_6 from "../E_Book_Self/SIX_TEXT/Math_6.pdf";
import Science_6 from "../E_Book_Self/SIX_TEXT/Science_6.pdf";
import BGS_6 from "../E_Book_Self/SIX_TEXT/BGS_6.pdf";
import ICT_6 from "../E_Book_Self/SIX_TEXT/ICT_6.pdf";
import SubjectMemi from '../../Utilities/subjectsHandlar/SubjectMemi';
import Demi from '../../Utilities/subjectsHandlar/Demi';
import SubjectTopics from '../../Utilities/subjectsHandlar/SubjectTopics';
const {Topics_BGS_9}=SubjectTopics;
const Subjects = [
  {
    id: 3,
    name: "বাংলা ব্যাকরণ",
    class:"Six",
    content: <SubjectMemi sub={Banglabekoron_6} topic={Topics_BGS_9}/>,
  },
  {
    id: 4,
    name: "গণিত",
    class:"Six",
    content: <SubjectMemi sub={Math_6} topic={Topics_BGS_9}/>,
  },

  {
    id: 5,
    name: "বা.বি.প",
    class:"Six",
    content: <SubjectMemi sub={BGS_6} topic={Topics_BGS_9}/>,
  },
  {
    id: 6,
    name: "ICT",
    class:"Six",
    content: <SubjectMemi sub={ICT_6} topic={Topics_BGS_9}/>,
  },
  {
    id: 7,
    name: "বিজ্ঞান",
    class:"Six",
    content: <SubjectMemi sub={Science_6} topic={Topics_BGS_9}/>,
  },
 
];
const Six = () => {
  console.log(Subjects);
  return (
    <>
      <Demi sub={Subjects} />
    </>
  );
};
export default Six;
