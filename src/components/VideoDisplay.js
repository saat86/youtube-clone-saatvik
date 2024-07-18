import React from "react";
import VideoCard from "./VideoCard";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";

function VideoDisplay() {
  const { data } = useSelector((state) => state.videoData);

  return (
    <Grid container spacing={1}>
   {data[0]?.items?.map((val,index)=>(
    <Grid item xs={12} md={6} lg={4} sx={{ marginTop: "15px" }} key={index}>
        <VideoCard details={val} />
      </Grid>
   ))
   
   };
     
    </Grid>
  );
}

export default VideoDisplay;
