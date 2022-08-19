import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect, setState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Blog from './Blog';
import Pricing from './Pricing';
import Contact from './Contact';
import FAQ from './Faq';
import Terms from './Terms';
import Policy from './Policy';
import Header from './component/Header'
import Footer from './component/Footer';
// import PurchaseForm from './page1/PurchaseForm';
// import PaymentPage from './page1/PaymentPage';
import Purchase_Form from './page1/Purchase_Form';
import Payment_Page from './page1/PaymentPage';
import SignIn from './page1/SignIn';

function App() {


  // useEffect(() => {
  //   console.log = function () { }
  //   console.log("hha")
  // }, [0])


  return (
    <>
      <Router>


        <Header />



        <Switch>
          <Route exact path="/">  <Home /> </Route>

          <Route exact path="/about">  <About /> </Route>

          <Route exact path="/blog">  <Blog /> </Route>

          <Route exact path="/contact">  <Contact /> </Route>

          <Route exact path="/pricing">  <Pricing /> </Route>

          <Route exact path="/faq">  <FAQ /> </Route>

          <Route exact path="/terms">  <Terms /> </Route>

          <Route exact path="/policy">  <Policy /> </Route>

          <Route exact path="/Purchase_Form">  <Purchase_Form /> </Route>

          <Route exact path="/Payment_Page">  <Payment_Page /> </Route>

          <Route exact path="/sign_in">  <SignIn /> </Route>

          {/* <Route exact path="/purchaseForm">  <PurchaseForm /> </Route> */}

          {/* <Route exact path="/PaymentPage"><PaymentPage /></Route> */}
        </Switch>




      </Router>

    </>



  );
}

export default App;
