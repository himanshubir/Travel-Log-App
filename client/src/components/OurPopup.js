import * as React from 'react';
import { useState, useEffect } from 'react';
import PopupSettings from './PopupSettings';
import  { Popup } from 'react-map-gl';
import LogEntryForm from './LogEntryForm';
import '../styles/popup.css'
 const OurPopup = ({entry, newMarker, setShowPopup, location, setNewMarker, getEntries}) => {
    const [showSettings, setShowSettings] = useState({});
    const close = ()=>{
            setShowPopup({});
            setNewMarker(null);

    }
    const onDelete = () =>{
        close();
        getEntries();
    }
    return(
        entry || newMarker ?
        ( 
            <Popup
                className="popup"
                latitude={location[0]}
                longitude={location[1]}
                closeButton={true}
                closeOnClick={false}
                dynamicPosition={false}
                onClose={()=>{
                    newMarker ? setNewMarker(null) : setShowPopup({});
                    }}
                anchor="top"

            >
                {newMarker ?
                    <div className="popup-content-wrapper">
                        <div className="popup-form">
                            <LogEntryForm
                                onClose = {close}
                                location={location}
                                getEntries={getEntries}/>
                        </div>
                    </div>
                    :
                    (
                    <div className="popup-container">
                        {showSettings[entry._id] ? 
                            <PopupSettings 
                             entry={entry}
                             onDelete={onDelete}
                             setShowSettings={setShowSettings}
                            />
                                : null}
                        <div className="settings-button-wrapper">
                        <img className="settings-button" 
                        onClick={() => { setShowSettings({ [entry._id]: true}); } }
                        src="https://img.icons8.com/material-outlined/24/000000/settings--v1.png"/>
                        </div>

                        <div className="popup-content-wrapper">
                            <div className="popup-title">{entry.title}</div>
                            <div className="popup-heading">
                                <div className="visited-wrapper">
                                        <div className="popup-visited">Visited On: {new Date(entry.visitDate).toLocaleDateString()}</div>
                                </div>
                                <div className="location-wrapper">
                                    <div className="latitude">({entry.latitude.toFixed(8)},</div> &ensp;
                                    <div className="longitude">{entry.longitude.toFixed(8)})</div>
                                </div>
                            </div>
                            <div className="popup-info">
                                <div className = "rating-wrapper">
                                    {entry.rating ?  <div className="rating">Rating: {entry.rating} / 10.0</div>: null}
                                </div>
                                <div className="popup-columns">
                                    <div className="popup-left-side" style={{
                                        width: entry.image ? '45% ': '100%'
                                    }}>
                                        <div className="description-wrapper">
                                            {entry.description ? <div className="popup-description">Description: <br/>{entry.description}</div> : null}
                                        </div>
                                        <div className="comments-wrapper">
                                            {entry.comments ? <div className="popup-comments">Comments: <br/>{entry.comments}</div> : null} 
                                        </div>
                                    </div>
                                    <div className="popup-right-side" style={{
                                        width: entry.comments || entry.comments ? '55%' : '100%'
                                    }}>
                                        <div className="image-wrapper">
                                            {entry.image ? <img className="popup-image" src={entry.image} alt={entry.title}/> : null}

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    )
                }  

            </Popup>
        ):null
    )
}
export default OurPopup;