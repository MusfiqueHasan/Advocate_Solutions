import React, { useState } from "react";
import Img from "../../assets/images/img.png";
import Attach from "../../assets/images/attach.png";
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "../../Firebase/Firebase-config";
import { useSelector } from "react-redux";

const Input = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);

  // console.log(text)
  const { currentUser } = useSelector((state) => state.authentication);
  const data = useSelector((state) => state.chatData);

  console.log(data)
  const handleSend = async () => {
    try {
      // Check if user is authenticated
      if (!currentUser) {
        alert("You must be signed in to send a message");
        return;
      }

      if (img) {
        const storageRef = ref(storage, uuid());

        const uploadTask = uploadBytesResumable(storageRef, img);

        uploadTask.on(
          (error) => {
            console.log("Error uploading image:", error);
            alert("Error uploading image, please try again");
          },
          async () => {
            try {
              const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
              await updateDoc(doc(db, "chats", data.chatId), {
                messages: arrayUnion({
                  id: uuid(),
                  text,
                  senderId: currentUser.uid,
                  date: Timestamp.now(),
                  img: downloadURL,
                }),
              });
            } catch (error) {
              console.log("Error getting image download URL:", error);
              alert("Error getting image download URL, please try again");
            }
          }
        );
      } else {
        // If no image is selected, update the messages array in the chat document with the text of the message and the sender's ID
        await updateDoc(doc(db, "chats", data.chatId), {
          messages: arrayUnion({
            id: uuid(),
            text,
            senderId: currentUser?.uid,
            date: Timestamp.now(),
          }),
        });
      }

      await updateDoc(doc(db, "userChats", currentUser.uid), {
        [data.chatId + ".lastMessage"]: {
          text,
        },
        [data.chatId + ".date"]: serverTimestamp(),
      });

      await updateDoc(doc(db, "userChats", data.user.uid), {
        [data.chatId + ".lastMessage"]: {
          text,
        },
        [data.chatId + ".date"]: serverTimestamp(),
      });

      // setText("");
      // setImg(null);
    } catch (error) {
      console.log("Error sending message:", error);
      alert("Error sending message, please try again");
    }
  };

  return (
    <div className="input pt-10">
      <input
        type="text"
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <div className="send">
        <img src={Attach} alt="" />
        <input
          type="file"
          style={{ display: "none" }}
          id="file"
          onChange={(e) => setImg(e.target.files[0])}
        />
        <label htmlFor="file">
          <img src={Img} alt="" />
        </label>
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Input;
