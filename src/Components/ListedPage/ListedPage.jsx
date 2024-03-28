import { useEffect, useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { getStoredBooks, getWishlistBooks } from "../localStorages/localStorage";


const ListedPage = () => {

  
  // const [allBooks, setAllBooks] = useState([]);
  const [activeTab, setActiveTab] = useState(0); // 0 for Read Books, 1 for Wishlist

  // useEffect(() => {
  //   const storedBookIds = getStoredBooks();
  //   const wishlistBookIds = getWishlistBooks();

  //   if (books.length > 0) {
  //     const readBooks = storedBookIds
  //       .map((id) => books.find((book) => book.id === id))
  //       .filter(Boolean);
  //     const wishlistBooks = wishlistBookIds
  //       .map((id) => books.find((book) => book.id === id))
  //       .filter(Boolean);

  //     const combinedBooks = [...readBooks, ...wishlistBooks];
  //     setAllBooks(combinedBooks);
  //   }
  // }, [books]);

  // const handleTabSelect = (index) => {
  //   setActiveTab(index);
  // };


  

            return (

      

                 
              <div>


<h1 className="text-center font-bold text-4xl mt-[40px] bg-[#1313130D] h-[100px] pt-[30px]">Books</h1>

 < div className="text-center mt-[20px]">
 <details className="dropdown">
<summary className="m-1 btn bg-[#23BE0A] text-white hover:bg-[#23BE0A]">Sort By</summary>
<ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
<li><a>Rating</a></li>
 <li><a>Publish of year</a></li>
 </ul>
 </details>
 </div> 

 <div className="tabs mt-[40px] tabs-lifted">
     <Link to={`/readlist`}>

     <button
        onClick={() => setActiveTab(0)}
        className={`tab ${activeTab === 0 ? 'bg-yellow-500 text-white' : 'bg-white text-gray-300'}`}
      >
        ReadList
      </button>
     </Link>
     <Link to={`/whislist`}>

     <button
        onClick={() => setActiveTab(1)}
        className={`tab ${activeTab === 1 ? 'bg-yellow-500 text-white' : 'bg-white text-gray-300'}`}
      >
        WishList
      </button>
     </Link>
    
    </div>

    {/* <div>
      <Outlet></Outlet>
    </div>
    */}
</div>


                   
                
         
            

            );
                        };


          export default ListedPage;
          
