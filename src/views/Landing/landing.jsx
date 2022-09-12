import React from "react";

//components
import ResponsiveAppBar from "../../components/Navbar/responsiveAppBar.tsx";

//stylesheet
import './landing.css'

//assets
import me from '../../assets/me-removebg-preview-1@2x.png'
import vector from '../../assets/image@1x.png'

export default function Home() {
  return (
    <div className="landing" >
        <ResponsiveAppBar />
    </div>
  );
}