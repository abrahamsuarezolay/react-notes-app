import Note from './Note'
import AddNote from './AddNote';

const NoteList= ({notes, handdleAddNote}) => {
    return(
        <div className="notes-list">
            {notes.map((note)=> 
                <Note id={note.id} text={note.text} date={note.date}/>
            )}
            <AddNote handdleAddNote={handdleAddNote}/>
        </div>
    )
}

export default NoteList;