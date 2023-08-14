export interface CheckboxProps {
  disabled?: boolean;
  defaultChecked?: boolean;
  id: string;
  label: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = (props: CheckboxProps) => (
  <div className='w-full flex gap-2 items-center'>
    <input
      className='
        peer relative shrink-0 appearance-none w-5 h-5 border-2 border-gray-300 rounded-sm
        focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-#327B91
        checked:bg-tealPrimary checked:border-transparent
        disabled:border-gray-400 disabled:bg-gray-400 
      '
      type='checkbox'
      {...props}
    />
    <svg
      className='absolute w-4 h-4 pointer-events-none hidden peer-checked:block text-white mt-0.5 outline-none'
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
    <label htmlFor={props.id}>{props.label}</label>
  </div>
);

export default Checkbox;
