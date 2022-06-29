import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import BaseHeader from "./component/BaseHeader";
import Inventory from "./page/inventory/Inventory";
import Home from "./page/market/Home";
import { sizeAction } from "./redux/action/size-action";

function App() {  
  const dispatch = useDispatch()
  const size = useSelector((state) => state.size.size);

  const [pdHor, setPdHor] = useState('pd-hor-3rem');

  useEffect(()=>{
    if(size == 'xl' || size == 'lg') setPdHor('pd-hor-3rem');
    else if(size == 'md') setPdHor('pd-hor-2rem')
    else setPdHor('pd-hor-1rem')
  }, [size])

  function handleChangeSize(){
    const {innerWidth, innerHeight} = window;
    let sizeType = ''
    if(innerWidth < 576){
      sizeType = 'xs'
    }
    else if(innerWidth >= 576 && innerWidth < 768){
      sizeType = 'sm'
    }
    else if(innerWidth >= 768 && innerWidth < 992){
      sizeType = 'md'
    }
    else if(innerWidth >= 992 && innerWidth < 1200){
      sizeType = 'lg'
    }
    else sizeType = 'xl';

    dispatch(sizeAction(sizeType));
  }
  useEffect(()=>{
    handleChangeSize()
    window.addEventListener("resize", handleChangeSize)
  }, [])
  return (
    <div className={pdHor}>
      <BaseHeader/>
 
        <Switch>
        <Route path='/' exact>
            <Redirect to='/market'/>
          </Route>
          <Route path='/market' exact>
            <Home/>
          </Route>
          <Route path='/inventory' exact>
            <Inventory/>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
