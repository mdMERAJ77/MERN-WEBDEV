import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      emial: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/bpjzmgwb", userInfo);

      toast.success("Your message has been sent");
    } catch (error) {
      toast.error("something is wrong!")
    }
  };
  return (
    <>
      <div
        id="Contact"
        className="xl:h-[610px] lg:h-[1250px] md:h-[600px] sm:h-[700px] mx-auto px-4 md:px-20 flex flex-col items-center bg-gray-50"
      >
        {/* Heading */}
        <h1 className="font-bold text-gray-800 md:text-3xl text-xl md:mt-6 mt-3">
          Contact
        </h1>
        <span className="text-gray-600 text-sm">
          Please fill out the form below to contact me 👨‍💻
        </span>

        {/* Form Container */}
        <div className="md:w-96 w-80 px-4 py-4 rounded-2xl md:mt-10 mt-5">
          <form
            onSubmit={handleSubmit(onSubmit)}
            action="https://getform.io/f/bpjzmgwb"
            method="POST"
            className="bg-white rounded-2xl shadow-xl p-6 space-y-5"
          >
            <h1 className="md:text-xl md:font-semibold  text-gray-800 text-center">
              Send Your Message
            </h1>

            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                {...register("name", { required: true })}
                name="name"
                type="text"
                placeholder="Enter your full name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              {errors.name && <span className="text-red-700">This field is required</span>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                {...register("email", { required: true })}
                name="email"
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />{" "}
              {errors.email && <span className="text-red-700">This field is required</span>}
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                {...register("message", { required: true })}
                name="message"
                id="message"
                placeholder="Write your message..."
                rows="4"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              ></textarea>
              {errors.message && <span className="text-red-700">This field is required</span>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full  bg-blue-600 hover:bg-blue-700 text-white  py-2 rounded-lg shadow-md transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
//
