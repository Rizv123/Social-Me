import "./post.css";
import {MoreVert} from "@material-ui/icons";
import  {Users} from "../../dummData";
import { useState } from "react";


export default function Post({post}) {
   const [like, setLike] = useState(post.like)
   const [isLiked, setIsLiked] = useState(false)

   const likeHandler=()=>{
     setLike(isLiked ? like-1 : like+1)
     setIsLiked(!isLiked)
   }

  return (
    <div className="post">
        <post className="postWrapper">
            <div className="postUp">
                <div className="postUpLeft">
                <img className="postProfilePic" src={Users.filter((u)=> u.id===post.userId)[0].postProfilePic} alt=""/>
                     <span className="postUserName">{Users.filter((u)=> u.id===post.userId)[0].username}</span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postUpRight">
                    <MoreVert />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.des}</span>
                <img className="postCenterPic" src={post.photo} alt="" />
            </div>
            <div className="postDown">
                <div className="postDownLeft">
                <img className="Icon"src="collect/heart.png" onClick={likeHandler} alt="" />
                <img className="Icon"src="collect/like.png" onClick={likeHandler} alt="" />
                <span className="Counter">{like}</span>
                </div>
                <div className="postDownRight">
                  <span className="postComment">{post.comment}</span>
                </div>
            </div>
        </post>
      
    </div>
  );
}
