import "./justFriend.css";

export default function JustFriend({user}) {
  return (
    <li className="sidebarFriend">
     <img className="sidebarFriendImg" src={user.postProfilePic} alt=""/>
     <span className="sidebarFriendName">{user.username}</span>
    </li>
  );
}
