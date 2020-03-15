import React from "react";
import Modal from "@material-ui/core/Modal";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

import SwipeableTextMobileStepper from "../carouselComponent";

const Paper = styled.div`
  width: 90%;
  transform: translate(5%, 50px);
  background-color: #fff;
  box-shadow: "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)";
  padding: 15px;
  outline: "none";
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
          <Typography variant="h4" id="modal-title" className="modal-header">
            <button type="button" className="close" onClick={handleClose}>
              &times;
            </button>
            {project.projectName}
          </Typography>
          <div className="modal-body">
            <div className="row">
              <div className="carousel slide col-xs-12 col-md-7">
                <SwipeableTextMobileStepper tutorialSteps={project.images} />
              </div>
              <div className="col-md-5 col-xs-12">
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
              </div>
            </div>
          </div>
          <SimpleModal />
        </Paper>
      </Modal>
    )}
  </React.Fragment>
);

export default SimpleModal;
