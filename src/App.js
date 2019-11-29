import React, {Component} from 'react';
import './App.css';
import Header from './Header';
import From from './From';
import Weather from './Weather';

const api_key ='9219593c13f14d93b68142853190308';

class App extends Component {
    constructor(){
        super();
        this.state = {
            weatherForSevenDays: undefined,
            error:" "
        }
    }

    weatheMethod = async(e)=>{
        e.preventDefault();
        let city = e.target.elements.city.value;
        const api = await fetch(`http://api.worldweatheronline.com/premium/v1/weather.ashx?key=${api_key}&q=${city}&format=json&num_of_days=7`);
        const data = await api.json();

        if(city==="" || data.data.error){
            this.setState({
                error: "Enter right City"
            })
        }
        else{
            const days = data.data.weather.map( e => {
                let p = {};
                const dayName = new Date(e.date);
                const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
                p.date_name= days[dayName.getDay()];
                p.date_number= dayName.getDate()<10?'0'+dayName.getDate():dayName.getDate();
                p.date_month= (dayName.getMonth()+1)<10?'0'+(dayName.getMonth()+1):dayName.getMonth()+1;
                p.tempMin= e.mintempC;
                p.tempMax= e.maxtempC;
                p.ico= e.hourly[4].weatherIconUrl[0].value;
                return p;
            })
            this.setState({
                weatherForSevenDays:[ ...days],
                error:""
            })
         }
    }

    render(){
        return (
            <div className="wrapper-holder">
                <Header />
                <From getweatheMethod = {this.weatheMethod}/>
                { !this.state.error &&
                    <Weather weatherDays = {this.state.weatherForSevenDays} />
                }
                <span className="error-text">{this.state.error}</span>
            </div>
        )
    }
}

export default App;
