
import React from 'react'
import Button from './Button'
import CloseIcon from './CloseIcon'
function Popup({mainHeading,subHeading,func,setOpen,deleteId,setDeleteId}) {
  return (
    <div className='popup-outer'>
        <div className='popup-inner'>
            <button className='close-btn' onClick={()=>{setOpen(false)}}>
            <CloseIcon className="close-icon"/>
            </button>
            
            <h2>{mainHeading}</h2>
            <p>{subHeading}</p>
            <div>
              <Button label="Confirm" className="btn primary-btn" onClick={()=>{func(deleteId);setOpen(false)}}/>
              <Button label="Cancel" className="btn secondary-btn btn-margin" onClick={()=>{setOpen(false);setDeleteId('')}}/>
            </div>
        </div>
    </div>
    
  )
}

export default Popup