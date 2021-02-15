import React, { useState, useEffect, useRef } from 'react';

import styles from './Slider.module.css';

const Slider = ({data}) => {

    const [dots, setDots] = useState([]);
    const [slides, setSlides] = useState([]);

    const refSlider = useRef(null);
    const refDots = useRef(null);
    let slideIndex = 1;

    
    const plusSlides = (n) => {
        showSlides(slideIndex += n);
    };
    
    const currentSlide = (n) => {
        showSlides(slideIndex = n);
    };
    
    const showSlides = (n) => {
        if (n > (refSlider.current.childNodes.length - 2)) slideIndex = 1;
        if (n < 1) slideIndex = (refSlider.current.childNodes.length - 2);
        refSlider.current.childNodes.forEach((s, i) => {
            if (i < (refSlider.current.childNodes.length - 2)) {
                s.style.display = "none";
            }
        });
        refDots.current.childNodes.forEach((d, i) => {
            d.classList.remove(styles.active);
        });
        refSlider.current.children[slideIndex - 1].style.display = "block";
        refDots.current.children[slideIndex - 1].classList.add(styles.active);
    };
        
    if (data && dots.length === 0) {

        let hourArray = [],
            dayCount = 0, 
            dayArray = [],
            placeArray = [],
            weatherArray = [];
        let day = '',
            hours = [];
        data.list.forEach((d, i) => {
            if (i === 0) { 
                day = d.dt_txt.substr(0,10);
                dayArray.push(d.dt_txt.substr(0,10));
                dayCount += 1;
            } else if (d.dt_txt.substr(0,10) !== day) {
                day = d.dt_txt.substr(0,10);
                dayArray.push(d.dt_txt.substr(0,10));
                dayCount += 1;
            }
        });

        dayArray.forEach((day, j) => {
            placeArray.push(<h3>{data.city.name}, {data.city.country}</h3>);
            hours = [];
            data.list.forEach((d, i) => {
                if (day === d.dt_txt.substr(0,10)) {
                    hours.push(
                        <p key={i} className={styles.hour_info}>{d.dt_txt.substr(11, 5)}&nbsp;
                            <img src={`http://openweathermap.org/img/w/${d.weather[0].icon}.png`} alt="icon"/>
                            &nbsp;Temperatura: {((d.main.temp)/10).toFixed(1)}° 
                            &nbsp;Humedad: {d.main.humidity} %
                            &nbsp;Viento: {(d.wind.speed).toFixed(1)} km/h 
                        </p>
                    );
                }
            });
            if (hours.length > 0) hourArray.push(<div key={j}>{hours}</div>);
        });

        dayArray.forEach((da, i) => {
                weatherArray.push(<div key={da}className={[styles.mySlides, styles.fade].join(" ")}>
                    <div className={styles.numbertext}>{i + 1} / {dayCount}</div>
                    <img src="./OpenWeather.png" alt="img" style={{width: "100%"}}/>
                    <div className={styles.container_info}>
                        {placeArray[i]}
                        {hourArray[i]}
                    </div>
                    <div className={styles.text}>{da}</div>
                </div>);
        });
        setSlides(weatherArray);
        
        hourArray = [];    
        dayArray = [];

        let dotArray = [];
        for(let i = 1; i <= dayCount; i++) {
            dotArray.push(<span key={i} className={styles.dot} onClick={() => currentSlide(i)}></span> )
        }
        setDots(dotArray);
        dotArray = [];
    }

    useEffect(() => {
        showSlides(slideIndex);
    });

    useEffect(() => {
        setDots([]);
    }, [data]);


    return (
        <React.Fragment>
            <div ref={refSlider} className={styles.slideshow_container}>
                {slides}
                {/* <div className={[styles.mySlides, styles.fade].join(" ")}>
                    <div className={styles.numbertext}>1 / 3</div>
                    <img src="./OpenWeather.png" alt="img" style={{width: "100%"}}/>
                    <div className={styles.container_info}>
                        <p>holanda</p>
                        <p>holanda</p>
                        <p>holanda</p>
                    </div>
                    <div className={styles.text}>Caption Text</div>
                </div>
                <div className={[styles.mySlides, styles.fade].join(" ")}>
                    <div className={styles.numbertext}>2 / 3</div>
                    <img src="/OpenWeather.png" alt="img" style={{width: "100%"}}/>
                    <div className={styles.text}>Caption Two</div>
                </div>
                <div className={[styles.mySlides, styles.fade].join(" ")}>
                    <div className={styles.numbertext}>3 / 3</div>
                    <img src="/OpenWeather.png" alt="img" style={{width: "100%"}}/>
                    <div className={styles.text}>Caption Three</div>
                </div> */}
                <div className={styles.prev} onClick={() => plusSlides(-1)}>&#10094;</div>
                <div className={styles.next} onClick={() => plusSlides(1)}>&#10095;</div>
            </div>
            <br/>
            <div ref={refDots} style={{textAlign: "center"}}>
                {dots}
            </div>
        </React.Fragment>
        
    );
};

export default Slider;
