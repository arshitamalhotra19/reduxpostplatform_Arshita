import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../store/postsSlice";
import { selectPlatforms } from "../store/platformsSlice";

export default function PostForm() {
  const dispatch = useDispatch();
  const platforms = useSelector(selectPlatforms);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [platformId, setPlatformId] = useState(platforms[0]?.id || "");
  const [status, setStatus] = useState("draft");

  const submit = (event) => {
    event.preventDefault();
    if (!title.trim() || !content.trim() || !platformId) return;
    dispatch(addPost({ title, content, platformId, status }));
    setTitle("");
    setContent("");
    setStatus("draft");
  };

  return (
    <form className="card form" onSubmit={submit}>
      <div className="card-heading">
        <div>
          <span className="section-kicker">Start writing</span>
          <h2>New post</h2>
        </div>
        <span className="pencil-icon">+</span>
      </div>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Post title"
        aria-label="Post title"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Post content"
        rows="4"
        aria-label="Post content"
      />
      <div className="row">
        <select value={platformId} onChange={(e) => setPlatformId(e.target.value)}>
          {platforms.map((platform) => (
            <option key={platform.id} value={platform.id}>{platform.name}</option>
          ))}
        </select>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="draft">Draft</option>
          <option value="published">Published</option>
        </select>
      </div>
      <button className="primary-action" type="submit">Add post <span>→</span></button>
    </form>
  );
}