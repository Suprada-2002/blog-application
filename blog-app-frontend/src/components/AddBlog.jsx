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
        <div>{pageTitle()} </div>
        <div>

            <form onSubmit={saveOrEdit}>
                <div>
                    <label>Title: </label>
                    <input 
                    type="text" 
                    name="title" 
                    value={title}
                    required
                    onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                    <div>
                        <label>Description: </label>
                        <input 
                        type="text" 
                        id="textbox"
                        name="description" 
                        value={description}
                        required
                        onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                <button>Submit</button>
            </form>

        </div>
        </>
    )
}

export default AddBlog;
