// import { ChevronDown } from "lucide-react";

const Footer = () => {
  return (
    <>
      <div className="w-full bg-[#F0F0F5] px-2 sm:px-6 md:px-16 xl:px-72 py-6 mt-14 xl:mt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-5 xl:gap-10">
        </div>
      </div>
      <div className="w-full bg-[#02060C] pb-10 lg:px-32 xl:px-64 lg:pb-20 xl:pb-24">
        <div className="">
          <div className="w-full lg:w-auto">
            <p className="text-blue-600 text-2xl mx-auto lg:max-w-56 -mt-14 pl-4 font-bold">
              ©HungryBear Technologies Pvt. Ltd 👌
            </p>
          </div>
          <div className="flex justify-between p-1.5 sm:p-4 md:px-12 md:py-4 lg:p-0 flex-shrink-0 flex-grow">
            <div className=" lg:mt-12 flex flex-col gap-2">
              <p className="text-white font-bold text-md md:text-lg">Company</p>
              <p className="text-[#9A9B9E] text-sm md:text-md">About</p>
              <p className="text-[#9A9B9E] text-sm md:text-md">Careers</p>
              <p className="text-[#9A9B9E] text-sm md:text-md">Team</p>
              <p className="text-[#9A9B9E] text-sm md:text-md">Hunger One</p>
              <p className="text-[#9A9B9E] text-sm md:text-md">
                HungryBear Instamart
              </p>
              <p className="text-[#9A9B9E] text-sm md:text-md">HungryBear Genie</p>
            </div>
            <div className=" lg:mt-12 flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <p className="text-white font-bold text-md md:text-lg">
                  Contact Us
                </p>
                <p className="text-[#9A9B9E] text-sm md:text-md">
                  Help & Support
                </p>
                <p className="text-[#9A9B9E] text-sm md:text-md">
                  Partner with us
                </p>
                <p className="text-[#9A9B9E] text-sm md:text-md">
                  Ride with us
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-white font-bold text-md md:text-lg">Legal</p>
                <p className="text-[#9A9B9E] text-sm md:text-md">
                  Terms & Conditions
                </p>
                <p className="text-[#9A9B9E] text-sm md:text-md">
                  Cookie Policy
                </p>
                <p className="text-[#9A9B9E] text-sm md:text-md">
                  Privacy Policy
                </p>
              </div>
            </div>
            <div className=" lg:mt-12 flex flex-col gap-2">
              <p className="text-white font-bold text-md md:text-lg">
                We deliver to:
              </p>
              <p className="text-[#9A9B9E] text-sm md:text-md">Bangalore</p>
              <p className="text-[#9A9B9E] text-sm md:text-md">Gurgaon</p>
              <p className="text-[#9A9B9E] text-sm md:text-md">Hyderabad</p>
              <p className="text-[#9A9B9E] text-sm md:text-md">Delhi</p>
              <p className="text-[#9A9B9E] text-sm md:text-md">Mumbai</p>
              <p className="text-[#9A9B9E] text-sm md:text-md">Pune</p>
              <div className="flex items-center border-[1px] border-[#9A9B9E] mt-2 rounded-lg justify-between px-2 py-1">
                <p className="text-[#9A9B9E] text-xs">589 Cities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
