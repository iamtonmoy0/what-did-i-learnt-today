import React from 'react'

export default function PlaceTree(place) {
    const childPlaces=place.place.childPlaces
    console.log(childPlaces);
  return (
        <>
      <li>
        {place.place.title}
        {clildPlaces.length>0 && <ol>{childPlaces.map(place=><PlaceTree key={place.id}  />)}</ol>}

    </li>
    </>
  )
}
