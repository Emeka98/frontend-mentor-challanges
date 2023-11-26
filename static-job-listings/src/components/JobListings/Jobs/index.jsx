import React, { useState } from "react";
import Job from "./Job";
import CloseIcon from "./CloseIcon";
function Jobs({ data }) {
  const [skills, setSkills] = useState([]);

  const handleClick = (newValue) => {
    if (!skills.includes(newValue)) {
      setSkills((prevSkills) => [...prevSkills, newValue]);
    }
  };

  const filteredData = data.filter((item) => {
    return skills?.every((skill) => {
      return (
        item.languages.includes(skill) ||
        item.role === skill ||
        item.level === skill ||
        item.tools.includes(skill)
      );
    });
  });

  const handleDelete = (skillToDelete) => {
    const newSkills = skills.filter((skill) => skill !== skillToDelete);
    setSkills(newSkills);
  };

  return (
    <main className="flex-1 px-6 py-8  ">
      <div className="flex flex-col gap-10 items-center rounded-[5px]  ">
        {skills.length === 0 ? (
          <></>
        ) : (
          <div className="flex gap-4 flex-wrap  bg-white rounded-[5px] custom-shadow md:w-[1100px] p-6 -mt-20   ">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center bg-[#5ca5a51a]   justify-center  h-8 rounded overflow-hidden "
              >
                <p className=" text-[#5ca5a5] px-2 font-bold leading-6 text-[16px]">
                  {skill}
                </p>
                <button
                  onClick={() => handleDelete(skill)}
                  className="bg-black h-full w-8 inline-flex items-center justify-center"
                >
                  <CloseIcon />
                </button>
              </div>
            ))}

            <button
              onClick={() => setSkills([])}
              className="text-[16px] font-bold leading-6 text-[#7c8f8f] hover:underline hover:text-[#5ca5a5] ml-auto "
            >
              Clear
            </button>
          </div>
        )}
        {filteredData.map((content, index) => (
          <Job
            key={index}
            data={content}
            skills={skills}
            handleClick={handleClick}
          />
        ))}
      </div>
    </main>
  );
}

export default Jobs;
