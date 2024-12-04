export async function fetchPosts() {
  const response = await fetch(
    "https://react-http-20885-default-rtdb.asia-southeast1.firebasedatabase.app/34-react-summary/posts.json"
  );
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch posts.");
  }

  return resData.posts;
}

export async function fetchPostDetails(id) {
  const response = await fetch(
    `https://react-http-20885-default-rtdb.asia-southeast1.firebasedatabase.app/34-react-summary/posts.json`
  );
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch posts.");
  }

  const result = resData.posts.filter((post) => post.id == id);

  return result;
}

export async function updatePosts(posts) {
  const response = await fetch(
    "https://react-http-20885-default-rtdb.asia-southeast1.firebasedatabase.app/34-react-summary/posts.json",
    {
      method: "PUT",
      body: JSON.stringify({ posts }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to update posts.");
  }

  return resData.message;
}
