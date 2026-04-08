import React, { useContext, useState } from 'react';
import { BookContext } from '../../../Context/BookContext';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadList from '../../../Components/ListedList/ListedReadList';
import ListedWishList from '../../../Components/ListedList/ListedWishList';


const Books = () => {   
            
        const [sortingby,setSortingBy] =useState("");
        console.log(sortingby,"sortingby");
    return ( 
    <div className='container mx-auto my-5'>
     <div className='flex justify-center my-3'>
         <div className="dropdown dropdown-end">
     <div tabIndex={0} role="button" className="btn m-1">Sort by:{sortingby} ⬇️</div>
     <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
     <li onClick={() => setSortingBy ("pages")} ><a >Pages</a></li>
     <li  onClick={() => setSortingBy ("rating")}  ><a  >Rating</a></li>
     </ul>
     </div>
     </div>
         
         <Tabs>
    <TabList>
      <Tab>Read Books</Tab>
      <Tab>Wishlist Books</Tab>
    </TabList>

    <TabPanel>
      <h2><ListedReadList sortingby={sortingby} ></ListedReadList></h2>
    </TabPanel>
    <TabPanel>
      <h2><ListedWishList sortingby ={sortingby}></ListedWishList></h2>
    </TabPanel>
  </Tabs>
         </div>
    )
};

export default Books;
