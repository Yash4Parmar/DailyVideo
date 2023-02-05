import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchFromAPI';
import ChannelCard from './ChannelCard';
import Videos from './Videos';

const ChannelDetail = () => {
    const { id } = useParams();
    const [channelDetail, setChannelDetail] = useState();
    const [videos, setVideos] = useState([]);
    console.log(videos);
    useEffect(() => {
        fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => setChannelDetail(data.items[0]))
        fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) => setVideos(data?.items))
    }, [id]);
    return (
        <Box sx={{ minHeight: '95vh' }}>
            <Box>
                <div style={{ background: "red", zindex: '10', height: '300px' }}></div>
                <ChannelCard channelDeatil={channelDetail} marginTop='-92px'></ChannelCard>
            </Box>
            <Box display="flex" p="2">
                <Box sx={{ mr: { sm: '100px' } }} />
                <Videos videos={videos} />
            </Box>

        </Box >
    )
}

export default ChannelDetail
