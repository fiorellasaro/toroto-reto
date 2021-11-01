import React from 'react'

function impact(props) {
    return (
        <div className="impact-content">
            <p className="impact-value">
                {props.value}
            </p>
            <p className="impact-name">
                {props.name}
            </p>
        </div>
    )
}

export default impact
