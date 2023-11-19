import { useState } from "react";
import { PiListFill } from "react-icons/pi";
import DetailsCard from "./DetailsCard";

const LayerCard = ({ userData, image, title }) => {
  const [activeLayer, setActiveLayer] = useState(false);

  return (
    <div>
      <div
        className="z-10 mt-4 flex cursor-pointer items-center gap-6 border border-gray-400 bg-gray-100 p-2"
        onClick={() => setActiveLayer(!activeLayer)}
      >
        <img src={image} alt="Usine" className="h-32" />
        <div className="">
          <h1 className="mb-3 font-bold text-gray-700">{title}</h1>
          <h2 className="font-medium text-blue-600">
            ({userData.length}) {title}
          </h2>
        </div>
        <PiListFill className="ml-auto self-start text-4xl" />
      </div>
      <div
        className={`z-0 m-0 w-full transform border-b border-l border-r border-gray-300 p-6 transition-transform duration-300 ${
          activeLayer ? "translate-y-0" : " -translate-y-8 border-none"
        }`}
      >
        {activeLayer && (
          <div className="grid grid-cols-2 place-items-end gap-y-4">
            {userData.map((value, index) => (
              <DetailsCard key={index} value={value} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LayerCard;
