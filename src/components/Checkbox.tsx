export interface CheckboxProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = (props: CheckboxProps) => (
  <div className='w-full flex gap-2 items-center'>
    <input
      className='peer absolute opacity-0'
      type='checkbox'
      {...props}
    />
    <div
      className='
        relative w-5 h-5 border-2 border-gray-300 rounded-sm 
        peer-checked:bg-327B91 cursor-pointer
      '
    >
      <svg
        className='absolute w-4 h-4 pointer-events-none hidden peer-checked:block text-white mt-1'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <polyline points='20 6 9 17 4 12'></polyline>
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

export default Checkbox;
