import React, {useContext} from 'react';

import BasicContext from '../context/basics/BasicContext';
const Download = ({type}) => {
    const {DownloadImage} = useContext(BasicContext)
    return (
        <button onClick={() => DownloadImage()} className={`download ${type}`}>Download
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 12c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12zm-18 1h4v-7h4v7h4l-6 6-6-6z"/></svg>
        </button>
    );
}

export default Download;
