function Navbar() {
    return(
        <div className="flex justify-center gap-3 bg-white text-[#3D3D3D] p-4 shadow-md">
            <h1 className="font-bold text-2xl"><a href="/">BlogApp</a></h1>
            <a href="/" className=" text-[#3F7D58] underline font-bold text-lg">Home</a>
            <a href="/addblog" className=" text-[#3F7D58] underline font-bold text-lg">+ New Blog</a>
        </div>
    )
}

export default Navbar;
