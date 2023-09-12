import React from 'react';
import './../styles.css';
import image from './../Imagess/logo.png'

export default function Header() {
    const styles = {
        height: '50px',
        fontFamily: 'cursive',
        fontSize: '50px',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Add a subtle text shadow
        color: 'black', // Set the text color
        justifyContent: 'center'
    };
    // const st = {
    //     display: 'relative',
    //     height:
    // }
    const imgstyle = {
        width: '120px',
        height: '180 px'
    }
    const contBack = {
        backgroundColor: 'grey',
        height: '100px',
        paddingLeft: '0px'
    }
    return (
        <div>
            <div className="col py-0" style={contBack} >
                <div className='p-1 d-flex' style={styles}>
                    <span>
                        <img src={image} style={imgstyle} />
                    </span>
                    Attendance Tracker System
                </div>
            </div>
        </div>
    );
}
