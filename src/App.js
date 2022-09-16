import React from 'react';
import AddUser from './components/Users/AddUser';
// import Card from './components/UI/Card';
// import styles from './components/UI/Card.module.css';

function App() {
  const userName = props.userName;
  const age = props.age;

  return (
    <div>
      <Card className={'card'}>
        <div>{userName}</div>
        <div>{age}</div>
      </Card>
    </div>
  );
}

export default App;
