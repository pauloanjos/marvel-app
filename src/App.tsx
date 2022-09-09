import React, {useEffect} from 'react';
import {
    useRoutes,
  } from "react-router-dom";
import {Characters }from './pages/Characters';
import Details from './pages/Details/Details';
import { useAppDispatch } from './redux/hooks';
import { getCharactersAsync } from './redux/reducers/charactersSlice';
import { CharacterFormPage } from './pages/CharacterFormPage';
const App = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getCharactersAsync());
      }, [dispatch]);

  let routes = useRoutes([
    { path: "/details/:id", element:  <Details />},
    { path: "/character", element:  <CharacterFormPage />},
    { path: "/", element: <Characters /> },

  ]);
  return routes;
};

export default App;