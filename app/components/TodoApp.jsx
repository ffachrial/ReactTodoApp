import React from 'react';

import TodoList from 'TodoList';

export default class TodoApp extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        }, {
          id: 2,
          text: 'Clean the yard'
        }, {
          id: 3,
          text: 'Wash the car'
        }, {
          id: 4,
          text: 'Read the book'
        }, {
          id: 5,
          text: 'Run the engine'
        }
      ]
    }
  }

  render () {
    var {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos}/>
      </div>
    );
  }
};
