import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import getSingleRocket from "../api/get-single-rocket";
import Loading from "./Loading";

const SingleRocket = () => {
  const [singleRocket, setSingleRocket] = useState();
  const [isRocket, setIsRocket] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSingleRocket(id);
      //console.log(data);
      setSingleRocket(data);
      setIsRocket(true);
    };
    fetchData();
  }, [id]);

  return (
    <div className="row justify-content-center">
      {isRocket ? (
        <div className="card">
          <div className="row">
            <div className="col-6">
              <img
                className="card-img-top"
                src={singleRocket.flickr_images[0]}
                alt="Single Rocket 1"
                height="300px"
              />
            </div>

            <div className="col-6">
              <img
                className="card-img-top"
                src={singleRocket.flickr_images[1]}
                alt="Single Rocket 2"
                height="300px"
              />
            </div>
          </div>
          <div className="card-body">
            <h4 className="card-text">{singleRocket.name}</h4>
            <p className="card-text">{singleRocket.description}</p>
            <Link to="/rockets">Return to Rockets</Link>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default SingleRocket;
