import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function VideoCard({details}) {

const navigate =useNavigate();

const handleNavigation = () => {
    navigate(`/video/${details.id.videoId}`);
  };

  return (
    <Card sx={{ maxWidth: 345 }} >
      <CardActionArea onClick={handleNavigation}>
        <CardMedia
          component="img"
          height="200"
          image={details?.snippet?.thumbnails?.medium?.url}
          alt="green iguana"
          sx={{ borderRadius: "20px" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
           {details?.snippet?.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
        {details?.snippet?.channelTitle}
          </Typography>
        
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default VideoCard;
