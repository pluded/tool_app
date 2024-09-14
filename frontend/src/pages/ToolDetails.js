import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ToolDetails() {
  const { id } = useParams();
  const [tool, setTool] = useState(null);

  useEffect(() => {
    axios.get(`/api/tools/${id}`).then((res) => setTool(res.data));
  }, [id]);

  if (!tool) return <div>Loading...</div>;

  return (
    <div className="tool-details-page">
      <h2>{tool.name}</h2>
      <img src={`/uploads/tools/${tool.images[0]}`} alt={tool.name} />
      <p>{tool.description}</p>
      <p>Price: ${tool.price} per day</p>
      {/* Booking and messaging components would go here */}
    </div>
  );
}

export default ToolDetails;
