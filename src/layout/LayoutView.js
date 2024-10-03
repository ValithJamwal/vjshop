import React from "react"
import HeaderView from "../components/layout/HeaderView"
import FooterView from "../components/layout/FooterView"
import { Outlet } from 'react-router-dom';
// import { HelmetData } from "react-helmet-async"

const LayoutView = () => {
  return (
    <div>
        {/* header */}
        <HeaderView />
        {/* body */}
        <Outlet />
        {/* footer */}
        <FooterView />
    </div>
  )
}

export default LayoutView