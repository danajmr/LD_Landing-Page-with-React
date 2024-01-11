import React from "react";
import PropTypes from 'prop-types';

// change all this for the jumbotron
const Jumbotron = (props) => {
    return (
    <div className="jumbotron m-5 bg-dark text-light rounded p-4"> 
    <h1 className="display-4">{props.title}</h1>
    <p className= "lead"> {props.description}</p>
    <a className= "btn btn-secondary btn-lg" href={props.buttonURL} role="button">
                {props.buttonLabel}
        </a>
</div>
)}; 

Jumbotron.propTypes = { 
        title: PropTypes.string,
        description: PropTypes.string, 
        buttonURL: PropTypes.string, 
        buttonLabel: PropTypes.string,
}


export default Jumbotron;
