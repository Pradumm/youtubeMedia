
import React from 'react'

import Header from './component/Header'

import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'
import Home from './component/Home';
import VideoContener from './component/VideoContener';
import { Provider } from 'react-redux';
import Store from "./Redux/Store"
import WatchPage from './component/WatchPage';
import SearchVideos from './component/SearchVideos';



const App = () => {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<VideoContener />} />
            <Route path="/result" element={<SearchVideos />} />
            <Route path="/watch/:id" element={<WatchPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
