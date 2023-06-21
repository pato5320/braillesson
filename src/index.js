import  ReactDOM from "react-dom/client";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Trainer from "./pages/Trainer";
import Nopage from "./pages/NoPage";
import Layout from "./pages/Layout";

export default function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout></Layout>}>
                    <Route index element={<Home></Home>}></Route>
                    <Route path="contact" element={<Contact></Contact>}></Route>
                    <Route path="trainer" element={<Trainer></Trainer>}></Route>
                    <Route path="*" element={<Nopage></Nopage>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App></App>)