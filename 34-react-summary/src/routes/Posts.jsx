import { Outlet } from "react-router-dom";
import PostsList from "../components/PostsList";
import { fetchPosts } from "../http";

export default function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  );
}

export async function loader() {
  const posts = await fetchPosts();
  return posts;
}
