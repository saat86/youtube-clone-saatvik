import React from 'react'
import { Box, Container,useMediaQuery } from '@mui/material'
import FeedCategory from './FeedCategory'
import VideoDisplay from './VideoDisplay'

function Video() {
    const isDesktop = useMediaQuery('(min-width:1024px)');

    return (

        <>
       
        <Box sx={{ margin: isDesktop ? "72px 0 0 210px" : "72px 0 0 10px" }} >
           <Box>
            <FeedCategory/>
           </Box>
           <Box>
            <VideoDisplay/>
           </Box>
        </Box>
      
        </>
    )
}

export default Video
