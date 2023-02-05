import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material'
// import { borderRight } from '@mui/system';
import { Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { useParams } from 'react-router-dom';

const SearchFeed = () => {

    const [videos, setVideos] = useState([]);
    const { searchTerm } = useParams();

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
            .then((data) => setVideos(data.items))
    }, [searchTerm]);

    return (
        <Box p={2} sx={{ overflowY: 'aut0', height: '90vh', flex: 2 }}>
            <Typography variant='h4' fontWeight="bold" md={2} sx={{}}>
                Search results for: <span style={{ color: '#F31503' }}>{searchTerm}</span>
            </Typography>
            <Videos videos={videos} />
        </Box>
    )
}

export default SearchFeed
