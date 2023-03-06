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
  console.log(data);
  return (
    <div>
      {data.posts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
