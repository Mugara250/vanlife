import MyVan from "./assets/campvancropped.png";
const About = () => {
  return (
    <div className="bg-[#FFF7ED]">
      <img src={MyVan} alt="Camping van" className="" />
      <div className="pt-14 px-6 pb-9">
        <h1 className="font-bold text-[32px]">
          Don’t squeeze in a sedan when you could relax in a van.
        </h1>
        <p className="mt-6">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
          <span className="block mt-5">
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </span>
        </p>
        <div className="bg-[#FFCC8D] mt-6 pt-8 px-6 pb-6 rounded-lg">
          <div className="font-bold text-2xl">
            <span className="block">Your destination is waiting</span>
            <span className="block">Your van is ready</span>
          </div>
          <button className="mt-6 font-bold text-base bg-black text-white px-3 py-2 rounded-lg">
            Explore your plans
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
