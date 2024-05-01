import { Box, Image, Text } from '@chakra-ui/react'
 

const FrameType = ({src , type ,fil , setfilter}) => {
  return (
      <Box onClick={()=>setfilter((pre)=>[...pre , fil])}  mr="3px" border="1px solid" borderColor="gray.300"
      cursor={'pointer'}>
        <Image m="7px auto" width="45px" src={src} />
        <Text mx="5px" textAlign="center">{type}</Text>
      </Box>
 
  )
}

export default FrameType