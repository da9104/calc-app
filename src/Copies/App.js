import React from 'react'
import MealsProvider from './Providers/MealsProvider';
import MealsList from './components/MealsList'
import Counter from './components/Counter'

function App() { 
  return ( 
   <div>
   <MealsProvider>
    <MealsList />
    <Counter />
   </MealsProvider>
    </div>
  ); 
}; 

export default App;