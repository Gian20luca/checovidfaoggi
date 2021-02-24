import React, { useEffect, useState } from 'react';
import './EffectComponent.css';

export const EffectComponent = () => {
    const [value1, setValue1]: any = useState('');
    const [value2, setValue2]: any = useState('');

    useEffect(() => {
        const SkewedOne: any = document.querySelector('.SkewedOne');
        const SkewedTwo: any = document.querySelector('.SkewedTwo');
        setValue1(-15 + window.scrollY / 45);
        setValue2(15 + window.scrollY / -45);
        window.addEventListener('scroll', () => {
            value1 && (SkewedOne.style.transform = "skewY(" + value1 + " deg)");
            value2 && (SkewedTwo.style.transform = "skewY(" + value2 + " deg)");
        })
        console.log(value1)
    })

    console.log(window.scrollY)
    return (
        <div className='container'>
            <section>
                <span className="SkewedOne"></span>
                <span className="SkewedTwo"></span>
            </section>
        </div>
    );
}