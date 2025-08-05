import { useState } from "react";

const SaveFormDataToJSON = () => {
    const [formData, setFormData] = useState({ name: '', email: ''});
    const [entries, setEntries] = useState([]);

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleAddEntry = (e) => {
        e.preventDefault();
        if(!formData.name || !formData.email){
            alert('Please fill in both fields.');
            return;
        }

        setEntries((prev) => [...prev, formData]);
        setFormData({ name: '', email: ''});
    };

    const handleDownloadJSON = () => {
        if(entries.length === 0){
            alert('No data to Download.');
            return;
        }
        const json = JSON.stringify(entries, null, 2);
        const blob = new Blob([json], {type: 'application/json'});
        const href = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = href;
        link.download = 'formEntries.json';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    

    return (
        <div>
            <form action="">
                <h2>Save Form Inputs & Download JSON</h2>

                <input 
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={FormData.name}
                    className="w-full border"
                />

                <input 
                    type="email"
                    name="Email"
                    placeholder="Email"
                    value={FormData.email}
                    className="w-full border"
                />

                <button 
                type="submit"
                className="bg-blue-600">
                    Add Entry
                </button>
                
            </form>

            <div>
                <h3>Entries Buffer</h3>
                {entries.length === 0 ? (
                    <p className="text-gray-500">No Entries Yet.</p>
                ) : (
                    <ul>
                        {entries.map((entry, index) => (
                            <li key={index}> {entry.name} ({entry.email})</li>
                        ))}
                    </ul>
                )}

                <button 
                    onClick={handleDownloadJSON}
                    className="mt-4 bg-green-600 text-white">
                    Download JSON File
                </button>
            </div>

        </div>
    );
};

export default SaveFormDataToJSON;