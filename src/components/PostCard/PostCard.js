import React from "react";
import "./PostCard.css";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ChatBubbleOutlineRoundedIcon from "@material-ui/icons/ChatBubbleOutlineRounded";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import LinkIcon from "@material-ui/icons/Link";

import { IconButton } from "@material-ui/core";
const PostCard = () => {
  return (
    <div className="post__card">
      {/* <div>Hello</div> */}
      <div className="post__header">
        <img
          className="post__avatar"
          alt="Profile"
          src="https://image.flaticon.com/icons/svg/3181/3181949.svg"
        />
        <h3 className="post__username">the__maruff</h3>
        <IconButton>
          <MoreHorizIcon />
        </IconButton>
        {/* avatar */}
        {/* username */}
        {/* right action icon */}
      </div>
      <img
        alt="PostImage"
        className="post__image"
        src="https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2020/02/tallinn-medieval-old-town-estonia-4HUDPCG.jpg"
      />
      <div className="post__iconAction">
        <IconButton>
          <FavoriteBorderIcon />
        </IconButton>
        <IconButton>
          <ChatBubbleOutlineRoundedIcon />
        </IconButton>
        <IconButton>
          <LinkIcon />
        </IconButton>
        <IconButton className="post__actionSaveBtn">
          <BookmarkBorderIcon />
        </IconButton>
      </div>
      <div className="post__like">2001 likes</div>
      <div className="post__caption">
        This is captoon. Arounf 2 lines will be shown here. Dummy text for now
      </div>
      <div className="post__date">JULY 2</div>
      <div className="post__comment">
        <input
          className="post__commentInput"
          placeholder="Add a comment..."
          name="comment"
        />
        <button className="post__commentBtn">Post</button>
      </div>
    </div>
  );
};

export default PostCard;
