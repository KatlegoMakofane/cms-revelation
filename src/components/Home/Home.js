import React, {useState} from "react";
import { Link} from "react-router-dom";
import Inventory from "../Inventory/Inventory";
import PendingOrders from "../PendingOrders/PendingOrders";
import OrderHistory from "../OrderHistory/OrderHistory";
import AddProductForm from "../AddProduct/AddProduct";
import './Home.css';
function Home() {
  const [activeBtn, setActiveBtn] = useState(0);
  console.log("You clicked button "+activeBtn)
    const toogle=(index) =>{ 
      setActiveBtn(index)
   }
  return (
<<<<<<< HEAD
    <div>
      <h2>Welcome to the Home Page</h2>
      <nav>
=======
    <div className="Home">
      <h2>Welcome to the Home Page</h2>
      <nav className="sidebar">
>>>>>>> 022a5cdb11cdcd84c848c022bec95327c42c145e
        <ul>
          <li>
            <Link onClick={()=>toogle(0)}  className={activeBtn === 0 ? 'activebtn' : "activebtn2" } to="/inventory">Inventory</Link>
          </li>
          <li>
            <Link onClick={()=>toogle(1)}  className={activeBtn === 1 ? 'activebtn' : "activebtn2" } to="/pending-orders">Pending Orders</Link>
          </li>
          <li>
            <Link onClick={()=>toogle(2)}  className={activeBtn === 2 ? 'activebtn' : "activebtn2" } to="/order-history">Order History</Link>
          </li>
        </ul>
      </nav>
<<<<<<< HEAD
      <div>
=======
      <div className="centerCms" >
>>>>>>> 022a5cdb11cdcd84c848c022bec95327c42c145e
      {
                ( activeBtn === 0 ? <Inventory /> : activeBtn === 1 ? <PendingOrders /> : <OrderHistory /> )
            }
      </div>
<<<<<<< HEAD
      <div>
=======
      <div className="rightbar">
>>>>>>> 022a5cdb11cdcd84c848c022bec95327c42c145e
        <AddProductForm/>
      </div>
    </div>
  );
}

export default Home;
