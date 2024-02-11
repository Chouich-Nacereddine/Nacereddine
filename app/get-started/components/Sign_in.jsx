const Sign_in = () => {
  return (
    <div>
      <div className="mb-6">
        <label
          for="email"
          className="block mb-2 text-sm font-medium text-white"
        >
          Email address
        </label>
        <input
          type="email"
          id="email"
          className="border text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
          placeholder="john.doe@company.com"
          required
        />
      </div>
      <div className="mb-6">
        <label
          for="password"
          className="block mb-2 text-sm font-medium text-white"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          className=" border text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
          placeholder="•••••••••"
          required
        />
      </div>
      <button
        type="submit"
        className="text-black bg-[#FF6600] active:scale-90 focus:outline-none font-bold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
      >
        Submit
      </button>
    </div>
  );
};

export default Sign_in;
