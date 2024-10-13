import * as React from "react";
import { useState, useEffect } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectCategory() {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");


  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://opentdb.com/api_category.php");
        const data = await response.json();
        setCategories(data.trivia_categories);


        const savedCategory = localStorage.getItem("selectedCategory");
        if (savedCategory) {
          setSelectedCategory(savedCategory); 
        } else {
          setSelectedCategory(data.trivia_categories[0].name);
          localStorage.setItem(
            "selectedCategory",
            data.trivia_categories[0].name
          );
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchCategories();
  }, []);

  
  const handleCategoryChange = (value) => {
    setCategory(value);
    setSelectedCategory(value);
    localStorage.setItem("selectedCategory", value); 
  };

  return (
    <Select value={selectedCategory} onValueChange={handleCategoryChange}>
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='Select Category' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Category</SelectLabel>
          {categories.map((category) => (
            <SelectItem key={category.id} value={category.name}>
              {category.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
