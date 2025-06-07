import { useState, useEffect } from "react";
import { addBlog, getBlogById, editBlog } from '../Helper/BlogsService'
import {useNavigate, useParams } from 'react-router-dom';

function AddBlog() {

    const navigate = useNavigate();
    const {id} = useParams();

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const saveOrEdit = async(e) => {
        e.preventDefault();
        const blogData = {title, description};
        console.log("Data: ", blogData)

        if(id){
             await editBlog(id,blogData).then((res) => {
                console.log("Blog Updated", res.data)
                navigate("/")
            }).catch(error => {
                console.log("Data not able to update", error)
            })
           
        }else{
             await addBlog(blogData).then((res) => {
                console.log("Blog Added", res.data)
                navigate("/")
            }).catch(error => {
                console.log("Data not able to add", error)
            })
        }
    }

     function pageTitle(){
        if(id){
            return <h2>Edit Blog</h2>
        }else{
            return <h2>Add Blog</h2>
        }
     }

     useEffect(() => {
        if(id){
            getBlogById(id).then((res) => {
                setTitle(res.data.title)
                setDescription(res.data.description)
            }).catch((error) => {
                console.log("error in fetching data", error)
            })
        }
     }, [id]);

    return (
        <>
        <div className="w-full max-w-md">
             <div className="text-center">{pageTitle()} </div>
            <form onSubmit={saveOrEdit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="title">Title: </label>
                    <input 
                    type="text" 
                    name="title" 
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={title}
                    required
                    onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="description">Description: </label>
                        <input 
                        type="text" 
                        name="description" 
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={description}
                        required
                        onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                <button class="bg-gray-500  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
            </form>

        </div>
        </>
    )
}

export default AddBlog;
