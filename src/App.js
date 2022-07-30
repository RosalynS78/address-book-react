// useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments

import React, { useState, useEffect } from "react";
// import React, { Component } from "react";

import "./App.css";
import UserCard from "./UserCard";

// !change class components to funtion components with hooks

// class Users extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         users: []
//       };
//     }

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api?results=25")
      .then((res) => res.json())
      .then((users) => setUsers(users.results));
  }, []);

  return (
    <div className="container">
      <header className="title">Frenz</header>
      <ul className="usersList" style={{ listStyle: "none" }}>
        {users.map((user, index) => (
          <UserCard
            key={index}
            firstName={user.name.first}
            lastName={user.name.last}
            gender={user.gender.toUpperCase()}
            age={user.dob.age}
            country={user.location.country}
            state={user.location.state}
            city={user.location.city}
            picture={user.picture.large}
            phone={user.phone}
            cell={user.cell}
            email={user.email}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
