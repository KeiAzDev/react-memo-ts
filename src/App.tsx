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

  return (
    <div className='App'>
      <Sidebar onAddNote={onAddNote} notes={notes} />
      <Main />
    </div>
  )
}

export default App
