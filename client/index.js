import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

ReactDOM.render(
  <div>
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
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(reqBody),
      })
        .then(res => {
          res.json();
        })
        // .then(res => {
        //   this.setState({flats})
        // })
    }

    render() {
      console.log('AddFlats this.state ', this.state);
      console.log('AddFlats this.props ', this.props);
      return (
        <div id="add-form">
          <br></br>
          <form onSubmit={this.handleSubmit}>
            <div id="row1">
              <div><label htmlFor="startdate">Start date:</label>
                <input type="date" name="startdate" className="add-inputs" value={this.state.startdate} onChange={this.handleChange}></input>
              </div>
              <div><label htmlFor="enddate">End date:</label>
                <input type="date" name="enddate" className="add-inputs" value={this.state.enddate} onChange={this.handleChange}></input>
              </div>
              <div><label htmlFor="email">Email:</label>
                <input type="email" name="email" placeholder="Email" className="add-inputs" value={this.state.email} onChange={this.handleChange}></input>
              </div>
            </div>
            <div id="row2">
              <select name="country" className="countries add-inputs" id="countryId" value={this.state.country} onChange={this.handleChange}>
                <option value="">Select Country</option>
              </select>
              <select name="stateloc" className="states add-inputs" id="stateId" value={this.state.stateloc} onChange={this.handleChange}>
                <option value="">Select State</option>
              </select>
              <select name="city" className="cities add-inputs" id="cityId" value={this.state.city} onChange={this.handleChange}>
                <option value="">Select City</option>
              </select>
            </div>
            {/* <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script> 
            <script src="//geodata.solutions/includes/countrystatecity.js"></script> */}
            <div id="row3"><input type="submit" value="ADD FLAT" id="add-btn"></input></div>
          </form>
          <hr></hr>
          <Flats/>
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

    // handleDelete(id) {
    //   const updatedFlats = this.state.flats.filter(item => item.id !== id);
    //   this.setState({ flats: updatedFlats });
    //  }

    componentDidMount() {
      fetch('/api')
        .then(res => res.json())
        .then((flats) => {
        this.setState({ flats: flats });
        })
        .catch(err => console.log('Flats.componentDidMount: get flats: ERROR: ', err));
    };

    render () {
      const flatsList = [];
      console.log('Flats this.state ', this.state);
      console.log('Flats this.props ', this.props);
      
      for (let i = 0; i < this.state.flats.length; i += 1) {
        flatsList.push(<Box key={ 'flats' + i } info={this.state.flats[i]}/>)
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
      this.handleClick= this.handleClick.bind(this);
    }

    handleClick(event) {
      this.setState({
        id: event.target.value,
      });

      fetch('/api/delete/' + event.target.value, {
        method: 'DELETE',
      })
      .then(res => res.json())
      // .then(res => this.setState(this.props.handleDelete(event.target.value)))
    }

    render() {
      console.log('Box this.state ', this.state);
      console.log('Box this.props ', this.props);
      return (
        <div className="flat-box">
          <div className="left">
            <img src="../client/assets/home.png"></img>
          </div>
          <div className="right">
            <p className="flatDetail"><b>Start Date:</b> {this.props.info.startdate}</p>
            <p className="flatDetail"><b>End Date:</b> {this.props.info.enddate}</p>
            <p className="flatDetail"><b>Location:</b> {this.props.info.city}, {this.props.info.country}</p>
            <p className="flatDetail"><b>Contact:</b> {this.props.info.email}</p>
            <button name="delete" className="delete" value={this.props.info.id} onClick={this.handleClick}>DELETE</button>
          </div>
        </div>
      )
    }
  }

  ReactDOM.render(<AddFlat />, document.getElementById('add-flat'));