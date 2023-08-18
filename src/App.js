import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/js/dist/carousel';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { useState } from 'react';
function App() {
  (function() {
    const idleDurationSecs = 9;
    const redirectUrl = 'Redirect Page URL';
    let idleTimeout;

    const resetIdleTimeout = function() {
        if(idleTimeout) clearTimeout(idleTimeout);
        idleTimeout = setTimeout(() => {alert('LOGGED OUT !!!!')}, idleDurationSecs * 1000);
    };
    // console.log("RAN")
	// Key events for reset time
    resetIdleTimeout();
    // window.onmousemove = resetIdleTimeout;
    window.onkeypress = resetIdleTimeout;
    // window.onclick = resetIdleTimeout;
    window.onclick = resetIdleTimeout;
    // window.touchstart = resetIdleTimeout;
    window.onfocus = resetIdleTimeout;
    window.onchange = resetIdleTimeout;
    window.onmouseover = resetIdleTimeout;
    window.onmouseout = resetIdleTimeout;
    window.onmousemove = resetIdleTimeout;
    window.onmousedown = resetIdleTimeout;
    window.onmouseup = resetIdleTimeout;
    window.onkeypress = resetIdleTimeout;
    window.onkeydown = resetIdleTimeout;
    window.onkeyup = resetIdleTimeout;
    window.onsubmit = resetIdleTimeout;
    window.onreset = resetIdleTimeout;
    window.onselect = resetIdleTimeout;
    window.onscroll = resetIdleTimeout;

})();
  return (
    <div className="webpage">
      {/* <h1>{count}</h1> */}
      <Header />

      <Footer />
    </div>
  );
}

export default App;
