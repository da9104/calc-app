import { useMealsListContext } from "../Providers/MealsProvider";

const MealsList = () => {

    const {meals} = useMealsListContext()

    return (
        <div>
            <h3>number of meals today: {meals.length} </h3>
        </div>
  
    )
}

export default MealsList