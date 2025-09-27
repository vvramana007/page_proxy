// ProxyFetcher.js (React)
import React, { useState } from 'react';

function ProxyFetcher() {
  const [data, setData] = useState('');
  const fetchData = async () => {
    const res = await fetch('/api/proxy?url=https://example.com/api');
    const result = await res.text(); // change to .json() for JSON APIs
    setData(result);
  };

  return (
    <>
      <button onClick={fetchData}>Fetch Data via Proxy</button>
      <pre>{data}</pre>
    </>
  );
}

export default ProxyFetcher;
