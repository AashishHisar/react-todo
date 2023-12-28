import React, { useState } from 'react'
import SuccessModal from './SuccessModal';
import { Link } from 'react-router-dom';

const FormComponent = () => {

    const [data, setData] = useState({
        employe_id: "em-1001",
        employe_name: "Aashish kumar",
        email: "aashish.kumar@smsartinfocare.com",
        profile: "Developer"
    });

    const [showpopup, setShowpopup] = useState(false)

    const onSubmitForm = () => {
        // setShowpopup(true);
        <Link to="/success-page">Home</Link>
    }

    return (
        <>
            <form class="mt-2" onSubmit={onSubmitForm}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Employee-Id</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={data.employe_id} />

                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Employee Name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={data.employe_name} />

                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Email Address</label>
                    <input type="email" class="form-control" id="exampleInputPassword1" value={data.email} disabled />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Profile</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={data.profile} />

                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
                <Link to="/success-page">Home</Link>
            </form>
        </>
    )
}

export default FormComponent