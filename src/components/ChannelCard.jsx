import React from 'react'
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoProfilePicture } from '../utils/constants';
import { Link } from 'react-router-dom';

const ChannelCard = ({ channelDeatil, marginTop }) => {
    return (
        <Box
            sx={{
                boxShadow: 'none',
                borderRadius: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: { xs: '356px', md: '320px' },
                height: '326px',
                margin: 'auto',
                marginTop
            }}>
            <Link to={`/channel/${channelDeatil?.id?.channelId}`}>
                <CardContent
                    sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#000000' }}>
                    <CardMedia image={channelDeatil?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                        alt={channelDeatil?.snippet?.title}
                        sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }} />
                    <Typography variant='h6'>{channelDeatil?.snippet?.title}
                        <CheckCircle sx={{ fontSize: 15, color: "grey", ml: '5px' }} />
                    </Typography>
                    {channelDeatil?.statistics?.subscriberCount && (
                        <Typography>
                            {parseInt(channelDeatil?.statistics?.subscriberCount).toLocaleString()} Subscribers
                        </Typography>
                    )}

                </CardContent>
            </Link>

        </Box>
    )
}

export default ChannelCard
