import React from "react";
import classes from "./Status.module.css";

class Status extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };

  toggleEditMode = () => {
    if (this.state.editMode === false) {
      this.setState({
        editMode: true,
      });
    } else {
      this.setState({
        editMode: false,
      });
      this.props.updateStatus(this.state.status);
    }
  };

  onStatusChange = (e) => {
    this.setState({ status: e.currentTarget.value });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }

  render() {
    return (
      <div className={classes.status} role="status">
        <div>
          {!this.state.editMode ? (
            <span
              className={classes.status}
              onDoubleClick={this.toggleEditMode}
            >
              {this.props.status
                ? this.props.status
                : "Привет! Я новый пользователь ВнеКонтакта 👋"}
            </span>
          ) : (
            <div>
              <input
                type="text"
                value={this.state.status}
                onBlur={this.toggleEditMode}
                onChange={this.onStatusChange}
                autoFocus={true}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Status;
