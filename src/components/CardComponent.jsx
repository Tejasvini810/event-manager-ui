import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const CardComponent = ({ image, title, description, onButtonClick }) => {
  return (
    <Card>
      <CardMedia component="img" height="140" image={image} alt={title} />
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <Button onClick={onButtonClick}>Learn More</Button>
    </Card>
  );
};

export default CardComponent;
