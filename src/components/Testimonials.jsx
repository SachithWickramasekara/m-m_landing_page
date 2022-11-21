import { FaQuoteLeft } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIosSharp";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosSharp";
import { customerReviews } from "../data/customReviews";
import { useState } from "react";
import { useEffect } from "react";

const CustomerReview = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [nextReview, setNextReview] = useState(1);
  const length = customerReviews.length;

  const next = () => {
    setCurrentReview(currentReview === length - 1 ? 0 : currentReview + 1);
    setNextReview(nextReview === length - 1 ? 0 : nextReview + 1);
  };

  const prev = () => {
    setCurrentReview(currentReview === 0 ? 1 : currentReview - 1);
    setNextReview(nextReview === 0 ? 1 : nextReview - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentReview, nextReview]);

  return (
    <div className="flex flex-col items-center py-16 px-5 ">
      <span className="text-4xl font-semibold">Customer Reviews</span>

      <div className="mt-10 flex items-center justify-center">
        <div
          onClick={prev}
          className="flex justify-center cursor-pointer items-center w-8 h-8 rounded-full bg-[#e62626]"
        >
          <ArrowBackIosNewIcon className="text-white w-3" />
        </div>

        {customerReviews.map((review, index) => {
          const { desc, authInit, authName } = review;
          return (
            <>
              {index === currentReview && (
                <>
                  <div key={index} className="h-72 w-3/4 md:h-80 md:w-1/2 lg:w-96 bg-[#e7a2ae] rounded-lg flex flex-col py-10 px-7 justify-center mx-2 md:mx-3 lg:mx-7 transition-all ease-linear duration-300 ">
                    <span>
                      <FaQuoteLeft />
                    </span>

                    <span className="text-xs tracking-wide md:tracking-widest text-[#1E1E1E] text-justify mt-2 md:mt-5">
                      {desc}
                    </span>
                    <div className="w-full h-[1px] mt-2 mb-2 md:mt-5 md:mb-5 bg-[#1E1E1E]"></div>
                    <div className="flex">
                      <div className="w-12 h-12 bg-[#a32424] text-white rounded-full flex items-center justify-center">
                        {authInit}
                      </div>
                      <div className="flex flex-col ml-5 text-[#1E1E1E] text-sm">
                        <span>{authName}</span>
                        <div className="flex mt-1">
                          <AiFillStar className="text-[#e1e43b] mr-1" />
                          <AiFillStar className="text-[#e1e43b] mx-1" />
                          <AiFillStar className="text-[#e1e43b] mx-1" />
                          <AiFillStar className="text-[#e1e43b] mx-1" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="h-80 w-96 bg-[#e7a2ae] rounded-lg hidden md:flex flex-col py-10 px-7 md:mx-3 lg:mx-7 justify-center">
                    <span>
                      <FaQuoteLeft />
                    </span>

                    <span className="text-xs tracking-widest text-[#1E1E1E] text-justify mt-5">
                      {customerReviews[nextReview].desc}
                    </span>
                    <div className="w-full h-[1px] mt-5 mb-5 bg-[#1E1E1E]"></div>
                    <div className="flex">
                      <div className="w-12 h-12 bg-[#a32424] text-white rounded-full flex items-center justify-center">
                        {customerReviews[nextReview].authInit}
                      </div>
                      <div className="flex flex-col ml-5 text-[#1E1E1E] text-sm">
                        <span>{customerReviews[nextReview].authName}</span>
                        <div className="flex mt-1">
                          <AiFillStar className="text-[#e1e43b] mr-1" />
                          <AiFillStar className="text-[#e1e43b] mx-1" />
                          <AiFillStar className="text-[#e1e43b] mx-1" />
                          <AiFillStar className="text-[#e1e43b] mx-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </>
          );
        })}

        <div
          onClick={next}
          className="flex justify-center items-center w-8 h-8 rounded-full bg-[#e62626]  cursor-pointer"
        >
          <ArrowForwardIosIcon className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;