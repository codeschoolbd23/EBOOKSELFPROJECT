import React, { useState } from 'react';
import { ExternalLink } from 'react-external-link';
import { FaDownload } from 'react-icons/fa';
import { Link } from 'react-router';

const Memo = (Subjects) => {
    console.log(Subjects);
  const [subjectID, setSubject] = useState(1);
  const moveSubjects = (m) => {
    setSubject(m);
  };
  console.log(subjectID);
  const class_name =
    "p-1 justify-start items-center border-indigo-900 focus:bg-blue-400 focus:border-blue-500 focus:text-yellow-300 hover:border-blue-200 hover:bg-base-300 hover:text-center border rounded-full mx-1";
  return (
    <>
      <section className="w-full px-1">
        <div className="w-full md:px-5 mx-auto">
          {/* subject overview section */}
          <div className="flex w-full mx-auto flex-wrap md:flex-nowrap px-0 md:px-10">
            {Subjects?.map((subject) => (
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
            {Subjects?.map((subject) => (
              <div className="w-full mx-auto text-xs" key={subject.id}>
                {Number(subject.id) === Number(subjectID) ? (
                  <span>
                    <span>
                      <ExternalLink
                        href={`https://drive.google.com/uc?export=download&id=${subject.href1}`}
                        className="text-red-400 hover:text-blue-600 p-1"
                      >
                        <FaDownload className="text-xl" />
                      </ExternalLink>
                    </span>

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
    </>
  );
};

export default Memo;