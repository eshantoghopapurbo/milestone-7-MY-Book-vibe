import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router';
const Bookcard = ({book}) => {
    return (
        <Link to={`/bookDetails/${book.bookId}`} className="card bg-base-100 shadow-sm">
  <figure className='p-6'>
    <img
    className="rounded-xl h-[250px]"
      src={book.image}
      alt="book.bookName" />
      
  </figure>
  <div className="card-body">
      <div   className='flex gap-4'>
     {book.tags.map((tag,ind) => <div key={ind} className="badge text-green-500 bg-green-100 font-bold
        ">  {tag}</div>)}
      </div>
    <h2 className="card-title font-bold text-2xl">{book.bookName}</h2>
    <p>By : Awlad Hossain</p>
    <div className="card-actions justify-between border-t border-dashed border-gray-500 pt-5">
      <div className="text-xl font-bold">{book.category}</div>
      <div className="text-xl font-bold flex gap-1 items-center">{book.rating}<FaRegStar /> </div>
    </div>
  </div>
</Link>
    );
};

export default Bookcard;