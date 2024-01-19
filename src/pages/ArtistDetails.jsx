import { useParams  } from "react-router-dom";
import { useSelector } from "react-redux";
import { DetailsHeader, Error,Loader, RelatedSongs } from "../components";

import {useGetArtistDetailsQuery} from "../redux/services/shazamCore"

const ArtistDetails = () => {

    const {id:artistId} = useParams()
    const {activeSong, isPlaying} = useSelector((state)=>state.player)
    const {data: artistData , isFetching: isFetchingArtistDetails,error} = useGetArtistDetailsQuery(artistId) 

    if(isFetchingArtistDetails ) return <Loader title={"Loading artist details"}/>
    if(error) return <Error />
    console.log(artistData)
    console.log(artistData?.data[0].views["top-songs"].data)
    return(
        <div className="flex flex-col">
            <DetailsHeader artistId={artistId} artistData={artistData}/>
            <RelatedSongs data={Object.values(artistData?.data[0].views["top-songs"].data)} 
                        isPlaying={isPlaying} 
                        activeSong={activeSong}
                        
                        
            />
        </div>
        )
    
}

export default ArtistDetails;
