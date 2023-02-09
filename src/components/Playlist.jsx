import { useRef, useState, useEffect } from "react"
import napster from "../services/napster"
import "../css/global.css"

function Playlist({ song }) {

    const [isPlaying, setIsPlaying] = useState(false)
    const [tracks, setTracks] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const music = useRef()
    const key = "ZTVhYTU3MWEtZjRhNy00MmRmLWJiZDAtNjQwNTAwN2E0ODhi"

    useEffect(() => {
        getMusics()
    }, [])

    useEffect(() => {
        console.log(tracks)
    }, [tracks])

    const getMusics = async () => {
        let musics = await napster.get(`top?apikey=${key}`).then(r => r)
        setTracks(musics.data.tracks)
    }

    const play = () => {
        music.current.play()
        setIsPlaying(true)
    }

    const pause = () => {
        music.current.pause()
        setIsPlaying(false)
    }

    function playmusicas(link){
        if(music.current.src==link){
            if (isPlaying==true){
                pause()
            }
            else if (isPlaying==false){
                play()
            }
        }
        else{
            music.current.src = link
            play()
        }
    }

    return (
        <>
        <table>
            <thead>
            <tr>
                <th>Música</th>
                <th>Artista</th>
                <th>Ouvir</th>
            </tr>
            </thead>

            <tbody>
            {tracks.map(({artistName, name, id, previewURL}) => (
                    <tr key={id}>
                        <td>{name}</td>
                        <td>{artistName}</td>
                        <td>
                            <audio ref={music} src={previewURL}></audio>
                            <button onClick={()=> playmusicas(previewURL)}>
                                Ouvir
                            </button>
                        </td>
                    </tr>
            ))}
            </tbody>
        </table>
        </>
    )
}

export default Playlist