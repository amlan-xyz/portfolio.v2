import { FaGithub } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import "./Post.css";
export const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="post__header">
        <div className="user__details">
          <img className="post__user-img" src={post.img} alt="" />
          <p>
            {post.title}
            <small>{post.subTitle}</small>
          </p>
        </div>
        <div className="post__links">
          <a href={post.github}>
            <FaGithub />
          </a>
          <a href={post.live}>
            <IoIosLink className="fill__primary" />
          </a>
        </div>
      </div>

      <div className="post__video">
        <iframe
          className="post__video"
          title={post.title}
          src={post.videoUrl}
        />
      </div>

      <p className="post__details">{post.description}</p>
      <ul className="post__tech">
        {post?.tech.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};
