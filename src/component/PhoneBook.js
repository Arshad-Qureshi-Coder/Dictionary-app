import React, {useState} from "react";

const PhoneBook=()=>{
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [contects, setContects] = useState([]);
    const [error, setError] = useState('');

    const handleNumber =(e)=>{
        const inputNumber=e.target.value;

        if(inputNumber.length > 10 ){
            setError("plese Enter 10 Digit Number!");
        }else{
            setError('');
            setNumber(inputNumber);
        };
    }

    const AddContect = () => {
        if(name && number) {
            setContects([...contects, {name, number}]);
            setName('');
            setNumber('');
        }else{
            setError('Plese enter both Name and Number!')
        }
    };


    return (
        <div style={{margin: "20px"}}> 
        <h1>Phone Book</h1>
        <div>
        <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={e=> setName(e.target.value)}
        />
        </div>
        <div>
        <input
        type="text"
        placeholder="XXX-XXX-XXXX"
        value={number}
        onChange={handleNumber}
        />
        </div>
        <div>
            {
                error && 
                <p style={{color:'red'}}>{error}</p>
            }
        </div>
        <div>
            <button onClick={AddContect}>Add Contect</button>
        </div>
        <div>
            <ul>
                <h2>Contects</h2>
            {
                contects.map((contect,id)=>(
                    <li key={id}>
                        {contect.name} - {contect.number}
                    </li>
                ))
            }
            </ul>
        </div>
        </div>
    )
}

export default PhoneBook;