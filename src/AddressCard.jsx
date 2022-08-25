import React, {useState} from 'react'
//rfc or rfca tab

export default function AddressCard(props) {
    
  const {person} = props;
  const[isHidden, setHidden] = useState(true)
  return (
    <div className = "addressBook" >
      <h3>{person.name.first} {person.name.last}</h3>
      <img src={person.picture.large} alt="person large" />
      <button onClick = {()=> {setHidden(!isHidden)}}>{isHidden ? "show details" : "hide details"}</button>
      {isHidden ? null:(
        <div className='info'>
          <p>{person.gender}</p>
          <p>{person.location.street.number} {person.location.street.name}</p>
          <p>{person.location.city}, {person.location.state}</p>
        </div>
      )}
    </div>
  )
}
