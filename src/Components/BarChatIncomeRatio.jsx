import { DatePicker } from "antd";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { useGetAnalyticsQuery } from "../redux/summary/summary";
import Loading from "../utils/Loading";
import { useState } from "react";

const BarChartIncomeRatio = () => {
    const [year,setYear ] = useState(2024);
    const {data,isError,isLoading,isSuccess} = useGetAnalyticsQuery(year);
    if(isLoading){
      return <Loading/>
    }
 
  const onChange = (value) => {
    setYear(value.$y)
// console.log(value.$y);

    // setYear(dateString)
  };

  return (
    <div className="bg-primary w-full   h-[318px] mt-5 rounded-xl border-2 shadow-xl ">
      <div className="flex justify-between p-[16px]">
        <div>
          <h1 className="text-[20px] font-medium">Earnings</h1>
          {/* <div className="flex gap-5 mt-[20px]">
              <div className="flex gap-2 items-center">
                <span className="bg-[#54A630] w-4 h-4 rounded-full"></span>
                <span>This month</span>
              </div>
              <div className="flex gap-2 items-center">
                <span className="bg-[#B0D6A0] w-4 h-4 rounded-full"></span>
                <span>Last month</span>
              </div>
            </div> */}
        </div>
        <div className="bg-primary ">
          <DatePicker
            className="custom-date-picker"
            onChange={onChange}
            picker="year"
            suffixIcon
          />
        </div>
      </div>
      <div className="overflow-x-auto">
        <BarChart
          //  width={Math.max(window.innerWidth - 20, 1500)}
          width={1500}
          height={250}
          //   data={chart?.data?.attributes}
          data={data?.data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="black" />
          <XAxis dataKey="name" tick={{ stroke: "black", strokeWidth: 0.5 }} />
          <YAxis tick={{ stroke: "black", strokeWidth: 0.5 }} />
          <Bar
            dataKey="price"
            fill="#00A572"
            barSize={36}
            // activeBar={<Rectangle fill="pink" stroke="green" />}
          />
          {/* <Bar
              dataKey="ThisMonth"
              fill="#54A630"
              barSize={6}
              activeBar={<Rectangle fill="gold" stroke="purple" />}
            /> */}
        </BarChart>
      </div>
    </div>
  );
};

export default BarChartIncomeRatio;
