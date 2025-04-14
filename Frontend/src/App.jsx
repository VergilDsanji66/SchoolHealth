import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Content from './Components/Content/Content'

const App = () => {

  const [selectedId, setSelectedId] = useState(null);

  return (
    <div>
      <Navbar onSelectedId={setSelectedId} />
      <Content selectedId={selectedId} />
    </div>
  )
}

export default App