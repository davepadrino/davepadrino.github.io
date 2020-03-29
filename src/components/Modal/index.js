import React from "react";
import Modal from "@material-ui/core/Modal";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

import SwipeableTextMobileStepper from "../Carousel";

const Paper = styled.div`
  width: 90%;
  transform: translate(5%, 50px);
  background-color: #fff;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);
  padding: 15px;
  outline: none;
`;

const ModalTitle = styled(Typography)`
  padding: 15px;
  border-bottom: 1px solid #e5e5e5;
  & > button {
    -webkit-appearance: none;
    padding: 0;
    cursor: pointer;
    background: 0 0;
    border: 0;
    outline: none;
    float: right;
    line-height: 1;
    color: #000;
    opacity: 0.2;
  }
  & > button:hover {
    color: #000;
    text-decoration: none;
    cursor: pointer;
    opacity: 0.5;
  }
`;

const ModalBody = styled.div`
  position: relative;
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
`;

const ProjectSummary = styled.div`
  flex-grow: 1;
`;

const CarouselSlide = styled(ProjectSummary)`
  position: relative;
`;

const SimpleModal = ({ project, open, handleClose }) => (
  <React.Fragment>
    {project && (
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open || false}
        onClose={handleClose}
      >
        <Paper>
          <ModalTitle variant="h4" id="modal-title">
            <button type="button" onClick={handleClose}>
              &times;
            </button>
            {project.projectName}
          </ModalTitle>
          <ModalBody>
            <CarouselSlide>
              <SwipeableTextMobileStepper tutorialSteps={project.images} />
            </CarouselSlide>
            <ProjectSummary>
              <h4>Description</h4>
              <p>{project.description}</p>
              <h4>Technologies</h4>
              <ul>
                {project.technologies.split(",").map(el => (
                  <li key={el}>{el}</li>
                ))}
              </ul>
              <h4>Role</h4>
              {project.role}
            </ProjectSummary>
          </ModalBody>
          <SimpleModal />
        </Paper>
      </Modal>
    )}
  </React.Fragment>
);

export default SimpleModal;
