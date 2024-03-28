
import { Link } from "react-router-dom";

const ListedPagecard = ({ ListedBook }) => {
    console.log(ListedBook)

    const {
        id,
        image,
        bookName,
        author,
        totalPages,
        category,
        rating,
        publisher,
        tags,
        yearOfPublishing,
      } = ListedBook;

      const [first, second]= tags;
    return (
        <div className="lg:mx-[100px]">
                   
                   <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{bookName}</h1>
      <p className="py-6"><span className="font-bold">By :</span>{author}</p>
      <hr className="border-dotted border-2"></hr>

   <div className="flex items-center">
   <div className="flex items-center">

<div>
    <h1 className="font-bold">Tags:</h1>
</div>
<div className="mt-[20px] my-[16px]">
<button className="mr-[20px]- ml-[40px] bg-[#23BE0A0D] p-[10px] #23BE0A0D text-[#23BE0A]">{first}</button>
<button className="ml-[30px] bg-[#23BE0A0D] p-[10px] #23BE0A0D text-[#23BE0A]">{second}</button>
</div>
</div>

<div className="ml-[30px]">
<p><sapn className="font-bold">Year of publish: </sapn>{ yearOfPublishing}</p>
</div>




   </div>
   <hr className="border-dotted my-[20px] border-2"></hr>

  <div className="flex">
  < div className="mr-[60px]">
    <h1><sapn className="font-bold">Publisher:</sapn>{publisher}</h1>
</div>

   <div>

    <p><sapn  className="font-bold" > Pages:</sapn>{totalPages}</p>
   </div>
  </div>

  <hr className="border-dotted my-[20px] border-2"></hr>
      
    <div>
    <button type="button" className="px-8 text-[#328EFF] font-semibold mr-[15px] text bg-[#328EFF26] py-3 font-semibold rounded-full dark:bg-gray-800 dark:text-gray-100">Category:{category}</button>

    <button type="button" className="px-8 text-[#FFAC33] mr-[15px] font-semibold py-3 bg-[#FFAC3326] font-semibold rounded-full dark:bg-gray-800 dark:text-gray-100">Rating:{rating}</button>

    

    <Link to={`/book/${id}`} > <button type="button" className="px-8 text-white font-semibild py-3 bg-[#23BE0A] font-semibold rounded-full dark:bg-gray-800 dark:text-gray-100">Show details</button></Link>
    </div>
    </div>



    </div>
  </div>
</div>

        
    );
};

export default ListedPagecard;

