# React Hooks Course

- [Reach UI React](https://reach.tech/)

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

### Exercise with useEffect, useState and useRef

```
import { useEffect, useState, useRef } from 'react'

// When the component comes bac, I want to get the message that was previously entered from localStorage.

const sampleExercise = ({ takeFocus }) => {
  const key = makeNewPostKey(date);
  const [message, setMessage] = useState(getLocalStorageValue(key) || "");
  const messageRef = useRef();

  useEffect(() => {
    setLocalStorage(key, message);
  }, [key, message]);

  // When the message changes, save it to localStorage
  useEffect(() => {
    setLocalStorage(key, message);
  }, [key, message]);

  // Set autofocus on the textarea if prop takeFocus is true passed
  useEffect(() => {
    if (takeFocus) {
      messageRef.current.focus();
    }
  }, [takeFocus]);

  function makeNewPostKey(date) {
    return `newPost: ${formatDate(date, DATE_FORMAT)}`
  }

  function getLocalStorageValue(key) {
    const value = localStorage.getItem(key);
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

  return (
    <>
      <textarea
        ref={messageRef}
        className="text_area_class"
        placeholder="Tell us about your workout!"
        value={message}
        onChange={handleMessageChange}
      />
    </>);
}

```

### Fetching Data with useEffect, useState

- https://codesandbox.io/s/fetching-data-with-useeffect-usestate-u5z02?file=/src/Avatar.js

```
import React, { useState, useEffect } from 'react';

const Avatar = ({  }) => {
  const user = null;
  const posts = null;
}

export default Avatar;
```

### Data Loading and Authentication Exercise with useEffect

- https://codesandbox.io/s/data-loading-and-authentication-exercise-with-useeffect-x688o?file=/src/App.js

### useContext

- React Compound Components Pattern
- Children module

```
import { Children } from 'react';
```

- https://codesandbox.io/s/usecontext-react-hook-2xho0

### useReducer and appStateProvider pattern

- https://codesandbox.io/s/usecontext-react-hook-2xho0?file=/src/App.js

### Types of states

1. Implicit State: The ones handled by the components internally and are not accesible for the user who is using the APIs
2. Explicit State: The ones which are handle inside of the components and feed the UI with hooks, state, etc ....
3. Persistant State: The ones which we want to be saved even when the user is navigating between different components inside of the UI
