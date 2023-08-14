import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { FaTimes, FaSearch, FaPercent } from 'react-icons/fa';
import items from './constants/items';
import Checkbox from './components/Checkbox';
import RadioButton from './components/RadioButton';

interface Item {
  id: number;
  name: string;
  category?: { id: number; name: string };
}

function App() {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const formik = useFormik({
    initialValues: {
      applied_to: 'some',
      applicable_items: [],
      name: 'one',
      rate: 1,
    },
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

  const organizedItems: { [key: string]: Item[] } = {};
  items.forEach((item) => {
    const categoryName = item.category?.name || 'Unnamed';
    if (!organizedItems[categoryName]) {
      organizedItems[categoryName] = [];
    }
    organizedItems[categoryName].push(item);
  });

  return (
    <div className='App p-8'>
      <div className='flex justify-between items-center mb-4 w-4/5'>
        <h1 className='text-xl font-semibold'>Add Tax</h1>
        <FaTimes className='cursor-pointer text-lg' />
      </div>
      <div className='w-3/5'>
        <div className='flex gap-4 mb-4'>
          <input
            type='text'
            placeholder='Enter tax'
            value={formik.values.name}
            onChange={formik.handleChange}
            name='name'
            className='border rounded p-2 flex-grow'
          />
          <div className='relative'>
            <input
              type='text'
              name='rate'
              value={formik.values.rate}
              onChange={formik.handleChange}
              placeholder='1'
              className='border rounded p-2 pl-3 w-full'
            />
            <FaPercent className='absolute top-1/2 right-3 transform -translate-y-1/2' />
          </div>
        </div>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className='mb-4'>
          <RadioButton
            id='applied_to_all'
            label='Apply to all items in the collection'
            checked={formik.values.applied_to === 'all'}
            onChange={() => {
              const allItemIds = items.map((item: Item) => item.id);
              setSelectedItems(allItemIds);
              formik.setFieldValue('applicable_items', allItemIds);
              formik.setFieldValue('applied_to', 'all');
            }}
          />
        </div>
        <div className='mb-4'>
          <RadioButton
            id='applied_to_some'
            label='Apply to specific items'
            checked={formik.values.applied_to === 'some'}
            onChange={() => {
              formik.setFieldValue('applied_to', 'some');
            }}
          />
        </div>
        <hr className='my-4' />
        <div className='relative mb-4 w-1/5'>
          <FaSearch className='absolute top-1/2 left-2 transform -translate-y-1/2' />
          <input
            type='text'
            placeholder='Search items'
            className='border rounded p-2 pl-8 w-full'
          />
        </div>

        {Object.keys(organizedItems).map((categoryName) => (
          <div key={categoryName}>
            <div className='mb-1 bg-gray-300 px-2 py-1 rounded w-3/5'>
              {categoryName}
            </div>
            {organizedItems[categoryName].map((item: Item) => (
              <div
                key={item.id}
                className='mb-2 ml-4'
              >
                <Checkbox
                  id={`item-${item.id}`}
                  label={item.name}
                  checked={selectedItems.includes(item.id)}
                  onChange={(e) => {
                    const isChecked = e.target.checked;
                    const newSelected = isChecked
                      ? [...selectedItems, item.id]
                      : selectedItems.filter((id) => id !== item.id);
                    setSelectedItems(newSelected);
                    formik.setFieldValue('applicable_items', newSelected);
                  }}
                />
              </div>
            ))}
          </div>
        ))}

        <div className='flex items-center justify-end w-3/5'>
          <button
            type='submit'
            className='mt-4 px-4 py-2 bg-[#f06d36] hover:bg-[#e66026] text-white rounded'
          >
            {getButtonText()}
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
