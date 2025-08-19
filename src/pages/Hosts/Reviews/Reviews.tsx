const Reviews = () => {
  return (
    <div className="bg-[#FFF7ED] px-6 pt-6">
      <h1 className="font-bold text-[32px]">
        Your reviews{" "}
        <span className="text-base font-medium text-[#4D4D4D] ml-2">
          last <span className="font-bold underline">30 days</span>
        </span>{" "}
      </h1>
      <div className="flex mt-3">
        <h1 className="font-bold text-[32px]">5.0</h1>
        <div className="flex justify-center items-center">
          <span className="text-[#FF8C38] text-2xl pl-2">&#9733;</span>
          <span className="text-base font-medium pl-1">overall rating</span>
        </div>
      </div>
      <div className="flex flex-col gap-y-3 pt-4 pb-8">
        <div className="text-base font-medium text-[#4D4D4D] flex gap-x-6">
          <h3>5 stars</h3>
          <div className="bg-[#FF8C38] h-2 rounded-lg w-3/4 place-self-center"></div>
          <h3>100%</h3>
        </div>
        <div className="text-base font-medium text-[#4D4D4D] flex justify-between">
          <h3>4 stars</h3>
          <div className="bg-[#B9B9B9] h-2 rounded-lg w-3/4 place-self-center"></div>
          <h3 className=" pl-4">0%</h3>
        </div>
        <div className="text-base font-medium text-[#4D4D4D] flex justify-between">
          <h3>3 stars</h3>
          <div className="bg-[#B9B9B9] h-2 rounded-lg w-3/4 place-self-center"></div>
          <h3 className=" pl-3">0%</h3>
        </div>
        <div className="text-base font-medium text-[#4D4D4D] flex justify-between">
          <h3>2 stars</h3>
          <div className="bg-[#B9B9B9] h-2 rounded-lg w-3/4 place-self-center"></div>
          <h3 className=" pl-3">0%</h3>
        </div>
        <div className="text-base font-medium text-[#4D4D4D] flex justify-between">
          <h3>1 stars</h3>
          <div className="bg-[#B9B9B9] h-2 rounded-lg w-3/4 place-self-center"></div>
          <h3 className=" pl-2">0%</h3>
        </div>
      </div>
      <div className="pb-6">
        <h1 className="font-bold text-[18px]">Reviews (2)</h1>
        <div className="text-[#FF8C38] text-2xl py-2">
          &#9733;&#9733;&#9733;&#9733;&#9733;
        </div>
        <h3 className="text-base font-semibold">
          Elliot <span className="text-[#8C8C8C]">December 1, 2022</span>
        </h3>
        <p className="pt-2 pb-6 font-medium">
          The beach bum is such as awesome van! Such as comfortable trip. We had
          it for 2 weeks and there was not a single issue. Super clean when we
          picked it up and the host is very comfortable and understanding.
          Highly recommend!
        </p>
        <hr className="text-[#8C8C8C]" />
      </div>
      <div className="pb-10">
        <div className="text-[#FF8C38] text-2xl py-2">
          &#9733;&#9733;&#9733;&#9733;&#9733;
        </div>
        <h3 className="text-base font-semibold">
          Sandy <span className="text-[#8C8C8C]">November 23, 2022</span>
        </h3>
        <p className="pt-2 pb-8 font-medium">
          This is our third time using the Modest Explorer for our travels and
          we love it! No complaints, absolutely perfect!
        </p>
        <hr className="text-[#8C8C8C]" />
      </div>
    </div>
  );
};

export default Reviews;
