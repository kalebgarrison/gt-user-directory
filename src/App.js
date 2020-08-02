import React from 'react';
import './App.css';
import Banner from "./components/Banner";
import Wrapper from "./components/Wrapper";
// import Search from "./components/Search";
import UserCard from "./components/UserCard"

function App() {
  return (
    <div>
    <Banner />,
    <Wrapper >
    {/* <Search /> */}
    <UserCard />

    </Wrapper>
    
    </div>
  );
}

export default App;
