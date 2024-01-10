
import './App.css'
import Dashboard from './components/Dashboard/Dashboard'
import RecomendedVideos from './components/RecomendedVideos/RecomendedVideos'
import Header from './shared/Header/Header'

function App() {
  
   return (
    <div className='app'>
    {/* <h1>Let&apos;s Build a youtube clone</h1> */}
      {/* Header */}
      <Header/>
      <div className="app_page">
      <Dashboard/>
      <RecomendedVideos/>
      </div>
      {/* sidebar    &   Recomended video */}
      {/* 1h:43min paused */}
    </div>
   )
  
}

export default App
