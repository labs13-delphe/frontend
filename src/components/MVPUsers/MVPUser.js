import React from "react";
import axios from "axios";

import SingleUser from "./SingleUser";

class MVPUsers extends React.Component {
  state = { users: [] };

  componentDidMount() {
    axios
      .get("https://delphe-backend.herokuapp.com/api/users")
      .then(res => {
        this.setState({ users: res.data });
      })
      .catch(err => {
        console.log({ error: "could not get data" });
      });
  }

  render() {
    return (
      <>
        <h2>hey there!</h2>
        {this.state.users.map(user => {
          return <SingleUser user={user} />;
        })}
      </>
    );
  }
}

export default MVPUsers;
