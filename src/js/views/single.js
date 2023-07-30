import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="jumbotron">
			<h1 className="display-4">This will show the demo element: {store.demo[params.theid].title}</h1>

			<hr className="my-4" />

			<div className="container mt-3">
      <div className="card mb-3" style={cardSytle}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" className="img-fluid rounded-start" alt="..."></img>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{contact.name}</h5>
              <p className="card-text">{contact.email}</p>
              <p className="card-text">{contact.phone}</p>
              <p className="card-text">{contact.address}</p>
            </div>
            <div>
              <i className="fas fa-trash-alt"></i>
              <i className="fas fa-pencil-alt"></i>
            </div>
          </div>
        </div>
      </div>
      </div>

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
