import "./online.css";
export default function Online({user}) {
  return (
    <li className="rbFriend">
            <div className="rbProPicContainer">
              <img className="rbProPic"src={user.postProfilePic} alt="" />
             <span className="rbOnline"></span>
            </div>
            <span className="rbUserName">{user.username}</span>
          </li>
  );
}
