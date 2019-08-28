import React from 'react';

export default class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      temperature: 0,
      lat: 0,
      lon: 0
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(pos => {
      this.setState({ lat: pos.coords.latitude, lon: pos.coords.longitude }, this.getThings);
    });
    console.log('anything');
    // this.getThings();
  }

  getThings() {
    $.ajax({
      url: `http://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&APPID=bf21ce788ce74670534dd16f64f63d8b`
    }).then(response => {
      this.setState({location: response.name, temperature: response.main.temp});
    });
  }

  

  render() {
    return (
      <div className="weatherbox">
        <h1>Should I be cold?</h1>
        {(this.state.location) ? <h1>{this.state.location}</h1> : <h1>Where am I?</h1>}
        {(this.state.location) ? <h1>{(this.state.temperature - 273).toFixed(2)} C</h1> : <h1>Where is the sun?</h1>}
      </div>
    )
  }
}