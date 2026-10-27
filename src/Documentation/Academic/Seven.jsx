import BanglaBakoron_7 from "../E_Book_Self/SEVEN_TEXT/BanglaBakoron_7.pdf";
import Math_7 from "../E_Book_Self/SEVEN_TEXT/Math_7.pdf";
import Science_7 from "../E_Book_Self/SEVEN_TEXT/Science_7.pdf";
import BGS_7 from "../E_Book_Self/SEVEN_TEXT/BGS_7.pdf";
import ICT_7 from "../E_Book_Self/SEVEN_TEXT/ICT_7.pdf";
import SubjectMemi from '../../Utilities/subjectsHandlar/SubjectMemi';
import Demi from '../../Utilities/subjectsHandlar/Demi';
import SubjectTopics from '../../Utilities/subjectsHandlar/SubjectTopics';
const {Topics_BGS_9}=SubjectTopics;
const Subjects = [
  {
    id: 3,
    name: "বাংলা ব্যাকরণ",
    
    content: <SubjectMemi sub={BanglaBakoron_7} topic={Topics_BGS_9}/>,
  },
  {
    id: 4,
    name: "গণিত",
    
    content: <SubjectMemi sub={Math_7} topic={Topics_BGS_9}/>,
  },

  {
    id: 5,
    name: "বা.বি.প",
    
    content: <SubjectMemi sub={BGS_7} topic={Topics_BGS_9}/>,
  },
  {
    id: 6,
    name: "ICT",
    
    content: <SubjectMemi sub={ICT_7} topic={Topics_BGS_9}/>,
  },
  {
    id: 7,
    name: "বিজ্ঞান",
    
    content: <SubjectMemi sub={Science_7} topic={Topics_BGS_9}/>,
  }
  
];

const Seven = () => {
  console.log(Subjects);
  return (
    <>
      <Demi sub={Subjects} />
    </>
  );
};
export default Seven;
