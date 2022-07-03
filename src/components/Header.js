import React, { useEffect, useState } from 'react';
import logo from '../logo.png';
import '../App.css';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../firebase.init';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const Header = () => {
    const [user] = useAuthState(auth);
    const [countries, setCountries] = useState([]);
    const [input, setInput] = useState('');
    const [visibility, setVisibility] = useState(false);
    // const [searchCountries, setSearchCountries] = useState([]);

    useEffect(() => {
        const url = `https://restcountries.com/v2/all`;
        const getCountries = async () => {
            const request = await fetch(url);
            const response = await request.json();
            setCountries(response);
        };
        getCountries();
    }, []);

    useEffect(() => {
        if (user) {
            localStorage.setItem('accessToken', JSON.stringify(user.accessToken));
        }
    }, [user]);

    const searchCountry = countries.filter(country => country.name.toLowerCase().includes(input.toLowerCase()));

    return (
        <section>
            <div className='header'>
                <div>
                    <Link to={'/home'}>
                        <img
                            src={logo}
                            alt="header-logo"
                            style={{
                                width: "120.26px",
                                height: "56px",
                                objectFit: "cover"
                            }}
                        />
                    </Link>
                </div>
                <div className='start-destination'>
                    <input
                        type="text"
                        name="search"
                        id="search"
                        placeholder='Search your destination...'
                        style={{
                            width: '370px',
                            height: "44px",
                            borderRadius: '5px',
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            border: '1px solid #ffffff',
                            padding: '0 1rem',
                            fontFamily: "'Montserrat', sans-serif",
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: '15px'
                        }}
                        onChange={(event) => setInput(event.target.value)}
                        onFocus={() => setVisibility(true)}
                        onBlur={() => setVisibility(false)}
                        autoComplete='off'
                    />
                    {
                        visibility
                        &&
                        <div id='country-name-viewer'>
                            {
                                searchCountry.map((country, index) => <div
                                    key={index}
                                    style={{
                                        color: 'black',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        borderBottom: '1px solid gray',
                                        padding: '.2rem 0',
                                        width: '100%'
                                    }}
                                >
                                    <p>{country.name}</p>
                                    <img
                                        src={country.flags.svg}
                                        alt={country.demonym}
                                        style={{
                                            height: '20px',
                                            width: '20px',
                                            objectFit: 'cover',
                                        }}
                                    />
                                </div>)
                            }
                        </div>
                    }
                </div>
                <div>
                    <Button
                        variant="contained"
                        style={{
                            backgroundColor: "#F9A51A",
                            color: "black"
                        }}
                    >
                        <Link to={'/login'} style={{
                            textDecoration: "none",
                            fontWeight: "bold"
                        }}>
                            <Stack direction="row" spacing={2} style={{
                                display: 'flex',
                                alignItems: 'center'
                            }}>
                                {user && <Avatar alt={user.displayName} src={user.photoURL} />}
                                {user ? <span onClick={() => {
                                    localStorage.removeItem('accessToken');
                                    signOut(auth);
                                }}>Logout</span> : <span>Login</span>}
                            </Stack>
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Header;
