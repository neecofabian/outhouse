import React from "react";
import Header from "../../Shared/Header";
import "./styles.css";
import Button from "@material-ui/core/Button";
// import { washrooms, reports, users } from "../../../data.js";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { addReport } from "../../../actions/report";
import { getWashroom } from "../../../actions/washroom";

class ReportForm extends React.Component {
  state = {
    isLoggedIn: true,
    isAdmin: true,
    washroom: getWashroom(this, this.props.match.params.washroom_id),
    // user: app.state.currentUser,
    reportTitle: "",
    reportContent: "",
    // app: app,
  };

//   constructor(props) {
//     super(props);
//     this.props.history.push("/reportform");
//   }

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  // Submit report function call:
  // creates a new report for this washroom and adds to data.js
  // report should now show up in other pages of webapp
  submitReport = (washroom, uid) => {
    // const newReport = {
    //   id: reports.length + 1,
    //   title: this.state.reportTitle,
    //   reportContent: this.state.reportContent,
    //   washroom: this.state.washroom,
    //   username: this.state.user.username,
    //   updateTime: JSON.stringify(Date.now()),
    // };
    // reports.push(newReport);
    this.setState({ openReportModal: true });
    // console.log(reports);
    addReport(washroom._id, this.state.reportTitle, this.state.reportContent, uid)
    console.log("Added new report!");
  };

  onCloseSubmitReport = () => {
    this.setState({ openReportModal: false });
  };

  render() {
    const { currentUser, app} = this.props;
    // const container = { washroom: null }
    // getWashroom(container, this.props.match.params.washroom_id)
    // const washroom = container.washroom
    const washroom = this.state.washroom
    // const dummy = {}
    // const washroom = getWashroom(washroom, this.props.match.params.washroom_id)
    // this.setState({ user: currentUser, app: app, washroom: washroom});

    console.log(currentUser);

    return (
      <div>
        <Header currentUser={currentUser} app={app} />
        <div className="reportFormContainer">
          <div className="reportFormTitle">
            <h2>
              Report for <br />
              {washroom ? 
              (washroom.location +
                " - " +
                washroom.name +
                " - " +
                washroom.gender) : ""}
            </h2>
          </div>
          <div className="comments">
            <div className="report-form-section">
              <label className="reportTitleLabel">
                <h3>Title</h3>Get everyone's attention.
              </label>
              <div className="whole-row">
                <input
                  name="reportTitle"
                  className="reportTitleInput"
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="report-form-section">
              <label className="reportDescriptionLabel">
                <h3>Description</h3>Let the world know what's happening in this
                washroom at this very moment.
              </label>
              <div className="whole-row">
                <textarea
                  onChange={this.handleChange}
                  className="reportContentInput"
                  name="reportContent"
                  rows="3"
                />
              </div>
            </div>
          </div>
          <div className="wrapper">
            <Button
              variant="outlined"
              aria-label="submit"
              onClick={() => this.submitReport(washroom, currentUser._id)}
              className="submitReport"
              style={{
                color: "#F2E9E4",
                borderColor: "#F2E9E4",
                borderWidth: "3px",
                borderRadius: "10px",
              }}
            >
              Submit
            </Button>
          </div>
          <Modal
            open={this.state.openReportModal}
            onClose={this.onCloseSubmitReport}
            classNames={{
              overlay: "customOverlay",
              modal: "report-modal",
            }}
          >
            <div className="new-report-message">
              <h3>New Report Added! 👏</h3>
              <Button
                href="/map"
                variant="outlined"
                style={{
                  borderWidth: "2px",
                  borderRadius: 15,
                  borderColor: "#22223B",
                  color: "#22223B",
                }}
              >
                {" "}
                Go Home
              </Button>
            </div>
          </Modal>
        </div>
      </div>
    );
  }
}

export default ReportForm;
