import { useState, useEffect } from "react";
import { MealList } from "./models/MealList";
import { PagedMealList } from "./models/PagedMealList";
import "./App.css";
import MealListItem from "./MealListItem";

function App() {
  const [meals, setMeals] = useState<MealList[]>([]);

  // Use effect accetta due parametri, il primo è una callback, il secondo è un array di dipendenze
  useEffect(() => {
    async function fetchMealCategories() {
      try {
        const res = await fetch(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        const pagedMealList: PagedMealList = await res.json();
        setMeals(pagedMealList.categories);
      } catch (error) {
        console.error(error);
      }
      // fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      // .then((res) => res.json())
      // .then((pagedMealList: PagedMealList) =>
      //   setMeals(pagedMealList.categories)
      // );
    }
    fetchMealCategories();
  });

  return (
    <>
      <h1>Meals</h1>
      <table>
        <th>IdCategory</th>
        <th>StrCategory</th>
        <th>StrCategoryDescription</th>
        <th>StrCategoryThumb</th>
        {meals.map((meal) => (
          <MealListItem key={meal.idCategory} meal={meal} />
        ))}
      </table>
    </>
  );
}

export default App;
