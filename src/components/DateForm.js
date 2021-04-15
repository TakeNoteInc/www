import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { CREATE_USER_URI } from "../setupEnv";
import { getUser } from "../actions/user";

class DateForm extends Component {
  constructor() {
    super();
    this.state = {
      startDate: "",
      endDate: "",
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = async () => {
    try {
      const { startDate, endDate } = this.state;
      const { email, cognitoId, jwtToken } = this.props;

      const BEARER_TOKEN = "Bearer " + jwtToken;
      const body = { cognitoId, email, startDate, endDate };
      const headers = { headers: { Authorization: BEARER_TOKEN } };

      console.log(headers, body);
      const res = await axios.post(CREATE_USER_URI, body, headers);
      console.log(res);
      this.props.getUser(cognitoId, jwtToken);
    } catch (err) {
      console.log(err);
      //set form errors here
    }
  };

  render() {
    return (
      <div>
        <input
          onChange={this.onChange}
          value={this.state.startDate}
          label="Start Date"
          type="date"
          name="startDate"
        />
        <input
          onChange={this.onChange}
          value={this.state.endDate}
          label="End Date"
          type="date"
          name="endDate"
        />
        <button onClick={this.onSubmit}>Submit</button>
      </div>
    );
  }
}

export default connect(null, { getUser })(DateForm);
