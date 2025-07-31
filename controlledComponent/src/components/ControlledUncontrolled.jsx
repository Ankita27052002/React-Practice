import { useState, useRef } from "react";

const ControlledUncontrolled = () => {
    const [name, setName] = useState("");
    const fileInputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const file = fileInputRef.current.files[0];
        const fileName = file ? file.name : "No file selected";

        alert(`Name: ${name}\nFile: ${fileName}`);
    };

   return (
    <form onSubmit={handleSubmit}>
        {/*Controlled Component*/}
        <div>
            <label htmlFor="">Name:</label>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </div>

    {/*Uncontrolled Component*/}
        <div>
            <label>Upload File </label>
            <input 
                type="file"
                ref={fileInputRef}
             />

        </div>

        <button type="submit">Submit</button>

    </form>
   );
};

export default ControlledUncontrolled;