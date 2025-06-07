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
        <div className="flex flex-col justify-center items-center">
            <h2>{title}</h2>
            <p>{desc}</p>
            <button onClick={handleClick}>Back home</button>
        </div>
    )
}

export default ViewBlog;
