import React, { useEffect, useState } from 'react';
import Sidetab from './Sidetab';
import Video from './Video';
import Fetchdata from '../lib/fetchdata';
import { useSelector, useDispatch } from 'react-redux';
import { setVideoData } from '../slice/videoDataSlice';
import Box from '@mui/material/Box';
import { useNavigate, useLocation } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';

function Feed() {
    const { data, searchValue } = useSelector((state) => state.videoData);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const isDesktop = useMediaQuery('(min-width:1024px)');

    useEffect(() => {
        const fetchDataAndDispatch = async () => {
            try {
                const fetchedData = await Fetchdata(`search?q=${searchValue}`);
                dispatch(setVideoData(fetchedData));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchDataAndDispatch();
    }, [searchValue, dispatch]);

    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: "row" }}>
                {isDesktop && <Box><Sidetab /></Box>}
                <Box sx={{ width: '100%' }}>
                    <Video />
                </Box>
            </Box>
        </>
    );
}

export default Feed;
