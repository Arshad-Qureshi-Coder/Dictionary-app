import React, {useState} from "react";


export default function UserList () {
   const [userList, setUserList] = useState([]);
   const [originalList, setOriginalList] = useState([]);
   const [sortLevel, setSortLevel] = useState('');


   const getUser = async ()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    const user=[];

    for(let i =0;i<data.length;i++){
        user.push(data[i]);
    }
        setUserList(user);
        setOriginalList(user);
        setSortLevel('1');
   }

   const sortList =()=>{
    if(sortLevel === '1'){
        const assendingOrder = userList.sort((a,b)=> a.name.length - b.name.length);
        setUserList(assendingOrder);
        setSortLevel('2');
    }
    if(sortLevel === '2'){
        const disendingOrder = userList.sort((a,b)=> b.name.length-a.name.length );
        setUserList(disendingOrder);
        setSortLevel('3');
    }
    if(sortLevel === '3'){
        setUserList(originalList);
        setSortLevel('1');
    }
   }

    return (
        <>
        <h1>User List</h1>
        <button onClick={getUser}>Get User</button>
        <button onClick={sortList}>Sort List</button>
        <ul>
        {
           sortLevel &&
           userList.map((user)=>
          <li key={user.id}>{user.name}</li>
           )}

        </ul>
        
        </>
    )
}