import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
// import Person from './components/Person';
import StyleSheet from './components/StyleSheet';
import Inline from './components/Inline';
import './appStyles.css';
import Styles from './appStyles.module.css';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      
      <Greet name="Fred" heroName="superFred">
        <p>This is children props</p>
      </Greet>
      <Greet name="Janay" heroName="superNay"> 
        <button>Action</button>
      </Greet>
      <Greet name="Harmony" heroName="superHarm"/>
      <Greet name="UD" heroName="superU"/>
      <Greet name="Symphony" heroName="superSymphy"/>
      
      <Welcome name="Fred" heroName="superFred"/>
      <Welcome name="Janay" heroName="superNay"/>
      <Welcome name="Harmony" heroName="superHarm"/>
      <Welcome name="UD" heroName="superU"/>
      <Welcome name="Symphony" heroName="superSymphy"/>

      <Hello/>
      <Message/>
      <Counter/>

      <FunctionClick/>
      <ClassClick/>

      <EventBind/>
      <ParentComponent/>
      <UserGreeting/>
      <NameList/>
      {/* <Person/> */}
      <StyleSheet primary={true}/>
      <Inline/>
      <h1 className='error'>Error</h1>
      <h1 className={Styles.success}>Success</h1>
      <Form/>
    </div>
  );
}

export default App;
