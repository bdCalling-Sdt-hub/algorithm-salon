import { Form, Input, Button } from "antd";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import JoditEditor from "jodit-react";
import { useEffect, useRef, useState } from "react";
// import { useGetAboutUsQuery } from "../../../redux/Features/getAboutUsApi";
// import baseURL from "../../../config";
import Swal from "sweetalert2";
import { useEditTermsAndConditionMutation, useGetTermsAndConditionQuery } from "../../../redux/settings/settingsApi";
import Loading from "../../../utils/Loading";

const EditTermsAndCondition = () => {
    const navigate = useNavigate();
    const editor = useRef(null);
    const {data,isLoading,isError}=useGetTermsAndConditionQuery()
    const [editTermsAndCondition,{isLoading:editLoading,isError:editingError}]=useEditTermsAndConditionMutation()
    const [content, setContent] = useState("");

    if(isLoading){
      return <Loading/>
    }

    const handleUpdate = async ()=>{
      // console.log(content)
      let object={content:content}
      console.log(object)
      editTermsAndCondition(object)
      .then(res=>{
        if(res.data){
          Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: res?.data?.message,
                    showConfirmButton: false,
                    timer: 1500,
        })
      }})
      .catch(error=>{
        console.log(error)
        if(error){
          Swal.fire({
                    position: "top-center",
                    icon: "error",
                    title: error?.message || "Terms and condition not updated successfully",
                    showConfirmButton: false,
                    timer: 1500,
        })
      }})

    }
    return (
        <div className="relative ml-[24px]">
        <div className=" mt-[44px] cursor-pointer flex items-center pb-3 gap-2">
          <MdOutlineKeyboardArrowLeft
            className=""
            onClick={() => navigate("/settings/terms-conditions")}
            size={34}
          />
          <h1 className="text-[24px] font-semibold">
            Edit Terms and Condition
          </h1>
        </div>
        <div className="text-justify  mt-[24px] relative ">
          <JoditEditor
        ref={editor}
        value={data?.data?.content}
        onChange={(newContent) => {
          setContent(newContent);
        }}
        className="text-wrap"
        style={{ width: '100%' }} 
      />
      <Button
        onClick={handleUpdate}
        // style={{
                
        //     backgroundColor: "#95C343",
        //   color: "#fff",
        //   size: "18px",
        //   height: "56px",
        // }}
        block
        className="mt-[30px] h-[60px] hover:text-white bg-secondary
        text-white py-3 rounded-lg w-full text-[18px] font-medium  duration-200"
      >
        Update
        </Button>
        </div>
      </div>
    );
}

export default EditTermsAndCondition ;
