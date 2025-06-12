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
        <div className="grow pt-8">
             <div className="text-center font-bold text-xl text-[#3D3D3D]">{pageTitle()} </div>
            <form onSubmit={saveOrEdit} className="mx-auto container shadow-md rounded flex flex-col gap-4 p-10">
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
                <button class="bg-[#3F7D58] max-w-[100px] rounded-xl text-white font-medium py-2 focus:outline-none focus:shadow-outline">Submit</button>
    
            </form>

        </div>
        </>
    )
}

export default AddBlog;
