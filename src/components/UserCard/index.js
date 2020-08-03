import React from "react";
import "./style.css";

const UserCard = (props) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col" onClick={props.onClick}>
              {" "}
              <button className="btn btn-light">Name</button>
            </th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">DOB</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img className="userImage" src={props.src} alt="user" />
            </td>
            <td>
              {props.firstName} {props.lastName}
            </td>
            <td>{props.phone}</td>
            <td>{props.email}</td>
            <td>{props.age}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserCard;
