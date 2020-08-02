import React from "react";
import "./style.css";

const UserCard = (props) => {
  console.log(props);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">DOB</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img className="userImage" src={props.source} alt="user" />
            </td>
            <td>{props.name}</td>
            <td>{props.number}</td>
            <td>{props.email}</td>
            <td>{props.age}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserCard;
