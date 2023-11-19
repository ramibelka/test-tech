import { IoCloudUploadOutline } from "react-icons/io5";
import Papa from "papaparse";
import { useNavigate } from "react-router-dom";
import { uniqueItemsArray } from "../utils";
import useStore from "../store";

const File = () => {
  const { setData, setUsers } = useStore();
  const allowedExtensions = ["csv"];

  const navigate = useNavigate();

  const parse = (file) => {
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: function (result) {
        const columnArray = [];
        const valuesArray = [];
        let usersArray = ["admin"];
        result.data.map((d) => {
          columnArray.push(Object.keys(d));
          valuesArray.push(Object.values(d));
        });
        valuesArray.map((v) => {
          usersArray.push(v[0].trim().toLowerCase());
        });
        usersArray = uniqueItemsArray(usersArray);
        setUsers(usersArray);
        setData(valuesArray);
      },
    });
  };

  const handleFileChange = (e) => {
    e.preventDefault();

    const droppedFiles = e.dataTransfer.files;

    if (droppedFiles.length === 0) {
      alert("Please input a csv file");
      return;
    }

    const inputFile = droppedFiles[0];
    const fileExtension = inputFile?.type.split("/")[1];

    if (!allowedExtensions.includes(fileExtension)) {
      alert("Please input a csv file");
      return;
    }

    parse(inputFile);
    navigate("/login");
  };

  const handleFile = (event) => {
    if (!event.target.files[0]) {
      alert("Please enter a file");
      return;
    }
    parse(event.target.files[0]);
    navigate("/login");
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div
        className="flex flex-col items-center gap-6 rounded-md border-2 border-dashed border-gray-300 p-24"
        onDrop={handleFileChange}
        onDragOver={(e) => e.preventDefault()}
      >
        <IoCloudUploadOutline className="text-7xl text-gray-400" />
        <p className="text-center text-5xl text-gray-400">
          Drag&drop files here
        </p>
        <input
          type="file"
          id="fileInput"
          className="hidden"
          multiple
          onChange={handleFile}
          accept=".csv"
        />
        <p className="text-center text-2xl text-gray-400">Or</p>
        <label
          htmlFor="fileInput"
          className="cursor-pointer rounded-md border border-blue-600 px-4 py-2 text-2xl text-blue-500"
        >
          Browse Files
        </label>
      </div>
    </div>
  );
};

export default File;
