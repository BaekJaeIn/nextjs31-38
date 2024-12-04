import classes from "./NewPost.module.css";
import uuid from "react-uuid";
import Modal from "../components/Modal";
import { Link, Form, redirect } from "react-router-dom";
import { fetchPosts, updatePosts } from "../http";

export default function NewPost() {
  return (
    <Modal>
      <Form method="put" className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" required rows={3} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="author" required />
        </p>
        <p className={classes.actions}>
          <Link to="/" type="button">
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);
  postData.id = uuid();

  const posts = await fetchPosts();

  await updatePosts([postData, ...posts]);

  return redirect("/");
}
