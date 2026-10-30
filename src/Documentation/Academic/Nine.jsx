import SubjectMemi from '../../Utilities/subjectsHandlar/SubjectMemi';
import BanglaGrammar9 from "../E_Book_Self/SSC_TEXT/BanglaGrammar9.pdf";
import ClassNineMath from "../E_Book_Self/SSC_TEXT/ClassNineMath.pdf";
import ClassNineHigherMath from "../E_Book_Self/SSC_TEXT/ClassNineHigherMath.pdf";
import Biology9 from "../E_Book_Self/SSC_TEXT/Biology9.pdf";
import Physics9 from "../E_Book_Self/SSC_TEXT/Physics9.pdf";
import Science9 from "../E_Book_Self/SSC_TEXT/Science9.pdf";
import BGS9 from "../E_Book_Self/SSC_TEXT/BGS9.pdf";
import ICT9 from "../E_Book_Self/SSC_TEXT/ICT9.pdf";
import ClassNineChemistry from "../E_Book_Self/SSC_TEXT/ClassNineChemistry.pdf";
import Demi from '../../Utilities/subjectsHandlar/Demi';
import SubjectTopics from '../../Utilities/subjectsHandlar/SubjectTopics';
const {Topics_BGS_9}=SubjectTopics;
const Subjects = [
 
  {
    id: 2,
    name: "বাংলা ব্যাকরণ",
    class:"Nine",
    content: <SubjectMemi sub={BanglaGrammar9} topic={Topics_BGS_9} />,
  },
 
  {
    id: 3,
    name: "গণিত",
    class:"Nine",
    content: <SubjectMemi sub={ClassNineMath} topic={Topics_BGS_9} />,
  },
  {
    id: 6,
    name: "রসায়ন",
    class:"Nine",
    content: <SubjectMemi sub={ClassNineChemistry} topic={Topics_BGS_9} />,
  },
  {
    id: 7,
    name: "পদার্থবিজ্ঞান",
    class:"Nine",
    content: <SubjectMemi sub={Physics9} topic={Topics_BGS_9} />,
  },
  {
    id: 8,
    name: "জীববিজ্ঞান",
    class:"Nine",
    content: <SubjectMemi sub={Biology9} topic={Topics_BGS_9} />,
  },
  {
    id: 9,
    name: "উচ্চতর গণিত",
    class:"Nine",
    content: <SubjectMemi sub={ClassNineHigherMath} topic={Topics_BGS_9} />,
  },
  {
    id: 10,
    name: "বা.বি.প",
    class:"Nine",
    content: <SubjectMemi sub={BGS9} topic={Topics_BGS_9} />,
  },
  {
    id: 11,
    name: "ICT",
    class:"Nine",
    content: <SubjectMemi sub={ICT9} topic={Topics_BGS_9} />,
  },
  {
    id: 12,
    name: "বিজ্ঞান",
    class:"Nine",
    content: <SubjectMemi sub={Science9} topic={Topics_BGS_9} />,
  },
  
];
const Nine = () => {
  console.log(Subjects);
  return (
    <>
      <Demi sub={Subjects} />
    </>
  );
};
export default Nine;
