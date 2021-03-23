import React from "react"
import "./layout.css"
import { GlobalStyle } from "../styles/GlobalStyles";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <Footer />

    </>
  )
}

export default Layout
