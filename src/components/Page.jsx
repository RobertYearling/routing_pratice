import React from 'react';

const Page = (props) => {

    return (
        <div className="col-sm-8 offset-sm-2">
            {isNaN(props.variable)?
            <h1 style={{backgroundColor: props.bgColor, color: props.color}}>The word is: {props.variable}</h1>:
            <h1 >The number is: {props.variable}</h1>
            }
        </div>
    );
};
export default Page;

