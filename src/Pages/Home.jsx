import React from "react";
import LayerCard from "../Components/LayerCard";
import Navbar from "../Components/Navbar";
import useStore from "../store";
import { useDataForUser } from "../Hooks/useDataForUser";
import SiteImage from "../img/factory.png";
import MachineImage from "../img/machine.png";
import PiecesImage from "../img/pieces.png";
import UsersImage from "../img/users.webp";

const Home = () => {
  const { currentUser, data, users } = useStore();
  const { sites, machines, pieces } = useDataForUser(data, currentUser);
  return (
    <>
      <Navbar />
      <div className="ml-24 mr-4 mt-4">
        <h1 className="w-full border border-gray-300 p-1 ">&gt; Home/</h1>
        <LayerCard
          image={SiteImage}
          userData={sites}
          title={"Sites de production"}
        />
        <LayerCard
          image={MachineImage}
          userData={machines}
          title={"Machines"}
        />
        <LayerCard image={PiecesImage} userData={pieces} title={"Pièces"} />
        {currentUser === "admin" && (
          <LayerCard
            image={UsersImage}
            userData={users}
            title={"Utilisateurs"}
          />
        )}
      </div>
    </>
  );
};

export default Home;
