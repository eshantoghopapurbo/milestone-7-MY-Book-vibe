import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../Context/BookContext';
import Bookcard from '../../Layout/UI/Bookcard';

const ListedReadList = ({sortingby}) => {
    const {readList,wishListBooks} =useContext(BookContext);
        console.log(readList,wishListBooks,"bookContext");

        const [filterReadList,setfilterReadList] =useState(readList)

          useEffect(() =>{
           if(sortingby){
            if(sortingby === "pages"){
               const sortedData = [...readList].sort((a,b) => a.totalPages - b.totalPages)
               console.log(sortedData);
               setfilterReadList(sortedData)
            } else if(sortingby === "rating"){
                const sortedData = [...readList].sort((a,b) => a.rating - b.rating)
               console.log(sortedData);
               setfilterReadList(sortedData)
            }
           }              
          }, [sortingby,readList])

         if(filterReadList.length === 0){
            return<div className='h-[50vh] bg-gray-400 flex justify-center items-center'>
                <h2 className='font-bold text-3xl text-center'>No read list data found </h2>
            </div>
        }  

    return (
        <div>
         <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {
                filterReadList.map((book,ind) => <Bookcard key={ind} book={book} ></Bookcard>)
            }
         </div>
        </div>
    );
};

export default ListedReadList;