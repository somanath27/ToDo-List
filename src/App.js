import './App.css';
import React, { useState ,useEffect} from "react";
import CreateArea from './components/CreateArea';
import Footer from './components/Footer';
import Header from './components/Header'; 
import Note from './components/Note';

function App() {

  const [notes,setNotes] = useState([]);
  const [todoCount, setTodoCount] = useState(0);


  let addNote=((newNote)=>
  {
    setNotes(prevNotes=>
      {
        return [...prevNotes,newNote]
      })
      // setTask(prevTask=>
      //   {
      //     return {task:prevTask.task+1}
      //   })
  })

  let deleteNote=((id)=>
  {
    setNotes(prevNotes=>
      {
        return prevNotes.filter((noteItem,Index)=>
        {
          return Index!==id
        });
      });
  })
  useEffect(() => {
    setTodoCount(notes.length);
  }, [notes]);


  return (
    <div className="App">
     <Header task={todoCount}/>
     <CreateArea onAdd={addNote}/>
     {notes.map((noteItem,Index)=>
     {
      return(
        <Note key={Index} id={Index} title={noteItem.title} content={noteItem.content} onDelete={deleteNote}/>
      )
     })}
     <Footer/>
    </div>
  );
}

export default App;
