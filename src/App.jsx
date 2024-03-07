import { useLoaderData } from 'react-router-dom'
import './App.css'
import NavBar from './Component/NavBar'
import CoffeeCard from './Component/CoffeeCard';

function App() {
   const coffees = useLoaderData()
  
   console.log(coffees);
  return (
    <>
      <NavBar></NavBar>
      <h1>Hot Hot Coffee: {coffees.length}</h1>
       {
        coffees.map(coffee=>
          <CoffeeCard key={coffee._id} coffee={coffee}>

          </CoffeeCard>
        )
       }
    </>
  );
}

export default App
