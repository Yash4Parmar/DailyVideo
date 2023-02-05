import React from 'react'
import { Button, Stack } from '@mui/material';
import { categories } from '../utils/constants';

const Sidebar = ({ selectedCategory, setSelectedCategory }) => (
    <Stack direction="row"
        sx={{ overFlowY: "auto", height: { sx: 'auto', md: '95%' }, flexDirection: { md: 'column' } }}>
        {categories.map((category) => (
            <Button className="category-btn"
                onClick={() => { setSelectedCategory(category.name) }}
                style={{ background: category.name === selectedCategory && '#FC1503', color: 'black' }} key={category.name}>

                <span style={{ color: category.name === selectedCategory ? 'white' : 'black' }}>{category.icon}</span>
                <span style={{ opacity: category.name === selectedCategory ? '1' : '0.8' }}>{category.name}</span>
            </Button>
        ))
        }

    </Stack >
)


export default Sidebar
