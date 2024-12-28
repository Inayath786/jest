let books=[
  {id:1,title:"Inayath",author:"Hello"},
  {id:2,title:"Hey",author:"akhil"},
  {id:3,title:"Heyys",author:"kazeem"}
]

function getBooks(){
  return books
}

function getBookById(id){
  return books.find((book)=>{book.id===id})
}
function addBook(book){
  let newbook={id:books.length+1,...book}
  books.push(newbook)
  return newbook
}

module.exports={getBooks,getBookById,addBook}