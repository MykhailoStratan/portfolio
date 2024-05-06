import { FC } from "react";
import '../Peson/Peson.css';

import Misha from "../Misha/Misha";
import Daryna from "../Daryna/Daryna";


interface PersonProps {
    name: string;
}

const Person: FC<PersonProps> = ({ name }) => {

    return (
            <>
                {/* <Misha visibility={name === 'Misha Stratan' ? true : false}/> */}
                <Daryna visibility={name === 'Daryna Stoikova' ? true : false}/>
            </>
    )
};

export default Person;