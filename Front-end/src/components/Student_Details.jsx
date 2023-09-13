import React from 'react'

export default function Student_Details() {
    const styles = {
        paddingLeft: '160px',
        paddingRight: '160px',
        paddingTop: '70px',
        paddingBottom: '70px'
    }
    return (
        <div>

            <div className="container" style={styles}>
                <form>
                    <div class="form-group">
                        <label for="formGroupExampleInput">Student Name </label>
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Student Name" />
                    </div>
                    <div class="container mt-4">

                        <div class="form-group">
                            <label for="exampleDropdown">Select Semester</label>
                            <select class="form-control" id="exampleDropdown">
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
                            <select class="form-control" id="exampleDropdown">
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
