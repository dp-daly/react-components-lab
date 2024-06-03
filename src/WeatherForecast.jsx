import WeatherIcon from './WeatherIcon';
import WeatherData from './WeatherData';

function WeatherForecast({ day, image, alt, conditions, time }) {
  return (
    <div className="weather">
        <WeatherIcon image={image} alt={alt} />
        <WeatherData day={day} conditions={conditions} time={time} />
    </div>
  );
}

export default WeatherForecast;