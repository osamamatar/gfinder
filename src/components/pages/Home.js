import React from "react";
import { Alert } from "../layout/Alert";
import Search from "../users/Search";
import Users from "../users/Users";

function Home() {
  return (
    <>
      <Alert />
      <Search />
      <Users />
    </>
  );
}

export default Home;
