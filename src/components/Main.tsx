import '../styles/Main.css'
import { Note } from '../App'

interface MainProps {
  activeNote: Note | undefined;
}

const Main: React.FC<MainProps> = ({activeNote}) => {
  const onEditNote = () => {
    
  }
  if(!activeNote) return <div className='no-active-note'>ノートを選択してください</div>
  return (
    <div className='app-main'>
      <div className="app-main-note-edit">
        <input type="text" value={activeNote.title} onChange={(e) => onEditNote('title', e.target.value)} />
        <textarea id="" placeholder='ノート内容を記入' value={activeNote.content} onChange={(e) => onEditNote('content', e.target.value)}></textarea>
      </div>
      <div className="app-main-note-preview">
        <h1 className='preview-title'>{activeNote?.title}</h1>
        <div className="markdown-preview">{activeNote?.content}</div>
      </div>
    </div>
  )
}

export default Main