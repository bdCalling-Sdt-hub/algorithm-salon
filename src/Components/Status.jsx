import { useGetSummaryQuery } from "../redux/summary/summary";
import Loading from "../utils/Loading";



const Status = () => {
    const {data,isSuccess,isError,isLoading} = useGetSummaryQuery();
    if(isLoading){
        return <Loading/>
    }

    // const result = data?.data?.attributes;
    return (
        <div className="grid grid-cols-3 gap-[24px] mt-[24px]">
            <div className="bg-primary px-[20px] py-[32px] flex justify-between items-center rounded-lg border-2 ">
                {/* <LuBadgeDollarSign size={81} color="white" className="bg-[#FA1131] p-[10px] rounded-full"/> */}
                <div className="">
                    <p className="font-medium text-[20px] text-textColor">Total Earnings</p>
                    <h1 className="text-secondary text-[30px] ">${data?.data?.totalEarning}</h1>
                </div>
            </div>
            <div className="bg-primary px-[20px] py-[32px] flex justify-between items-center rounded-lg border-2 ">
                {/* <MdEmojiEvents size={81} color="white" className="bg-[#FA1131] p-[10px] rounded-full"/> */}
                <div className="">
                    <p className="font-medium text-[20px] text-textColor">Total Users</p>
                    <h1 className="text-secondary text-[30px] ">{data?.data?.totalUsers}</h1>
                </div>
            </div>
            <div className="bg-primary px-[20px] py-[32px] flex justify-between items-center rounded-lg border-2">
                {/* <FaUsers size={81} color="white" className="bg-[#FA1131] p-[10px] rounded-full"/> */}
                <div className="">
                    <p className="font-medium text-[20px] text-textColor">Total Salon Owner</p>
                    <h1 className="text-secondary text-[30px]">{data?.data?.totalSalonOwners}</h1>
                </div>
            </div>
        </div>
    );
}

export default Status;
