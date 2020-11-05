import React from 'react';
import styled from './Person.module.css';

const Person = (props) => {
    return (
        <div className={styled.card} >

<div onClick={props.clicked} className={styled.cardHeader}>
    <h3>{props.name}</h3>
</div>
<div className={styled.cardBody}>
    <p>I am a {props.job}</p>

<input type="text" onChange={props.changed} />

</div>
            </div>
    );
}
export default Person;