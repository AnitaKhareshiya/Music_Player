import React, { Component } from 'react';
import { Table } from 'reactstrap';
import axios from 'axios';

const Todo = props => (
  <tr>
    <td className={props.todo_completed ? 'completed' : ''}>
      {props.todo.songId}
    </td>
    <td className={props.todo_completed ? 'completed' : ''}>
      {props.todo.songName}
    </td>
    <td className={props.todo_completed ? 'completed' : ''}>
      {props.todo.singer}
    </td>
    
  </tr>
);
 export class FetchData extends Component  {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
    this.todoList=this.todoList.bind(this);
    
  }


    
  
  componentDidMount() {
    
    axios
      .get('http://localhost:5000/api/Music/playlistItems')
      .then(res => {
        this.setState({ todos: res.data });
        console.log("Data-->",res.data);
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  
  todoList() {
    console.log(" This is todolist",this.state.todos);
    return this.state.todos.map(function(currentTodo, i) {
      return <Todo todo={currentTodo} key={i} />;
    });
  }

  render() {
    console.log("Playlist");
    return (
      
      <div>
      
        <Table striped>
          <thead>
            <tr>
              <th>SongID</th>
              <th>SongName</th>
              <th>Singer</th>
              
            </tr>
          </thead>
           <tbody>{this.todoList()}</tbody> 
        </Table>
      </div>
    );
  }
}

