import React from 'react'
import { Avatar } from './Avatar'
import { Button } from './Button'

export const Gallery = () => {
    const person = {
        image: "https://reqres.in/img/faces/1-image.jpg",
        name: "Abhishek",
        text : "click here to know me"
    }
    const person2 = {
        image: "https://reqres.in/img/faces/6-image.jpg",
        name: "Tracey",
        text : "To keep ReqRes free"
    }
  return (
    <div>

<Avatar person={person} size = {100} />
<Button text={person.text} />
<Avatar person={person2} size = {100} />
<Button text={person2.text} />
    </div>
  )
}
