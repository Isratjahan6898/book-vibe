import { useEffect, useState } from "react";


const Books= () => {
    const [books, setBooks]= useState([]);
    useEffect(()=>{
        fetch('books.json')
    },[])
    return (
        <div className="mt-[50px]">

            <h1 className="text-center text-4xl font-bold my-[30px] ">Books</h1>
            
        </div>
    );
};

export default Books;