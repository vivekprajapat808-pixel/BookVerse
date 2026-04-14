import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import BookList from "./components/BookList";
import Loader from "./components/Loader";
import Error from "./components/Error";

function App(){
const [books,setBooks]=useState([]);
const [query,setQuery]=useState("harry potter");
const [loading,setLoading]=useState(false);
const [error,setError]=useState("");
const [dark,setDark]=useState(false);

useEffect(()=>{
const delay=setTimeout(()=>{
fetchBooks(query);
},400);
return ()=>clearTimeout(delay);
},[query]);

const fetchBooks=async(q)=>{
if(!q) return;
setLoading(true);
setError("");
try{
const res=await fetch(`https://openlibrary.org/search.json?q=${q}`);
const data=await res.json();
setBooks(data.docs.slice(0,24));
}catch{
setError("Failed to load books");
}
setLoading(false);
};

return(
<div className={dark ? "dark text-white bg-gray-900 min-h-screen" : ""}>
<Navbar toggleDark={()=>setDark(!dark)} />
<Hero />
<div className="p-4 max-w-6xl mx-auto">
<SearchBar setQuery={setQuery} />
{loading && <Loader />}
{error && <Error msg={error} />}
{!loading && !error && <BookList books={books} />}
</div>
</div>
);
}
export default App;
