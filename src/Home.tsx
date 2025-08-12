const Home = () => {
  return (

    <div className="relative pb-[5rem]">
      <div className="absolute inset-0 bg-[url(./assets/camping-site.png)] bg-cover filter brightness-50"></div>
      <div className="w-[90%] mx-auto text-white text-base text-center pt-[7rem] relative z-10 ">
        <h1 className="font-extrabold text-4xl text-left">
          You got the travel plans, we <br /> got the travel vans.</h1>
        <p className="mt-6 font-medium text-left ">Add adventure to your life by joining the #vanlife movement. <br /> Rent the perfect van to make your perfect road trip.</p>
        <button className="bg-[#FF8C38] mt-10 font-bold rounded-xl py-4 px-1.5 w-full">Find your van</button>
      </div>
    </div>
  )
}

export default Home;
