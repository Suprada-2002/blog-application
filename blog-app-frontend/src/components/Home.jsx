import { useEffect, useState } from "react";
import { deleteBlog, getBlogs } from "../Helper/BlogsService";
import { useNavigate } from "react-router-dom";

function Home() {

    const [blogs, setBlogs] = useState([]);
    const navigate = useNavigate()

    const fetchData = async() => {
        await getBlogs().then((res) => {
            console.log(res.data);
            setBlogs(res.data);
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
        <div className="flex flex-col gap-3 py-2">
             <h2 className='w-3/4 text-5xl font-bold md:text-3xl'>Write your Blog Now & let everyone know ! </h2>
             <p className="text-md font-semibold">Keep youself and Everyone updated.</p>
        </div>
        <div className="flex flex-col gap-2 justify-center item-center py-5">
            {blogs.map((blog) => (
                <div key={blog.id} className="p-4 flex flex-col border-2 border-gray-300">
                    <span className="text-light text-sm font-normal uppercase text-gray-500">Title: </span>
                    <h3 className="text-2xl font-semibold md:text-xl">{blog.title}</h3>
                    <div className="flex gap-3 justify-startmd:justify-end py-4">
                        <button className="px-3 py-2 bg-gray-300 rounded-md text-black" onClick={() => handleView(blog.id)}>View</button>
                        <button className="px-3 py-2 bg-gray-300 rounded-md text-black" onClick={() => handleEdit(blog.id)}>Edit</button>
                        <button className="px-3 py-2 bg-gray-300 rounded-md text-black" onClick={() => handleDelete(blog.id)}>Delete</button>
                    </div>
                </div>
            ))}
            
        </div>
        </>
    )

}

export default Home;
