import React from 'react';
import { Link } from 'react-router-dom';

function ToolCard({ tool }) {
  return (
    <div className="tool-card">
      <img src={`/uploads/tools/${tool.images[0]}`} alt={tool.name} />
      <h3>{tool.name}</h3>
      <p>{tool.description.substring(0, 100)}...</p>
      <p>Price: ${tool.price} per day</p>
      <Link to={`/tools/${tool.id}`}>View Details</Link>
    </div>
  );
}

export default ToolCard;
