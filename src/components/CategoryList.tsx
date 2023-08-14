import React from 'react';
import Checkbox from './Checkbox';
import { Item, OrganizedCategory } from '../types';
import items from '../constants/items';

interface CategoryListProps {
  selectedItems: number[];
  setSelectedItems: React.Dispatch<React.SetStateAction<number[]>>;
  setFieldValue: (field: string, value: any) => void;
}

const CategoryList: React.FC<CategoryListProps> = ({
  selectedItems,
  setSelectedItems,
  setFieldValue,
}) => {
  const organizedCategories: { name: string; items: Item[] }[] = [];

  items.forEach((item) => {
    const categoryName = item.category?.name || '';
    let category = organizedCategories.find((cat) => cat.name === categoryName);

    if (!category) {
      category = { name: categoryName, items: [] };
      organizedCategories.push(category);
    }

    category.items.push(item);
  });

  // Sort categories by the length of their names in descending order
  organizedCategories.sort((a, b) => b.name.length - a.name.length);

  return (
    <div>
      {organizedCategories.map((category: OrganizedCategory) => (
        <div key={category.name}>
          <div className='mb-1 bg-gray-300 px-2 py-1 rounded w-3/5 h-8'>
            {category.name}
          </div>
          {category.items.map((item: Item) => (
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
                  setFieldValue('applicable_items', newSelected);
                }}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
