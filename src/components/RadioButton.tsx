export interface RadioButtonProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioButton = (props: RadioButtonProps) => (
  <div className='w-full flex gap-2 items-center'>
    <input
      className='peer absolute opacity-0'
      type='radio'
      {...props}
    />
    <div
      className='
        relative w-5 h-5 border-2 border-gray-300 rounded-full flex items-center justify-center 
        peer-checked:bg-f06d36 cursor-pointer
      '
    >
      <svg
        className='w-3 h-3 pointer-events-none hidden peer-checked:block text-white'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M5.5 11l4 4L20 5'
        />
      </svg>
    </div>
    <label
      htmlFor={props.id}
      className='cursor-pointer'
    >
      {props.label}
    </label>
  </div>
);

export default RadioButton;
