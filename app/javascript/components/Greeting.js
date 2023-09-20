import React, { useEffect, useReducer } from 'react';

const initialState = {
  message: ' '
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'setGreeting':
      return { ...state, message: action.payload };
    default:
      throw new Error(); 
  }
};

function fetch_greeting() {
  return fetch('http://[::1]:3000/api/greetings/random')
    .then(response => response.json())
    .then(data => data.message);
}

const Greeting = () => {
  const [state, dispatch] = useReducer(reducer, initialState);


  useEffect(() => {

    fetch_greeting().then(message => {
      dispatch({ type: 'setGreeting', payload: message });
    });
    console.log(state.message)
  }, []);

  return (
    <div>
          {(() => {
      if (state.message.length === 0) {
        return <h2>Hello world</h2>;
      } else {
        return <h1>Greeting message: {state.message}</h1>;
      }
    })()}
    </div>  
  );
};

export default Greeting;