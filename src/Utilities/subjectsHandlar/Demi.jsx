import React, { useState } from 'react';
import { Link } from 'react-router';
import biddaloy from "../../Documentation/components/images/class.jpg";
const Demi = ({sub}) => {
  console.log(sub);
  
  const [subjectID, setSubject] = useState("");
  const moveSubjects = (m) => {
    setSubject(m);
  };
  console.log(subjectID);
  return (
    <section className="w-full px-1 bg-base-100">
      <div className="w-full">
        <div className="flex justify-center items-center flex-wrap">
          <dialog
            id="my_modal_5"
            className="modal modal-start text-primary-content"
          >
            <div className="modal-box rounded-none">
              <h3 className="font-bold text-lg text-orange-500">বই সমূহ </h3>
              {sub?.map((subject) => (
                <Link
                  key={subject?.id}
                  onClick={() => moveSubjects(subject?.id)}
                  className="btn btn-outline btn-primary focus:text-blue-600 transition-colors duration-300 m-1"
                >
                  {subject?.name}
                </Link>
              ))}
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
        {sub?.map((subject) => (
          <div className="w-full mx-0 text-primary-content" key={subject?.id}>
            {Number(subject?.id) === Number(subjectID) && (
              <span> {subject?.content}</span>
            )}
          </div>
        ))}

        {Number(subjectID.length) === 0 && (
          <div className="hero w-full bg-base-100">
            <img
              src={biddaloy}
              alt="biddaloy"
              className="w-full bg-base-100"
            />
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">
                  <button
                    onClick={() =>
                      document.getElementById("my_modal_5").showModal()
                    }
                    className={`btn btn-outline btn-primary focus:text-orange-600 transition-colors duration-300 text-shadow-primary-content`}
                  >
                    বিষয় সমূহ
                  </button>
                </h1>
                <p className="mb-5">
                  আপনাকে প্রথমে একটি বিষয় নির্বাচন করতে হবে। <br />
                  তারপর আপনি সেই বিষয় সম্পর্কিত বই সমূহ দেখতে পারবেন।
                </p>

                <button
                  onClick={() =>
                    document.getElementById("my_modal_5").showModal()
                  }
                  className={`btn btn-outline btn-primary focus:text-orange-600 transition-colors duration-300 text-shadow-primary-content`}
                >
                  বিষয় সমূহ
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Demi;