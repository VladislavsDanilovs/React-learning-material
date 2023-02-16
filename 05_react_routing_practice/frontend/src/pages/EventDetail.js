import { useParams } from "react-router-dom";

import React from "react";

/* useParams hook when called in a component function gives us 
access to the currently active route parameters.
So, to the values that are encoded in the URL for our dynamic path segments.  

params.eventId <- eventId here bcs we're used in App.js path 'events/:eventId' 
*/

function EventDetailPage() {
  const params = useParams();

  return (
    <>
      <h1>EventDetailPage</h1>
      <p> Event ID: {params.eventId}</p>
    </>
  );
}

export default EventDetailPage;
