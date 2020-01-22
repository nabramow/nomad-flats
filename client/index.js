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
      enddate: '',
      country: '',
      stateLoc: '',
      city: ''
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
        country: this.state.country,
        stateLoc: this.state.stateLoc,
        city: this.state.city
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
            <label for="startdate">Start date:</label>
            <input type="date" name="startdate" value={this.state.startdate} onChange={this.handleChange}></input>
            <label for="enddate">End date:</label>
            <input type="date" name="enddate" value={this.state.enddate} onChange={this.handleChange}></input>
            <select name="country" className="countries" id="countryId" value={this.state.country} onChange={this.handleChange}>
              <option value="">Select Country</option>
            </select>
            <select name="stateLoc" class="states" id="stateId" value={this.state.stateLoc} onChange={this.handleChange}>
              <option value="">Select State</option>
            </select>
            <select name="city" class="cities" id="cityId" value={this.state.city} onChange={this.handleChange}>
              <option value="">Select City</option>
            </select>
            <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script> 
            <script src="//geodata.solutions/includes/countrystatecity.js"></script>
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