import React, { useState } from "react";

function Regristration() {
    const [name, setName] = useState("");
    const [department, setDepartment] = useState("");
    const [employmentNo, setEmploymentNo] = useState("");
    const [password, setpassword] = useState("");
    // const [contactAddress, setContactAddress] = useState("");
    const [telephoneNumber, setTelephoneNumber] = useState("");
    const [emailAddress, setEmailAddress] = useState("");

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Handle form submission logic here
    };

    return (
    
            <form onSubmit={handleSubmit} className='flex item-center justify-center flex-col mt-8'>
                <div className='flex justify-center items-center flex-col'>
                    <div className='p-3 border border-gray rounded-full mb-4'>
                        <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' className='w-full outline-none bg-transparent text-ash'/>
                    </div>
                    <div className='p-3 border border-gray rounded-full mb-4'>
                        <input type='text' value={department} onChange={(e) => setDepartment(e.target.value)} placeholder='Department' className='w-full outline-none bg-transparent text-ash'/>
                    </div>
                    <div className='p-3 border border-gray rounded-full mb-4'>
                        <input type='text' value={employmentNo} onChange={(e) => setEmploymentNo(e.target.value)} placeholder='Employment No' className='w-full outline-none bg-transparent text-ash'/>
                    </div>
                    <div className='p-3 border border-gray rounded-full mb-4'>
                        <input type='text' value={password} onChange={(e) => setpassword(e.target.value)} placeholder='Password' className='w-full outline-none bg-transparent text-ash'/>
                    </div>
                    {/* <div className='p-3 border border-gray rounded-full mb-4'>
                        <input type='text' value={contactAddress} onChange={(e) => setContactAddress(e.target.value)} placeholder='Contact Address' className='w-full outline-none bg-transparent text-ash'/>
                    </div> */}
                    <div className='p-3 border border-gray rounded-full mb-4'>
                        <input type='text' value={telephoneNumber} onChange={(e) => setTelephoneNumber(e.target.value)} placeholder='Telephone Number' className='w-full outline-none bg-transparent text-ash'/>
                    </div>
                    <div className='p-3 border border-gray rounded-full mb-4'>
                        <input type='text' value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} placeholder='Email Address' className='w-full outline-none bg-transparent text-ash'/>
                    </div>
                    <div>
                        <button className="w-full px-6 py-2 bg-blue text-white rounded-3xl">Register</button>
                    </div>
                </div>
            </form>
        
    );
}

export default Regristration;