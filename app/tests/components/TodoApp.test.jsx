import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import TodoApp from 'TodoApp';

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  describe('handleAddTodo', () => {
    it('should add todo to the todos state on handleAddTodo', () => {
      var todoText = 'test todo text';
      var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

      todoApp.setState({todos: []});
      todoApp.handleAddTodo(todoText);

      expect(todoApp.state.todos[0].text).toBe(todoText);
      // Expect createdAt to be a number
      expect(todoApp.state.todos[0].createdAt).toBeA('number');
    });
  });

  describe('handleToggle', () => {
    it('should toggle completed value when handleToggle called', () => {
      var todoData = {
        id: 11,
        text: 'Test features',
        completed: false,
        createdAt: 0,
        completedAt: undefined
      };
      var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

      todoApp.setState({todos: [todoData]});

      // check that todos first item has completed value of false
      expect(todoApp.state.todos[0].completed).toBe(false);
      // call handleToggle with id: 11
      todoApp.handleToggle(11);
      // verify that value changed
      expect(todoApp.state.todos[0].completed).toBe(true);
      // Expect completedAt to be a number
      expect(todoApp.state.todos[0].completedAt).toBeA('number');
    });

    // Test that when toggle from true to false, completedAt get removed
    it('should toggle todo from completed to incompleted', () => {
      var todoData = {
        id: 11,
        text: 'Test features',
        completed: true,
        createdAt: 0,
        completedAt: 123
      };
      var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

      todoApp.setState({todos: [todoData]});

      // check that todos first item has completed value of false
      expect(todoApp.state.todos[0].completed).toBe(true);
      // call handleToggle with id: 11
      todoApp.handleToggle(11);
      // verify that value changed
      expect(todoApp.state.todos[0].completed).toBe(false);
      // Expect completedAt to be a number
      expect(todoApp.state.todos[0].completedAt).toNotExist();
    });
  });
});
