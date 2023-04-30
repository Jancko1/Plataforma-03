import { useQuery } from "@apollo/client";
import { GET_POST } from "../GraphQL/posts";
import Loading from "./Loading";
import PostCard from "./PostCard";

const PostList = () => {
  

  const { loading, error, data } = useQuery(GET_POST);
 
  if (loading) {
    return <Loading />;
  }
  if (error) {
    <p>Error</p>;
  }
  const reversedPosts = [...data.posts].reverse();
  return (
    
    <div>
      {reversedPosts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
