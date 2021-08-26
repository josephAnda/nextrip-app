import React, { useEffect, useState } from "react";


export const StopsDisplay = ({stops, clearAll}) => {
    

    return stops ? (
      <>
        <ul className='stops-display'>
            {stops.map((item, index) => {
                return (
                    <li
                        key={index}
                    >
                        {item.Text}
                    </li>
                )
            })}
        </ul>
        <button onClick={clearAll}>
            Clear Selections
        </button>
      </>
    ) : null
  
}