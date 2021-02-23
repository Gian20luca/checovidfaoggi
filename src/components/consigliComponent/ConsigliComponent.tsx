import React from 'react';
import './ConsigliComponent.css';

export const ConsigliComponent = () => {
    return (
        <div className='container consigliContainer animate_ animate__animated animate__bounceIn'>
            <div className="row rowConsigli">
                <div className="col-md-4 colConsigli">
                    <img src="https://mascherinemonouso.net/wp-content/uploads/2020/03/sick.png" alt="image" width='100' height='100'/>
                    <p>Indossa sempre la mascherina</p>
                </div>
                <div className="col-md-4 colConsigli">
                <img src="https://i0.wp.com/bandungkidul.bandung.go.id/wp-content/uploads/2020/05/01td.png?fit=512%2C512&ssl=1" alt="image" width='120' height='100'/>
                    <p>Lava spesso le mani</p>
                </div>
                <div className="col-md-4 colConsigli">
                <img src="https://axiotek.eu/images/axiotek/COVID-19/1mt.png" alt="image" width='130' height='130'/>
                    <p>Mantieni il distanziamento sociale</p>
                </div>
            </div>
        </div>
    );
}