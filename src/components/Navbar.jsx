import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom';
import { logo } from '../utils/constants';
import SearchBar from './SearchBar';

const Navbar = () => (
    <div>
        <Stack direction="row" alignItems="center" p={2} sx={{ position: 'sticky', top: 0, justifyContent: 'space-between', background: "#212122" }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
                <img src={logo} alt="logo" height={35} />
            </Link>
            <SearchBar />
        </Stack>
    </div>

)

export default Navbar
