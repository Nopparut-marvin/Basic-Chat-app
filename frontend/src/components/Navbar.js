import React from 'react'
import { Box } from '@material-ui/core'

const Navbar =()=> {
    return (
        <>
            <Box style={{backgroundColor:"#1d3557"}} width="100%" height="70px" display="flex" alignItems="center" justifyContent="space-between" >
        <Box marginLeft="15px">App Chat</Box>
        <Box marginRight="15px">
            close
        </Box>
            </Box>
        </>
    )
}
export default Navbar;