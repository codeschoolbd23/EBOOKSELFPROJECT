import React, { useState } from 'react';
import { Link } from 'react-router';
const Demi = ({sub}) => {
    const [subjectID, setSubject] = useState(3);
    const moveSubjects = (m) => {
      setSubject(m);
    };
    console.log(subjectID);
    const class_name =
      "p-1 flex justify-center items-center border-indigo-900 focus:bg-primary focus:border-blue-500 focus:text-yellow-300 hover:border-blue-200 hover:bg-yellow-500 hover:text-white mx-1 rounded-full ";
    return (
      <section className="w-full px-1">
        <div className="w-full">
          {/* subject overview section */}
          <div className="flex w-full flex-wrap">
            {sub?.map((subject) => (
              <Link
                key={subject.id}
                onClick={() => moveSubjects(subject.id)}
                className={`${class_name}`}
              >
                {subject.name}
              </Link>
            ))}
          </div>
          <>
            {sub?.map((subject) => (
              <div className="w-full mx-0 text-xs" key={subject.id}>
                {Number(subject.id) === Number(subjectID) ? (
                  <span>
                    {subject?.content}
                  </span>
                ) : (
                  <div className="hidden">There is no class</div>
                )}
              </div>
            ))}
          </>
        </div>
      </section>
    );
};

export default Demi;