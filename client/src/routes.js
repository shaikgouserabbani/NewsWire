import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Container } from "react-bootstrap";

import Home from "./Components/Home";
import Contact from "./Components/Contact";
import NewNews from "./Components/NewNews";
import EditNews from "./Components/EditNews";
import ShowNews from "./Components/ShowNews";
import NavBar from "./Components/NavBar";
import Toast from "./Components/utils/Toast";
import pageNotFound from "./Components/pageNotFound";


const AppRoute = ()=>{
    return (<BrowserRouter>
                <NavBar/>
                <Toast/>
                <Container>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/news/new" element={<NewNews/>}/>
                    <Route path="/news/:id" element={<ShowNews/>}/>
                    <Route path="/news/:id/edit" element={<EditNews/>}/>
                    <Route path="*" element={<pageNotFound/>}/>
                </Routes>  
                </Container>
            </BrowserRouter>);
};

export default AppRoute;