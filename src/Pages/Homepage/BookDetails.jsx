import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const {bookId:booksParamsId} =useParams();
    console.log(booksParamsId,'bookId');
    const books =useLoaderData();
        console.log(books,"books");
        const expectedBook =books.find((book) => book.bookId == Number(booksParamsId));
        console.log("expectedBook",expectedBook);
        const {bookId,bookName,author,review,totalPages,rating,category,tags,publisher,yearOfPublishing} =expectedBook;
    return (
       <div className="grid grid-cols-2 bg-base-100 shadow-sm container mx-auto mt-10">
  <figure className='w-full flex items-center justify-center bg-gray-300 rounded-xl'>
    <img
      src= {expectedBook.image}
      alt="Album" 
      className='h-[400px]  '
      />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{bookName}</h2>
    <p className='text-xl'>by:{author}</p>
     <p >Review:{review}</p>
     <p className='py-2 border' >{category}</p>
     <div   className='flex gap-4'>
     {tags.map((tag,ind) => <div key={ind} className="badge text-green-500 bg-green-100 font-bold
        ">  {tag}</div>)}
      </div>
    <div className="card-actions border-t space-y-3">
       <div className='space-y-7'>
         <div className='flex justify-between items-center gap-2'>
            <span className='text-[#131313] text-2xl'>Number of pages:</span> <span  className='text-xl'>{totalPages}</span>
        </div>
        <div className='flex justify-between items-center gap-2'>
            <span className='text-[#131313] text-2xl' >publisher:</span> <span className='text-xl'>{publisher}</span>
        </div>
        <div className='flex justify-between items-center gap-2'>
            <span className='text-[#131313] text-2xl' >publisher time:</span> <span className='text-xl'>{yearOfPublishing}</span>
        </div>
       </div>
    </div>
    <div className='flex items-center gap-3'>
          <button className="btn">Read</button>
          <button className="btn btn-primary">Wishlist</button>
       </div>
  </div>
</div>
    );
};

export default BookDetails;