import GlobalStyle from "../styles";
import { useState } from "react";
import Layout from "../components/Layout";

const initialArray = [
  { id: 1, name: "Living name", isOn: false },
  { id: 2, name: "Kitchen", isOn: false },
  { id: 3, name: "Bedoom", isOn: false },
  { id: 4, name: "Bathoom", isOn: false },
  { id: 5, name: "Garage", isOn: false },
  { id: 6, name: "Porch", isOn: false },
  { id: 7, name: "Garden", isOn: false },
  { id: 8, name: "Office", isOn: false },
];

export default function App({ Component, pageProps }) {
  const [rooms, setRooms] = useState(initialArray);

  function handleToggle(id) {
    setRooms(
      rooms.map((room) =>
        room.id === id ? { ...room, isOn: !room.isOn } : room
      )
    );
  }

  function handleAllOff() {
    setRooms(rooms.map((room) => ({ ...room, isOn: false })));
  }

  function handleAllOn() {
    setRooms(rooms.map((room) => ({ ...room, isOn: true })));
  }

  function checkAllOn() {
    return rooms.every((room) => room.isOn);
  }

  function checkAllOff() {
    return rooms.every((room) => !room.isOn);
  }

  return (
    <Layout isDimmed={checkAllOff()}>
      <GlobalStyle />
      <Component
        {...pageProps}
        rooms={rooms}
        handleToggle={handleToggle}
        handleAllOn={handleAllOn}
        handleAllOff={handleAllOff}
        checkAllOff={checkAllOff}
        checkAllOn={checkAllOn}
      />
    </Layout>
  );
}
