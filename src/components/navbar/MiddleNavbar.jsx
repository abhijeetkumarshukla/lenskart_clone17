import { Box, Button, Flex, Image, Input, ScaleFade, Text, useDisclosure} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import SignIn from "/src/Pages/login/SignIn.jsx";
import SignUp1 from "/src/Pages/login/SignUp.jsx";
// import myImage from "../../../src/components/assets/heart.jpeg";
 



export function ScaleFadeEx() {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <>
      <Button onClick={onToggle}>SignIn</Button>
      <ScaleFade initialScale={0.9} in={isOpen}>
        <Box
          p='40px'
          color='white'
          mt='4'
          bg='teal.500'
          rounded='md'
          shadow='md'
        >
          Fade
        </Box>
      </ScaleFade>
    </>
  )
}

const MiddleNavbar = () => {
  return (
    <Box  display={"flex"} justifyContent={"space-evenly"}
    position={'relative'}
    zIndex={2}>

       
            {/* main logo */}
        <Box display={['none','none','block', 'block']} >
          <NavLink to='/' >
            <Image
              src=" https://static.lenskart.com/media/desktop/img/site-images/main_logo.svg"
              alt="Lenskart Logo"
            />
          </NavLink>

        </Box>
        <Box display={['block', 'block','none','none']} mt={3} pr={2} > 
          <NavLink to={'/'}> 
          <Image h={'30'}
              src=" https://static5.lenskart.com/media/uploads/home-new-lenskart-logo.png"
              alt="Lenskart Logo"
            />
            </NavLink>
        </Box>

            {/* Call number */}
        <Box  mt='1.5%' display={['none','none','block', 'block']} >
          <NavLink   >
            <Image height={"26px"}
              src="https://static.lenskart.com/media/mobile/images/phone_number.svg"
              alt="Call Number"
            />
          </NavLink>
        </Box>
          
          {/* search bar or input  */}
        <Box w='30%' mt='1.1%' p='-0.2%' display={['none','none','block', 'block']} >
            <Input placeholder="What are you looking for?" type="input"/>
        </Box>

        <Box w='45%'   mt='1.1%' p='-0.1%' display={['block', 'block','none','none']} >
            <Input placeholder="What are you looking for?" type="input"/>
        </Box>

         {/* Track Order */}
        <Box mt='1.5%' display={['none','none','block', 'block']}  >
          <NavLink><Text>Track Order</Text></NavLink>
        </Box>
     
        {/* signIn or signUp */}
        <Box mt='1.5%'   display={['none','none','block', 'block']}>
           
           <Flex gap={0}>
                  <SignIn/> <Text>&</Text>
                   <SignUp1/>
           </Flex>
        </Box>

        <Box mt='2%'    display={['block', 'block','none','none']} >
           
           <Flex gap={0}>
                  <SignIn/>&
                   <SignUp1/>
           </Flex>
        </Box>

           {/* wishlist */}
        <Box mt='1.5%'   display={['none','none','block', 'block']} >
             <NavLink to='/wishlist'>
                <Flex alignItems={'center'}>
             <Image h="50%" w='17%'  src=' https://static5.lenskart.com/media/uploads/heart.png' alt=" "/>
             <Text   ml="10%" >Wishlist</Text>
                </Flex>
             </NavLink>
         </Box>

         <Box ml={1} mr={2} display={['block', 'block','none','none']} >
         <Image h="28px" w='28px' mr={1}  mt={1} src="  https://static5.lenskart.com/media/uploads/heart.png" alt="WishList icon"/>
         </Box>
 
          {/* cart */}
         <Box mt='1.5%' display={['none','none','block', 'block']} >
            <NavLink to='/cart'>
                <Flex>

            <Image w='20px' h="65%" src=" https://static5.lenskart.com/media/uploads/shopping-bag-02.png" alt=" "></Image>
            <Text  ml="8%" >Cart</Text>
                </Flex>
           </NavLink> 
         </Box>

         <Box   display={['block', 'block','none','none']} >
         <Image w='28px'  mt={1} h="28px" src=" https://static5.lenskart.com/media/uploads/shopping-bag-02.png" alt="icon"/>
         </Box>
       
    </Box>
  );



   
};

export default MiddleNavbar;
