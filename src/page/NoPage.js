import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const history = useNavigate();
const goHomepage = () => {
    history('/ecommerce/home')
}
return(
    <>
    <div className="fade-in-bottom-to-top" style={{height : '90vh', width: '100%', fontSize : '180px', display: 'flex' ,
  justifyContent: 'center', alignItems : 'center' , fontWeight : '600' , textTransform : 'capitalize'}}>
        <p>4<span style={{ color : 'red'}}>0</span>4 Not Found</p>
    </div>
        {/* <a className="btn btn-block submit-button" style={{fontSize : '25px'}} onClick={goHomepage}>Home Page</a> */}
        <a href="#" id="view_btn" style={{width: '50%  !important'}} className="btn btn-block" onClick={goHomepage}>Home Page</a>    </>
)
};

export default NotFound;