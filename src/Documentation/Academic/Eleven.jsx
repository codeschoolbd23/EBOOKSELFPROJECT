import SubjectMemi from '../../Utilities/subjectsHandlar/SubjectMemi';
import ICT_IX_1 from "../E_Book_Self/HSC_TEXT/ICT_IX_1.pdf";
import ICT_IX_2 from "../E_Book_Self/HSC_TEXT/ICT_IX_2.pdf"
import ICT_IX_3_1 from "../E_Book_Self/HSC_TEXT/ICT_IX_3.1.pdf"
import ICT_IX_3_2 from "../E_Book_Self/HSC_TEXT/ICT_IX_3.2.pdf"
import Demi from '../../Utilities/subjectsHandlar/Demi';
import SubjectTopics from '../../Utilities/subjectsHandlar/SubjectTopics';
const {Topics_BGS_9}=SubjectTopics;
const Subjects = [
  {
    id: 1,
    name: "১:তথ্য ও যোগাযোগ প্রযুক্তি",
    class: "Eleven",
    content: <SubjectMemi sub={ICT_IX_1} topic={Topics_BGS_9} />,
  },

  {
    id: 3,
    name: "২:ডাটা কমিউনিকেশন",
    class: "Eleven",

    content: <SubjectMemi sub={ICT_IX_2} topic={Topics_BGS_9} />,
  },

  {
    id: 4,
    name: "৩.১:সংখ্যাপদ্ধতি",
    class: "Eleven",

    content: <SubjectMemi sub={ICT_IX_3_1} topic={Topics_BGS_9} />,
  },
  {
    id: 5,
    name: "৩.২:ডিজিটাল ডিভাইস",
    class: "Eleven",

    content: <SubjectMemi sub={ICT_IX_3_2} topic={Topics_BGS_9} />,
  },
  {
    id: 6,
    name: "৪:ওয়েব ডিজাইন ও এইচটিএমএল",
    class: "Eleven",

    content: <SubjectMemi sub={ICT_IX_3_2} topic={Topics_BGS_9} />,
  },
  {
    id: 7,
    name: "৫:প্রোগ্রামিং ও পাইথন",
    class: "Eleven",

    content: <SubjectMemi sub={ICT_IX_3_2} topic={Topics_BGS_9} />,
  },
  {
    id: 8,
    name: "৬:ডাটাবেজ ম্যানেজম্যান্ট",
    class: "Eleven",

    content: <SubjectMemi sub={ICT_IX_3_2} topic={Topics_BGS_9} />,
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
