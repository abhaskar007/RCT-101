import React from 'react'
import { Avatar } from './Avatar'
import { Button } from './Button'

const person = {
    id:1,
    image: "https://reqres.in/img/faces/1-image.jpg",
    name: "Abhishek",
    text : "click here to know me"
}
const person2 = {
    id:2,
    image: "https://reqres.in/img/faces/6-image.jpg",
    name: "Tracey",
    text : "To keep ReqRes free"
}
const person3 = {
    "id":3,"email":"emma.wong@reqres.in","name":"Emma","last_name":"Wong","image":"https://reqres.in/img/faces/3-image.jpg"
}

export const Gallery = () => {
    const personArray = [person,person2,person3];

const Result = personArray.map((items)=>
{
    return (
<div key={items.id}>
    <Avatar person={items} size={100}/>
    <Button text = {items.text} />
</div>
    );
});


   
  return (
    <div>
{Result}

    </div>
  )
}
