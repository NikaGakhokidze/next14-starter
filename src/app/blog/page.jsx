import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";
import { getPosts } from "@/lib/data";

// FETCH DATA WITH AN API
// const getData = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts", { next: { revalidate: 3600 } }); //refetches every 1 hour. 3600 seconds mean 1 hour
//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }

//   return res.json();
// };

const BlogPage = async () => {
  // const posts = await getData();
  const posts = await getPosts();

  return (
    <div className={styles["container"]}>
      {posts.map((post) => (
        <div className={styles["post"]} key={post?.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
