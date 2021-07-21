import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Button from '@material-ui/core/Button';
import "./Carousel.css"
export default function carousel() {
    return(
        <div>
            <Carousel 
                autoPlay={10} 
                interval={5000} 
                infiniteLoop ={1} 
                showThumbs={0}
                showStatus={0}
                >
                    <div className="container">
                        <img src="https://gotnda.com/wp-content/uploads/2020/05/computers-tablets-copy-450x140.jpg"
                        style={{
                            height:"450px",
                            minHeight:"150px"
                        }}
                        />
                        <Button className="btn" variant="outlined" color="primary">Sell Phone</Button>
                    </div>
                    <div>
                        <img src = "http://redrokk.com/wp-content/uploads/2017/08/RR_BlogImage_Sliders-1.jpg"
                            style={{
                                height:"450px",
                                minHeight:"150px"
                            }}
                        />
                        {/* <p className="legend">Legend 2</p> */}
                        
                    </div>
                    <div>
                        <img src="https://cdni.iconscout.com/illustration/premium/thumb/tailor-holding-a-mobile-phone-in-hand-for-advertisement-2705183-2259519.png" 
                        style={{
                            height:"450px",
                            minHeight:"150px"
                        }}
                        />
                        
                    </div>
            </Carousel>
        </div>
    )}
