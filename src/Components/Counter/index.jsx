import React,{useState,useEffect} from "react";
import "./Counter.scss"


const Counter = ({date}) =>{
    const eventDate = new Date(date); // Replace with your event date and time
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  const updateCountdown = () => {
    const currentTime = new Date();
    const timeDifference = eventDate - currentTime;
    // console.log(timeDifference);

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    setDays(days);
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
  };

  useEffect(() => {
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
    return(
        <div className="countdown">
        <div className="countdown-item">
          <span className="number">{formatTime(days)}</span>
          <span className="label"> Days</span>
        </div>
        <div className="countdown-item">
          <span className="number">{formatTime(hours)}</span>
          <span className="label"> Hour</span>
        </div>
        <div className="countdown-item">
          <span className="number">{formatTime(minutes)}</span>
          <span className="label"> Min</span>
        </div>
        <div className="countdown-item">
          <span className="number">{formatTime(seconds)}</span>
          <span className="label"> Sec</span>
        </div>
      </div>
    )
}

export default Counter