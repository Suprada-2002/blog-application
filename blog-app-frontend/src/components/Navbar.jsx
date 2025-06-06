function Navbar() {
    return(
        <div className="flex justify-around items-center bg-black text-gray-300 p-4">
            <h1 className="font-bold text-2xl"><a href="/">BlogApp</a></h1>
            <a href="/addblog" className="bg-gray-300 text-black py-2 px-3 rounded-2xl font-bold text-xl">+ New</a>
        </div>
    )
}

export default Navbar;
