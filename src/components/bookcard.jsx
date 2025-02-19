import React from 'react'

const BookCard = ({book}) => {
  return (
    <div>
      <img src={book.image} alt={book.name} />
      <h2>{book.name}</h2>
      <span>{book.genre}</span>
      <span>{book.author}</span>
    </div>
  )
}

export default BookCard;
