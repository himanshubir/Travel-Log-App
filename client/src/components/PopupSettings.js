import React ,{ useState }from 'react';
import {deleteLogEntry} from  '../API';
import '../styles/popup.css'
const PopupSettings = ({entry, onDelete, setShowSettings}) =>{
    const [error, setError] = useState('');
    const onSubmit = async () => {
        try{
            await(deleteLogEntry(entry));
            onDelete();

        }catch(error){  
            console.error(error);
            setError(error);
        }
        
    }
    return(
        <div className="settings-overlay">
            {error ? <div className="error-text">{error}</div> : null}
            <div className="close-button-wrapper">
                <div className="close-button" onClick={() => { setShowSettings({ [entry._id]: false}); }} >x</div>
            </div>
            <div className = "overlay-buttons">
                    <button className="deleteButton" onClick={onSubmit}>Delete</button>
                    <button className="update-button">Update</button>
            </div>
        </div>

    )

}
export default PopupSettings