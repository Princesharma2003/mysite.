import React, { useState } from "react";
import "./menupage.css"
import logo1 from './burger.jpeg';
import logo from './logo.svg';
import logo2 from './fries.jpeg';
import logo3 from './coke.jpeg';


const Menupage = () => {
    const [pluss, setPluss] = useState(0);
    const [plusstwo, setPlusstwo] = useState(0);
    const [plussthree, setPlussthree] = useState(0);
    // For one 
    const plushand = () => {
        setPluss(pluss + 1)
    }
    const minushand = () => {
        if (pluss > 0) { setPluss(pluss - 1) }
        else (setPluss(0));
    }

    // For two 
    const plushandtwo = () => {
        setPlusstwo(plusstwo + 1)
    }
    const minushandtwo = () => {
        if (plusstwo > 0) { setPlusstwo(plusstwo - 1) }
        else (setPlusstwo(0));
    }

    // For three
    const plushandthree = () => {
        setPlussthree(plussthree + 1)
    }
    const minushandthree = () => {
        if (plussthree > 0) { setPlussthree(plussthree - 1) }
        else (setPlussthree(0));
    }

    const hiddenhand = () => {
        let hiddenn = document.getElementById("demoe")
        hiddenn.style.display = "block"
    }


    return (
        <>

            <header className="headersecc">
                <div style={{ display: "flex" }}>
                    <img src={logo} alt="logo" className="logo logotext" />
                    <h2 className="center logotext">Food's Restorent</h2></div>
                <div> <h4 className="cartstyon" onClick={hiddenhand} > Cart <span className="cartsty">{pluss + plusstwo + plussthree}</span> </h4> </div>
            </header>


            <div className="contenthead">
                <div className="childcontenct">

                    <div className="card">

                        <img src={logo1} alt="logo" className="imgdegin" />
                        <h2>Hamburger</h2>

                        <h4>Price $ <span>200</span> </h4>
                        <h4>Total : {pluss}</h4>
                        <h4>Price : $ {pluss * 200}</h4>
                        <button className="btnstyleplus" onClick={plushand}> + </button>
                        <button className="btnstyleminus" onClick={minushand} > - </button>
                    </div>


                    <div className="card">

                        <img src={logo2} alt="logo" className="imgdegin" />
                        <h2>Fries</h2>

                        <h4>Price $ <span>100</span> </h4>
                        <h4>Total : {plusstwo}</h4>
                        <h4>Price : $ {plusstwo * 100}</h4>
                        <button className="btnstyleplus" onClick={plushandtwo}> + </button>
                        <button className="btnstyleminus" onClick={minushandtwo} > - </button>
                    </div>

                    <div className="card">

                        <img src={logo3} alt="logo" className="imgdegin" />
                        <h2>Coke</h2>

                        <h4>Price $ <span>50</span> </h4>
                        <h4>Total : {plussthree}</h4>
                        <h4>Price : $ {plussthree * 50}</h4>
                        <button className="btnstyleplus" onClick={plushandthree}> + </button>
                        <button className="btnstyleminus" onClick={minushandthree} > - </button>
                    </div>
   


                </div>
            </div>
            <div className="displynone" id="demoe">  <h1>Order Summry</h1> <h3>Total item: <span>{pluss + plusstwo + plussthree}</span> </h3> 
            <h3>Total Amount : {plussthree * 50 + plusstwo * 100 + pluss * 200}  </h3> </div>

        </>


    );


}
export default Menupage;
