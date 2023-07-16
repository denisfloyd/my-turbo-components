import styled from "styled-components";

export const ContainerButton = styled.button`
  background-color: #a7c8ff;
  color: #000000;
  height: 45px;
  width: 100%;
  border-radius: 5px;
  border: 0;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: #a7c8dd;
  }
`;
