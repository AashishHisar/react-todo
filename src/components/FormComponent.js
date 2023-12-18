import React from 'react'
import { useState } from 'react';

const FormComponent = () => {

    const [form, setFormData] = useState(
        {
            firstName: "Aashish",
            lastName: "verma",
            email: "aashish.kumar@smartinfocare.com",
            profile: "developer",
        }
    );
    return (
        <>
            <label>
                firstName : <input
                    value={form.firstName}
                    onChange={e => setFormData({
                        ...form,
                        firstName: e.target.value
                    })}
                    style={{ margin: '5px' }} />
            </label><br/>
            <label>
                lastName : <input
                    value={form.lastName}
                    onChange={e => setFormData({
                        ...form,
                        lastName: e.target.value
                    })}
                    style={{ margin: '5px' }} />
            </label><br />
            <label>
                email : <input
                    value={form.email}
                    onChange={e => setFormData({
                        ...form,
                        email: e.target.value
                    })}
                    style={{ margin: '5px' }} />
            </label><br />
            <label>
                profile : <input
                    value={form.profile}
                    onChange={e => setFormData({
                        ...form,
                        profile: e.target.value
                    })}
                    style={{ margin: '5px' }} />
            </label><br />
            <p>Your Detail is : {form.firstName} {' '} ,{form.lastName} {' '} {form.email} {' '} {form.profile}</p>
        </>
    )
}

export default FormComponent