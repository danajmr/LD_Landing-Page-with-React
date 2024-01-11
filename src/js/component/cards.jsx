import React from "react";

const MyCard = () => {
	return (
		<div className="row d-flex justify-content-evenly">
            <div className="card" style={{width: "18rem"}}>
			    <img className="card-img-top" src="https://picsum.photos/id/75/500/325" alt="Card image cap" />
			    <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectutur adipisicing elit. Sapiente esse necessitatibus neque</p>
                    <a href="#" className="btn btn-primary">Find Out More!</a>
			    </div>
		    </div>,

            <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top" src="https://picsum.photos/id/117/500/325" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectutur adipisicing elit. Sapiente esse necessitatibus neque</p>
                    <a href="#" className="btn btn-primary">Find Out More!</a>
                </div>
            </div>,

            <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top" src="https://picsum.photos/id/155/500/325" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectutur adipisicing elit. Sapiente esse necessitatibus neque</p>
                    <a href="#" className="btn btn-primary">Find Out More!</a>
                </div>
            </div>,

            <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top" src="https://picsum.photos/id/164/500/325" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectutur adipisicing elit. Sapiente esse necessitatibus neque</p>
                    <a href="#" className="btn btn-primary">Find Out More!</a>
                </div>
            </div>
        </div>
	)
};

export default MyCard;