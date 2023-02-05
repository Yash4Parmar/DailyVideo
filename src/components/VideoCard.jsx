import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { demoThumbnailUrl, demoChannelUrl, demoVideoTitle, demoVideoUrl, demoChannelTitle, logo } from '../utils/constants';


const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
    return (
        <Card sx={{ width: { xs: '100%', sm: '358px', md: "320px" }, boxShadow: 'none', borderRadius: '15px' }}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <CardMedia
                    image={snippet?.thumbnails?.high?.url}
                    alt={snippet?.title}
                    sx={{ width: { xs: '100%', sm: '358px', md: "320px" }, height: 180 }}
                />
                <CardContent sx={{ background: '#1e1e1e', height: '106px' }}>
                    <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                        <Typography variant='subtitle1' fontWeight="bold" color="#FFF">{snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}</Typography>
                    </Link>
                    <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                        <Typography variant='subtitle2' fontWeight="bold" color="grey">{snippet?.channelTitle.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                            <CheckCircle sx={{ fontSize: 12, color: "grey", ml: '5px' }} />
                        </Typography>
                    </Link>
                </CardContent>
            </Link >
        </Card >
    )
}

export default VideoCard
