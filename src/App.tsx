import { useState } from 'react'
import './App.css'
import Main from './components/Main'
import Sidebar from './components/Sidebar'

export interface Note {
  id: number;
  title: string;
  content: string;
  modDate: number;
}

function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  const onAddNote = () => {
    console.log('note added');
    const newNote = {
      id: 1,
      title: 'タイトル',
      content: 'ノートの内容です',
      modDate: Date.now(),
    };
    setNotes([...notes, newNote]);
    console.log(notes);
  };

  return (
    <div className='App'>
      <Sidebar onAddNote={onAddNote} />
      <Main />
    </div>
  )
}

export default App
