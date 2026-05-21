import { useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";

function App() {
  var [userCount, setUserCount] = useState(0);
  var [userName, setUserName] = useState("");
  var [newMessage, setNewMessage] = useState("");
  var [chat, setChat] = useState([]);
  var socket = useRef();
  useEffect(() => {
    var username = prompt("Enter User Name");
    setUserName(username);
    socket.current = io("http://localhost:3500", {
      query: {
        username,
      },
    });
    socket.current.on("liveCountEvent", (msg) => {
      console.log(msg);
      setUserCount(msg.uc);
    });
    socket.current.on("groupMessage", ({ ms, username }) => {
      console.log(ms.msg + " :: " + username);
    });
  }, []);
  function sendMessage() {
    console.log(newMessage);
    socket.current.emit("userMessage", { msg: newMessage });
  }
  return (
    <div className="mybox">
      <h1 className="bg-dark text-info">
        Hi {userName.toUpperCase()}, Welcome to Praveen Gang
      </h1>
      <h2>Live :: {userCount}</h2>
      <hr />
      <input
        type="text"
        onChange={(ev) => {
          setNewMessage(ev.target.value);
        }}
      />
      <button
        onClick={() => {
          sendMessage();
        }}
      >
        Send Message
      </button>
    </div>
  );
}

export default App;
