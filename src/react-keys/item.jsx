import React from 'react'

export const item = () => {

    const fruitsItems = ['Apple', 'Banana', 'Orange',];
  return (
    <div>
        <ul>
            {fruitsItems.map((itm, index) =>(
                <li key={index}>{itm}</li>
            ))}
        </ul>
    </div>
  )
}
