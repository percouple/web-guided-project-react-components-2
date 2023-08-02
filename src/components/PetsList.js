import React from 'react'
// 👉 1- We need the Pet component
import Pet from './Pet'

export default function PetsList(props) {

  const { owner } = props
  
  return (
    <div className='list-pets-friends container'>
      {/* 2- Loop over the data generating a Pet element as you go */}
      {
        owner.pets.map((pet, i) => {
          return <Pet pet={pet} key={i}/>
          
        })
      }
      {/* What props does the Pet component expect? */}
    </div>
  )
}
