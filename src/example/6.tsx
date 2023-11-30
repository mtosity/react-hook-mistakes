import { useEffect, useState } from "react";

function ChatRoom() {
  const [message, setMessage] = useState("");

  const createRoom = () => {
    // 🚩 This function is created from scratch on every re-render
    const roomId = Math.random();
    return {
      serverUrl: "url",
      roomId: roomId,
      message: "Welcome to the chat room " + roomId + "!",
    };
  };

  useEffect(() => {
    const room = createRoom(); // It's used inside the Effect
    setMessage(room.message);
  }, [createRoom]); // 🚩 As a result, these dependencies are always different on a re-render

  return <div>{message}</div>;
}

export const Example6 = () => {
  return <ChatRoom />;
};
