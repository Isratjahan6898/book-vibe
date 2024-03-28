import { useLoaderData, useParams } from "react-router-dom";
import { useState } from "react";
import { saveBooks, saveWishlistBooks } from "../../utility/localstorage";

import { toast } from "react-toastify";


const BookDetails = () => {

    const books = useLoaderData();
    const {id} = useParams()
    //console.log(id, books)
    const idInt = parseInt(id)
    const book = books.find(book => book.id === idInt)
    console.log(book)
    const {tags, yearOfPublishing} = book;
    const [first, second]= tags;

    const [buttonClicked, setButtonClicked] = useState(false);

  const handleReadBooks = () => {
    saveBooks(idInt);
    setButtonClicked(true);
  };

  const handleWishListBooks = () => {
    if (buttonClicked) {
      toast.error("You've already marked this book as read.");
    } else {
      saveWishlistBooks(idInt);
    }
  };

   


    return (
        <div className="mt-[50px] lg:mx-[100px]">
            {/* <h1>job details:{book.bookId}</h1> */}

            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={book.image} className="max-w-sm rounded-lg lg:w-[600px] lg:h-[650px] shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{book. bookName}</h1>
      <p className="py-6">by :{book.author}</p>

      <hr className="border-dotted border-2"></hr>
      <p className="my-[16px]">{book.category}</p>
      <hr className="border-dotted border-2"></hr>
      <p className="my-[16px]"> <span className="font-bold">Review :</span> {book.review}</p>
      <hr className="border-dotted border-2"></hr>


      <div className="mt-[20px] my-[16px]">
       <button className="mr-[20px]- ml-[40px] bg-[#23BE0A0D] p-[10px] #23BE0A0D text-[#23BE0A]">{first}</button>
       <button className="ml-[30px] bg-[#23BE0A0D] p-[10px] #23BE0A0D text-[#23BE0A]">{second}</button>
  </div>

  <hr className="border-dotted border-2"></hr>
<div className="my-[16px]">
<p className="mb-[10px]"><span className="font-bold">Number of pages :</span>{book.totalPages}</p>
    <p className="mb-[10px]"> <span className="font-bold">Publisher :</span>{book.publisher}</p>
    <p className="mb-[10px]"><span className="font-bold">Year of Publishing :</span>{yearOfPublishing}</p>
    <p className="mb-[10px]"><span className="font-bold">Rating :</span>{book.rating}</p>
</div>
    <hr className="border-dotted border-2"></hr>

      <div className="my-[16px]">
      <button  onClick={handleReadBooks} className="btn btn-primary">Read</button>
      
      <button   onClick={handleWishListBooks}
              className="btn ml-[20px] bg-[#50B1C9]">WhisList</button>
      </div>
    </div>
  </div>
</div>

        </div>
    );
};

export default BookDetails;