import React, { useState } from 'react';
import useTravels from '../utilities/useTravels';
import '../App.css';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ArrowRight from '@mui/icons-material/ArrowRight';
import Button from '@mui/material/Button';


const TravelSelection = () => {
    const [travels] = useTravels();
    const [current, setCurrent] = useState(0);

    return (
        <section>
            <div className='travel-selection'>
                <div>
                    {
                        travels.map((travel, index) => current === index
                            &&
                            <div key={travel._id}>
                                <h2 className='tour-title'>{travel.travelName}</h2>
                                <p className='tour-desc'>{travel.travelDescription}</p>
                            </div>
                        )
                    }
                    <Button
                        variant="contained"
                        style={{
                            backgroundColor: "#F9A51A",
                            color: "black",
                            display: "flex",
                            alignItems: "center",
                            marginTop: "1rem"
                        }}
                    >
                        Booking <ArrowRight />
                    </Button>
                </div>
                <div
                    style={{ textAlign: "right" }}
                    id="slider"
                >
                    <div id='slider1'>
                        {
                            travels.map((travel, index) => !(current === index) && <img
                                src={travel.travelImage}
                                alt={travel.travelName}
                                style={{
                                    width: "250px",
                                    height: "350px",
                                    border: `${current === index && `5px solid #F9A51A`}`,
                                    borderRadius: "25px"
                                }}
                            />)
                        }
                    </div>
                    <div id='slider2'>
                        {
                            travels.map((travel, index) => current === index && <img
                                src={travel.travelImage}
                                alt={travel.travelName}
                                style={{
                                    width: "270px",
                                    height: "416px",
                                    border: `${current === index && `5px solid #F9A51A`}`,
                                    borderRadius: "25px",
                                    objectFit: "cover"
                                }}
                            />)
                        }
                    </div>
                </div>
            </div>
            <div
                style={{ textAlign: "right" }}
            >
                <Button variant="text" style={{
                    color: "white",
                    height: "47px",
                    width: "47px"
                }}
                    onClick={() => setCurrent(!(current === 0) ? current - 1 : travels.length - 1)}
                >
                    <ArrowCircleLeftOutlinedIcon
                        style={{
                            height: "47px",
                            width: "47px"
                        }}
                    />
                </Button>
                <Button variant="text" style={{
                    color: "white",
                    height: "47px",
                    width: "47px"
                }}
                    onClick={() => setCurrent(current === travels.length - 1 ? 0 : current + 1)}
                >
                    <ArrowCircleRightOutlinedIcon
                        style={{
                            height: "47px",
                            width: "47px"
                        }}
                    />
                </Button>
            </div>
        </section>
    );
};

export default TravelSelection;
