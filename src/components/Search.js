import { TextField, IconButton, InputAdornment } from '@mui/material';
import React, { useState } from 'react';
import { Box } from '@mui/material';
import '../App.css';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { useDispatch } from 'react-redux';
import { searchValueInput } from '../slice/videoDataSlice';
import { useLocation, useNavigate } from 'react-router-dom';

function Search() {
 
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const location=useLocation();
    const [data,setData]=useState('');

    const handleOnChange=(event)=>{
        setData(event.target.value)
    }

    const handleSubmit =(event)=>{
        event.preventDefault();
        dispatch(searchValueInput(data));
        setData('');
        if (location.pathname.startsWith('/video/')) {
            navigate("/");
        }
       
    }

    return (
        <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center', marginTop: '10px' }}>
            <form onSubmit={handleSubmit}>
                <TextField
                    className="search-bar"
                    value={data}
                    onChange={handleOnChange}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton type="submit" aria-label="search" edge="end">
                                    <SearchTwoToneIcon />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </form>
        </Box>
    );
}

export default Search;
