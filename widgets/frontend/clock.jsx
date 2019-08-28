import React from 'react';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.date = new Date();
    this.state = {
      hours: this.date.getHours(),
      minutes: this.date.getMinutes(),
      seconds: this.date.getSeconds(),
      day: this.date.getDay(),
      date: this.date.getDate(),
      month: this.date.getMonth(),
      year: this.date.getFullYear()
    };
    this.tick = this.tick.bind(this);
    this.interval = 0;
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    this.setState({ seconds: this.state.seconds + 1 });
    if (this.state.seconds === 60) {
      this.setState({ seconds: 0 });
      this.setState({ minutes: this.state.minutes + 1 });
      if (this.state.minutes === 60) {
        this.setState({ minutes: 0 });
        this.setState({ hours: this.state.hours + 1 });
        if (this.state.hours === 24) {
          this.setState({ hours: 0 });
          this.setState({ day: this.state.day + 1});
          if (this.state.day === 7) this.state.day = 0;
          this.setState({ date: this.state.date + 1});
          if (this.state.date === 30) {
            this.setState({ date: 1});
            this.setState({ month: this.state.month + 1 });
            if (this.state.month === 12) {
              this.setState({ month: 0 });
              this.setState({ year: this.state.year + 1 });
            }
          }
        }
      }
    }
  }

  render() {
    const {hours, minutes, seconds, day, date, month, year} = this.state;
    return (
      <div>
        <h1>Clock</h1>
        <div className="clockbox">
          <div className="timebox">
            <h2>Time:</h2>
            <h2>{hours}:{minutes}:{seconds}</h2>
          </div>
          <div className="datebox">
            <h2>Date:</h2>
            <h2>{Clock.DAYS[day]} {month + 1}/{date}/{year}</h2>
          </div>
        </div>
      </div>
    )
  }
}

Clock.DAYS = ["Mon.", "Tues.", "Wed.", "Thurs.", "Fri.", "Sat.", "Sun."];