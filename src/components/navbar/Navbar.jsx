 
import { Box } from '@chakra-ui/react'
import TopNavbar from './TopNavbar'
import MiddleNavbar from './MiddleNavbar'
import DropdownNavbar from './DropdownNavbar'
 
 
 

const Navbar = () => {
 
  return (
    <Box   w={'100%'}  > 
      <TopNavbar/>
      <MiddleNavbar/>
      <DropdownNavbar/>
      
      
    </Box>
  )
}

export default Navbar
