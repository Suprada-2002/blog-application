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

    const handleEdit = async(id) => {
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

    useEffect(() => {
       fetchData();
    }, [])

    return(
        <>
        <div>
             <h2 className='text-green-300 '>Blog Application</h2>
             <a href="/addBlog">Add Blog</a>
        </div>
        <div className="flex flex-col gap-2 ">
            {blogs.map((blog) => (
                <div key={blog.id} className="border-2">
                    <span>{blog.title}</span>
                    <button className="px-2 py-2 bg-white text-black" onClick={() => handleEdit(blog.id)}>View</button>
                    <button className="px-2 py-2 bg-white text-black" onClick={() => handleEdit(blog.id)}>Edit</button>
                    <button className="px-2 py-2 bg-white text-black" onClick={() => handleDelete(blog.id)}>Delete</button>
                </div>
            ))}
            
        </div>
        </>
    )

}

export default Home;
