import Hero from "../components/Hero";
import wave from "../assets/wave.svg"

const Home = () => {
  return (
    <div className="flex relative flex-col items-center justify-center min-h-[calc(100vh-116px)]">
      <Hero></Hero>

      <img src={wave} className="absolute bottom-0 w-full" alt="" />
    </div>
  );
};

export default Home;
