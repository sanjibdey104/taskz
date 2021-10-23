import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  position: relative;
  box-shadow: 3px 0 8px rgba(0, 0, 0, 0.3);

  .profile-photo {
    width: 2.75rem;
    height: 2.75rem;
    border-radius: 50%;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2), inset 0 0 3px rgba(0, 0, 0, 0.3);
    padding: 0.3rem;
    position: absolute;
    right: 2rem;

    img {
      width: 100%;
      height: 100%;
      border-radius: inherit;
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <h2 className="logo">Taskz</h2>
      <div className="profile-photo">
        <img
          src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80"
          alt="profile"
        />
      </div>
    </StyledHeader>
  );
};

export default Header;
