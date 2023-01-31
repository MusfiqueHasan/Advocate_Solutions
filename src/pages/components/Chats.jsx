import { doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../../Firebase/Firebase-config";
import { changeUserForChat } from "../../redux/actions/chatAction";

const Chats = () => {
  const [chats, setChats] = useState([]);

  const { currentUser } = useSelector((state) => state.authentication);
  const dispatch = useDispatch();
  // console.log(currentUser)
  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser?.uid && getChats();
  }, [currentUser?.uid]);

  const handleSelect = (u) => {
    console.log( 'data',
      currentUser.uid > u.uid
        ? currentUser.uid + u.uid
        : u.uid + currentUser.uid
    );
    dispatch(changeUserForChat(u));
  };

  return (
    <div className="chats">
      {Object?.entries(chats)
        ?.sort((a, b) => b[1].date - a[1].date)
        .map((chat) => (
          <div
            className="userChat"
            key={chat[0]}
            onClick={() => handleSelect(chat[1]?.userInfo)}
          >
            <img src={chat[1].userInfo?.photoURL} alt="" />
            <div className="userChatInfo">
              <span>{chat[1].userInfo?.displayName}</span>
              <p>{chat[1].lastMessage?.text}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Chats;
