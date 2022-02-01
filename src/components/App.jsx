import React, { useState } from 'react';
import NavBar from './NavBar';
import ResultCard from './ResultCard';
import ShortenerCard from './ShortenerCard';

const App = () => {
  const [linkResponse, setLinkResponse] = useState(null);

  const onShortenComplete = (data) => {
    setLinkResponse(data);
  };

  return (
    <div className='bg-zinc-50' style={{ minHeight: '100vh' }}>
      <NavBar />
      <ShortenerCard onShortenComplete={onShortenComplete} />
      {linkResponse ? (
        <ResultCard url={'https://links.thitiphon.me/' + linkResponse.linkId} />
      ) : null}
    </div>
  );
};

export default App;
