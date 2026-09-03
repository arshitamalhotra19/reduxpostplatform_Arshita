# Redux Toolkit State Management – Final Experiment

This project combines the implementation requirements of:

- **Experiment 1.2.1:** Centralized state management using Redux Toolkit.
- **Experiment 1.2.2:** Optimized state access using selectors and memoized selectors (`createSelector`).

## Included concepts

- Redux Toolkit store configuration
- React-Redux `<Provider>`
- Normalized state using `entities` + `ids`
- Separate `posts` and `platforms` slices
- CRUD operations for posts
- Derived state
- Memoized selectors using `createSelector`
- Platform-specific post selectors
- Efficient component-level state access
- Responsive React UI

## Folder structure

```text
Redux_Post_Platform_Experiments/
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── styles.css
    ├── components/
    │   ├── PlatformPanel.jsx
    │   ├── PostForm.jsx
    │   ├── PostList.jsx
    │   └── Stats.jsx
    └── store/
        ├── platformsSlice.js
        ├── postsSlice.js
        └── store.js
```

## Requirements

Install these before running:

- Node.js (LTS recommended)
- npm
- VS Code

Check installation:

```bash
node -v
npm -v
```

## How to run in VS Code

### 1. Extract the ZIP

Extract `Redux_Post_Platform_Experiments.zip`.

### 2. Open the project

In VS Code:

```text
File → Open Folder → Redux_Post_Platform_Experiments
```

Or from a terminal:

```bash
cd path/to/Redux_Post_Platform_Experiments
code .
```

### 3. Install dependencies

Open the VS Code terminal:

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Vite will display a local address, normally similar to:

```text
http://localhost:5173/
```

Open that address in your browser.

### 5. Create a production build (optional)

```bash
npm run build
```

### 6. Preview the production build (optional)

```bash
npm run preview
```

## Experiment mapping

### Experiment 1.2.1 – Centralized State Management

Implemented through:

- `src/store/store.js`
- `src/store/postsSlice.js`
- `src/store/platformsSlice.js`
- `Provider` in `src/main.jsx`
- `useSelector` and `useDispatch` in components
- Add, update and delete post operations

### Experiment 1.2.2 – Memoized Selectors and Performance

Implemented through:

- `createSelector` in `postsSlice.js`
- `selectAllPosts`
- `selectPublishedPosts`
- `selectDraftPosts`
- `selectPostsByPlatform`
- `useMemo` in `PostList.jsx`
- `useMemo` for the platform lookup map
- Components subscribe only to the state they need

## Expected output

The application provides:

1. Dashboard statistics
2. Add Post form
3. Draft/Published selection
4. Platform selection
5. Post list
6. Filtering by post status
7. Toggle draft/published state
8. Delete posts
9. Platform-wise post counts
10. Normalized Redux state and memoized selectors

## Notes

The project intentionally uses Redux Toolkit's built-in `createSelector`, so a separate `reselect` dependency is not required. Redux Toolkit already provides the selector utility through its package.

No backend or external API is required. Initial data is mock data stored in the Redux store, making the experiment runnable immediately after `npm install`.
