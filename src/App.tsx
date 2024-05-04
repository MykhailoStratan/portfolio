import './App.css';

import Person from '../src/components/Peson/Person';
import { useState } from 'react';

function App() {
    const switchBtnText = ['Potography', 'Videography'];
    const [currentSwitchBtnText, setCurrentSwitchBtnText] = useState(switchBtnText[0]);

    const persons = [
        {
            name: 'Daryna Stoikova',
            profession: 'Photographer',
            visibility: 'visible',
        },
        {
            name: 'Misha Stratan',
            profession: 'Videographer',
            visibility: 'hidden',
        }
    ];
    const [firstPersonVisibility, setFirstPersonVisibility] = useState(persons[0].visibility);
    const [secondPersonVisibility, setSecondPersonVisibility] = useState(persons[1].visibility);

    function switchText() {
        if (currentSwitchBtnText === switchBtnText[0]) {
            setCurrentSwitchBtnText(switchBtnText[1]);
            setFirstPersonVisibility('visible');
            setSecondPersonVisibility('hidden');
        } else {
            setCurrentSwitchBtnText(switchBtnText[0])
            setFirstPersonVisibility('hidden');
            setSecondPersonVisibility('visible');
        }
    }

    return (
        <>  
            <button style={{position: 'absolute', top: '0', zIndex: '100'}} onClick={switchText}>{currentSwitchBtnText}</button>
            <Person name={persons[0].name} profession={persons[0].profession} visibility={firstPersonVisibility}></Person>
            <Person name={persons[1].name} profession={persons[1].profession} visibility={secondPersonVisibility}></Person>
        </>
    )
}

export default App;
