function SearchBar({setQuery}){
return(
<input
className="w-full p-3 border rounded shadow mb-6"
placeholder="Search books..."
onChange={(e)=>setQuery(e.target.value)}
/>
);
}
export default SearchBar;
