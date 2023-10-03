import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Feeds from "./pages/Feeds";
import InputFeeds from "./pages/InputFeeds";
import View from "./pages/View";
import EditFeed from "./pages/EditFeed";
import DeleteFeed from "./pages/DeleteFeed";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Feeds />} />
        <Route path="/input" element={<InputFeeds />} />
        <Route path="/view/:id" element={<View />} />
        {/* <Route path="/edit/:id" element={<EditFeed />} /> */}
        {/* <Route path="/delete/:id" element={<DeleteFeed />} /> */}
      </Routes>
    </Router>
  )
}

export default App