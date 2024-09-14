import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTools } from '../store/actions/toolActions';
import ToolCard from '../components/Tools/ToolCard';

function Home() {
  const dispatch = useDispatch();
  const tools = useSelector((state) => state.tools.tools);

  useEffect(() => {
    dispatch(getTools());
  }, [dispatch]);

  return (
    <div className="home-page">
      <h2>Available Tools</h2>
      <div className="tool-list">
        {tools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  );
}

export default Home;
