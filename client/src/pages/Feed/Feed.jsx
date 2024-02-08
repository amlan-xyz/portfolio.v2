import { Post } from "../../components/Post/Post";
import { feedData } from "../../data/feedData";
import "./Feed.css";

export const Feed = () => {
  return (
    <div className="feed container">
      <ul className="feed__ul">
        {feedData?.map((post) => (
          <li className="feed__li">
            <Post post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
};
