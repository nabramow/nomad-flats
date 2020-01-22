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
  // constructor(props, context) {
  //   super(props, context);
  //   this.state = {
  //   };

    render() {
      return (
        <div id="add-form">
          <h2>Add a flat</h2>
          <br></br>
          <form>
            <input type="text" placeholder="Start Date"></input>
            <input type="text" placeholder="End Date"></input>
            <select name="country" class="countries" id="countryId">
            <option value="">Select Country</option>
            </select>
            <select name="state" class="states" id="stateId">
                <option value="">Select State</option>
            </select>
            <select name="city" class="cities" id="cityId">
                <option value="">Select City</option>
            </select>
            <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script> 
            <script src="//geodata.solutions/includes/countrystatecity.js"></script>
            <input type="submit" value="Submit"></input>
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