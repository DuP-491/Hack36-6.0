import React from "react";
import Judge from "./Judge";
import JudgeData from "../../data/JudgeData";
const Judges = () => {
  return (
    <section className="mt-10 ">
      <div className="space-y-10 2xl:container">
        <h1 className="text-3xl font-bold text-center text-white uppercase md:text-5xl ">
          Meet Our Judges
        </h1>
        <div className="flex flex-wrap justify-center gap-8 p-4 antialiased text-gray-600 ">
          {JudgeData.map((judge, idx) => {
            return (
              <Judge
                imageLink={judge.imageLink}
                name={judge.name}
                title={judge.title}
                link={judge.link}
                key={idx}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Judges;
