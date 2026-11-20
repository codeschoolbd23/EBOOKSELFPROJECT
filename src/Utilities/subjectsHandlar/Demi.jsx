import React, { useState } from 'react';
import classJpg from "../../Documentation/components/images/class.jpg";
const Demi = ({sub}) => {
  console.log(sub);
  const [subjectID, setSubject] = useState(1);
  const moveSubjects = (m) => {
    setSubject(m);
  };
  console.log(subjectID);
  return (
    <section className="w-full px-1 bg-base-100">
      <div className="w-full">
        <div className="bg-base-100 w-full">
          <dialog
            id="my_modal_5"
            className="modal modal-start text-primary-content w-full"
          >
            <div className="modal-box rounded-none w-1/3 bg-base-100 text-primary-content flex flex-col justify-start items-start ">
              <h3 className="font-bold text-lg text-orange-500 w-full text-center">
                বই সমূহ{" "}
              </h3>
              {/* if there is a button in form, it will close the modal */}
              <div className="grid grid-cols-3 gap-1 w-full">
                {" "}
                {sub?.map((subject) => (
                  <button
                    key={subject?.id}
                    onClick={() => moveSubjects(subject?.id)}
                    className="btn btn-outline btn-primary focus:text-red-600 transition-colors duration-300 m-1"
                  >
                    {subject?.name}
                  </button>
                ))}
              </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">বন্ধ করুন</button>
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
        {Number(subjectID?.length) === 0 && (
          <div className="hero w-full bg-base-100">
            <img src={classJpg} alt="classJpg" className="w-full bg-base-100" />
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content">
              <div className="max-w-md">
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