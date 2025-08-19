import IncomeGraph from "../../../assets/income-graph.png";

const Income = () => {
  return (
    <div className="pt-8 px-6 pb-14 bg-[#FFF7ED]">
      <h1 className="text-[36px] font-bold">Income</h1>
      <h3 className="py-6 text-[#4D4D4D] text-base font-medium">
        Last <span className="font-bold underline">30 days</span>
      </h3>
      <h1 className="text-[48px] font-extrabold">$2,260</h1>
      <img
        src={IncomeGraph}
        alt="Image of the income graph"
        className="mt-10"
      />
      <div className="mt-10 flex justify-between">
        <h1 className="text-2xl font-bold">Your transactions (3)</h1>
        <h3 className="text-[#4D4D4D] text-base font-medium">
          Last <span className="font-bold underline">30 days</span>
        </h3>
      </div>
      <div className="mt-5 bg-white px-8 py-6 flex justify-between rounded-lg">
        <h1 className="text-[36px] font-semibold">$720</h1>
        <h3 className="text-[#4D4D4D] text-[20px] font-medium place-self-center">
          1/12/22
        </h3>
      </div>
      <div className="mt-5 bg-white px-8 py-6 flex justify-between rounded-lg">
        <h1 className="text-[36px] font-semibold">$560</h1>
        <h3 className="text-[#4D4D4D] text-[20px] font-medium place-self-center">
          10/11/22
        </h3>
      </div>
      <div className="mt-5 bg-white px-8 py-6 flex justify-between rounded-lg">
        <h1 className="text-[36px] font-semibold">$980</h1>
        <h3 className="text-[#4D4D4D] text-[20px] font-medium place-self-center">
          23/11/22
        </h3>
      </div>
    </div>
  );
};

export default Income;
