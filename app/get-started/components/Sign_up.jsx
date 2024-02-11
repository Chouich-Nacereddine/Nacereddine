const Sign_up = () => {
  return (
    <div>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label
            for="first_name"
            className="block mb-2 text-sm font-medium text-white"
          >
            First name
          </label>
          <input
            type="text"
            id="first_name"
            className="text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
            placeholder="John"
            required
          />
        </div>
        <div>
          <label
            for="last_name"
            className="block mb-2 text-sm font-medium text-white"
          >
            Last name
          </label>
          <input
            type="text"
            id="last_name"
            className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
            placeholder="Doe"
            required
          />
        </div>
      </div>
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

      <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
          <input
            id="remember"
            type="checkbox"
            value=""
            className="w-4 h-4 border rounded  bg-gray-700 border-gray-600 "
            required
          />
        </div>
        <label
          for="remember"
          className="ms-2 text-sm font-medium text-gray-300"
        >
          I agree with the{" "}
          <a href="#" className="hover:underline text-blue-500">
            terms and conditions
          </a>
          .
        </label>
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

export default Sign_up;
