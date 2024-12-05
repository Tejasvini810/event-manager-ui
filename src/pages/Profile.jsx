import React from 'react';
import { Typography, List, ListItem, ListItemText, Divider } from '@mui/material';

const Profile = () => {
  // Dummy user data
  const userData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    joinedSocieties: ['Photography Society', 'Hiking Club'],
    registeredEvents: ['Photography Workshop', 'Mountain Hike'],
  };

  return (
    <div>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Profile
      </Typography>
      <Typography variant="h6">Name: {userData.name}</Typography>
      <Typography variant="h6">Email: {userData.email}</Typography>
      <Divider sx={{ my: 2 }} />
      <Typography variant="h5" sx={{ mb: 1 }}>
        Joined Societies
      </Typography>
      <List>
        {userData.joinedSocieties.map((society, index) => (
          <ListItem key={index}>
            <ListItemText primary={society} />
          </ListItem>
        ))}
      </List>
      <Divider sx={{ my: 2 }} />
      <Typography variant="h5" sx={{ mb: 1 }}>
        Registered Events
      </Typography>
      <List>
        {userData.registeredEvents.map((event, index) => (
          <ListItem key={index}>
            <ListItemText primary={event} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Profile;
