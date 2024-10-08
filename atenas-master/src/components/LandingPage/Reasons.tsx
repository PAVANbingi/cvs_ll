import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaPlaneDeparture } from "react-icons/fa";
import { MdAutoGraph } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { GrCertificate } from "react-icons/gr";

export default function Reasons() {
  return (
    <>
      <div className="w-full bg-[#f2f2f2] flex flex-col justify-around gap-5 font-sans font-Poppins items-center py-5 px-24">
        <div className="w-full flex flex-col justify-center items-center gap-3 p-5 pt-5 pb-1">
          <p className="text-xl font-semibold uppercase">REASONS TO CHOOSE</p>
          <h1 className="text-5xl text-primary font-semibold uppercase my-3">
            Aténas{" "}
            <span className="text-white bg-primary px-2">Fraternity</span>
          </h1>
          <p className="text-lg text-center">
            Our unique curriculum, innovative pedagogy, and new projects enable
            us to prepare students to work in the world&apos;s No. 1 industry, the
            service industry. We are the ideal academy for students who wish to
            work in the service industry. Our employment placements in reputable
            companies are guaranteed.
          </p>
          <hr className="w-[200px] h-1 bg-primary border-none" />
        </div>
        {/* cards */}
        <div className="grid grid-cols-3 gap-10 mb-12">
          {/* card1 */}
          <div className="shadow-custom-shadow w-[350px] flex flex-col items-center p-5 h-[276px] ">
            <IoMdCheckmarkCircleOutline
              size={50}
              className="text-white h-[60px] w-[60px] bg-primary p-2 rounded-full"
            />
            <h1 className="text-xl text-center font-semibold p-3">
              BEST COURSES
            </h1>
            <p className="text-center text-base ">
              The best cabin crew training facility in India is Aténas
              Fraternity. It provides you with practical experience in the
              airline service sector using cutting-edge technologies.
            </p>
          </div>
          {/* card2 */}
          <div className="shadow-custom-shadow w-[350px] flex flex-col items-center p-5 h-[276px] ">
            <MdAutoGraph
              size={50}
              className="text-white bg-primary h-[60px] w-[60px] p-2 rounded-full"
            />
            <h1 className="text-xl text-center font-semibold p-3">
              PRACTICAL TRAINING
            </h1>
            <p className="text-center text-base ">
              Our students are motivated to apply their knowledge to different
              service industry sectors by our practical trainings and hands-on
              experience.
            </p>
          </div>
          {/* card3 */}
          <div className="shadow-custom-shadow w-[350px] flex flex-col items-center p-5 h-[276px] ">
            <FaBuilding
              size={50}
              className="text-white bg-primary h-[60px] w-[60px] p-2 rounded-full"
            />
            <h1 className="text-xl text-center font-semibold p-3">
              A WELL FACILITATED INFRASTRUCTURE
            </h1>
            <p className="text-center text-base ">
              Our classrooms are equipped with all the latest technology to
              educate today&apos;s professionals. You can get the best state of the
              art facilities at out institute.
            </p>
          </div>
          {/* card4 */}
          <div className="shadow-custom-shadow w-[350px] flex flex-col items-center p-5 h-[276px] ">
            <FaPlaneDeparture
              size={50}
              className="text-white h-[60px] w-[60px] bg-primary p-2 rounded-full"
            />
            <h1 className="text-xl text-center font-semibold p-3">
              WELL-CRAFTED COURSES
            </h1>
            <p className="text-center text-base ">
              Because we believe in delivering individualised education in a
              public setting, our ongoing, custom courses are a great fit for
              every student and their unique needs.
            </p>
          </div>
          {/* card5 */}
          <div className="shadow-custom-shadow w-[350px] flex flex-col items-center p-5 h-[276px] ">
            <GiTeacher
              size={50}
              className="text-white h-[60px] w-[60px] bg-primary p-3 rounded-full"
            />
            <h1 className="text-xl text-center font-semibold p-3">
              MODERN CLASSROOMS
            </h1>
            <p className="text-center text-base ">
              Our classrooms are equipped with all the latest technology to
              educate today&apos;s professionals. We also provide you mock in-flight
              training for real world exposure.
            </p>
          </div>
          {/* card6 */}
          <div className="shadow-custom-shadow w-[350px] flex flex-col items-center p-5 h-[276px] ">
            <GrCertificate
              size={50}
              className="text-white h-[60px] w-[60px] bg-primary p-3 rounded-full"
            />
            <h1 className="text-xl text-center font-semibold p-3">
              FOCUS ON EDUCATION
            </h1>
            <p className="text-center text-base ">
              Aténas Fraternity lays deep emphasis on education and we aim at
              catering the highest quality of education to all our students.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
