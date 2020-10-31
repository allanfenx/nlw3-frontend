import React from "react";
import { Link } from "react-router-dom";

import { FiArrowRight } from "react-icons/fi";
import logoImg from "../images/Logo.svg";

import "../styles/pages/landing.css";



class LandingPage extends React.Component {

    render() {
        return (
            <div id="page-landing">
                <div className="content-wrapper">
                    <img src={logoImg} alt="Happy" />

                    <main>
                        <h1>Leve felicidade para alguém</h1>
                        <p>Visite um orfanato e mude o dia de mas crianças.</p>

                        <div className="location">
                            <strong>Praia Grande</strong>
                            <span>São Paulo</span>
                        </div>

                        <Link to="/app" className="enter-app">
                            <FiArrowRight size={26} color="rgba(0, 0, 0.6)" />
                        </Link>
                    </main>
                </div>
            </div>
        )
    }
}

export default LandingPage;