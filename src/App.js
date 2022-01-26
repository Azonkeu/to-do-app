import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <Router>
      <nav className="nav">
        <p className="title">To-Do</p>
        <Link to="/" className="link">Home</Link>
        <Link to="About" className="link">About</Link>
        <Link to="Contact" className="link">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>
    </Router>

  );
}

const Home = () => (
  <div className="todo-app">
    <TodoList />
  </div>
);

const About = () => (
  <div className="todo-ap">
    <h1 className="todo-atitle">To-Do</h1>
    <p className="textx">This is to-do app that helps you in your journey to success. This application helpd you organize your daily activities.</p>
    <ul className="ul-block">
      <li className="text">You can add tasks</li>
      <li className="text">You can edit tasks</li>
      <li className="text">You can mark tasks as completed</li>
      <li className="text">You can delete tasks</li>
    </ul>
  </div>
);

const Contact = () => (
  <div className="todo-contact">
    <h1 className="todo-ctitle">Get In Touch</h1>
    <p className="todo-text">Hey! We are looking forward to help you with any questions you may have.</p>
    <form className="tod-form">
      <input type="text" placeholder="Your name" required name="name" className="form-input" />
      <input type="email" placeholder="email" required name="email" className="form-input" />
      <textarea cols="10" rows="3" placeholder="Message" className="form-mes" />
      <button type="submit" className="form-button">Submit</button>
    </form>
  </div>
);

export default App;
