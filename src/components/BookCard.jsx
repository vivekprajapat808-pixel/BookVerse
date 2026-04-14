function BookCard({book}){
const img=book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : "";
return(
<div className="bg-white dark:bg-gray-800 rounded shadow hover:scale-105 transition p-3">
{img && <img src={img} className="h-40 mx-auto" />}
<h3 className="font-bold mt-2 text-sm">{book.title}</h3>
<p className="text-xs">{book.author_name?.[0]}</p>
</div>
);
}
export default BookCard;
