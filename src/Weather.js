import React from 'react';

const Weather = (props) =>{
        return(
            <table>
                <thead>
                    <tr>
                        {props.weatherDays.map((element, index) =>
                            <th key={index}>
                                <span className="name">{element.date_name}</span>
                                <span className="number">{element.date_number}.{element.date_month}</span>
                            </th>
                       )}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {props.weatherDays.map((item, index) =>
                            <td key={index}>
                                <span className="row"><span>{item.tempMax}&deg;</span>/<span>{item.tempMin}&deg;</span></span>
                                <img src={item.ico} alt="picture weather" />
                            </td>
                        )}
                    </tr>
                </tbody>
            </table>
        )
}

export default Weather;