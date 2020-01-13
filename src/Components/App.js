import React from 'react';
import GlobalSytles from "../Sytles/GlobalSytles"
import {ThemeProvider} from "styled-components";
import Theme from "../Sytles/Theme";
import Router from "./Router";

export default () => (
  <ThemeProvider theme={Theme}>
    <>
      <GlobalSytles />
      <Router isLoggedIn={false} />
    </>
  </ThemeProvider>
);
