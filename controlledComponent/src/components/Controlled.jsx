import { useState } from "react";

const Controlled = () => {

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        alert(`Hi ${fname} ${lname}`);

    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="">First Name:</label>
            <input 
                type="text"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
             />

             <label htmlFor="">Last Name:</label>
             <input 
                type="text"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
             />

             <button type="submit">Submit</button>

        </form>
    );
};

export default Controlled;