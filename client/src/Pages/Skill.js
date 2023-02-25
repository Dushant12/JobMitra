import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container';
import SkillCard from '../components/SkillCard'
import Masonry from 'react-masonry-css'
import './Notes.css'

export default function Notes() {
  const [video, setVideo] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8100/video')
      .then(res => res.json())
      .then(data => setVideo(data))
  }, [])

  const handleDelete = async (id) => {
    await fetch('http://localhost:8000/video/' + id, {method: 'DELETE'}
    )
    const newNotes = video.filter(note => note.id != id)
    setVideo(newNotes)
  }

  const breakpoints = {
    default : 3,
    1100: 2,
    700: 1,
  }
  return (
    {/* {/* <Grid container>
      <Grid item xs = {12} sm = {6}   md = {3}>
      <Paper>1</Paper>
        </Grid>
        <Grid item xs = {12} sm = {6}   md = {3}>
        <Paper>2</Paper>
        </Grid>
        <Grid item xs = {12} sm = {6}   md = {3}>
        <Paper>3</Paper>
        </Grid>
        <Grid item xs = {12} sm = {6}   md = {3}>
        <Paper>4</Paper>
        </Grid> 
        
      </Grid> */},




      <Container style={{marginTop: '10px',marginBottom:'10px'}}>
      <Masonry
      breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {video.map(note => (
          <div item key={note.id}>
            <SkillCard note={note} handleDelete = {handleDelete}/>
          </div>
    
        ))}
        </Masonry>
    </Container>
  )
}
