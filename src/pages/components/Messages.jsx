import { doc, onSnapshot } from "firebase/firestore";
import React, {  useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { db } from "../../Firebase/Firebase-config";
import Message from "./Message";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  // const { data } = useContext(ChatContext);
  const data = useSelector((state) => state.chatData);

  // console.log(data)
  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unSub();
    };
  }, [data.chatId]);

  // console.log(data.chatId)

  return (
    <div className="messages">
      {messages.map((m) => (
        <Message message={m} key={m.id} />
      ))}
    </div>
  );
};

export default Messages;
