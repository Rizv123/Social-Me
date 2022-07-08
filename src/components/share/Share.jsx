import"./share.css";
import { PermMedia, Room ,Label , Bookmark ,EmojiEmotions} from "@material-ui/icons"

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareUp">
          <img className="shareProfilePic "src="/collect/person/03.jpg" alt=""/>
          <input 
           placeholder="What's going on Rizvi" 
           className="shareInput"
           />
        </div>
        <hr className="shareHr"/>
        <div className="shareDown">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor="lightcoral" className="shareIcon"/>
              <span className="shareOptionText">Photos </span>
            </div>

            <div className="shareOption">
              <Room htmlColor="green" className="shareIcon"/>
              <span className="shareOptionText">Location</span>
            </div>
             
            <div className="shareOption">
              <Label htmlColor="yellow" className="shareIcon"/>
              <span className="shareOptionText">Tag</span>
            </div>

            <div className="shareOption">
            <Bookmark  htmlColor="grey" className="shareIcon" />
            <span className="shareOptionText">Bookmarks</span>
          </div>


            <div className="shareOption">
              <EmojiEmotions htmlColor="brown" className="shareIcon"/>
              <span className="shareOptionText">Feeling</span>
            </div>

 
          </div>
          <button className="shrbutton">Share</button>
        </div>
      </div>
      
    </div>
  );
}
