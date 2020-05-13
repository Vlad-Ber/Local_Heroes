const supertest = require('supertest');
const express = require('express');

const app = express();
//const app = require('../server');

describe("Testing the API", () => {
    it("tests the base route and returns true for status", async () => {

        const response = await supertest(app).get('/');

        expect(response.status).toBe(200);
        expect(response.body.status).toBe(true);
        done();
    });
    
});




//TODO: Dummy test, not sure if this file is needed!!!
test("Testing how test works", () =>{
    expect(3).toBe(3);
    done();
});


/*import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
  });*/

