import React from 'react';

export default function Student_Details() {
    const styles = {
        padding: '5px', // Reduce padding
        border: '2px solid black',
        margin: '5px', // Reduce margin
    };

    return (
        <div>
            <br></br>
            <h3>Enter Student Details</h3>
            <div className="container" style={styles}>
                <form>
                    <div className="form-group mt-2">
                        <label htmlFor="studentName">Student Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="studentName"
                            placeholder="Student Name"
                        />
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="studentUSN">Student USN</label>
                        <input
                            type="text"
                            className="form-control"
                            id="studentUSN"
                            placeholder="Student USN"
                        />
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="semester">Select Semester</label>
                        <select className="form-control" id="semester">
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
                        <label htmlFor="section">Select Section</label>
                        <select className="form-control" id="section">
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
