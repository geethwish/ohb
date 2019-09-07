import React, { Component } from "react";
import AsyncSelect from "react-select/lib/Async";
import axios from "axios";
import { offers } from "../Data/urlConfig";

const filterOffers = inputValue => {
  let data = [];
  let filter = [];
  let news = [];

  return axios.get(offers).then(res => {
    data = res.data;

    filter = data.filter(i =>
      i.Text.toLowerCase().includes(inputValue.toLowerCase())
    );

    news = filter.map(item => ({
      ...item,
      value: item.Text,
      label: item.Text
    }));

    return news;
  });
};

const loadOptions = (inputValue, callback) => {
  filterOffers(inputValue).then(res => {
    console.log(res);
    callback(res);
  });
};

export default class testCode extends Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: "", dataset: [] };
  }
  handleInputChange = newValue => {
    const inputValue = newValue.replace(/\W/g, "");
    this.setState({ inputValue });
    return inputValue;
  };

  componentDidMount() {
    axios.get(offers).then(res => {
      let data = res.data;

      this.setState({ dataset: data });
    });
  }

  render() {
    console.log(this.state.Offers);
    return (
      <div>
        <div style={{ margin: "50px" }}>
          <div className="row">
            <div className="col-md-3" />
            <div className="col-md-6">
              <AsyncSelect
                cacheOptions
                loadOptions={loadOptions}
                defaultOptions
                onInputChange={this.handleInputChange}
              />
            </div>
            <div className="col-md-3" />
          </div>
        </div>
      </div>
    );
  }
}
