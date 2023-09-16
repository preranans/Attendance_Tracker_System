import React from 'react';

export default function Student_Details() {
    const containerStyle = {
        padding: '20px',
        border: '2px solid black',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        maxWidth: '400px',
        margin: '0 auto',
        backgroundColor: 'white',
    };

    const headingStyle = {
        textAlign: 'center',
        fontSize: '24px',
        color: 'black',
    };

    const labelStyle = {
        fontWeight: 'bold',
        color: '#555',
    };

    const selectStyle = {
        width: '100%',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        marginTop: '5px',
    };

    const buttonStyle = {
        width: '100%',
        padding: '10px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        marginTop: '10px',
        cursor: 'pointer',
    };

    return (
        <div>
            <br />
            <h3 style={headingStyle}>Enter Student Details</h3>
            <div className="container" style={containerStyle}>
                <form>
                    <div className="form-group mt-2">
                        <label htmlFor="studentName" style={labelStyle}>Student Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="studentName"
                            placeholder="Student Name"
                        />
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="studentUSN" style={labelStyle}>Student USN</label>
                        <input
                            type="text"
                            className="form-control"
                            id="studentUSN"
                            placeholder="Student USN"
                        />
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="semester" style={labelStyle}>Select Semester</label>
                        <select className="form-control" id="semester" style={selectStyle}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                        </select>
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="section" style={labelStyle}>Select Section</label>
                        <select className="form-control" id="section" style={selectStyle}>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary mt-3" style={buttonStyle}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
