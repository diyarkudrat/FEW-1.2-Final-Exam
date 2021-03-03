import React from 'react';
import Like from './Like';

function Band(props) {
    const { band_name, formed, fans, origin, split, style } = props.bandData;

    const displayFanCount = () => {
        const multipliedNum = fans * 1000;
        const newNum = multipliedNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        return newNum
    }

    return (
        <div>
            <h1>{band_name}</h1>
            <div>
                <p><b>Origin: </b>{origin}</p>
                <p><b>Fans: </b>{displayFanCount()}</p>
                <p><b>Formed: </b>{formed}</p>
                <p><b>Style: </b>{style}</p>

                { split === '-' ? <Like /> : <p><b>Split: </b>{split}</p> }
            </div>
        </div>
    );
}

export default Band;