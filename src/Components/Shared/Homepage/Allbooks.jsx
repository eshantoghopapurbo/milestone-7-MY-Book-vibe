import React, { use } from 'react';

import Bookcard from '../../../Layout/UI/Bookcard';

const bookPromise =fetch ('/booksData.json').then((res) => res.json());

const Allbooks = () => {
    
const books =use(bookPromise)
console.log(books);
     
    return (
        <div className='container mx-auto my-12'>
            <h2 className='font-bold text-4xl text-center' >Books</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 mt-6'>
                {
                books.map((book,index) =>{
                    return (
                        <Bookcard key={index} book={book}></Bookcard>
                    )
                })
            }
            </div>
        </div>
    );
};

export default Allbooks;