import { map } from 'lodash';
import React, { useContext, useState } from 'react';
import { connect } from 'react-redux';
import { ThemeContext } from '../contexts/ThemeContext';
import { addTodo, doneTodo } from '../redux/actions/todos';
import BookComponent from './books';

const Home = ({todos, addTodo, doneTodo}) => {
  const {value, changeColor} = useContext(ThemeContext);
  const [text, setText] = useState('');
  return (
    <>
      <div>{value.color ? 'Yes' : 'No'}</div>
      <button onClick={() => changeColor()}>Click</button>
      <table>
        <tbody>
        {
          map(todos, item => {
            return (
              <tr key={item.id} >
                <td style={{border: '1px solid black', padding: 5}}>{item.name}</td>
                <td style={{border: '1px solid black', padding: 5}}>
                  {item.status
                    ? <div style={{color: 'green'}}>Done</div>
                    : <div onClick={() => doneTodo(item.id)}>Processing</div>}
                </td>
              </tr>
            );
          })
        }
        </tbody>
      </table>
      <div>
        <input value={text} onChange={e => setText(e.target.value)}  />
        <button onClick={() => addTodo({name: text, status: false})}>Add</button>
      </div>
      <BookComponent />
    </>
  );
}

const mapStateToProps = state => {
  return {todos: state.todos}
}

const mapDispatchToProp = dispatch => ({
  addTodo: payload => dispatch(addTodo(payload)),
  doneTodo: id => dispatch(doneTodo(id)),
});
 
export default connect(mapStateToProps, mapDispatchToProp)(Home);