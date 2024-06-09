import { useState } from "react";
import Layout from "./components/Layout";
import About from "./components/About";
import Why from "./components/Why";

function App() {
  return (
    <>
      <Layout>
        <About />
        <Why />
      </Layout>
    </>
  );
}

export default App;
