import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { addReadListToLocalDB, getAllReadListFromLocalDB } from '../Utils/LocalDB';

export const BookContext = createContext();



const BookProvider = ({children}) => {

    
    const [readList,setReadList] =useState(() => getAllReadListFromLocalDB());
    const [wishListBooks,setWishListBooks] =useState([]);

      // useEffect(() =>{
      //  const getReadListFromLocalDB = getAllReadListFromLocalDB();
      //   console.log(getReadListFromLocalDB,"getReadListFromLocalDB");
      //   setReadList(getReadListFromLocalDB)
      // },[] )

   
        
          const handleMarkAsRead =(currentBook) =>{
            //step 1: store book id
            //step 2: Where to store 
            //step 2:array  or collection 
            //step 3:if the book is a already exist them show a alert of a tost
            //step 4:if not then add the book in the array or collection 
            addReadListToLocalDB(currentBook);
            
            const isExistBook = readList.find((book ) => book.bookId === currentBook.bookId,);
            if (isExistBook) {
                toast.error("Wow so easy!");("The is a already exist")
            }else{
                setReadList([...readList, currentBook]);
                toast.success(`${currentBook.bookName} is added to list`)
            }
            console.log('book', readList,currentBook);
          }
          const handleAddToList =(currentBook) =>{
            //step 1: store book id
            //step 2: Where to store 
            //step 2:array  or collection 
            //step 3:if the book is a already exist them show a alert of a tost
            //step 4:if not then add the book in the array or collection 
            
            const isExistInReadList =readList.find((book) => book.bookId === currentBook.bookId,);

         if(isExistInReadList) {
            toast.error("this is a already is a read List")
            return;
         }

            const isExistBook = wishListBooks.find((book ) => book.bookId === currentBook.bookId,);
            if (isExistBook) {
                toast.error("Wow so easy!");("The is a already is a wish exist")
            }else{
                setWishListBooks([...wishListBooks, currentBook]);
                toast.success(`${currentBook.bookName} is added to list`)
            }
            console.log('book', wishListBooks,currentBook);
          }
    
    const data ={
       
        readList,
        setReadList,
        handleMarkAsRead,
        wishListBooks,
        setWishListBooks,
        handleAddToList
    }
    return <BookContext.Provider value={data} >{children}</BookContext.Provider>
};

export default BookProvider;  