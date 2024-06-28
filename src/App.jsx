import React from "react";
import { Paper, Divider} from "@mui/material";
import Buttons from "./components/Buttons/Buttons"
import './App.scss';
import Footer from "./components/Footer/Footer";
// import {store} from "./components/Redux/Store"
import Quotes from "./components/Quotes/Quotes";

// console.log(store.getState)


class QuoteBox extends React.Component{

  render() {
    return(
      <div id="copMode">
      <Paper id="quote-box" className ="backdrop-blur-md bg-white/30 ">
        <Quotes/>
        <Divider className="hr"/>
        <Footer/>
      </Paper>
      </div>
    )
  }
}





export default QuoteBox;