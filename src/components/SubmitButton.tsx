import React from 'react';

interface SubmitButtonProps {
  buttonText: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ buttonText }) => {
  return (
    <div className='flex items-center justify-end w-3/5'>
      <button
        type='submit'
        className='mt-4 px-4 py-2 bg-orangePrimary hover:bg-orangeSecondary text-white rounded'
      >
        {buttonText}
      </button>
    </div>
  );
};

export default SubmitButton;
