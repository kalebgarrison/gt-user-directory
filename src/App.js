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
        })
      )
      .catch((err) => console.log(err));
  };

  // This handles the search submit button action when searching using the first name

  handleFormSubmit = (event) => {
    event.preventDefault();

    const { users, search } = this.state;

    const filteredUsers = users.filter((users) =>
      users.name.first.toLowerCase().includes(search.toLowerCase())
    );
    this.setState({ users: filteredUsers });
  };

  // This function sorts users by their first name
  sortUsers = () => {
    function compare(a, b) {
      if (a.name.first > b.name.first) return 1;
      if (b.name.first > a.name.first) return -1;
      return 0;
    }
    const sortedUsers = this.state.users.sort(compare);
    console.log(sortedUsers);
    this.setState({
      users: sortedUsers,
    });
  };

  render() {
    return (
      <div>
        <Banner />
        <Wrapper>
          <Search
            name="search"
            onChange={this.handleInputChange}
            value={this.state.search}
            onClick={this.handleFormSubmit}
            input={this.state.input}
          />
          {this.state.users.map((user) => (
            <UserCard
              onClick={this.sortUsers}
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
