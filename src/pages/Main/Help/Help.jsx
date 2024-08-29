import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useGetSingleSettingsQuery } from "../../../redux/settings/settingsApi";
import Loading from "../../../utils/Loading"

const Help = () => {
  const {data,isLoading,isError}=useGetSingleSettingsQuery()
    const navigate = useNavigate();
    if(isLoading){
      return <Loading/>
    }
    console.log(data)
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
          {data?.data?.whatsapp}
        </p>
      </div>
      <div>
        <p className="text-[18px] font-semibold mt-6">E-mail Us:</p>
        <p className="text-gray-600 border-2 border-secondary rounded-lg px-4 my-2 py-2">
        {data?.data?.email}
        </p>
      </div>
    </div>
  );
};

export default Help;
