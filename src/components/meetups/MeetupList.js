import classes from "./MeetupList.module.css";
import MeetupItem from "./MeetupItem";

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meeting) => (
        <MeetupItem
          key={meeting.id}
          id={meeting.id}
          image={meeting.image}
          title={meeting.title}
          address={meeting.address}
          description={meeting.description}
          streamer = {meeting.streamer}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
