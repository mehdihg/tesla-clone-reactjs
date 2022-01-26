import styled from "styled-components";

export const ButtonSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  height: fit-content;
  button {
    width: 256px;
    height: 40px;
    padding: 4px 24px;
    font-size: 13px;
    border-radius: 100rem;
    margin: 5px 10px;

    border: none;
    outline: none;
    cursor: pointer;

    font-weight: bold;

    :first-child {
      background-color: #171a20cc;
      color: #fff;
    }
    :last-child {
      background-color: #ffffffa6;
      color: var(--main);
    }
  }
`;
