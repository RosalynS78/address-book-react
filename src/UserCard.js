import React, { useState } from "react";

// functional Componet
const UserCard = (props) => {

// useState hook
const [isHidden, setHide] = useState (false)

const handleClick = () => {
  let contactInfo = isHidden === true ? false : true
  setHide(contactInfo);
}

  return (
    <React.Fragment>
      <div className="displayResults">
        <main className="users">
          <img src={props.picture} alt={"users_pic"}></img>
          <h2>
            {props.firstName} {props.lastName}
          </h2>
        </main>
        <div className="usersDetails">
          <p>Age: {props.age} </p>
          <p>Gender: {props.gender}</p>
          <p>Country: {props.country} </p>
          <p>State: {props.state}</p>
        </div>
        <div className="button">
          <button onClick={handleClick}>
            {isHidden ? (
              <div></div>
            ) : (
              <div>Let's Chat</div>
            )}
          </button>
          {isHidden ? (
            <div>
              <div>Phone: {props.phone}</div>
              <div>Cell: {props.cell}</div>
              <div>Email: {props.email}</div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default UserCard;
