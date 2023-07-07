import RouteButton from "../components/Button";

const About = () => {
  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center">
      <div className=" text-gray-800 text-8xl">root</div>
      <RouteButton path="/about" children="about" />
    </div>
  );
};

export default About;
