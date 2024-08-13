import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Help = () => {
    const navigate = useNavigate();
  return (
    <div>
        <div className="flex justify-end items-center mt-4">
        <div
          onClick={(e) => navigate("/help/add-help")}
          className="flex gap-2 items-center py-[15px]
                 px-[40px]
                  bg-secondary
                  rounded-lg
                  text-white
                  cursor-pointer
                  "
        >
          <FaPlus size={17} />
          <p>Edit</p>
        </div>
        </div>
      <div>
        <p className="text-[18px] font-semibold mt-6">Whats App Number:</p>
        <p className="text-gray-600 border-2 border-secondary rounded-lg px-4 my-2 py-2">
          135979788799
        </p>
      </div>
      <div>
        <p className="text-[18px] font-semibold mt-6">E-mail Us:</p>
        <p className="text-gray-600 border-2 border-secondary rounded-lg px-4 my-2 py-2">
         barbersalon@fakemail.com
        </p>
      </div>
    </div>
  );
};

export default Help;
