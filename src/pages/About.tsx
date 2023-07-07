import RouteButton from "../components/Button";

const Root = () => {
  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center">
      <div className="text-gray-800 text-8xl">about</div>
      <RouteButton path="/" children="Go main" />
    </div>
  );
};

export default Root;
