import React, { useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../App.css";
import { questions } from "../const";

const Body = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [fitImg, setFitImg] = useState(null);
  const [showNote, setShowNote] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleNext = () => {
    if (!formData[questions[step].id]) {
      toast.error(`Please answer the question: ${questions[step].question}`);
      return;
    }
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData[questions[step].id]) {
      toast.error(`Please answer the question: ${questions[step].question}`);
      return;
    }
    console.log("Form Data:", formData);
    toast.success("Your responses have been recorded.");
  };

  const handleImageChange = (e) => {
    setFitImg(URL.createObjectURL(e.target.files[0]));
  };
  const toggleNote = () => {
    setShowNote(!showNote);
  };

  return (
    <>
      <div className="relative h-screen w-full">
        <img
          src="./bg.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute p-2 allura text-4xl z-10 inset-x-0 top-0 sm:top-10 mb-10 text-center flex items-center justify-center font-[200] text-[#e0b552cd] ">
          Dive into the World of Luxurious Gold Jewelry!
        </div>
        {/* Glass DIV */}
        <div className="mt-12 sm:mt-2 absolute inset-0 flex flex-col items-center justify-center text-center w-auto overflow-clip">
          <div className="glass absolute h-[38rem] mt-16 flex flex-col items-center justify-center p-2 mb-2">
            <div className="flex mix-blend-difference absolute top-6 z-10">
              <img
                src="./logobg.png"
                alt="logo"
                className="h-auto w-36 cursor-pointer"
              />
            </div>
            <div className="text-center mt-6 justify-center poppins text-xl font-[500] text-gray-800">
              Let us assist you in finding the perfect jewelry match...
            </div>
            {/* Second glass */}
            <form
              className="glass2 relative overflow-scroll mt-4 flex items-center justify-center w-[30rem] h-[35rem] mb-5 p-14"
              onSubmit={handleSubmit}
            >
              <div className="text-wrap absolute flex text-left p-4">
                <div className="poppins items-center flex top-0">
                  {step < questions.length ? (
                    <div>
                      <div className="mb-4">
                        <label className="block poppins text-lg font-medium text-gray-700">
                          {questions[step].question}
                          <span
                            className="ml-2 text-[#8e16e] cursor-pointer"
                            onClick={toggleNote}
                          >
                            <FaQuestionCircle />
                          </span>
                        </label>
                        {showNote && (
                          <div className="mt-2 p-1 rounded text-sm text-gray-700">
                            {questions[step].note}
                          </div>
                        )}

                        {questions[step].type === "select" && (
                          <select
                            name={questions[step].id}
                            className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                            onChange={handleChange}
                            value={formData[questions[step].id] || ""}
                            required
                          >
                            <option value="" disabled>
                              Select an option
                            </option>
                            {questions[step].options.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                        )}
                        {questions[step].type === "radio" && (
                          <div className="mt-2">
                            {questions[step].options.map((option) => (
                              <label key={option} className="block">
                                <input
                                  type="radio"
                                  name={questions[step].id}
                                  value={option}
                                  onChange={handleChange}
                                  required
                                />
                                <span className="ml-2">{option}</span>
                              </label>
                            ))}
                          </div>
                        )}
                        {questions[step].id === "occasion" &&
                          formData.occasion === "Other (please specify)" && (
                            <input
                              type="text"
                              name="customOccasion"
                              placeholder="Specify occasion"
                              className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                              onChange={handleChange}
                            />
                          )}
                        {questions[step].id === "outfitMatch" &&
                          formData.outfitMatch === "Yes" && (
                            <div className="mt-14 absolute flex flex-col p-2 mr-5">
                              <label className="block ml-0 text-sm font-medium text-gray-700">
                                Upload an image of your outfit for better
                                recommendations.
                              </label>
                              <input
                                type="file"
                                accept="image/*"
                                className="w-full p-1 mt-2 justify-center items-center border border-gray-300 rounded-md"
                                onChange={handleImageChange}
                              />
                              {fitImg && (
                                <img
                                  src={fitImg}
                                  alt="Outfit preview"
                                  className="mt-4 w-full flex h-auto"
                                />
                              )}
                            </div>
                          )}
                      </div>
                      <div className="flex justify-between">
                        {step > 0 && (
                          <button
                            type="button"
                            className="px-4 py-2 nice font-semibold text-white gold rounded-md outline-none border-black"
                            onClick={handleBack}
                          >
                            Back
                          </button>
                        )}
                        {step < questions.length - 1 ? (
                          <button
                            type="button"
                            className="px-4 py-2 font-semibold text-white gold rounded-md outline-none border-black"
                            onClick={handleNext}
                          >
                            Next
                          </button>
                        ) : (
                          <button
                            type="submit"
                            className="px-4 py-2 font-semibold text-white gold rounded-md"
                          >
                            Submit
                          </button>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="text-center">
                      <h2 className="text-2xl font-semibold text-gray-700">
                        Thank you!
                      </h2>
                      <p className="mt-4 text-gray-500">
                        Your responses have been recorded.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        limit={5}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        draggable
        theme="colored"
        transition={Bounce}
      />
    </>
  );
};

export default Body;
