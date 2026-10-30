import React  from "react";
import Math_4 from "../../../public/Math_4.pdf";
import Science_4 from "../../../public/Science_4.pdf";
import BGS_4 from "../../../public/BGS_4.pdf";
import Math_5 from "../../Documentation/E_Book_Self/FIVE_TEXT/Math_5.pdf";
import Science_5 from "../../Documentation/E_Book_Self/FIVE_TEXT/Science_5.pdf";
import BGS_5 from "../../Documentation/E_Book_Self/FIVE_TEXT/BGS_5.pdf";
import Math_6 from "../../Documentation/E_Book_Self/SIX_TEXT/Math_6.pdf";
import Science_6 from "../../Documentation/E_Book_Self/SIX_TEXT/Science_6.pdf";
import BGS_6 from "../../Documentation/E_Book_Self/SIX_TEXT/BGS_6.pdf";
import ICT_6 from "../../Documentation/E_Book_Self/SIX_TEXT/ICT_6.pdf";
import BanglaBakoron_7 from "../../Documentation/E_Book_Self/SEVEN_TEXT/BanglaBakoron_7.pdf";
import Math_7 from "../../Documentation/E_Book_Self/SEVEN_TEXT/Math_7.pdf";
import Science_7 from "../../Documentation/E_Book_Self/SEVEN_TEXT/Science_7.pdf";
import BGS_7 from "../../Documentation/E_Book_Self/SEVEN_TEXT/BGS_7.pdf";
import ICT_7 from "../../Documentation/E_Book_Self/SEVEN_TEXT/ICT_7.pdf";
import BanglaBakoron_8 from "../../Documentation/E_Book_Self/EIGHT_TEXT/8_BanglaGrammar.pdf";
import Math_8 from "../../Documentation/E_Book_Self/EIGHT_TEXT/8_Math.pdf";
import Science_8 from "../../Documentation/E_Book_Self/EIGHT_TEXT/8_Science.pdf";
import BGS_8 from "../../Documentation/E_Book_Self/EIGHT_TEXT/8_BGS.pdf";
import ICT_8 from "../../Documentation/E_Book_Self/EIGHT_TEXT/8_ICT.pdf";
import BanglaGrammar9 from "../../Documentation/E_Book_Self/SSC_TEXT/BanglaGrammar9.pdf";
import ClassNineMath from "../../Documentation/E_Book_Self/SSC_TEXT/ClassNineMath.pdf";
import ClassNineHigherMath from "../../Documentation/E_Book_Self/SSC_TEXT/ClassNineHigherMath.pdf";
import Biology9 from "../../Documentation/E_Book_Self/SSC_TEXT/Biology9.pdf";
import Physics9 from "../../Documentation/E_Book_Self/SSC_TEXT/Physics9.pdf";
import Science9 from "../../Documentation/E_Book_Self/SSC_TEXT/Science9.pdf";
import BGS9 from "../../Documentation/E_Book_Self/SSC_TEXT/BGS9.pdf";
import ICT9 from "../../Documentation/E_Book_Self/SSC_TEXT/ICT9.pdf";
import ICT_IX_1 from "../../Documentation/E_Book_Self/HSC_TEXT/ICT_IX_1.pdf";
import ICT_IX_2 from "../../Documentation/E_Book_Self/HSC_TEXT/ICT_IX_2.pdf";
import ICT_IX_3_1 from "../../Documentation/E_Book_Self/HSC_TEXT/ICT_IX_3.1.pdf";
import ICT_IX_3_2 from "../../Documentation/E_Book_Self/HSC_TEXT/ICT_IX_3.2.pdf";
import ClassNineChemistry from "../../Documentation/E_Book_Self/SSC_TEXT/ClassNineChemistry.pdf";
import SearchPage from "./SearchPage";
const books = [
  {
    id: 9,
    section: "চতুর্থ শ্রেণি (Class Four)",
    name: "প্রাথমিক গণিত (চতুর্থ শ্রেণি)",
    author: "NCTB(National Curiculam Text Book Board)",
    content: Math_4,
    keyword: "চতুর্থ শ্রেণি (Class Four) প্রাথমিক গণিত (চতুর্থ শ্রেণি) Math",
  },
  {
    id: 10,
    section: "চতুর্থ শ্রেণি (Class Four)",
    name: "প্রাথমিক বিজ্ঞান (চতুর্থ শ্রেণি)",
    author: "NCTB(National Curiculam Text Book Board)",
    content: Science_4,
    keyword: "চতুর্থ শ্রেণি (Class Four) প্রাথমিক বিজ্ঞান (চতুর্থ শ্রেণি)",
  },
  {
    id: 11,
    section: "চতুর্থ শ্রেণি (Class Four)",
    name: "বাংলাদেশ ও বিশ্বপরিচয় (চতুর্থ শ্রেণি)",
    author: "NCTB(National Curiculam Text Book Board)",
    content: BGS_4,
    keyword: "চতুর্থ শ্রেণি (Class Four) বাংলাদেশ ও বিশ্বপরিচয় (চতুর্থ শ্রেণি)",
  },
  {
    id: 14,
    section: "পঞ্চম শ্রেণি (Class Five)",
    name: "প্রাথমিক গণিত (পঞ্চম শ্রেণি) ",
    author: "NCTB(National Curiculam Text Book Board)",
    content: Math_5,
    keyword: "পঞ্চম শ্রেণি (Class Five) প্রাথমিক গণিত (পঞ্চম শ্রেণি) Math",
  },
  {
    id: 15,
    section: "পঞ্চম শ্রেণি (Class Five)",
    name: "প্রাথমিক বিজ্ঞান (পঞ্চম শ্রেণি)",
    author: "NCTB(National Curiculam Text Book Board)",
    content: Science_5,
    keyword: "পঞ্চম শ্রেণি (Class Five) প্রাথমিক বিজ্ঞান (পঞ্চম শ্রেণি)",
  },
  {
    id: 16,
    section: "পঞ্চম শ্রেণি (Class Five)",
    name: "বাংলাদেশ ও বিশ্বপরিচয়(পঞ্চম শ্রেণি)",
    author: "NCTB(National Curiculam Text Book Board)",
    content: BGS_5,
    keyword: "পঞ্চম শ্রেণি (Class Five) বাংলাদেশ ও বিশ্বপরিচয়(পঞ্চম শ্রেণি)",
  },

  {
    id: 19,
    section: "ষষ্ঠ শ্রেণি (Class Six)",
    name: "গণিত(Mathematics)",
    author: "NCTB(National Curiculam Text Book Board)",
    content: Math_6,
    keyword: "ষষ্ঠ শ্রেণি (Class Six) গণিত(Mathematics)",
  },
  {
    id: 20,
    section: "ষষ্ঠ শ্রেণি (Class Six)",
    name: "Science(বিজ্ঞান)",
    author: "NCTB(National Curiculam Text Book Board)",
    content: Science_6,
    keyword: "ষষ্ঠ শ্রেণি (Class Six) Science(বিজ্ঞান)",
  },
  {
    id: 21,
    section: "ষষ্ঠ শ্রেণি (Class Six)",
    name: "বাংলাদেশ ও বিশ্বপরিচয়",
    author: "NCTB(National Curiculam Text Book Board)",
    content: BGS_6,
    keyword: "ষষ্ঠ শ্রেণি (Class Six) বাংলাদেশ ও বিশ্বপরিচয়",
  },

  {
    id: 23,
    section: "ষষ্ঠ শ্রেণি (Class Six)",
    name: "আইসিটি (তথ্য ও যোগাযোগ প্রযুক্তি) ICT Class 6",
    author: "NCTB(National Curiculam Text Book Board)",
    content: ICT_6,
    keyword:
      "ষষ্ঠ শ্রেণি (Class Six) আইসিটি (তথ্য ও যোগাযোগ প্রযুক্তি) ICT Class 6",
  },
  {
    id: 29,
    section: "সপ্তম শ্রেণি (Class Seven)",
    name: "বাংলা ব্যাকরণ (Bangla Grammar) Class",
    author: "NCTB(National Curiculam Text Book Board)",
    content: BanglaBakoron_7,
    keyword: "সপ্তম শ্রেণি (Class Seven) বাংলা ব্যাকরণ (Bangla Grammar) Class",
  },
  {
    id: 30,
    section: "সপ্তম শ্রেণি (Class Seven)",
    name: "গণিত(Mathematics)",
    author: "NCTB(National Curiculam Text Book Board)",
    content: Math_7,
    keyword: "সপ্তম শ্রেণি (Class Seven) গণিত(Mathematics)",
  },
  {
    id: 31,
    section: "সপ্তম শ্রেণি (Class Seven)",
    name: "Science(বিজ্ঞান)",
    author: "NCTB(National Curiculam Text Book Board)",
    content: Science_7,
    keyword: "সপ্তম শ্রেণি (Class Seven) Science(বিজ্ঞান)",
  },
  {
    id: 32,
    section: "সপ্তম শ্রেণি (Class Seven)",
    name: "বাংলাদেশ ও বিশ্বপরিচয়",
    author: "NCTB(National Curiculam Text Book Board)",
    content: BGS_7,
    keyword: "সপ্তম শ্রেণি (Class Seven) বাংলাদেশ ও বিশ্বপরিচয়",
  },

  {
    id: 34,
    section: "সপ্তম শ্রেণি (Class Seven)",
    name: "আইসিটি (তথ্য ও যোগাযোগ প্রযুক্তি) ICT Class 7",
    author: "NCTB(National Curiculam Text Book Board)",
    content: ICT_7,
    keyword:
      "সপ্তম শ্রেণি (Class Seven) আইসিটি (তথ্য ও যোগাযোগ প্রযুক্তি) ICT Class 7",
  },

  {
    id: 39,
    section: "অষ্টম শ্রেণি (Class Seven)",
    name: "বাংলা ব্যাকরণ (Bangla Grammar Class 8)",
    author: "NCTB(National Curiculam Text Book Board)",
    content: BanglaBakoron_8,
    keyword:
      "অষ্টম শ্রেণি (Class Seven) বাংলা ব্যাকরণ (Bangla Grammar Class 8)",
  },
  {
    id: 40,
    section: "অষ্টম শ্রেণি (Class Seven)",
    name: "গণিত(Mathematics)",
    author: "NCTB(National Curiculam Text Book Board)",
    content: Math_8,
    keyword: "অষ্টম শ্রেণি (Class Seven) গণিত(Mathematics)",
  },
  {
    id: 41,
    section: "অষ্টম শ্রেণি (Class Seven)",
    name: "Science(বিজ্ঞান)",
    author: "NCTB(National Curiculam Text Book Board)",
    content: Science_8,
    keyword: "অষ্টম শ্রেণি (Class Seven) Science(বিজ্ঞান)",
  },
  {
    id: 42,
    section: "অষ্টম শ্রেণি (Class Seven)",
    name: "বাংলাদেশ ও বিশ্বপরিচয়",
    author: "NCTB(National Curiculam Text Book Board)",
    content: BGS_8,
    keyword: "অষ্টম শ্রেণি (Class Seven) বাংলাদেশ ও বিশ্বপরিচয়",
  },

  {
    id: 44,
    section: "অষ্টম শ্রেণি (Class Seven)",
    name: "আইসিটি (তথ্য ও যোগাযোগ প্রযুক্তি) ICT Class 8",
    author: "NCTB(National Curiculam Text Book Board)",
    content: ICT_8,
    keyword:
      "অষ্টম শ্রেণি (Class Seven) আইসিটি (তথ্য ও যোগাযোগ প্রযুক্তি) ICT Class 8",
  },

  {
    id: 49,
    section: "নবম শ্রেণি (Class 9-10)",
    name: "বাংলা ব্যাকরণ (Bangla Grammar) Class 9-10",
    author: "NCTB(National Curiculam Text Book Board)",
    content: BanglaGrammar9,
    keyword:
      "নবম শ্রেণি (Class 9-10) বাংলা ব্যাকরণ (Bangla Grammar) Class 9-10",
  },
  {
    id: 50,
    section: "নবম শ্রেণি (Class 9-10)",
    name: "গণিত (নবম-দশম শ্রেণি) Class 9-10",
    author: "NCTB(National Curiculam Text Book Board)",
    content: ClassNineMath,
    keyword: "নবম শ্রেণি (Class 9-10) গণিত (নবম-দশম শ্রেণি) Class 9-10",
  },
  {
    id: 51,
    section: "নবম শ্রেণি (Class 9-10)",
    name: "উচ্চতর গণিত (নবম-দশম শ্রেণি) Class 9-10",
    author: "NCTB(National Curiculam Text Book Board)",
    content: ClassNineHigherMath,
    keyword: "নবম শ্রেণি (Class 9-10) উচ্চতর গণিত (নবম-দশম শ্রেণি) Class 9-10",
  },
  {
    id: 52,
    section: "নবম শ্রেণি (Class 9-10)",
    name: "জীববিজ্ঞান (Biology) Class 9-10",
    author: "NCTB(National Curiculam Text Book Board)",
    content: Biology9,
    keyword: "নবম শ্রেণি (Class 9-10) জীববিজ্ঞান (Biology) Class 9-10",
  },
  {
    id: 53,
    section: "নবম শ্রেণি (Class 9-10)",
    name: "পদার্থ (Physics) Class 9-10",
    author: "NCTB(National Curiculam Text Book Board)",
    content: Physics9,
    keyword: "নবম শ্রেণি (Class 9-10) পদার্থ (Physics) Class 9-10",
  },
  {
    id: 54,
    section: "নবম শ্রেণি (Class 9-10)",
    name: "বিজ্ঞান (Science) Class 9-10",
    author: "NCTB(National Curiculam Text Book Board)",
    content: Science9,
    keyword: "নবম শ্রেণি (Class 9-10) বিজ্ঞান (Science) Class 9-10",
  },
  {
    id: 55,
    section: "নবম শ্রেণি (Class 9-10)",
    name: "বাংলাদেশ ও বিশ্বপরিচয় Class 9-10",
    author: "NCTB(National Curiculam Text Book Board)",
    content: BGS9,
    keyword: "নবম শ্রেণি (Class 9-10) বাংলাদেশ ও বিশ্বপরিচয় Class 9-10",
  },

  {
    id: 58,
    section: "নবম শ্রেণি (Class 9-10)",
    name: "আইসিটি (তথ্য ও যোগাযোগ প্রযুক্তি) ICT Class 9-10 ",
    author: "NCTB(National Curiculam Text Book Board)",
    content: ICT9,
    keyword:
      "নবম শ্রেণি (Class 9-10) আইসিটি (তথ্য ও যোগাযোগ প্রযুক্তি) ICT Class 9-10 ",
  },

  {
    id: 63,
    section: "নবম শ্রেণি (Class 9-10)",
    name: "রসায়ন (Chemistry) Class 9-10",
    author: "NCTB(National Curiculam Text Book Board)",
    content: ClassNineChemistry,
    keyword: "নবম শ্রেণি (Class 9-10) রসায়ন (Chemistry) Class 9-10",
  },
  {
    id: 64,
    section: "একাদশ - দ্বাদশ (Class Eleven Twelve)",
    name: "আইসিটি-2 (তথ্য ও যোগাযোগ প্রযুক্তি-2) ICT Class 11-12",
    author: "NCTB(National Curiculam Text Book Board)",
    content: ICT_IX_2,
    keyword:
      "একাদশ - দ্বাদশ (Class Eleven Twelve) আইসিটি (তথ্য ও যোগাযোগ প্রযুক্তি) ICT Class 11-12",
  },
  {
    id: 65,
    section: "একাদশ - দ্বাদশ (Class Eleven Twelve)",
    name: "আইসিটি-3.1 (তথ্য ও যোগাযোগ প্রযুক্তি-3.1) ICT Class 11-12",
    author: "NCTB(National Curiculam Text Book Board)",
    content: ICT_IX_3_1,
    keyword:
      "একাদশ - দ্বাদশ (Class Eleven Twelve) আইসিটি (তথ্য ও যোগাযোগ প্রযুক্তি) ICT Class 11-12",
  },
  {
    id: 66,
    section: "একাদশ - দ্বাদশ (Class Eleven Twelve)",
    name: "আইসিটি-3.2 (তথ্য ও যোগাযোগ প্রযুক্তি-3.2) ICT Class 11-12",
    author: "NCTB(National Curiculam Text Book Board)",
    content: ICT_IX_3_2,
    keyword:
      "একাদশ - দ্বাদশ (Class Eleven Twelve) আইসিটি (তথ্য ও যোগাযোগ প্রযুক্তি) ICT Class 11-12",
  },
  {
    id: 67,
    section: "একাদশ - দ্বাদশ (Class Eleven Twelve)",
    name: "আইসিটি-1 (তথ্য ও যোগাযোগ প্রযুক্তি-1) ICT Class 11-12",
    author: "NCTB(National Curiculam Text Book Board)",
    content: ICT_IX_1,
    keyword:
      "একাদশ - দ্বাদশ (Class Eleven Twelve) আইসিটি (তথ্য ও যোগাযোগ প্রযুক্তি) ICT Class 11-12",
  },
];
const SearchContent= () => {
  return (
    <div className="w-full p-5">
      <SearchPage book={books} />
    </div>
  );
};

export default SearchContent;
