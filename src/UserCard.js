import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";

const UserCard = (props) => {
  const [contactInfo, hideContact] = useState(false);

  const handleClick = () => {
    !contactInfo ? hideContact(true) : hideContact(false);
  };

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
            {contactInfo ? (
              <div>
                <FaHeart />{" "}
              </div>
            ) : (
              <div>Let's Chat</div>
            )}
          </button>
          {contactInfo ? (
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
