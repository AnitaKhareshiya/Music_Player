import React, { Component } from 'react';
import { Table } from 'reactstrap';
import axios from 'axios';




 export class Home extends Component  {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
  }

 handleSubmit = (id,sng,sing) => {
 

  const reqdata = {
    //SongId : id,
    SongName : sng,
    Singer :sing

  }

  axios
  .post('http://localhost:5000/api/Music/showPlaylist',reqdata)
  .then(response => {
    if (response.status === 201) {
      console.log(response.data);
      this.props.history.push({
        pathname: '/'
      });
    }
  })
  .catch(error => {
    console.log(error);
   
  });
  }
  
  componentDidMount() {
    
    axios
      .get('http://localhost:5000/api/Music/MusicItems')
      .then(res => {
        this.setState({ todos: res.data });
        console.log("Data-->",res.data);
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  
  render() {
    //console.log(this.todoList.songId);
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
              
           <tbody>
             {
           (this.state.todos.map((currentTodo, i) => {   
                 return (<tr key={i}>
                <td>{currentTodo.songId}</td>
                <td>{currentTodo.songName}</td>
                <td>{currentTodo.singer}</td>
                <td><button onClick={this.handleSubmit.bind(this,currentTodo.songId,currentTodo.songName,currentTodo.singer)} type="submit">Add to Playlist</button></td>
                </tr>);
      }))
    }

            {/* {this.todoList()} */}
             
             </tbody> 
        </Table>
      </div>
    );
  }
}

