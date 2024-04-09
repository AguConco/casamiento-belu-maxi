import { useContext, useEffect, useState } from "react"
import { PlaylistContext } from "../../context/PlaylistContext"
import { Category } from "./Category"
import { Link, useParams, useLocation } from "react-router-dom"
import { Song } from "./Song"

export const PlaylistCategoies = () => {

    const {
        playPauseSong,
        getTracksFormPlaylist,
        getPlaylistFromCategory,
        token,
        idSong
    } = useContext(PlaylistContext)

    const { id } = useParams()

    const location = useLocation()

    const [list, setList] = useState([])

    const params = new URLSearchParams(location.search);
    const name = params.get('name');
    const url = params.get('url');
    const search = params.get('search');

    const category ={
        name,
        id,
        icons: [{
            url
        }],
    }

    useEffect(() => {
        if (token) {
            search == 'category'
                ? getPlaylistFromCategory(id)
                    .then(e => setList(e))
                : getTracksFormPlaylist(id)
                    .then(e => setList(e))
        }
    }, [token, id])

    return (
        token &&
        <ul className="playlists-category">
            <li className="category-detail">
                <Category e={category} />
            </li>
            {search === 'category'
                ? list.map(e =>
                    e && e.id &&
                    <li>
                        <Link
                            to={`/playlist/${e.id}?name=${e.name}&search=playlist&url=${e?.images[0]?.url}`}
                        >
                            <img src={e?.images[0]?.url} alt="" />
                            <span>{e.name}</span>
                        </Link>
                    </li>
                )
                : list.map(e =>
                    <Song
                        e={e.track}
                        playPauseSong={playPauseSong}
                        idSong={idSong}
                    />
                )
            }
        </ul>
    )
}