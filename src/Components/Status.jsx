

const Status = () => {
    // const {data,isSuccess,isError,isLoading} = useGetAllStatusQuery();
    // if(isLoading){
    //     return <Loading/>
    // }
    // console.log(data?.data?.attributes);
    // const result = data?.data?.attributes;
    return (
        <div className="grid grid-cols-3 gap-[24px] mt-[24px]">
            <div className="bg-primary px-[20px] py-[32px] flex justify-between items-center rounded-lg border-2 ">
                {/* <LuBadgeDollarSign size={81} color="white" className="bg-[#FA1131] p-[10px] rounded-full"/> */}
                <div className="">
                    <p className="font-medium text-[20px] text-textColor">Total Earnings</p>
                    <h1 className="text-secondary text-[30px] ">$254.99</h1>
                </div>
            </div>
            <div className="bg-primary px-[20px] py-[32px] flex justify-between items-center rounded-lg border-2 ">
                {/* <MdEmojiEvents size={81} color="white" className="bg-[#FA1131] p-[10px] rounded-full"/> */}
                <div className="">
                    <p className="font-medium text-[20px] text-textColor">Total Users</p>
                    <h1 className="text-secondary text-[30px] ">6500</h1>
                </div>
            </div>
            <div className="bg-primary px-[20px] py-[32px] flex justify-between items-center rounded-lg border-2">
                {/* <FaUsers size={81} color="white" className="bg-[#FA1131] p-[10px] rounded-full"/> */}
                <div className="">
                    <p className="font-medium text-[20px] text-textColor">Total Salon Owner</p>
                    <h1 className="text-secondary text-[30px]">740</h1>
                </div>
            </div>
        </div>
    );
}

export default Status;
