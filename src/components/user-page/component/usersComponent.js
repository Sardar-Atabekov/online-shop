import React from 'react';



export const UsersComponent = (props) => {
  console.log("====================================");
  console.log(props.users.users);
  console.log("====================================");
  

  return (
   <div>{props.users.users.map( (users)=>{
     return <div key={users.id}>{users.name}</div>
   } )}</div>
  );
}

  

