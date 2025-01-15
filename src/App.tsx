import { useState } from 'react'
import './App.css'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import { v4 as uuidv4 } from 'uuid'

export interface Note {
  id: string;
  title: string;
  content: string;
  modDate: number;
}

function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [activeNote, setActiveNote] = useState<string>('');

  const onAddNote = () => {
    console.log('note added');
    const newNote = {
      id: uuidv4(),
      title: 'タイトル',
      content: 'ノートの内容です',
      modDate: Date.now(),
    };
    setNotes([...notes, newNote]);
    console.log(notes);
  };

  const onDeleteNote = (id: string) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
  };

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };

  interface UpdatedNote {
    id: string;
    title: string;
    content: string;
    modDate: number;
  }

  const onUpdateNote = (updatedNote: UpdatedNote) => {
    const updatedNotesArray = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      } else {
        return note;
      }
    });

    setNotes(updatedNotesArray);
  };

  return (
    <div className='App'>
      <Sidebar onAddNote={onAddNote} notes={notes} onDeleteNote={onDeleteNote} activeNote={activeNote} setActiveNote={setActiveNote} />
      <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
    </div>
  )
}

export default App
