import React from 'react'
import Button from './Button'


// homework :- to pass data of name in list 
const list  = [""];

const ButtonList = () => {
  return (
    <div className='flex'>
        <Button name="All"/>
        <Button name="Gaming"/>
        <Button name="Songs"/>
        <Button name="Live"/>
        <Button name="Socccer"/>
        <Button name="Cricket"/>
        {/* <Button name="News"/>
        <Button name="Cooking"/>
        <Button name="mixes"/> */}
    </div>
  )
}

export default ButtonList