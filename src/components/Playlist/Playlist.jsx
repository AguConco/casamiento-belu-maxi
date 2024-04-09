import { faAngleLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext, useEffect, useState } from "react"
import { Link, Routes, Route } from "react-router-dom"
import './Playlist.css'
import { Song } from "./Song"
import { Category } from "./Category"
import { PlaylistContext, audio } from "../../context/PlaylistContext"
import { PlaylistCategoies } from "./PlaylistsCategories"

export const Playlist = () => {

    const {
        playPauseSong,
        getCategories,
        searchSpotify,
        resetValues,
        token,
        idSong
    } = useContext(PlaylistContext)

    const [list, setList] = useState(null)
    const [categories, setCategories] = useState([])

    useEffect(() => {

        const a = async () => token && setCategories(await getCategories())
        a()
        return () => audio ? resetValues() : false
    }, [token])

    return (
        <div className="playlist">
            <header>
                <Link to={'#'} onClick={() => window.history.back()}><FontAwesomeIcon icon={faAngleLeft} size="2xs" /> Volver</Link>
                <h3>Añadir tema a la playlist</h3>
                <input className="search" type='text' placeholder="Buscar canción" onKeyUp={async (e) => setList(await searchSpotify(e))} />
            </header>
            {list
                ? list.length !== 0 ?
                    <ul>{list.map(e =>
                        <Song
                            e={e}
                            playPauseSong={playPauseSong}
                            idSong={idSong}
                        />)}
                    </ul>
                    : <div className="empty-list">
                        <span>
                            No se encontron resultados
                        </span>
                    </div>
                :
                <Routes>
                    <Route path={'/'} element={<ul className="categories">{categories.map((e, i) => i !== 0 && <Category e={e} />)}</ul>} />
                    <Route path={'/:id'} element={<PlaylistCategoies />} />
                </Routes>
            }
        </div>
    )
}