const express = require('express');

const app = express();

app.get('/get-seat-data', (req, res) => {
    console.log('GET request received');
    console.log(req);

    const availableSeats = {
        busNumber: 'ABC123',
        availableSeats: ['1A', '1B', '2A', '2B', '3A', '3B']
    };


    res.json(availableSeats);
});

const dummyBusDetails = {
    busNumber: 'ABC123',
    route: 'Route A',
    timings: {
        monday: ['09:00 AM', '12:00 PM', '03:00 PM'],
        tuesday: ['10:00 AM', '01:00 PM', '04:00 PM'],
        wednesday: ['11:00 AM', '02:00 PM', '05:00 PM'],
        thursday: ['12:00 PM', '03:00 PM', '06:00 PM'],
        friday: ['01:00 PM', '04:00 PM', '07:00 PM'],
        saturday: ['02:00 PM', '05:00 PM', '08:00 PM'],
        sunday: ['03:00 PM', '06:00 PM', '09:00 PM']
    }
};

app.get('/get-bus-details', (req, res) => {
    console.log('GET request received');
    console.log(req);
    res.json(dummyBusDetails);
});

app.listen(3003, () => {
    console.log('API server is running on port 3003');
});

