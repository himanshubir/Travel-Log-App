import * as React from 'react';
import {useState} from 'react';
import {Marker} from 'react-map-gl';
import OurPopup from './OurPopup';
import '../styles/marker.css';
const OurMarker = ({ entry, newMarker, viewport, setNewMarker, getEntries })  => {
    const [showPopup, setShowPopup] = useState({});
    var latitude = newMarker ? newMarker.latitude : entry.latitude;
    var longitude = newMarker ? newMarker.longitude : entry.longitude;
    const location = [latitude, longitude];
    return (
        <div
            onClick={() => { setShowPopup({ [entry._id]: true }); } }
        >
            {entry || newMarker ?
                (
                    <div>
                        <Marker
                            latitude={location[0]}
                            longitude={location[1]}

                        >
                            <div>
                                <img
                                    className="marker"
                                    style={{
                                        height: `${viewport.zoom * 6}px`,
                                        width: `${viewport.zoom * 6}px`
                                    }}
                                    src="https://i.imgur.com/y0G5YTX.png"
                                    alt="marker">

                                </img>

                            </div>
                        </Marker>
                        {newMarker || showPopup[entry._id] ?
                            <OurPopup
                                entry={entry}
                                newMarker={newMarker}
                                setNewMarker={setNewMarker}
                                setShowPopup={setShowPopup}
                                location={location}
                                getEntries={getEntries} />

                            : null}
                    </div>)

                :
                null}
        </div>

    );

}
export default OurMarker;