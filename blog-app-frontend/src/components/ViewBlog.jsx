import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getBlogById } from "../Helper/BlogsService";

function ViewBlog() {

    const navigate = useNavigate()
    const {id} = useParams()
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("");

    const fetchData = async(id) => {
        await getBlogById(id).then((res) => {
            setTitle(res.data.title)
            setDesc(res.data.description)
        }).catch(err =>{
            console.log("error: ", err);
        })
    }

    function handleClick(){
        navigate("/")
    }

    useEffect(() => {
        if(id){
            fetchData(id);
        }
    }, [id])

    return(
        <div className="grow flex flex-col container mx-auto items-center gap-3 py-10 mb-auto">
            <h2 className="font-bold text-lg p-2 text-[#3D3D3D]">{title}</h2>
            <p className="w-full p-3 max-w-[1000px] text-[#3D3D3D] md:p-0">{desc}</p>
            {/* <button onClick={handleClick}>Back home</button> */}
        </div>
    )
}

export default ViewBlog;
