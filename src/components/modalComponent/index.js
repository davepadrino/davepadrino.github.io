import React from 'react';
import Modal from '@material-ui/core/Modal';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import SwipeableTextMobileStepper from '../carouselComponent';

import '../../styles/style.scss';

const styles = theme => ({
    paper: {
        width: '90%',
        transform: 'translate(5%, 50px)',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: '15px',
        outline: 'none',
  },
});


class SimpleModal extends React.Component {
    constructor() {
        super();
        this.state = {
            project: null,
            images: []
        }
      }

    componentDidMount = () => {
       if (this.props.project) {
           this.setState({project: this.props.project});
       }                    
    }
    
    render() {
        return (
            <div>
            {this.state.project &&
                <Modal
                    aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={this.props.open || false}
                onClose={this.props.handleClose}
                >
                    <div className={this.props.classes.paper}>
                        <Typography variant="h4" id="modal-title" className="modal-header">
                            <button type="button" 
                                className="close"
                                onClick={this.props.handleClose}>
                                &times;
                            </button>
                            {this.state.project.projectName}
                        </Typography>
                        <div className="modal-body">
                            <div className="row">
                                <div className="carousel slide col-xs-12 col-md-7">
                                    <SwipeableTextMobileStepper tutorialSteps={this.state.project.images}/>
                                </div>
                                <div className="col-md-5 col-xs-12">
                                <h4>Description</h4>
                                <p>
                                    {this.state.project.description}
                                </p>
                                <h4>Technologies</h4>
                                <ul>
                                    {this.state.project.technologies.split(',')
                                        .map(el => <li key={el}>{el}</li>)}
                                </ul>
                                <h4>Role</h4>
                                {this.state.project.role}
                                </div>
                            </div>
                        </div>
                        <SimpleModalWrapped />
                    </div>
                </Modal>
            }
            </div>
        );
  }
}


const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;
