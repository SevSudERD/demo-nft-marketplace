import React, { Children } from 'react'

const Modal = ({isOpen, onClose, children}) => {
  if(!isOpen) return null;

  return (
    <div className='flex inset-0 fixed items-center justify-center bg-black bg-opacity-50 z-50 px-4'>
      <div>
        {children}
        <button onClick={onClose} className='mt-4 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700'>Close</button>
      </div>

    </div>
  )
}

export default Modal