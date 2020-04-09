import React from 'react';

function Card({ id, username, name, email }) {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?200x200`} alt="robot" />
            <div>
                <h2>{username}</h2>
                <p><span className="b">Real Name:</span> <span className="i">{name}</span></p>
                <p><span className="b">Email:</span> <span className="i">{email}</span></p>
            </div>
        </div>
    );
}

export default Card;