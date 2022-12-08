import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { URLMAP } from './data/Const'
import ManageTournamentsView from './views/ManageTournamentsView/ManageTournamentsView'
import HomepageView from './views/HomepageView/HomepageView'

function App(): JSX.Element {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={URLMAP.HOME} element={<HomepageView />}></Route>
          <Route
            path={URLMAP.MANAGE_TOURNAMENTS}
            element={<ManageTournamentsView />}
          ></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
