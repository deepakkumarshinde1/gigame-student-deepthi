import React from 'react';
import { useSearchParams } from 'react-router-dom';

function About() {
    let [searchParams] = useSearchParams();
    
  return <div>About {searchParams.get("text")} {searchParams.get("el")}</div>;
}

export default About