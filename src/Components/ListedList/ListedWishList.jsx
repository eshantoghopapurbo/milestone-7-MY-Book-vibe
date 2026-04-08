import React, { useContext } from 'react';
import { BookContext } from '../../Context/BookContext';
import Bookcard from '../../Layout/UI/Bookcard';



const ListedWishList = () => {
     const {wishListBooks} =useContext(BookContext);
        console.log(wishListBooks,"bookContext");

        if(wishListBooks.length === 0){
            return<div className='h-[50vh] bg-gray-400 flex justify-center items-center'>
                <h2 className='font-bold text-3xl text-center'>No wishlist data found </h2>
            </div>
        }  

    return (
        <div>
         <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {
                wishListBooks.map((book,ind) => (<Bookcard key={ind} book={book} ></Bookcard>))
            }
         </div>
        </div>
    );
};

export default ListedWishList;