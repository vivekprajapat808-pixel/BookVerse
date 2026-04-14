function Navbar({toggleDark}){
return(
<nav className="flex justify-between items-center p-4 bg-indigo-600 text-white">
<h1 className="font-bold text-xl">BookVerse</h1>
<button onClick={toggleDark} className="bg-white text-black px-3 py-1 rounded">
Dark Mode
</button>
</nav>
);
}
export default Navbar;
