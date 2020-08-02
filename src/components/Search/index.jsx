// import React, { Component } from "react";
// import "./style.css"
// import API from "../../utils/API";

// class Search extends Component {
//     state = {
//         search: "", 
//         users: [],
//         results: [],
//         error: ""
//     };

//     componentDidMount(){
//         API.getRandomUser()
//         .then(res => this.setState({users: res.data.message }))
//         .catch(err => console.log(err));
//     }

//     handleInputChange = event => {
//         this.setState({ search: event.target.value });
//       };

//       handleFormSubmit = event => {
//         event.preventDefault();
//         API.getRandomUser(this.state.search)
//           .then(res => {
//             if (res.data.status === "error") {
//               throw new Error(res.data.message);
//             }
//             this.setState({ results: res.data.message, error: "" });
//           })
//           .catch(err => this.setState({ error: err.message }));
//       };




//   render(props) {
//     return (
//       <div>
//         <div className="container">
//           <div className="row">
//             <div className="col-md-auto">
//               <form className="search">
//                 <div className="form-group">
//                   <label htmlFor="user">User Name:</label>
//                   <input
//                     value={props.search}
//                     onChange={props.handleInputChange}
//                     name="user"
//                     list="users"
//                     type="text"
//                     className="form-control"
//                     placeholder="Type in a user's name to begin"
//                     id="user"
//                   />
//                   <datalist id="users">
//                     {props.users.map((user) => (
//                       <option value={user} key={user} />
//                     ))}
//                   </datalist>
//                   <button
//                     type="submit"
//                     onClick={props.handleFormSubmit}
//                     className="btn btn-success"
//                   >
//                     Search
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Search;
