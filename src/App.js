import { useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Routes, Route } from 'react-router-dom'
import * as  publicContainer from './containers/public'
import { path } from "./utils/path"

function App() {

  return (
    <div>
      <Routes>
        <Route path={path.PUBLIC} element={<publicContainer.Public />}>
          <Route path={path.HOME} element={<publicContainer.Home />} />
          <Route path={path.LOGIN} element={<publicContainer.Login />} />
          <Route path={path.PLAYLIST_TITLE_ID} element={<publicContainer.Playlist />} />
          <Route path={path.ALBUM_TITLE_ID} element={<publicContainer.Playlist />} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
