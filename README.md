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
## Serve without Debugger

```bash
npm run dev:no-debug
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
- [X] add todos
- [ ] complete todos
- [X] remove todos
- [ ] sort todos
- [X] filter todos by completed status
