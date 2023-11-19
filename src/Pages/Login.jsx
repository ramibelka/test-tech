import { useState } from "react";
import { HiIdentification } from "react-icons/hi";
import useStore from "../store";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { users, setCurrentUser } = useStore();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const { username, password } = formData;
    const newErrors = {};

    if (!username) {
      newErrors.username = "Username is required";
    }

    if (!password) {
      newErrors.password = "Password is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    const dbPassword = "1234";
    console.log(users);
    if (
      users.includes(username.trim().toLowerCase()) &&
      password === dbPassword
    ) {
      setCurrentUser(username.trim().toLowerCase());
      navigate("/home");
    } else {
      alert("wrong username or password");
    }

    console.log("Logging in with:", formData);
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-10">
      <h1 className="flex items-center justify-center gap-5 text-4xl font-bold text-gray-500">
        <HiIdentification className="text-6xl text-gray-900" />
        Connexion
      </h1>
      <form
        action=""
        className="flex flex-col gap-5 border px-16 py-7 shadow-[-5px_-5px_15px_4px_rgba(0,0,0,0.1),_5px_5px_15px_4px_rgba(45,78,255,0.15)]"
      >
        <div className="flex items-end justify-between gap-10">
          <label
            htmlFor="username"
            className="w-30 mb-2 text-xl font-bold text-gray-500"
          >
            Utilisateur
          </label>
          <input
            required
            type="text"
            name="username"
            placeholder="Identifiant"
            value={formData.username}
            onChange={handleInputChange}
            className="block w-60 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-xl text-gray-900 shadow-md focus:border-blue-500 focus:ring-blue-500 "
          />
        </div>
        {errors.username && (
          <p className="mt-1 self-end text-sm text-red-500">
            {errors.username}
          </p>
        )}

        <div className="flex items-end justify-between gap-10">
          <label
            htmlFor="password"
            className="w-30 mb-2 text-xl font-bold text-gray-500 "
          >
            Mot de passe
          </label>
          <input
            required
            type="password"
            name="password"
            placeholder="***********"
            value={formData.password}
            onChange={handleInputChange}
            className="w-60 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-xl text-gray-900 shadow-md focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        {errors.password && (
          <p className="mt-1 self-end text-sm text-red-500">
            {errors.password}
          </p>
        )}
        <button
          type="submit"
          onClick={handleLogin}
          className="hover:gray-800 self-end rounded-lg bg-gray-950 px-5 py-2.5 text-center text-xl font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Se connecter
        </button>
      </form>
    </div>
  );
};

export default Login;
