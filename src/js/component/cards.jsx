import React from "react";

const MyCard = () => {
	return (
		<div className="row d-flex justify-content-evenly">
            <div className="card m-0 p-0" style={{width: "18rem"}}>
			    <img className="card-img-top" src="https://picsum.photos/id/75/500/325" alt="Card image cap" />
			    <div className="card-body">
                    <h5 className="card-title">Achieve Grapeness</h5>
                    <p className="card-text">Like grapes on the vine, life's true essence is found in the sweetness of shared moments, the richness of experiences, and the joy of ripening with time.</p>
			    </div>
                <div className="card-footer"><a href="https://www.worldsbestvineyards.com/list/1-50" className="btn btn-primary bg-dark text-light rounded ">Find Out More!</a>
                </div>
		    </div>,

            <div className="card m-0 p-0" style={{width: "18rem"}}>
                <img className="card-img-top" src="https://picsum.photos/id/117/500/325" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Keep Calm & Rock On</h5>
                    <p className="card-text">Trying new experiences is like playing a game of 'Life Roulette.' You never know if you'll land on 'Adventurous Excitement' or 'Hilarious Misadventure,' but either way, you're in for a wild ride!</p>
                </div>
                <div className="card-footer"><a href="https://vinylmusichall.com/" className="btn btn-primary bg-dark text-light rounded ">Find Out More!</a>
                </div>
            </div>,

            <div className="card m-0 p-0" style={{width: "18rem"}}>
                <img className="card-img-top" src="https://picsum.photos/id/155/500/325" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Classicaly Trained</h5>
                    <p className="card-text">Train tracks, the straightest path to nowhere, proving that even life's most direct routes can lead you to unexpected destinations.</p>
                </div>
                <div className="card-footer"><a href="https://www.universalorlando.com/web/en/us/things-to-do/rides-attractions/hogwarts-express-hogsmeade-station" className="btn btn-primary bg-dark text-light rounded ">Find Out More!</a>
                </div>
            </div>,

            <div className="card m-0 p-0" style={{width: "18rem"}}>
                <img className="card-img-top" src="https://picsum.photos/id/164/500/325" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Roam Sweet Roam</h5>
                    <p className="card-text">Travel is the compass of the soul, guiding us to the uncharted territories of adventure and self-discovery, one destination at a time.</p>
                </div>
                <div className="card-footer"><a href="https://www.travelandleisure.com/travel-guide/venice" className="btn btn-primary bg-dark text-light rounded ">Find Out More!</a>
                </div>
            </div>
        </div>
	)
};

export default MyCard;