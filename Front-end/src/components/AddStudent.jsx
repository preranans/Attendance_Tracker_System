import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import Footer from './Footer'
import Student_Details from './Student_Details'
export default function AddStudent() {
    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <Sidebar />
                <div className="col p-0">
                    <div className="container p-0">
                        <Header />
                    </div>
                    <div>
                        <Student_Details />
                    </div>
                    <div>
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    )
}
