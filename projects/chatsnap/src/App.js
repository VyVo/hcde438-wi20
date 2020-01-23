import React, {useState, useEffect} from 'react'
import './App.css'
// import {db} from './db'
import NamePicker from './namePicker'

function App() {
  const [messages, setMessages] = useState([])
  const [name, setName] = useState('')
  return <main>

    <header>
      <div className="logo-wrap">
        <img className="logo"
          alt="logo"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ca9f2274597569.5c34d66faf8c0.gif" 
        />
        Chatter
      </div>
      <NamePicker onSave={setName} />
    </header>

    <div className="messages">
      {messages.map((m,i)=>{
        return <div key={i} className="message-wrap">
          <div className="message">{m.text}</div>
        </div>
      })}
    </div>

    <TextInput onSend={(text)=> {
      setMessages([text, ...messages])
    }} />
    
  </main>
}


function TextInput(props){
  var [text, setText] = useState('') 
  // normal js comment
  return <div className="text-input-wrap">
    <input 
      value={text} 
      className="text-input"
      placeholder="write your message"
      onChange={e=> setText(e.target.value)}
      onKeyPress={e=> {
        if(e.key==='Enter') {
          if(text) props.onSend(text)
          setText('')
        }
      }}
    />
    <button onClick={()=> {
      if(text) props.onSend(text)
      setText('')
    }} className="button"
      disabled={!text}>
      SEND
    </button>
  </div>
}

export default App


/*
useEffect(()=>{
    db.listen({
      receive: m=> {
        setMessages(current=> [m, ...current])
      },
      remove: id=> {
        setMessages(current=> [...current].filter(m => m.id !== id))
      },
    })
  },[])
*/
