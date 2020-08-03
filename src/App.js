import React, { Component } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Wrapper from "./components/Wrapper";
import Search from "./components/Search";
import UserCard from "./components/UserCard";
import API from "./utils/API";

class App extends Component {
 
  state = {
    users: [],
    search: "",
    filteredUsers: [],
    results: {},
    error: "",
  };
  
 
 
  

  componentDidMount() {
    this.createUsers();
    API.getRandomUser()
      .then((res) =>
        this.setState({
          users: res.data.results,
          filteredUsers: res.data.results,
          search: this.state.value,
        })
      )
      .catch((err) => console.log(err));
  }

  createUsers = () => {
    API.getRandomUser()
      .then((response) => this.setState({ users: response.data.results }))
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  };

  userSearch = () => {
    API.getRandomUser()
      .then((res) =>
        this.setState({
          filteredUsers: res.data.results,
          users: res.data.results,
          // search: this.state.search,
        })
      )
      .catch((err) => console.log(err));
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    
    // const filter = event.target.value;
    // const filteredUsers = this.state.users.filter((item) => {
    //   // merge data together, then see if user input is anywhere inside
    //   let values = Object.values(item).join("").toLowerCase();
    //   return values.indexOf(filter.toLowerCase()) !== -1;
    // });
      const {users, search} = this.state;

      const filteredUsers = users.filter(users => users.name.first.toLowerCase().includes(search.toLowerCase()));
      console.log(users)
    // console.log(this.state.value);
    this.setState({ users: filteredUsers });
  };

  render() {
    return (
      <div>
        <Banner />,
        <Wrapper>
          <Search name="search"
          onChange={this.handleInputChange}
          value={this.state.search}
          onClick={this.handleFormSubmit}
          input={this.state.input}
          />
          {this.state.users.map((user) => (
            <UserCard
              src={user.picture.large}
              firstName={user.name.first}
              lastName={user.name.last}
              email={user.email}
              phone={user.phone}
              age={user.dob.date}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
