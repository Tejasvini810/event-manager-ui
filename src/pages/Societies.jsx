import React, { useState } from 'react';
import { Grid, Typography, TextField } from '@mui/material';
import CardComponent from '../components/CardComponent';

const Societies = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Dummy data for societies
  const societies = [
    {
      id: 1,
      name: 'Photography Society',
      description: 'Capture beautiful moments and enhance your skills.',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Women Who Code',
      description: 'Empowering women in technology.',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Hiking Club',
      description: 'Explore nature with fellow hiking enthusiasts.',
      image: 'https://via.placeholder.com/150',
    },
    // Add more societies as needed
  ];

  const filteredSocieties = societies.filter((society) =>
    society.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Societies
      </Typography>
      <TextField
        label="Search Societies"
        variant="outlined"
        fullWidth
        sx={{ mb: 3 }}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Grid container spacing={3}>
        {filteredSocieties.map((society) => (
          <Grid item xs={12} sm={6} md={4} key={society.id}>
            <CardComponent
              image={society.image}
              title={society.name}
              description={society.description}
              onButtonClick={() => alert(`Joined ${society.name}`)}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Societies;
