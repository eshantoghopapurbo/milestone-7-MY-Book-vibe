
import { BookContext } from '../../../Context/BookContext';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadList from '../../../Components/ListedList/ListedReadList';
import ListedWishList from '../../../Components/ListedList/ListedWishList';

    

const Books = () => {

    
    return <div className='container mx-auto my-5'>
         
         <Tabs>
    <TabList>
      <Tab>Read Books</Tab>
      <Tab>Wishlist Books</Tab>
    </TabList>

    <TabPanel>
      <h2><ListedReadList></ListedReadList></h2>
    </TabPanel>
    <TabPanel>
      <h2><ListedWishList></ListedWishList></h2>
    </TabPanel>
  </Tabs>
         </div>
    
};

export default Books;