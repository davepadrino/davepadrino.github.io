import React from 'react';
import '../../styles/style.scss';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';

const styles = theme => ({
    paper: {
        width: '90%',
        transform: 'translate(5%, 50px)',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
        outline: 'none',
  },
});

class SimpleModal extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.props.open || false}
          onClose={this.props.handleClose}
        >
          {/* <div style={getModalStyle()} className={classes.paper}> */}
          <div className={classes.paper}>
            <Typography variant="h4" id="modal-title" className="modal-header">
            <button type="button" className="close" onClick={this.props.handleClose}>&times;</button>

              {this.props.project && this.props.project.projectName}
            </Typography>
            <div className="modal-body">
                <div className="row">
                    <div id="lider-positivo-carousel" className="carousel slide col-xs-12 col-md-7" data-ride="carousel">
                        <a className="left carousel-control" href="#lider-positivo-carousel" data-slide="prev">
                            <span className="glyphicon glyphicon-chevron-left"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="right carousel-control" href="#lider-positivo-carousel" data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                    <div className="col-md-5 col-xs-12">
                        <h4>Description</h4>
                        <p>
                            This is another personal project started and finished by me. Made in wordpress, my first experience in task management and
                            playing developer and project mananger roles.
                        </p>
                        <h4>Technologies</h4>
                        <ul>
                            <li>Wordpress</li>
                            <li>Postgres</li>
                        </ul>
                        <h4>Role</h4>
                        Fullstack Developer
                    </div>
                </div>
            </div>
            <SimpleModalWrapped />
          </div>
        </Modal>
      </div>
    );
  }
}


const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;
