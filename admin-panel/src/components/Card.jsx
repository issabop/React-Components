import React from 'react';

function Card({ title, value, change }) {
  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col mt-0">
            <h5 className="card-title">{title}</h5>
          </div>
        </div>
        <h1 className="mt-1 mb-3">{value}</h1>
        <div className="mb-0">
          <span className="text-success">{change}</span>
          <span className="text-muted"> Since last week</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
