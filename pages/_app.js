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

  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} rooms={rooms} />
    </Layout>
  );
}
