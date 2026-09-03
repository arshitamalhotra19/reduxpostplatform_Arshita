import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, selectAllPosts, updatePost } from "../store/postsSlice";
import { selectPlatforms } from "../store/platformsSlice";

export default function PostList() {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const platforms = useSelector(selectPlatforms);
  const [filter, setFilter] = useState("all");

  const platformMap = useMemo(
    () => Object.fromEntries(platforms.map((p) => [p.id, p.name])),
    [platforms]
  );

  const visiblePosts = useMemo(
    () => filter === "all" ? posts : posts.filter((post) => post.status === filter),
    [posts, filter]
  );

  return (
    <section className="card">
      <div className="section-header">
        <div>
          <span className="section-kicker">Your content</span>
          <h2>Posts</h2>
        </div>
        <span className="post-count">{visiblePosts.length} shown</span>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="published">Published</option>
          <option value="draft">Drafts</option>
        </select>
      </div>

      {visiblePosts.length === 0 ? (
        <p className="muted">No posts match this filter.</p>
      ) : (
        <div className="posts">
          {visiblePosts.map((post) => (
            <article className="post" key={post.id}>
              <div>
                <span className={`badge ${post.status}`}>{post.status}</span>
                <span className="platform">{platformMap[post.platformId] || "Unknown"}</span>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
              </div>
              <div className="actions">
                <button
                  onClick={() =>
                    dispatch(updatePost({
                      id: post.id,
                      changes: { status: post.status === "draft" ? "published" : "draft" }
                    }))
                  }
                >
                  Mark {post.status === "draft" ? "Published" : "Draft"}
                </button>
                <button className="danger" onClick={() => dispatch(deletePost(post.id))}>
                  Delete
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}