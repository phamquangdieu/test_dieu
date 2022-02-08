import { map } from 'lodash';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addBook } from '../redux/actions/books';

const BookComponent = ({books, addBook}) => {
  const [text, setText] = useState('');
  console.log(books);
  return (
    <>
      <table>
        <tbody>
        {
          map(books, item => {
            return (
              <tr key={item.id} >
                <td style={{border: '1px solid black', padding: 5}}>{item.name}</td>
              </tr>
            );
          })
        }
        </tbody>
      </table>
      <div>
        <input value={text} onChange={e => setText(e.target.value)}  />
        <button onClick={() => addBook({name: text})}>Add</button>
      </div>
    </>
  );
}

const mapStateToProps = state => {
  return {books: state.books}
}

const mapDispatchToProp = dispatch => ({
  addBook: payload => dispatch(addBook(payload)),
});
 
export default connect(mapStateToProps, mapDispatchToProp)(BookComponent);