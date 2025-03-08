import React, { useState } from 'react'
import { initialTravelPlan } from '../places'
import PlaceTree from './PlaceTree'

export default function TravelPlan() {
    const [plan,setPlan]=useState(initialTravelPlan)

    const planets=plan.childPlaces
  return (
    <>
    <h1>Places to visit</h1>
    <ol>
        {planets.map(place=><PlaceTree key={place.id} place={place} />)}
    </ol>
    </>
  )
}
