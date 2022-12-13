import { configureStore } from '@reduxjs/toolkit'
import detailsSlice from '../Components/details'

export default configureStore({
  reducer: {
    details:detailsSlice,
  },
})