# Redux Thunk

- Redux Thunk is a middleware for Redux that allows you to write action creators that return a function instead of an action. This is useful for handling asynchronous actions, such as API calls.

# Action Creators

- Action creators are functions that create and return an action object. 

Example: 

```javascript
function addNote(description){
    return {
        type: "notes/addNote",
        payload: description
    }
}
```

using this action creator, we can dispatch an action like this:

```javascript
dispatch(addNote("This is a new note"));
```