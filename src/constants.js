
import React from 'react';
import logo from './assets/att_globe_500x500.png';
import logo2 from './assets/beccc.jpg';
export const services = [
    {
        title: "Technology Enthusiast",
        icon: 'https://csgeeek.github.io/web.png',
    },
    {
        title: "Software Engineer",
        icon: 'https://csgeeek.github.io/web.png',
    },
    {
        title: "Website Developer",
        icon: 'https://csgeeek.github.io/web.png',
    },
];

export const name = 'Sneha';

export const experiences = [
    {
        
        'role': 'Completed intra college internship',
        'duration': 'April 2022',
        'logo': logo2,
        'points': [
            '1.Linux',
            '2.Webpage designing(Front-end)',
            '3.Advanced computer skills(Microsoft Excel)'
        ],
        'url': 'https://www.becbgk.edu/',
    },
    {
        
        'role': 'Completed internship on web development',
        'duration': 'March 2023',
        'logo': logo,
        'points': [
            'I utilized HTML, CSS, and JavaScript to develop interactive web pages.',
            'Employed the Wamp server and MySQL to design the database, and leveraged PHP to establish the database connection📱.'
        ],
        'url': 'https://www.facebook.com/amsaembedded/',
    },
]



export const EMAIL_JS_SERVICE_ID = process.env.REACT_APP_EMAIL_JS_SERVICE_ID;
export const EMAIL_JS_TEMPLATE_ID = process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID;
export const EMAIL_JS_PUBLIC_KEY = process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY;
