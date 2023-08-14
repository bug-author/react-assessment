import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { FaTimes } from 'react-icons/fa';

import TaxInput from './components/TaxInput';
import ItemSearch from './components/ItemSearch';
import CategoryList from './components/CategoryList';
import SubmitButton from './components/SubmitButton';
import RadioButton from './components/RadioButton';

import taxValidationSchema from './schemas/taxFormInput';
import items from './constants/items';
import { TaxFormValues, Item } from './types';

function App() {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const formik = useFormik<TaxFormValues>({
    initialValues: {
      applied_to: 'some',
      applicable_items: [],
      name: 'one',
      rate: 1,
    },
    validationSchema: taxValidationSchema,
    onSubmit: (values) => {
      values.rate = values.rate / 100;
      console.log(values);
    },
  });

  useEffect(() => {
    if (formik.values.applied_to === 'all') {
      const allItemIds = items.map((item: Item) => item.id);
      setSelectedItems(allItemIds);
      formik.setFieldValue('applicable_items', allItemIds);
    }
  }, [formik.values.applied_to]);

  const getButtonText = () => {
    if (formik.values.applied_to === 'all') {
      return 'Apply tax to all items';
    } else {
      return `Apply tax to ${selectedItems.length} item(s)`;
    }
  };

  return (
    <div className='App p-8'>
      <div className='flex justify-between items-center mb-4 w-4/5'>
        <h1 className='text-xl font-semibold'>Add Tax</h1>
        <FaTimes className='cursor-pointer text-lg' />
      </div>
      <TaxInput
        value={formik.values.name}
        rate={formik.values.rate}
        handleChange={formik.handleChange}
        errors={formik.errors}
        touched={formik.touched}
      />
      <form onSubmit={formik.handleSubmit}>
        <RadioButton
          id='applied_to_all'
          name='applied_to'
          value='all'
          label='Apply to all items in the collection'
          checked={formik.values.applied_to === 'all'}
          onChange={(e) => {
            e.stopPropagation();
            if (e.target.checked) {
              formik.setFieldValue('applied_to', 'all');
            }
            formik.handleChange(e);
          }}
        />
        <RadioButton
          id='applied_to_some'
          name='applied_to'
          value='some'
          label='Apply to specific items'
          checked={formik.values.applied_to === 'some'}
          onChange={(e) => {
            e.stopPropagation();
            if (e.target.checked) {
              formik.setFieldValue('applied_to', 'some');
            }
            formik.handleChange(e);
          }}
        />
        <hr className='my-4' />
        <ItemSearch />
        <CategoryList
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
          setFieldValue={formik.setFieldValue}
        />
        <SubmitButton buttonText={getButtonText()} />
      </form>
    </div>
  );
}

export default App;
