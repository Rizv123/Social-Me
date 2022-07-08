import "./sidebar.css";
 import {  RssFeed,Chat, PlayCircleFilledOutlined,Group, Bookmark,
           MusicNote, HelpOutline,WorkOutline,Event, School,
 } from "@material-ui/icons"
 import {Users} from "../../dummData";
 import JustFriend from "../justFriend/JustFriend";

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
           <ul className="sbList">
            <li className="sbListItem">
              <RssFeed className="sbIcon"/>
              <span className="sbListItemText">Feed</span>
            </li>

            <li className="sbListItem">
            <Chat className="sbIcon" />
            <span className="sbListItemText">Chats</span>
          </li>

          <li className="sbListItem">
            <PlayCircleFilledOutlined className="sbIcon" />
            <span className="sbListItemText">Videos</span>
          </li>

            <li className="sbListItem">
            <Group className="sbIcon" />
            <span className="sbListItemText">Groups</span>
          </li>


          <li className="sbListItem">
            <MusicNote className="sbIcon" />
            <span className="sbListItemText">MusicNote</span>
          </li>

          <li className="sbListItem">
            <HelpOutline className="sbIcon" />
            <span className="sbListItemText">Questions</span>
          </li>
            
          <li className="sbListItem">
            <WorkOutline className="sbIcon" />
            <span className="sbListItemText">Jobs</span>
          </li>
          <li className="sbListItem">
            <Event className="sbIcon" />
            <span className="sbListItemText">Events</span>
          </li>
          <li className="sbListItem">
            <School className="sbIcon" />
            <span className="sbListItemText">Courses</span>
          </li>
          </ul>

           <button className="Button">Show More</button>
           <hr className="sbHr" />
            <ul className="sbFriendList">
              {Users.map(u=>(
                <JustFriend key={u.id}  user={u}/>
              ))}
           </ul>
        </div> 
    </div>
  );
}
