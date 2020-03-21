import React, { useState } from "react";
import PropTypes from "prop-types";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import styled from "styled-components";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Container = styled.div`
  max-width: 400px;
  flex-grow: 1;
`;

const CarouselImage = styled.img`
  height: 255px;
  display: block;
  max-width: 400px;
  overflow: hidden;
  width: 100%;
`;

const SwipeableTextMobileStepper = ({ tutorialSteps }) => {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => setActiveStep(activeStep + 1);
  const handleBack = () => setActiveStep(activeStep - 1);
  const handleStepChange = activeStep => setActiveStep(activeStep);

  return (
    <Container>
      <AutoPlaySwipeableViews
        axis={"x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={index}>
            {Math.abs(activeStep - index) <= 2 ? (
              <CarouselImage src={step} alt={index} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            <KeyboardArrowLeft />
            Back
          </Button>
        }
      />
    </Container>
  );
};

SwipeableTextMobileStepper.propTypes = {
  tutorialSteps: PropTypes.arrayOf(PropTypes.string)
};

export default SwipeableTextMobileStepper;
