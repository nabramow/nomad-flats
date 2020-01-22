import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const title = 'Homepage with login';

ReactDOM.render(
  <div>
  {title}
  <p>
    <a href="./flats">Click here to view flats.</a>
  </p>
  <hr></hr>
  </div>,
  document.getElementById('app')
);

class AddFlat extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      startdate: '',
      enddate: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleChange(event) {
      this.setState({
        [event.target.name]: event.target.value,
      });
    }
  
    handleSubmit(event) {
      event.preventDefault();
      let reqBody = {
        startdate: this.state.startdate,
        enddate: this.state.enddate,
      };
      fetch('/submit', {
        method: 'POST',
        body: JSON.stringify(reqBody),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((res) => {
          if (res.ok){
            return res.json();
          } else {
            throw new Error ('Something went wrong with your fetch');
          }
        }).then((json) => {
          console.log(json);
        })
    }

    render() {
      console.log('AddFlats this.state ', this.state);
      console.log('AddFlats this.props ', this.props);
      return (
        <div id="add-form">
          <h2>Add a flat</h2>
          <br></br>
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="startdate" key="startdate" placeholder="Start Date" value={this.state.startdate} onChange={this.handleChange}></input>
            <input type="text" name="enddate" key="enddate" placeholder="End Date" value={this.state.enddate} onChange={this.handleChange}></input>
            {/* <select name="country" className="countries" id="countryId">
            <option value="">Select Country</option>
            </select>
            <select name="state" className="states" id="stateId">
                <option value="">Select State</option>
            </select>
            <select name="city" className="cities" id="cityId">
                <option value="">Select City</option>
            </select>
            <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script> 
            <script src="//geodata.solutions/includes/countrystatecity.js"></script> */}
            <input type="submit" value="Add"></input>
          </form>
          <hr></hr>
        </div>
      )

    }
  }

  class ViewFlats extends React.Component {
    render () {
      return (
        <div>hello!</div>
      )
    }
  }
  ReactDOM.render(<AddFlat />, document.getElementById('flats'));
  ReactDOM.render(<ViewFlats />, document.getElementById('view-flats'));