import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import LinkIcon from '@mui/icons-material/Link';
import {  makeStyles } from '@mui/styles';
import Avatar from '@mui/material/Avatar';
import { green, pink, blue, deepPurple } from '@mui/material/colors';
const useStyles = makeStyles({
  avatar: {
    backgroundColor: (note) => {
      if (note.category === 'work') {
        return deepPurple[500] + '!important'
      }
      else if (note.category === 'money') {
        return green[500] + '!important'
      }
      else if (note.category === 'todos') {
        return pink[500] + '!important'
      }
      else{
        return blue[500] + '!important'

      }
    },
    padding:'5px',
    cursor:'pointer'
  }
})
    
  
  export default function NoteCard({ note, handleDelete }) {
    const classes = useStyles(note)
  
    return (
      <div>
        <Card elevation={1} className={classes.test}>
          <CardHeader
          avatar = {
            // <Avatar sx={{ bgcolor: deepPurple[500] }}>
            <Avatar className = {classes.avatar}>  
              <a href={note.link} style={{color:'white',textDecoration:'none',margin:'20px'}} target= "blank"><LinkIcon/></a>
            </Avatar>
          }
            title={note.title}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary">
              { note.details }
            </Typography>
          </CardContent>
        </Card>
      </div>
    )
  }
