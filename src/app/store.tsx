import { configureStore } from '@reduxjs/toolkit'
import fileTreeSlice from './features/fileTreeSlice'

export const store = configureStore({
  reducer: {
    tree : fileTreeSlice , 
  },
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch