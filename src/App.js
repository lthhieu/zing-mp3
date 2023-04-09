import { useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Routes, Route } from 'react-router-dom'
import * as  publicContainer from './containers/public'
import * as utils from './utils'

function App() {

  return (
    <div>
      <Routes>
        <Route path={utils.path.PUBLIC} element={<publicContainer.Public />}>
          <Route path={utils.path.HOME} element={<publicContainer.Home />} />
          <Route path={utils.path.LOGIN} element={<publicContainer.Login />} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
