import { useTheme } from '@emotion/react'
import { Box } from '@mui/material';
import React from 'react'

type Props = {}

const Dashboard = (props: Props) => {
    const {palette} = useTheme();
  
    return (
            <Box color={palette.gray[300]}>Dashboard</Box>
  )
}

export default Dashboard