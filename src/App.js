import { useState } from "react";
import { nanoid } from 'nanoid';
import NoteList from "./components/NoteList";


const App = () => {
  const [notes, setNotes] = useState([{
    id: nanoid(),
    text: "This is my first note!",
    date: "17/02/2023"
  },
  {
    id: nanoid(),
    text: "This is my second note!",
    date: "17/02/2023"
  },
  {
    id: nanoid(),
    text: "This is my third note!",
    date: "17/02/2023"
  }
]);
  return (
  <div className="container">
    <NoteList notes={notes}/>

  </div>);
};


export default App;