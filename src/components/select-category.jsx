import * as React from "react";

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
  const [categories, setCategories] = React.useState([]);
  const [category, setCategory] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState("");

  // Fetch categories from the API when component mounts
  React.useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://opentdb.com/api_category.php");
        const data = await response.json();
        setCategories(data.trivia_categories);

        // Check if a category was previously selected and stored in localStorage
        const savedCategory = localStorage.getItem("selectedCategory");
        if (savedCategory) {
          setSelectedCategory(savedCategory); // Load saved category if exists
        } else {
          // Set the default to the first category and save it to localStorage
          setSelectedCategory(data.trivia_categories[0].name);
          localStorage.setItem("selectedCategory", data.trivia_categories[0].name);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchCategories();
  }, []);

  // Handle category selection
  const handleCategoryChange = (value) => {
    setCategory(value);
    setSelectedCategory(value);
    localStorage.setItem("selectedCategory", value); // Save selected category to localStorage
  };

  return (
    <Select value={selectedCategory} onValueChange={handleCategoryChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select Category" />
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
