import BookCard from "./BookCard";
function BookList({books}){
return(
<div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
{books.map((b,i)=><BookCard key={i} book={b} />)}
</div>
);
}
export default BookList;
