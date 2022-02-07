import { map } from 'lodash';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo, doneTodo } from '../redux/actions/todos';

const Home = ({todos, addTodo, doneTodo}) => {
  console.log(todos);
  const [text, setText] = useState('');
  return (
    <>
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
    </>
  );
}

const mapStateToProps = state => {
  console.log(state);
  return {todos: state.todos}
}

const mapDispatchToProp = dispatch => ({
  addTodo: payload => dispatch(addTodo(payload)),
  doneTodo: id => dispatch(doneTodo(id)),
});
 
export default connect(mapStateToProps, mapDispatchToProp)(Home);