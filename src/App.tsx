// import './App.css';

import Person from '../src/components/Peson/Person';
import { useState } from 'react';

function App() {
    const persons = [
        {
            name: 'Daryna Stoikova',
            profession: 'Photographer',
        },
        // {
        //     name: 'Misha Stratan',
        //     profession: 'Videographer',
        // }
    ];
    const [currentPerson, setCurrenPerson] = useState(persons[0]);



    function switchPerson() {
        if (currentPerson.name === persons[0].name) {
            setCurrenPerson(persons[1]);
        } else {
            setCurrenPerson(persons[0]);
        }
    }

    return (
        <>  
            {/* <button style={{position: 'absolute', top: '0', zIndex: '100'}} onClick={switchPerson}>Switch</button> */}
            <Person name={currentPerson.name}></Person>
        </>
    )
}

export default App;
