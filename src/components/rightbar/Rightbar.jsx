import "./rightbar.css";
import {Users} from "../../dummData";
import Online from "../online/Online";


export default function Rightbar({Prof}) {

     const HomeRightbar = () => {
      return(  
        <>
          <div className="bdayContainer">
          <img className="bdayPic" src="collect/gift.png" alt="" />
          <span className="bdayText">
            <b>Sanem Qazi</b> and <b>47 other</b> have a birthday today!</span>
        </div>
        <img className="rbAd"src="collect/ad.jpg" alt="" />
        <h4 className="rbTitle">Online Friends</h4>
        <ul className="rbFriendList">
         {Users.map((u)=>(
           <Online key={u.id} user={u}/>
         ))}

        </ul>
         </>
      );
     };
    

     const ProfileRightbar =() =>{
      return (
      <>
       <h4 className="rbTitle">User Info</h4>
       <div className="rbInfo">
        <div className="rbInfoItem">
          <span className="rbInfoKey">City :</span>
          <span className="rbInfoValue">Meerut</span>
        </div>

        <div className="rbInfoItem">
          <span className="rbInfoKey">From :</span>
          <span className="rbInfoValue">India</span>
        </div>

        <div className="rbInfoItem">
          <span className="rbInfoKey">Status :</span>
          <span className="rbInfoValue">Relationship</span>
        </div>  
       </div>
 
       <h4 className="rbTitle">User Friends</h4>
       <div className="rbFollowers">
        <div className="rbFollowing">
          <img className="rbFollowingPic" src="collect/person/10.jpg" alt =""  />
          <span className="rbFollowingName">Akansha Singh</span>
        </div>

        <div className="rbFollowing">
          <img src="collect/person/09.jpg"  alt="" className="rbFollowingPic" />
          <span className="rbFollowingName">Heena saifi</span>
        </div>

        <div className="rbFollowing">
          <img src="collect/person/13.jpg"  alt ="" className="rbFollowingPic" />
          <span className="rbFollowingName">Kiren Verma</span>
        </div>

        <div className="rbFollowing">
          <img src="collect/person/12.jpg"alt ="" className="rbFollowingPic" />
          <span className="rbFollowingName">Rajeev Singh</span>
        </div>

        <div className="rbFollowing">
          <img src="collect/person/11.jpg" alt ="" className="rbFollowingPic" />
          <span className="rbFollowingName">Shreya Jayant</span>
        </div>

        <div className="rbFollowing">
          <img src="collect/person/15.jpg" alt ="" className="rbFollowingPic" />
          <span className="rbFollowingName">Anjali Gautam</span>
        </div>

        <div className="rbFollowing">
          <img src="collect/person/07.jpg" alt ="" className="rbFollowingPic" />
          <span className="rbFollowingName">Anushka </span>
        </div>
        <div className="rbFollowing">
          <img src="collect/person/04.jpg" alt ="" className="rbFollowingPic" />
          <span className="rbFollowingName">Raj Agrawal </span>
        </div>
        <div className="rbFollowing">
          <img src="collect/person/16.jpg" alt ="" className="rbFollowingPic" />
          <span className="rbFollowingName">Guddan Saini </span>
        </div>
       </div>
      </>
      );
  };
   
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        { Prof? < ProfileRightbar/> :<HomeRightbar/>}
      </div>  
    </div>

  );
} 
