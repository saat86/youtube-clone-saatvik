import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Fetchdata from '../lib/fetchdata'
import { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import ReactPlayer from 'react-player'
import Search from './Search';
import VideoDisplay from './VideoDisplay'
import {useDispatch}  from 'react-redux';
import { setVideoData } from '../slice/videoDataSlice';

function VideoDetail() {
    const {id} =useParams();
    const [SpecificData,SetSpecificData] =useState([]);
    const dispatch=useDispatch();

    useEffect(() => {
        const fetchDataAndDispatch = async () => {
            try {
                const fetchedData = await Fetchdata(`videos?part=snippet,statistics&id=${id}`); // Wait for the promise to resolve
                 SetSpecificData(fetchedData.items[0].snippet.title)
            } catch (error) {
                console.error('Error fetching data:', error);
                
            }
        };
        fetchDataAndDispatch();
    }, [id]);

    useEffect(()=>{
        const suggestedVideosData =async()=>{
            try{
                const suggeestedData =await Fetchdata(`search?relatedToVideoId=${id}`);
                dispatch(setVideoData(suggeestedData));
            }
         catch (error) {
            console.error('Error fetching data:', error);
            
        }
    };

        suggestedVideosData();

    },[id])

    
    return (
        <>
        <Box sx={{marginTop:'70px',}}>
      <Search/>
        <Box sx={{display:'flex',justifyContent:'center',width:"100%" ,marginTop:'20px'}}>
        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls={true} />
        </Box>
        <Box sx={{display:'flex',justifyContent:'center',width:"100%",marginTop:"20px"}}>
        <Typography variant='h5'>{SpecificData}</Typography>
        </Box>
    
        <Box sx={{marginLeft:'50px', marginTop:'12px'}}>
        <Typography variant='h6'>Related Videos</Typography>
        <VideoDisplay/>
        </Box>
      
       
        </Box>
     </>
    )
}

export default VideoDetail
