import styled from "styled-components";

export const Nav = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 55px;
  z-index: 9999;
`;
export const Logo = styled.div`
  padding: 0 0 0 32px;
  width: 16%;
  img {
    width: 120px;
    height: 15px;
  }
`;
export const ProductsMenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 8px;
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 4px;
    transition: color 0.33s ease, background-color 0.33s ease;
    border-radius: 10px;
  }
  li:hover {
    backdrop-filter: blur(16px);
    background-color: hsla(0, 0%, 0%, 0.05);
    transition: color 0.33s ease, background-color 0.33s ease;
  }
  li a {
    font-size: 15px;
    font-weight: 500;
    text-decoration: none;
    color: var(--nav);
    margin: 0 8px;
  }
  @media screen and (max-width: 1100px) {
    display: none;
  }
`;
export const Menu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 32px 0 0;

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 4px;
    transition: color 0.33s ease, background-color 0.33s ease;
    border-radius: 10px;

    font-size: 15px;
    color: var(--nav);
    cursor: pointer;
    font-weight: 500;
  }
  li:hover {
    backdrop-filter: blur(16px);
    background-color: hsla(0, 0%, 0%, 0.05);
    transition: color 0.33s ease, background-color 0.33s ease;
  }
  li a {
    font-size: 15px;
    font-weight: 500;
    text-decoration: none;
    color: var(--nav);
    margin: 0 8px;
  }
  @media screen and (max-width: 1100px) {
    display: none;
  }
`;
export const MobileMenu = styled.div`
  display: none;
  align-items: center;

  button {
    color: var(--nav);
    backdrop-filter: blur(16px);
    background-color: hsla(0, 0%, 0%, 0.05);
    padding: 6px 8px;
    border: none;
    border-radius: 15px;
    cursor: pointer;
  }
  button span {
    font-size: 12px;
    font-weight: 500;
    margin: 0 8px;
  }
  @media screen and (max-width: 1100px) {
    display: flex;
    margin-right: 20px;
  }
`;
export const RightMenu = styled.div`
  position: fixed;
  background-color: white;
  top: 0;
  right: 0;
  bottom: 0;
  width: 260px;
  padding: 24px 32px;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;
  overflow: auto;
  z-index: 9999999;
`;
export const ListMenu = styled.ul`
  li {
    padding: 4px 8px;
    margin-bottom: 14px;
  }
  li a {
    color: var(--main);
    font-size: 14px;
    font-weight:500;
  }
`;
export const RightMenuClose = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 22px;
  padding: 0 0 24px 0;

  svg {
    cursor: pointer;
  }
`;
export const Backdrop = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  left: 0;
  backdrop-filter: blur(4px);
  z-index: 99999;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
`;
export const Wrapper = styled.div``;
