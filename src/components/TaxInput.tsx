import React from 'react';
import { FaPercent } from 'react-icons/fa';
import { FormikTouched } from 'formik';
import { TaxFormErrors, TaxFormValues, TaxInputProps } from '../types';

const TaxInput: React.FC<TaxInputProps> = ({
  value,
  rate,
  handleChange,
  errors,
  touched,
}) => {
  return (
    <div className='w-3/5 flex gap-4 mb-4'>
      <div>
        <input
          type='text'
          placeholder='Enter tax'
          value={value}
          onChange={handleChange}
          name='name'
          className='border rounded p-2 flex-grow'
        />
        {errors.name && touched.name ? (
          <div className='text-red-500 font-bold text-xs'>{errors.name}</div>
        ) : null}
      </div>
      <div className='relative'>
        <input
          type='text'
          name='rate'
          value={rate < 1 ? rate * 100 : rate}
          onChange={handleChange}
          placeholder='1'
          className='border rounded p-2 pl-3 w-full'
        />
        {errors.rate && touched.rate ? (
          <div className='text-red-500 font-bold text-xs'>{errors.rate}</div>
        ) : null}
        <FaPercent className='absolute top-1/2 right-3 transform -translate-y-1/2' />
      </div>
    </div>
  );
};

export default TaxInput;
