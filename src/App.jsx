import { Main } from "./components/homeComponent/Main"
import { LatestDiscussions } from "./components/latestDiscussions/LatestDiscussions"
import { NavBar } from "./components/navBar/NavBar"
import { SecondaryNavBar } from "./components/navBar/SecondaryNavBar"
import { TopicsComponent } from "./components/topicsComponent/TopicsComponent"


function App() {

  return (
    <>
      <SecondaryNavBar/>
      <NavBar/>
      <Main/>
      <TopicsComponent/>
      <LatestDiscussions/>
    </>
  )
}

export default App
