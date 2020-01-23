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
      stateloc: '',
      city: '',
      email: '',
      flats: []
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
        stateloc: this.state.stateloc,
        city: this.state.city,
        email: this.state.email
      };
      fetch('/api/submit', {
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
      return (
        <div id="add-form">
          <h2>Add a flat</h2>
          <br></br>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="startdate">Start date:</label>
            <input type="date" name="startdate" value={this.state.startdate} onChange={this.handleChange}></input>
            <label htmlFor="enddate">End date:</label>
            <input type="date" name="enddate" value={this.state.enddate} onChange={this.handleChange}></input>
            <select name="country" className="countries" id="countryId" value={this.state.country} onChange={this.handleChange}>
              <option value="">Select Country</option>
            </select>
            <select name="stateloc" className="states" id="stateId" value={this.state.stateloc} onChange={this.handleChange}>
              <option value="">Select State</option>
            </select>
            <select name="city" className="cities" id="cityId" value={this.state.city} onChange={this.handleChange}>
              <option value="">Select City</option>
            </select>
            <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange}></input>
            <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script> 
            <script src="//geodata.solutions/includes/countrystatecity.js"></script>
            <input type="submit" value="Add"></input>
          </form>
          <hr></hr>
        </div>
      )

    }
  }

  class Flats extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {
        flats: [],
      };
    }

    componentDidMount() {
      console.log('component mounted');
      fetch('/')
        .then(res => res.json())
        .then((flats) => {
  
          if (!Array.isArray(flats)) flats = [];
          this.setState({ flats: flats });
          console.log('flats', flats)
        })
        .catch(err => console.log('Flats.componentDidMount: get flats: ERROR: ', err));
    };

    render () {
      console.log('Flats this.state ', this.state);
      console.log('Flats this.props ', this.props);
      
      return (
        <div>hello!</div>
      )
    }
  }
  ReactDOM.render(<AddFlat />, document.getElementById('flats'));
  ReactDOM.render(<Flats />, document.getElementById('view-flats'));