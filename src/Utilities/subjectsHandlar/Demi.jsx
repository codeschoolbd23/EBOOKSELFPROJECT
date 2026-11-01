import React, { useState } from 'react';
import { Link } from 'react-router';
import ClassLayout from './ClassLayout';
const Demi = ({sub}) => {
  console.log(sub);
  const [subjectID, setSubject] = useState("");
  const moveSubjects = (m) => {
    setSubject(m);
  };
  console.log(subjectID);
  const class_name =
    "p-1 text-lg text-primary btn btn-dashed flex justify-center items-center focus:bg-primary focus:text-yellow-300 hover:bg-yellow-500 hover:text-white mx-1 rounded-xl";
  return (
    <section className="w-full px-1 bg-base-100">
      <div className="w-full">
        <div className="flex justify-center items-center w-full flex-wrap  drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
          <p className='font-black text-red-500'>বিষয় সমূহ:-</p>
          {sub?.map((subject) => (
            <Link
              key={subject?.id}
              onClick={() => moveSubjects(subject?.id)}
              className={`${class_name}`}
            >
              {subject?.name}
            </Link>
          ))}
        </div>
        {sub?.map((subject) => (
          <div className="w-full mx-0 text-xs" key={subject?.id}>
            {Number(subject?.id) === Number(subjectID) && (
              <span> {subject?.content}</span>
            )}
          </div>
        ))}
        {Number(subjectID.length) === 0 && (
          <ClassLayout X={sub[0].class}></ClassLayout>
        )}
      </div>
    </section>
  );
};

export default Demi;