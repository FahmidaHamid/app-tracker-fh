import { BsCupHotFill } from "react-icons/bs";
import { MdOutlineRateReview } from "react-icons/md";
import { RiDownloadCloud2Line } from "react-icons/ri";
const Bandana = () => {
  return (
    <div className="flex flex-1 flex-col items-center bg-gradient-to-r p-5 from-purple-500 via-blue-300 to-purple-600">
      <div>
        <h1 className="text-6xl font-bold text-shadow-purple-50 text-center">
          Trusted by Millions, Built for You
        </h1>
      </div>
      <div className="p-5 grid sm:grid-cols-1 md:grid-cols-3 gap-20">
        <div className="flex flex-1 flex-col items-center justify-center text-white">
          <h2 className="text-2xl flex flex-1 gap-3 items-center justify-center">
            <RiDownloadCloud2Line />
            Total Downloads
          </h2>
          <h1 className="text-7xl font-extrabold">29.6M</h1>
          <p className="text-lg font-bold">21% more than last month</p>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center text-white">
          <h2 className="text-2xl flex gap-3 items-center justify-center">
            <MdOutlineRateReview /> Total Reviews
          </h2>
          <h1 className="text-7xl font-extrabold">901K</h1>
          <p className="text-lg font-bold">46% more than last month</p>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center text-white">
          <h2 className="text-2xl flex gap-3 items-center justify-center">
            <BsCupHotFill /> Active Apps
          </h2>
          <h1 className="text-7xl font-extrabold">132+</h1>
          <p className="text-lg font-bold">31 more will launch</p>
        </div>
      </div>
    </div>
  );
};

export default Bandana;
