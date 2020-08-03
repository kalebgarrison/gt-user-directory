import React from "react";
import "./style.css";
// import API from "../../utils/API";

const Search = (props) => {
    // console.log(props)
    // state = {
    //     search: "",
    //     users:[],
    //     filteredUsers:[],
    //     results:{},
    //     error: ""
    // };

    // componentDidMount(){
    //     API.getRandomUser()
    //     .then(res => this.setState({ users: res.data.results, filteredUsers: res.data.results, search: this.state.value }))

    //     .catch(err => console.log(err));
    // }


    // handleInputChange = event => {
    //     const value = event.target.value;
    //     const name = event.target.name;
    //     this.setState({
    //       [name]: value
    //     });
    //   };
    

    //   userSearch = () =>{
    //       API.getRandomUser()
    //       .then(res => this.setState({ filteredUsers: res.data.results, users: res.data.results, search: this.state.value }))
    //       .catch(err => console.log(err))
    //   }

    //   handleFormSubmit = event => {
    //       event.preventDefault();
    //       console.log(this.state.value)
    //       const filter = event.target.value;
    //       const filteredUsers = this.state.users.filter(item => {
    //         // merge data together, then see if user input is anywhere inside
    //         let values = Object.values(item)
    //           .join("")
    //           .toLowerCase();
    //         return values.indexOf(filter.toLowerCase()) !== -1;
    //       });
    //     //   const {users, search} = this.state;
         

    //     //   const filteredUsers = users.filter(users => users.name.first.toLowerCase().includes(search.toLowerCase()));
    //     //   console.log(filteredUsers)
    //       console.log(this.state.value)
    //       this.setState({ users: filteredUsers });
    //   }
    //   handleSortByName() {
    //     const sortAr = this.state.filteredEmployees;
    //     //if state is equal to "asc", then we order list of employees in ascending order
    //     if (this.state.sortType === "asc") {
    //       const sorted = sortAr.sort((a, b) =>
    //         a.name.first > b.name.first ? 1 : -1
    //       );
    //       this.setState({
    //         filteredEmployees: sorted,
    //         sortType: "desc",
    //       });
    //     }
    //     //if state is NOT equal to "asc", then we order list of employees in descending order
    //     else {
    //       const sorted = sortAr.sort((a, b) =>
    //         a.name.first > b.name.first ? -1 : 1
    //       );
    //       this.setState({
    //         filteredEmployees: sorted,
    //         sortType: "asc",
    //       });
    //     }
    //   }

 
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-auto">
            <form className="form-inline" id="search">
              <input
                name={props.name}
                onChange={props.onChange}
                value={props.value}
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search by First Name"
                aria-label="Search"
                input={props.input}
              />
              <button
                onClick={props.onClick}
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }



export default Search;

