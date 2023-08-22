import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import '../styles/MediaCard.css';

const MediaCard = ({ title, content, imageUrl }) => {
  return (
    <Card sx={{ bgcolor: '#414b5f5a',
                boxShadow: 1,
                borderRadius: 2,
                p: 2,
                minWidth: 300 }}>
      <CardMedia
        sx={{ height: 140}}
        image={imageUrl}
        title={title}
      />
      <CardContent>
        <Typography class="title" gutterBottom component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
        <Box textAlign='center'>
        <Button className="btn-bold" variant='contained' size="medium">Learn More</Button>
        </Box>
    </Card>

    
  );
}

export default MediaCard;