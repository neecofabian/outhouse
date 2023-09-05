import React from "react";
import Header from "../../Shared/Header";
import "./styles.css";
import { reviews, users, washrooms } from "../../../data.js";
import ReviewContainer from "../Admin/ReviewContainer";
import { getReviews } from "../../../actions/review";
import { getWashroom } from "../../../actions/washroom";
import { getUsers } from "../../../actions/users";
// import { Redirect } from "react-router-dom";

/* Component for the Home page */
class Reviews extends React.Component {
  state = {
    isLoggedIn: true,
    isAdmin: true,
    isReportsPage: true,
    reviews: getReviews(this),
    washroom: getWashroom(this, this.props.match.params.washroom_id),
    users: getUsers(this),
  };

//   constructor(props) {
//     super(props);
//     getWashroom(this, this.props.match.params.washroom_id)
//     getReviews(this)
//     this.props.history.push("/reviews/" + this.props.match.params.washroom_id);
//   }

  render() {
    const { currentUser, app } = this.props;
    console.log("WASHROOM", this.state.washroom)
    console.log("WASHROOM ID", this.props.match.params.washroom_id)

    // if (!currentUser) {
    //   return <Redirect to="/login" />;
    // }

    return (
      <div>
        <Header currentUser={currentUser} app={app} />
        <div className="wrapper">
          <h1>
              {this.state.washroom ? (`All Reviews for ${this.state.washroom.location} -${" "}
            ${this.state.washroom.name} - ${this.state.washroom.gender}`) : "All Reviews for Washroom"}
          </h1>
        </div>
        <div className="reports"></div>
        <div className="latestUpdates">
          {this.state.reviews && this.state.reviews.map((r, i) => {
            if (this.state.washroom && r.washroom === this.state.washroom._id) {
                let user = null;

                this.state.users && this.state.users.forEach((u) => {
                    if (u._id === r.user) {
                        user = u;
                    }
                })
              return (
                <ReviewContainer
                  key={this.state.washroom._id} // TODO needs to be unique
                //   id={r.id}
                  washroomTitle={this.state.washroom ? (`${this.state.washroom.location} - ${this.state.washroom.name} - ${this.state.washroom.gender}`) : ""}
                  username={user ? user.username : ""} // replace with currentUser
                  date={r.date}
                  text={r.content}
                  cleanliness={r.cleanliness}
                  functionality={r.functionality}
                  privacy={r.privacy}
                  likes={r.likes}
                  dislikes={r.dislikes}
                  isAdmin={false}
                />
              );
            }
            return <></>;
        })}
        </div>
      </div>
    );
  }
}

export default Reviews;
