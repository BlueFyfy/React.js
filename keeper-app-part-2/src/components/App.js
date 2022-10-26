import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

//console.log(notes);

function App() {
  return (
    <div>
      <Header />
      {notes.map((notesElement) => (
        <Note
          key={notesElement.key}
          id={notesElement.id}
          title={notesElement.title}
          content={notesElement.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
