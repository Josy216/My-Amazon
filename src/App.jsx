import Routering from './Routering'
import { useContext, useEffect } from 'react'
import { DataContext } from './components/DataProvider/DataProvider'
import { Type } from './utils/Utility'
import { auth } from './utils/Firebase'
function App() {

  const [{user}, dispatch] = useContext(DataContext)
  console.log(user)
  useEffect(()=>{
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // User is signed in
        dispatch({
          type: Type.SetUser,
          user: authUser
        })
      } else {
        // User is signed out
        dispatch({
          type: Type.SetUser,
          user: null
        })
      }
    })
  }, [])





  return (
    <Routering />
  )
}

export default App
//fakestoreapi.com/product/