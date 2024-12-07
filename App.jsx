import MentalHealthInfographic from './components/MentalHealthInfographic'
import DailyChallengesInfographic from './components/DailyChallengesInfographic'
import ResourceInfographic from './components/ResourceInfographic'


function App() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <MentalHealthInfographic />
      <hr className="border-gray-200" />
      <DailyChallengesInfographic />
      <hr className="border-gray-200" />
      <ResourceInfographic />
    </div>
  )
}

export default App