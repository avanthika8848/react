import React, { useEffect } from 'react';
function OnMount() {
    useEffect(() => {
        console.log("Component mounted!");
    }, []);  // empty dependency array 
    return <  h2  >  Runs only once when mounted!  </  h2  >;
}
export default OnMount; 