import React from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translate3d(-50px, 0, 0);
    transform: translate3d(-50px, 0, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    -webkit-transform: translate3d(-50px, 0, 0);
    transform: translate3d(-50px, 0, 0);
  }
`;

const SidebarStyles = styled.div`
  background: #ffffff;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 500px;
  z-index: 10;
  overflow-y: auto;
  opacity: 0;
  display: none;
  text-align: left;
  -webkit-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.75);
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const SibebarContainerOpened = styled(SidebarStyles)`
  display: block !important;
  opacity: 1 !important;
  animation: 1s ${fadeIn} ease-out;
`;

const SibebarContainerClosed = styled(SidebarStyles)`
  animation: 1s ${fadeOut} ease-out;
`;

const CloseSidebarIcon = styled.span`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 30px;
  width: 30px;
  cursor: pointer;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.5);
  @media screen and (max-width: 768px) {
    top: 5px;
  }
  &:hover {
    width: 85px;
    color: black;
  }
  > span {
    width: 100px;
    display: inline-block;
    > span {
      top: 7px;
      position: relative;
      font-size: 18px;
      vertical-align: top;
    }
  }
`;

const MenuBio = styled.div`
  width: 50%;
  padding: 50px;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 30px;
  }
`;

const Bio = styled(MenuBio)`
  text-align: center;
  float: left;
  figure {
    text-align: center;
    display: block;
    margin-bottom: 30px;
  }

  img {
    width: 180px;
    margin: 0 auto;
    border-radius: 50%;
  }

  p {
    font-size: 16px;
  }
`;

const CV = styled(MenuBio)`
  float: right;
  ul {
    padding: 0;
    margin: 0;

    li {
      padding: 0;
      margin: 0 0 10px 0;
      list-style: none;
      display: block;

      a {
        color: black;
      }
    }
  }
`;

const Box = styled.div`
  float: left;
  margin-top: 30px;
  width: 100%;
`;

const Sidebar = ({ sidebarOpen, setSidebarOpen, socialList }) => {
  const SidebarContainer = sidebarOpen
    ? SibebarContainerOpened
    : SibebarContainerClosed;
  return (
    <SidebarContainer>
      <CloseSidebarIcon
        onClick={() => {
          setSidebarOpen(false);
        }}
      >
        <span>
          <i className="icon-cross3"></i>
          <span>Close</span>
        </span>
      </CloseSidebarIcon>
      <Bio>
        <figure>
          <img src="dp.png" alt="David Padrino" />
        </figure>
        <h3>About Me</h3>
        <h2>David Padrino</h2>
        <p>
          Full Stack Web developer, Software passionate, astrophysics lover,
          Javascript enthusiast
        </p>
        {socialList()}
      </Bio>
      <CV>
        <Box>
          <ul>
            <li>
              <a href="cv/resume.pdf" target="_blank" rel="noopener noreferrer">
                CV
              </a>
            </li>
          </ul>
        </Box>
      </CV>
    </SidebarContainer>
  );
};

export default Sidebar;
