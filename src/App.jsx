// import './App.css'
// import Basic from './Class-components/Basic'
// import RenderingLists from './embedding-expression/RenderingLists'
// import Welcome from './embedding-expression/welcome'
// import Calling_function from './embedding-expression/calling_function'
// import Conditional from './embedding-expression/Conditional'

// import Counter from "./Class-components/Counter"
// import Counter_homework from "./Class-components/work"

// import UsingProps from "./Class-components/UsingProps"

// const App = () => {


//   return (
//     <>
      {/* <Welcome/> */}
      {/* <Calling_function/> */}
      {/* <Conditional/> */}
      {/* <RenderingLists/> */}



      {/* // '.......class components...... */}

      {/* <UsingProps name="avanthiiii"/> */}
      {/* <Counter/> */}

//     </>
//   )
// }

// export default App



// '{/* .......class components...... */}


import React, { Component } from 'react'
import { ThemeProvider } from './functionalComponent/Hooks/UseContext-Hook/dark&light-mode/ThemeProvider'
import Home from './functionalComponent/Hooks/UseContext-Hook/dark&light-mode/Home'
// import NameForm from './functionalComponent/UseState/NameForm'
// import ToggleButton from './functionalComponent/UseState/ToggleButton'
// import Example3 from './functionalComponent/Life-Cycle-Method/Example3'
// import OnMount from './functionalComponent/Life-Cycle-Method/OnMount'
// import UserList from './functionalComponent/Hooks/UserList'
// import Timer from './functionalComponent/Hooks/Timer'
// import ButtonUnMount from './Class-components/Life-cycle-method/ButtonUnmount'
// import Unmounting from './Class-components/Life-cycle-method/Unmounting'
// import Updating from './Class-components/Life-cycle-method/Updating'
// import Mounting from './Class-components/Life-cycle-method/Mounting'
// import Counter_homework from './Class-components/work'
// import Basic from './Class-components/Basic'
// import UsingProps from './Class-components/UsingProps'


export default class App extends Component {
  render() {
    return (
      <>
      {/* {<Basic/>} */}
      {/* <UsingProps name="avanthi"/> */}
      {/* <Counter_homework/> */}
      {/* <Mounting/> */}
      {/* <Updating/> */}
      {/* <Unmounting/> */}
      {/* <ButtonUnMount/> */}
      {/* <Timer/> */}
      {/* <UserList/> */}
      {/* <OnMount/> */}
      {/* <Example3/> */}
      {/* <NameForm/> */}
      {/* <ToggleButton/> */}



     <ThemeProvider>
       <Home/>
     </ThemeProvider>


      </>
    )
  }
}
