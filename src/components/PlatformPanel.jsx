import { useSelector } from "react-redux";
import { selectPlatforms } from "../store/platformsSlice";
import { selectPostsByPlatform } from "../store/postsSlice";

function Platform({ platform }) {
  const posts = useSelector((state) => selectPostsByPlatform(state, platform.id));
  return (
    <div className="platform-card">
      <div className="dot" style={{ background: platform.color }} />
      <div>
        <strong>{platform.name}</strong>
        <span>{posts.length} post{posts.length !== 1 ? "s" : ""}</span>
      </div>
    </div>
  );
}

export default function PlatformPanel() {
  const platforms = useSelector(selectPlatforms);
  return (
    <section className="card">
      <div className="card-heading">
        <div>
          <span className="section-kicker">Distribution</span>
          <h2>Platforms</h2>
        </div>
        <span className="platform-count">{platforms.length} active</span>
      </div>
      <div className="platform-grid">
        {platforms.map((platform) => <Platform key={platform.id} platform={platform} />)}
      </div>
    </section>
  );
}