

const getAllReadListFromLocalDB = () => {
    const allReadList =localStorage.getItem('readList');
   if (allReadList) return JSON.parse (allReadList);

   return [];
}

const addReadListToLocalDB = (book) => {
  const allBooks =getAllReadListFromLocalDB();
  const isAlreadyExist = allBooks.find (bk => bk.bookId === book.bookId)
  if(isAlreadyExist){
       //
  }else{
     //ei data local DB te add korte chai
     allBooks.push(book)
     localStorage.setItem('readList',JSON.stringify(allBooks))
  }
}

export {getAllReadListFromLocalDB,addReadListToLocalDB} 