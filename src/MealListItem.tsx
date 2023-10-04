import { MealList } from "./models/MealList";

//Nel caso il json non sia impaginato ritornerà un array di MealList
interface MealListItemProps {
  meal: MealList;
}

// Questa vale nel caso in cui il json sia impaginato
function MealListItem({ meal }: MealListItemProps) {
  return (
    <tbody>
      <tr>
        <td>{meal.idCategory}</td>
        <td>{meal.strCategory}</td>
        <td>{meal.strCategoryDescription}</td>
        <td>
          <img src={meal.strCategoryThumb} alt={meal.strCategoryDescription} />
        </td>
      </tr>
    </tbody>
  );
}

export default MealListItem;
