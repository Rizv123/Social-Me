import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
  return (
     <>
    <Topbar/>
    <div className="Prof">
       <Sidebar/>
       <div className="ProfR">
       <div className="ProfRUp">
        <div className="ProfCover">
        <img className="ProfCoverPic"src="collect/post/10.jpg" alt="" />
        <img className="ProfUserPic"src="collect/person/03.jpg" alt="" />
       </div>
       <div className="ProfInfo">
        <h4 className="ProfInfoName ">Talat Rizvi</h4> 
         <span className="ProfInfoDes">Let's make some new friends</span>
        </div>
    </div>
       <div className="ProfRDown">
         <Feed/> 
         <Rightbar Profile/> 
       </div>
       </div>
    </div>
    
    </>
  );
}
