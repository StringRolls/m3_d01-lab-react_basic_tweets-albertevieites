import Actions from "./Actions";
import Message from "./Message";
import User from "./User";
import ProfilePic from "./ProfilePic";
import Timestamp from "./Timestamp";

function Tweet({ tweet }) {
  const {
    message,
    timestamp,
    user: { name, image, handle },
  } = tweet;

  return (
    <div className="tweet">
      <ProfilePic image={image} />
      <div className="body">
        <div className="top">
          <User name={name} handle={handle} />
          <Timestamp timestamp={timestamp} />
        </div>

        <div className="bottom">
          <Message message={message} />
          <Actions />
        </div>
      </div>
      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
