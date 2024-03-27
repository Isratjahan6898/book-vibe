import { useLoaderData, useParams } from "react-router-dom";


const BookDetails = () => {

    const books = useLoaderData();
    const {id} = useParams()
    //console.log(id, books)
    const idInt = parseInt(id)
    const book = books.find(book => book.bookId === idInt)
    console.log(book)
    const {tags} = book;
    const [first, second]= tags;
   


    return (
        <div className="mt-[50px] mx-[100px]">
            <h1>job details:{book.bookId}</h1>

            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={book.image} className="max-w-sm rounded-lg w-[600px] h-[650px] shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{book. bookName}</h1>
      <p className="py-6">by:{book.author}</p>

      <hr className="border-dotted border-2"></hr>
      <p>{book.category}</p>
      <hr className="border-dotted border-2"></hr>
      <p>Review:{book.review}</p>
      <hr className="border-dotted border-2"></hr>


      <div className="mt-[20px]">
       <button className="mr-[20px]- ml-[40px] bg-[#23BE0A0D] p-[10px] #23BE0A0D text-[#23BE0A]">{first}</button>
       <button className="ml-[30px] bg-[#23BE0A0D] p-[10px] #23BE0A0D text-[#23BE0A]">{second}</button>
  </div>

  <hr className="border-dotted border-2"></hr>
  <p>Number of pages:{book.totalPages}</p>
    <p> Publisher:{book.publisher}</p>
    <p>Year of Publishinh:{book.yearOfPublish}</p>
    <p>rating:{book.rating}</p>
    <hr className="border-dotted border-2"></hr>

      <button className="btn btn-primary">Read</button>
      
      <button className="btn ml-[20px] bg-[#50B1C9]">WhisList</button>
    </div>
  </div>
</div>

        </div>
    );
};

export default BookDetails;