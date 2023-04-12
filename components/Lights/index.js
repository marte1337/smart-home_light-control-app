import styled from "styled-components";
import Light from "../Light";

export default function Lights({ rooms }) {
  console.log(rooms);

  return (
    <StyledLights>
      {rooms.map((room) => (
        <li key={room.id}>
          <Light
            name={room.name}
            // isOn={room.isOn}
            // onToggle={() => handleToggle(room.id)}
          />
        </li>
      ))}
    </StyledLights>
  );
}

const StyledLights = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  padding: 0;
  margin: 0;
  justify-content: center;
`;
