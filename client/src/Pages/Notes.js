import React, { useEffect, useState } from 'react'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import NoteCard from '../components/NoteCard'
import Masonry from 'react-masonry-css'
import './Notes.css'

export default function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/notes')
      .then(res => res.json())
      .then(data => setNotes(data))
  }, [])

  const handleDelete = async (id) => {
    await fetch('http://localhost:8000/notes/' + id, {method: 'DELETE'}
    )
    const newNotes = notes.filter(note => note.id != id)
    setNotes(newNotes)
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
        {notes.map(note => (
          <div item key={note.id}>
            <NoteCard note={note} handleDelete = {handleDelete}/>
          </div>
    
        ))}
        </Masonry>
    </Container>
  )
}
