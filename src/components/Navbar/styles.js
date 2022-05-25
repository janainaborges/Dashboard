import styled from "styled-components";

export const Container = styled.div`
  width: 28rem;
  height: 100vh;
  background-color: #20deb2;
`;

export const Content = styled.div`
  color: bisque;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Profile = styled.header`
  margin-top: 5rem;
  margin-bottom: 5rem;
  height: 14rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h2 {
    font-weight: 500;
  }
  p {
    font-weight: 300;
  }
`;
export const Image = styled.header`
  background: white;
  height: 9rem;
  width: 9rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Nav = styled.nav`
  ul {
    list-style: none;
    gap: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  li {
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #198c70;
      height: 4rem;
      width: 12rem;
      color: white;
      text-decoration: none;
      transition: all 0.5s;
      &:hover {
        background-color: #789c94;
      }
    }
  }
`;
