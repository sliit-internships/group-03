import * as React from 'react';

const places = [
  {
    title: 
    <a class="nav-link" aria-current="page" href="/login"> Login </a>,
    description:
      "If you are new to SLIIT Internship Portal, Please Register",
    imageUrl: process.env.PUBLIC_URL + '/assets/island1.jpg',
    time: 1500,
  },
  {
    title: <a class="nav-link" aria-current="page" href="/register"> Register </a>,
    description:
      'If you are new to SLIIT Internship Portal, Please Register',
    imageUrl: process.env.PUBLIC_URL + '/assets/island2.jpg',
    time: 1500,
  },
];

export default places;

