import { useEffect, useState } from "react";
import { deleteBlog, getBlogs } from "../Helper/BlogsService";
import { useNavigate } from "react-router-dom";

function Home() {

    const [blogs, setBlogs] = useState([]);
    const navigate = useNavigate()

    const fetchData = async() => {
        await getBlogs().then((res) => {
            console.log(res.data);
            setBlogs(res.data.reverse());
        }).then((error) => {
            console.log("error: ", error);
        })
    }

    const handleEdit = (id) => {
       navigate(`/editBlog/${id}`)
    }

    const handleDelete = async(id) => {
        try{
        await deleteBlog(id).then((res) => {
            console.log("Blog Deleted Succedfully!!", res);
            window.location.reload();
        })
        }catch(error) {
            console.log("error: ", error);
        }
    }

    const handleView = (id) => {
        navigate(`/view/${id}`)
    }

    useEffect(() => {
       fetchData();
    }, [])

    return(
        <>
        <div className="grow flex flex-col mx-auto w-full p-4 md:container md:py-8 lg:py-10">
             <h2 className='text-lg font-bold text-[#3D3D3D]'>Write your Blog Now & let everyone know ! </h2>
             <p className="text-sm font-semibold text-[#3F7D58]">Keep youself and Everyone updated.</p>
        </div>
        <div className="flex flex-col container mx-auto gap-2 justify-center item-center mb-10">
            {blogs.map((blog) => (
                <div key={blog.id} className="border border-[#F7D0B1] rounded-md p-3">
                    <span className="text-light text-sm font-normal uppercase text-[#3D3D3D]">Title: </span>
                    <h3 className="text-xl text-[#3D3D3D] font-bold md:text-xl">{blog.title}</h3>
                    <div className="flex justify-start md:justify-end gap-2 py-2">
                        <button className="px-3 py-1 rounded-xl bg-[#3F7D58] text-white hover:cursor-pointer" onClick={() => handleView(blog.id)}>View</button>
                        <button className="px-3 py-1 rounded-xl bg-[#3F7D58] text-white" onClick={() => handleEdit(blog.id)}>Edit</button>
                        <button className="px-3 py-1 rounded-xl bg-[#3F7D58] text-white" onClick={() => handleDelete(blog.id)}>Delete</button>
                    </div>
                </div>
            ))}
            
        </div>
        </>
    )

}

export default Home;
