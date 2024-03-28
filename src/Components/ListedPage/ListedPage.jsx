import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBooks, getWishlistBooks } from "../../utility/localstorage";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ListedPagecard from "../ListedPageCard/ListedPagecard";

const ListedPage = () => {
  const books = useLoaderData();
  const [allBooks, setAllBooks] = useState([]);
  const [sortBy, setSortBy] = useState([]);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const storedBookIds = getStoredBooks();
    const wishlistBookIds = getWishlistBooks();

    if (books.length > 0) {
      const readBooks = storedBookIds
        .map((bookId) => books.find((book) => book.bookId === bookId))
        .filter(Boolean);
        console.log(readBooks)
        
      const wishlistBooks = wishlistBookIds
        .map((id) => books.find((book) => book.id === id))
        .filter(Boolean);

      const combinedBooks = [...readBooks, ...wishlistBooks];

      if (sortBy === "rating") {
        combinedBooks.sort((a, b) => b.rating - a.rating);
      } else if (sortBy === "pages") {
        combinedBooks.sort((a, b) => a.totalPages - b.totalPages);
      } else if (sortBy === "year") {
        combinedBooks.sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
      }

      setAllBooks(combinedBooks);
    }
  }, [books, sortBy]);

  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleTabSelect = (index) => {
    setActiveTab(index);
  };

  return (
    <div>


        <div>
          <h1 className="text-center font-bold text-4xl mt-[40px] h-[100px] bg-[#1313130D] py-[20px]">Books</h1>
        </div>
      {/* <h1>this ia a listed Pages {allBooks.length}</h1> */}
      <div className="text-center">
      <details className="dropdown mb-32 mt-[40px] mb-[40px] ">
        <summary className="m-1 btn bg-[#23BE0A] font-semibold text-white">Sort By</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li>
            <button onClick={handleSortByChange} value="rating">
              Rating
            </button>
          </li>
          <li>
            <button onClick={handleSortByChange} value="pages">
              Number of Pages
            </button>
          </li>
          <li>
            <button onClick={handleSortByChange} value="year">
              Published Year
            </button>
          </li>
        </ul>
      </details>
      </div>
      <Tabs selectedIndex={activeTab} onSelect={handleTabSelect}>
        <TabList>
          <Tab className="hidden">All</Tab>
          <Tab>Read Books</Tab>
          <Tab>Wishlist</Tab>
        </TabList>
        <TabPanel>
          <div className="grid grid-cols-1 gap-[16px]">
            {allBooks.map((ListedBook) => (
              <ListedPagecard key={ListedBook.id} ListedBook={ListedBook} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 gap-[16px]">
            {allBooks
              .filter((ListedBook) => getStoredBooks().includes(ListedBook.id))
              .map((ListedBook) => (
                <ListedPagecard key={ListedBook.id} ListedBook={ListedBook} />
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 gap-[16px]">
            {allBooks
              .filter((ListedBook) =>
                getWishlistBooks().includes(ListedBook.id)
              )
              .map((ListedBook) => (
                <ListedPagecard key={ListedBook.id} ListedBook={ListedBook} />
              ))}
          </div>
        </TabPanel>
      </Tabs>

      {/* <div className="grid grid-cols-4">
        {allBooks.map((ListedBook) => (
          <ListedPageCard key={ListedBook.id} ListedBook={ListedBook} />
        ))}
      </div> */}
    </div>
  );
};

export default ListedPage;
