# React Hooks Course

### Dataflow in React

### useRef, useEffect

```
import React, { useState, useRef, useEffect } from 'react';

const customComponent = () => {
  const messageLengthRef = useRef();
  const [message, setMessage] = useState("")

  const handleMessageChange(event) = () => {
    setMessage(event.target.value);
  }

  const fistTwenty = message.substr(0, 20);

  useEffect(() => {
    document.title = "New post" + (fistTwenty ? `: ${fistTwenty}` : "")
  }, [fistTwenty]);

  return(
  <div>
    <span ref={messageLengthRef}>{message}</span>
  <div>
  );
}
```

### Making our own hook

```
function useTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}

useTitle("New post" + (fistTwenty ? `: ${fistTwenty}` : "")
```

### Exercise with useEffect

```
// When the message changes, save it to localStorage.

useEffect(() => {
  const key = makeNewPostKey(date);
  setLocalStorage(key, message);
}, [date, message]);

function makeNewPostKey(date) {
  return `newPost: ${formatDate(date, DATE_FORMAT)}`
}

function getLocalStorageValue(key) {
  const value= localStorage.getItem(key);
  if (!value){
    return null;
  }

  try {
    return JSON.parse(value);
  } catch(e) {
    return null
  }
}

function setLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// When the component comes back, I want to getthe message that was previously entered from localStorage.

```
