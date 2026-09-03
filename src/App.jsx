import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import PlatformPanel from "./components/PlatformPanel";
import Stats from "./components/Stats";

export default function App() {
  return (
    <main className="container">
      <header className="hero">
        <div className="hero-copy">
          <div className="brand-mark">R</div>
          <div>
            <p className="eyebrow">Content operations / Experiment 1.2</p>
            <h1>Make every post <em>count.</em></h1>
            <p className="subtitle">
              A focused workspace for drafting, organizing and publishing content across your social channels.
            </p>
          </div>
        </div>
        <div className="hero-note">
          <span className="pulse" />
          <span>Workspace ready</span>
        </div>
      </header>

      <Stats />

      <div className="layout">
        <PostForm />
        <PlatformPanel />
      </div>

      <PostList />

      <footer>
        Built with React, Redux Toolkit, React-Redux and createSelector.
      </footer>
    </main>
  );
}