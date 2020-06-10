import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import {fetchBookDataRequest, setBooksSucces} from '../../../store/actions/book'
import {data} from '../../../data'
import Card from '../../Card/Card'
import './Books.scss'

const Books = (props) => {
  const {loading, books, fetchBookDataRequest, setBooksSucces} = props

  useEffect(()=>{
    fetchBookDataRequest()
    setTimeout(()=>{
      setBooksSucces(data)
    },500)
  }, [fetchBookDataRequest, setBooksSucces])

  if(loading){
    return <h1>Loading</h1>
  }
  return (
    <div className='book-container'>
      <div className='books'>
        {books.map((book,index) => (
          <Card 
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
          desc={book.desc}
          price={book.price}
          img={book.img}
          />
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = (state) =>({
  books: state.book.books,
  loading: state.book.loading
})
const mapDispatchToProps = (dispatch) =>({
  fetchBookDataRequest: () => dispatch(fetchBookDataRequest()),
  setBooksSucces: (books) => dispatch(setBooksSucces(books))
})

export default connect(mapStateToProps, mapDispatchToProps)(Books);
