import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const title = 'Medium-term accommodation by nomads, for nomads.';

ReactDOM.render(
  <div id = "title">
  {title}
  <hr></hr>
  </div>,
  document.getElementById('app')
);

class AddFlat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
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
        id: this.state.id,
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
            {/* <select name="country" className="countries" id="countryId" value={this.state.country} onChange={this.handleChange}>
              <option value="">Select Country</option>
            </select>
            <select name="stateloc" className="states" id="stateId" value={this.state.stateloc} onChange={this.handleChange}>
              <option value="">Select State</option>
            </select>
            <select name="city" className="cities" id="cityId" value={this.state.city} onChange={this.handleChange}>
              <option value="">Select City</option>
            </select> */}
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
      fetch('/api')
        .then(res => res.json())
        .then((flats) => {
  
          if (!Array.isArray(flats)) flats = [];
          this.setState({ flats: flats });
        })
        .catch(err => console.log('Flats.componentDidMount: get flats: ERROR: ', err));
    };

    render () {
      const flatsList = [];
      console.log('Flats this.state ', this.state);
      console.log('Flats this.props ', this.props);
      
      for (let i = 0; i < this.state.flats.length; i += 1) {
        flatsList.push(<Box key={ 'flats' + i } info={this.state.flats[i]} flatId={this.state.flats.id}/>)
      }
      return (
        <div id="flat-board">
          {flatsList}
        </div>
      )
    }
  }

  class Box extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      // console.log('Box this.state ', this.state);
      // console.log('Box this.props ', this.props);
      return (
        <div className="flat-box">
          <div className="left">
            <img src="../client/assets/home.png"></img>
          </div>
          <div className="right">
            <p className="flatDetail"><b>Start Date:</b> {this.props.info.startdate}</p>
            <p className="flatDetail"><b>End Date:</b> {this.props.info.enddate}</p>
            <p className="flatDetail"><b>Location:</b> {this.props.info.city}, {this.props.info.country}</p>
            <p className="flatDetail"><b>End Date:</b> {this.props.info.enddate}</p>
            <p className="flatDetail"><b>Contact:</b> {this.props.info.email}</p>
          </div>
        </div>
      )
    }
  }

  ReactDOM.render(<AddFlat />, document.getElementById('flats'));
  ReactDOM.render(<Flats />, document.getElementById('view-flats'));