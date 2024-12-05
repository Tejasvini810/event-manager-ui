import React, { useState } from 'react';
import { Grid, Typography, TextField } from '@mui/material';
import CardComponent from '../components/CardComponent';

const Events = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Dummy data for events
  const events = [
    {
      id: 1,
      title: 'Photography Workshop',
      description: 'Learn advanced photography techniques.',
      image: 'https://via.placeholder.com/150',
      date: '2024-12-10',
    },
    {
      id: 2,
      title: 'Coding Bootcamp',
      description: 'Enhance your coding skills with professionals.',
      image: 'https://via.placeholder.com/150',
      date: '2024-12-15',
    },
    {
      id: 3,
      title: 'Mountain Hike',
      description: 'Join us for a thrilling hiking adventure.',
      image: 'https://via.placeholder.com/150',
      date: '2024-12-20',
    },
    // Add more events as needed
  ];

  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Events
      </Typography>
      <TextField
        label="Search Events"
        variant="outlined"
        fullWidth
        sx={{ mb: 3 }}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Grid container spacing={3}>
        {filteredEvents.map((event) => (
          <Grid item xs={12} sm={6} md={4} key={event.id}>
            <CardComponent
              image={event.image}
              title={`${event.title} (on ${event.date})`}
              description={event.description}
              onButtonClick={() => alert(`Registered for ${event.title}`)}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Events;
