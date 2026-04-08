import React, { useContext,  useEffect,  useState } from 'react';
import { BookContext } from '../../Context/BookContext';
import Bookcard from '../../Layout/UI/Bookcard';



const ListedWishList = ({sortingby}) => {
     const {wishListBooks} =useContext(BookContext);
        console.log(wishListBooks,"bookContext");

        const [filterWishList,setfilterWishList] =useState(wishListBooks)
        
                  useEffect(() =>{
                   if (sortingby) {
                    if(sortingby === "pages"){
                       const sortedData = [...wishListBooks].sort((a,b) => a.totalPages - b.totalPages)
                       console.log(sortedData);
                       setfilterWishList(sortedData)
                    } else if(sortingby === "rating"){
                        const sortedData = [...wishListBooks].sort((a,b) => a.rating - b.rating)
                       console.log(sortedData);
                       setfilterWishList(sortedData)
                    }
                   }              
                  }, [sortingby,wishListBooks])
        

        if(filterWishList.length === 0){
            return<div className='h-[50vh] bg-gray-400 flex justify-center items-center'>
                <h2 className='font-bold text-3xl text-center'>No wishlist data found </h2>
            </div>
        }  

    return (
        <div>
         <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {
                filterWishList.map((book,ind) => (<Bookcard key={ind} book={book} ></Bookcard>))
            }
         </div>
        </div>
    );
};

export default ListedWishList;