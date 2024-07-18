import { Drawer, ListItem, ListItemButton, ListItemIcon, ListItemText,Box,List, Divider } from '@mui/material'
import InboxIcon from '@mui/icons-material/Inbox';
import AddIcon from '@mui/icons-material/Add';
import React, { useState } from 'react'
import Modal from '@mui/material/Modal';
import {Typography,Button,TextField} from '@mui/material';
import { addCategories } from '../slice/videoDataSlice';
import { useDispatch } from 'react-redux';

function Sidetab() {
   const dispatch=useDispatch();

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


  const [open, setOpen] = useState(false);
  const[addCategoryValue,setAddCategoryValue]=useState();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    const sidetextA =['Home', 'Shorts','Subscription',]
const sidetextB =['Your Channel','History','Playlist','Your Videos','Watch Later','Liked Videos']

const handleChangeCategoryValue =(event)=>{
    setAddCategoryValue(event.target.value);
}  
const handleSubmit =(event)=>{
    event.preventDefault();
    dispatch(addCategories(addCategoryValue));
    handleClose();
setAddCategoryValue('');
}

    return (
        <><Drawer  sx={{
            maxwidth: "200px",
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: "200px",
              boxSizing: 'border-box',
            },
          }}    variant="permanent"
          anchor="left">
          <Box sx={{overflow:'auto',marginTop:"70px"}}>
            <List >
                {sidetextA.map((val,index)=>(
                <ListItem  key={val} disablePadding >
                    <ListItemButton sx={{borderRadius:'10px',margin:' 0px 6px'}}>
                    <ListItemIcon>    <InboxIcon /></ListItemIcon>
                    <ListItemText primary={val} className='list-text'/>
                
                    
                    </ListItemButton>

                </ListItem>))}
            </List>
            <Divider/>
            <List >
                {sidetextB.map((val,index)=>(
                <ListItem  key={val} disablePadding >
                    <ListItemButton sx={{borderRadius:'10px' ,margin:'0px 6px'}}>
                    <ListItemIcon>    <InboxIcon /></ListItemIcon>
                    <ListItemText primary={val} className='list-text'/>
                
                    
                    </ListItemButton>

                </ListItem>))}
            </List>
            <Divider/>
            <List>
                <ListItem disablePadding>
                    <ListItemButton sx={{borderRadius:'10px' ,margin:'0px 6px'}} onClick={handleOpen}>
                    <ListItemIcon>    <AddIcon/></ListItemIcon>
                    <ListItemText primary='Add Category' className='list-text'/>


                    </ListItemButton>
                    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
                    Add New Category
                  </Typography>
                  <form onSubmit={handleSubmit}>
                    <TextField
                      fullWidth
                      label="Category Name"
                      value={addCategoryValue}
                      onChange={handleChangeCategoryValue}

                      margin="normal"
                    />
                    <Button type="submit" variant="contained" color="primary">
                      Add
                    </Button>
                  </form>
        </Box>
      </Modal>
                </ListItem>
            </List>
          </Box>

        </Drawer></>
    
    )
}

export default Sidetab
