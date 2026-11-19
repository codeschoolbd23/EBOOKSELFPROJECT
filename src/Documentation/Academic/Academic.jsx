import React from 'react';
import biddaloy from "../../Documentation/components/images/library.jpg";
import { Link } from 'react-router';
const Academic = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-base-100 w-full shadow-sm">
      <figure>
        <img
          src={biddaloy}
          alt="biddaloy" className="w-screen bg-base-100"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Card Title</h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-end">
          <Link className="btn btn-primary" to="/academic">
            Your Class
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Academic;