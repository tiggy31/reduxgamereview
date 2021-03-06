import axios from 'axios'
import {popularGamesUrl,upcomingGames,newgamesurl, searchGameURL} from '../api'


export const loadGames = () => async (dispatch) =>  {
    const popularData = await axios.get(popularGamesUrl())
    const newGamesData = await axios.get(newgamesurl())
    const upcomingData = await axios.get(upcomingGames())

     dispatch({
         type: "FETCH_GAMES",
         payload: {
             popular: popularData.data.results,
             newGames: newGamesData.data.results,
             upcoming: upcomingData.data.results
           
         }
     })
    
}

export const fetchSearch = (game_name) => async(dispatch) => {
    const searchGames = await axios.get(searchGameURL(game_name))
    dispatch({
        type: 'FETCH_SEARCHED',
        payload:({
           searched: searchGames.data.results
        })
    })
} 


