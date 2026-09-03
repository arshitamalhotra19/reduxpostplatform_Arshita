import { useSelector } from "react-redux";
import { selectAllPosts, selectDraftPosts, selectPublishedPosts } from "../store/postsSlice";
import { selectPlatforms } from "../store/platformsSlice";

export default function Stats() {
  const all = useSelector(selectAllPosts);
  const published = useSelector(selectPublishedPosts);
  const drafts = useSelector(selectDraftPosts);
  const platforms = useSelector(selectPlatforms);

  return (
    <div className="stats">
      <div className="stat"><span className="stat-label">Total posts</span><strong>{all.length}</strong><span className="stat-detail">Across your workspace</span></div>
      <div className="stat stat-green"><span className="stat-label">Published</span><strong>{published.length}</strong><span className="stat-detail">Live and visible</span></div>
      <div className="stat stat-yellow"><span className="stat-label">Drafts</span><strong>{drafts.length}</strong><span className="stat-detail">Waiting for your voice</span></div>
      <div className="stat stat-blue"><span className="stat-label">Platforms</span><strong>{platforms.length}</strong><span className="stat-detail">Connected channels</span></div>
    </div>
  );
}