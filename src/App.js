import './App.css'
import { icon5, icon6 } from './assets/icons/icons'
import img6 from './assets/img/img6.jpeg'
import { ConfirmAssistance } from './components/ConfirmAssistance/ConfirmAssistance'
import { Counter } from './components/Counter/Counter'
import { Date } from './components/Date/Date'
import { Events } from './components/Events/Events'
import { Gallery } from './components/Gallery/Gallery'
import { Hero } from './components/Hero/Hero'
import { Gifts } from './components/Gifts/Gifts'
import { AddSong } from './components/AddSong/AddSong'
import { Playlist } from './components/Playlist/Playlist'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { initializeApp } from "firebase/app";
import { DataGifts } from './components/DataGifts/DataGifts'
import { PlaylistProvider } from './context/PlaylistContext'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "boda-belu-maxi.firebaseapp.com",
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: "boda-belu-maxi.appspot.com",
    messagingSenderId: process.env.REACT_APP_MESSAGIN_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
}

initializeApp(firebaseConfig)

export const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={
                    <main>
                        <Hero />
                        <Date />
                        <Counter />
                        <Events />
                        <ConfirmAssistance />
                        <Gallery />
                        <Gifts />
                        <AddSong />
                        <section className='section7'>
                            <div>
                                {icon6}
                                <h3>Subí las fotos de los momentos compartidos</h3>
                                <a className='btn-primary' href="https://drive.google.com/drive/folders/1dKB-lbbhzYUYIlEJcaeKTnq8T2SXUK5b?usp=sharing" target="_blank" rel="noopener noreferrer">subir foto</a>
                            </div>
                        </section>
                        <section className='section8'>
                            <h4>¡Esperamos verte ahi!</h4>
                            <img src={img6} />
                        </section>
                        <footer>
                            <p>Hecho por <a href='https://agustin-concollato.netlify.app' target="_blank" rel="noopener noreferrer">Agustin Concollato</a></p>
                        </footer>
                    </main>
                }
                />
                <Route path='/playlist/*' element={
                    <PlaylistProvider>
                        <Playlist />
                    </PlaylistProvider>
                } />
                <Route path='/info-regalos' element={<DataGifts />} />
            </Routes>
        </BrowserRouter>
    )
}