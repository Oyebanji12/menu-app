import react from  "react"
import {useState} from "react"
import Categories from "./Component/Categories"
import items from "./Component/data"
import Menu from "./Component/Menu"

function App() {
  const [menuItems, setMenuItems]= useState(items)
  

  console.log(items)

  const filterItems=(category)=>{
    if(category === 'all'){
      setMenuItems(items)
      return;

    }
    let newBreakFastItems= items.filter((item)=> item.category === category)
    setMenuItems(newBreakFastItems)

    let newLunchItems= items.filter((item)=> item.category === category)
    setMenuItems(newLunchItems)

    let newDinnerItems= items.filter((item)=> item.category === category)
    setMenuItems(newDinnerItems)
    

  }
  
  
  return (
    <div>
      <main>
        <section className="menu-section">
          <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
          </div>

        <Categories filterItems={filterItems} />
        <Menu itemz={menuItems} />
      
      </section>
    </main>
    </div>
  );
}

export default App;
