import React from 'react'
import { Link } from 'react-router-dom';

import Book from '../Book';

import * as BooksAPI from '../../BooksAPI'

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books:[],
      query: '',
      results: []
    }
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then(resp => {
    console.log(resp);
    this.setState({ books: resp })
    });
  }




updateQuery = (query) => {
  this.setState({query:query}, this.sumbitSearch);
}



sumbitSearch() {
  if(this.state.query === '' || this.state.query === undefined) {
    return this.setState({ results: [] });

  }
  BooksAPI.search(this.state.query.trim()).then(res => {
    console.log(res);
    if (res.error) {
      return this.setState({ results: [] });
    }

  else {
    res.forEach(b => {
      let f = this.state.books.filter(B => B.id ===b.id);
      b.shelf = f[0] ? f.shelf : null;
      if (f[0]) {
        console.log('match');
        b.shelf = f[0].shelf;
      }
    })
    return this.setState({ results: res});
  }
});
}

updateBook = (book, shelf) => {
  BooksAPI.update(book, shelf)
  .then(resp => {
    book.shelf = shelf;
    this.setState(state => ({
      books: state.books.filter(b => b.id !== book.id).concat([book])
    }));
  });
}

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search" >Close</Link>
          <div className="search-books-input-wrapper">

            <input  type="text"
         onChange={(event) => this.updateQuery(event.target.value)} value={this.state.query} placeholder="Search by title or author"/>

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid"></ol>
          {
            this.state.results.map((book, key) => <Book updateBook={this.updateBook} book={book} key={key}/>)
          }
        </div>
      </div>
    );
  }

}

export default SearchPage;
