import styled from "styled-components";
export const TextItem = styled.div`
  display: flex;
  align-items: center;

  flex-direction: column;
  padding-top: 16vh;

  h1 {
    width: 250px;
    text-align: center;
    font-size: 40px;
    font-weight: 500;
    padding: 4px 0;
    min-height: 42px;
    color: var(--main);

    opacity: 1;
  }
  h2 {
    font-size: 14px;
    min-height: 25px;
    color: #5c5d61;

    font-weight: 400;
  }
`;
