import styled from "styled-components";

export const SectionContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: ${(props) => `url(${props.image})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .reactRevealClass {
    height: 100%;
  }

  .last-section-buttons :first-child {
    background-color: #171a20;
    color: #fff;
    margin-bottom: 30px;
  }

  .buttons-section {
    margin-bottom: 55px;
  }
`;
