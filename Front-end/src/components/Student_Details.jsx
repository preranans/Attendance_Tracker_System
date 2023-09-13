import React from 'react'

export default function Student_Details() {
    const styles = {
        paddingLeft: '60px',
        paddingRight: '60px',
        paddingTop: '10px',
        paddingBottom: '10px',
        border: '2px solid black',
        margin: '30px',

    }
    return (
        <div>
            <br></br>
            <h3>Enter Student Details</h3>
            <div className="container" style={styles}>
                <form>
                    <div class="form-group container mt-4">
                        <label for="formGroupExampleInput">Student Name </label>
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Student Name" />
                    </div>
                    <div class="form-group container mt-4">
                        <label for="formGroupExampleInput">Student USN </label>
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Student USN" />
                    </div>
                    <div class="container mt-4">

                        <div class="form-group">
                            <label for="exampleDropdown">Select Semester</label>
                            <select class="form-control" id="exampleDropdown " placeholder="Select Semester">
                                <option value="option1"> 1</option>
                                <option value="option2"> 2</option>
                                <option value="option3"> 3</option>
                                <option value="option4"> 4</option>
                                <option value="option1"> 5</option>
                                <option value="option2"> 6</option>
                                <option value="option3"> 7</option>
                                <option value="option4"> 8</option>
                            </select>
                        </div>
                    </div>
                    <div class="container mt-4 ">

                        <div class="form-group">
                            <label for="exampleDropdown">Select Section</label>
                            <select class="form-control" id="exampleDropdown" placeholder="Select Section">
                                <option value="option1"> A</option>
                                <option value="option2"> B</option>
                                <option value="option3"> C</option>
                            </select>
                        </div>
                        <button type="submit" class="btn btn-primary mt-4">
                            Submit
                        </button>
                    </div>
                </form>
            </div>

        </div>
    )
}
