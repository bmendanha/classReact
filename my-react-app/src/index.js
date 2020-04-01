import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
<div> <h1>Hello World</h1>
  <h2>Googbye</h2>
  </div>,
  document.getElementById('root')
);


function NameLenght(props){
    return <h1>The name {props.name} contains {props.name.NameLenght} characters!</h1>;
}

function App() {
    return (
      <div>
        <NameLenght name="Erika"/>
        <NameLenght name="George"/>
        <NameLenght name="Phillip"/>
      </div>
    );
}



