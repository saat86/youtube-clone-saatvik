import React from "react";
import Search from "./Search";
import { Box, Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import videoDataSlice, { searchValueInput } from "../slice/videoDataSlice";

function FeedCategory() {
  const { categories } = useSelector((state) => state.videoData);
  const {searchValue} =useSelector(state=>state.videoData);
  const dispatch =useDispatch();

  return (
    <>
      <Search />
      <Box sx={{ display: "flex", overflowX: "auto", marginTop: "10px" }}>
        {categories.map((category,index)=>(
            <Box>
          <Button
          key={index}
          onClick={()=>dispatch(searchValueInput(category))}
            sx={{
              borderRadius: "14px",
              padding: "4px 10px",
              color: "#419705",
              marginRight: "8px",
              minWidth:'0px'
            }}
            variant="outlined"
          >
            {category}
          </Button>
        </Box>
        
        ))}
      </Box>
      <Typography sx={{marginTop:'10px'}} variant="h6">{`Showing Results For - ${searchValue}`}</Typography>
    </>
  );
}

export default FeedCategory;
