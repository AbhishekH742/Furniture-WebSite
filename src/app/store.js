import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import activityReducer from "../features/Activity/activity";
export default configureStore({
  reducer: {
    user: userReducer,
    activity: activityReducer,
  },
  //middleware: getDefaultMiddleware({serializableCheck: false,}),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
