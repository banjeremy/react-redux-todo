# Todo App
Todo app using React, Redux, and React-Router.

## Setup

```bash
npm install
```

## Serve it

```bash
npm start
```

### Actions

* `SET_LIST_FILTER`
* `SET_LIST_MODE`
* `CLEAR_TODOS`
* `MOVE_TODO`
* `ADD_TODO`
* `REMOVE_TODO`
* `TOGGLE_TODO`


### State
```js
{
  filter: “complete", “incomplete"
  mode: “insert", “sort"
  todos: [{
  	id,
  	label,
  	completed
  }]
}
```

### Components

- Start Screen
- ToggleBar
- ToggleButton
- ActionBar
- ActionButton
- ProgressBar
- AddTodo
- TodoList
- Todo


### Functionality
- [ ] add todos
- [ ] complete todos
- [ ] remove todos
- [ ] sort todos
- [ ] filter todos by completed status


### Todo
- [ ] organize actions and reducers into a single module with combined exports
- [ ] add propType validation for all components
- [ ] use reselect to create memoized selectors
