//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Header from "./component/navbar.jsx";
import Jumbotron from "./component/home.jsx";
import Footer from "./component/footer.jsx";

//render your react application
ReactDOM.render(<div>  <Header /> <Jumbotron title="A Warm Welcome"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod accumsan tellus. Proin eu vulputate magna. In lacinia semper venenatis. Pellentesque tincidunt finibus eros, vitae pulvinar risus tristique ac. Donec porttitor nec nibh non dapibus. Morbi tempus ex vitae turpis facilisis, nec pretium massa scelerisque. Nulla ultricies varius diam ac sodales. Maecenas lorem enim, imperdiet eget ornare eget, tristique non dui."
        buttonLabel="Start using Bootstrap!"
        buttonURL="https://getbootstrap.com" /> 
        <Footer /></div>, document.querySelector("#app"));

