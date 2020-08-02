import React, { Component } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Wrapper from "./components/Wrapper";
// import Search from "./components/Search";
import UserCard from "./components/UserCard";
import API from "./utils/API";

class App extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    this.createUsers();
  }

  createUsers = () => {
    API.getRandomUser()
      .then((response) => this.setState({ users: response.data.results }))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <Banner />,
        <Wrapper>
          {/* <Search /> */}
          {this.state.users.map((user) => (
            <UserCard
              src={user.picture.large}
              firstName={user.name.first}
              lastName ={user.name.last}
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
