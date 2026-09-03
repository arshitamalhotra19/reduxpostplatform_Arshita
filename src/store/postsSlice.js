import { createSlice, createSelector, nanoid } from "@reduxjs/toolkit";

const initialState = {
  entities: {
    "post-1": {
      id: "post-1",
      title: "Welcome to Redux Toolkit",
      content: "This post demonstrates centralized state management.",
      platformId: "instagram",
      status: "published"
    },
    "post-2": {
      id: "post-2",
      title: "Memoized Selectors",
      content: "Selectors can derive data efficiently without duplicating state.",
      platformId: "linkedin",
      status: "draft"
    },
    "post-3": {
      id: "post-3",
      title: "State Normalization",
      content: "Normalized entities make collection updates predictable and efficient.",
      platformId: "twitter",
      status: "published"
    }
  },
  ids: ["post-1", "post-2", "post-3"],
  selectedPostId: null
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: {
      reducer(state, action) {
        const post = action.payload;
        state.entities[post.id] = post;
        state.ids.push(post.id);
      },
      prepare({ title, content, platformId, status = "draft" }) {
        return {
          payload: {
            id: nanoid(),
            title: title.trim(),
            content: content.trim(),
            platformId,
            status
          }
        };
      }
    },
    updatePost(state, action) {
      const { id, changes } = action.payload;
      if (state.entities[id]) {
        state.entities[id] = { ...state.entities[id], ...changes };
      }
    },
    deletePost(state, action) {
      const id = action.payload;
      delete state.entities[id];
      state.ids = state.ids.filter((postId) => postId !== id);
      if (state.selectedPostId === id) state.selectedPostId = null;
    },
    selectPost(state, action) {
      state.selectedPostId = action.payload;
    }
  }
});

export const { addPost, updatePost, deletePost, selectPost } = postsSlice.actions;

export const selectPostsState = (state) => state.posts;
export const selectPostEntities = (state) => state.posts.entities;
export const selectPostIds = (state) => state.posts.ids;
export const selectSelectedPostId = (state) => state.posts.selectedPostId;

export const selectAllPosts = createSelector(
  [selectPostIds, selectPostEntities],
  (ids, entities) => ids.map((id) => entities[id])
);

export const selectPublishedPosts = createSelector(
  [selectAllPosts],
  (posts) => posts.filter((post) => post.status === "published")
);

export const selectDraftPosts = createSelector(
  [selectAllPosts],
  (posts) => posts.filter((post) => post.status === "draft")
);

export const selectPostsByPlatform = createSelector(
  [selectAllPosts, (_, platformId) => platformId],
  (posts, platformId) => posts.filter((post) => post.platformId === platformId)
);

export default postsSlice.reducer;