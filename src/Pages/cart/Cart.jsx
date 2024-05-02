
import React, { useEffect } from "react";
import { Box, Button, Divider, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
 

const Cart = () => {
  const [cart, setCart] = React.useState(JSON.parse(localStorage.getItem("cart")) || []);

  const handleRemove = (idToRemove) => {
    
    const updatedCart = cart.filter((item) => item.id !== idToRemove);
    
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    
    setCart(updatedCart);

    
  };

  useEffect(()=>{
    window.scroll({
      top:0,
      behavior:'instant'
    })
  },[])
  return (
    <>
     {cart.length===0? null:<Navbar/> }
      
      {cart.length ? (
        cart.map((elem) => (
         
          <Box key={elem.id} >
            <Divider mb={10} bg={"grey"} h={0.8} />
            <Flex w={"70%"} m={"auto"} justifyContent={"space-between"}>
              <Flex justifyContent={"space-between"}>
                <Box w={80}>
                  <img src={elem.image} alt="" />
                </Box>
                <Box>
                  <Text color={"blue"} fontWeight={400}>
                    {elem.Header}
                  </Text>
                  <Text fontWeight={400} fontSize={"13px"} mb={3}>
                    ID: {elem.id}
                  </Text>
                  <Text fontWeight={400} mb={5}>
                    ₹{elem.price}
                  </Text>
                  <Button
                    color={"black"}
                    fontWeight={400}
                    onClick={() => handleRemove(elem.id)}
                  >
                    Remove
                  </Button>
                  <Box>{elem.footer}</Box>
                </Box>
              </Flex>
              <Flex>
                <SimpleGrid gap={2}>
                  <Box p={2} border={"1px solid rgba(0,0,0,0.2)"}>
                    <Text mb={2} fontWeight={600}>
                      Standard: Shipping & Handling Included
                    </Text>
                    <Text fontWeight={300} fontSize={"12px"}>
                      Estimated Delivery
                    </Text>
                    <Text fontWeight={600} color={"green"}>
                      5 to 6 Days
                    </Text>
                  </Box>
                  <Box p={2} border={"1px solid rgba(0,0,0,0.2)"}>
                    <Text mb={2} fontWeight={600}>
                      Express 1 to 2 Business Days: $3.96
                    </Text>
                    <Text fontWeight={300} fontSize={"12px"}>
                      Estimated Delivery
                    </Text>
                    <Text fontWeight={600} color={"green"}>
                      2 to 3 Days
                    </Text>
                  </Box>
                  <Text
                    color={"blue"}
                    _hover={{ textDecoration: "underline" }}
                    fontWeight={400}
                    cursor={"pointer"}
                  >
                    Delivery Details
                  </Text>
                </SimpleGrid>
              </Flex>
            </Flex>
          </Box>
        ))
      ) : (
           <Box >
             <Flex w={'85%'} justifyContent={"space-between"} m={'auto'} 
               bg={'white'}
             >   <Link to={'/'}>
               <img src="https://static.lenskart.com/media/desktop/img/site-images/main_logo.svg" alt="" />
             </Link>
               <Flex  >
                  <img width={20} src="https://static.lenskart.com/media/desktop/img/DesignStudioIcons/Shield.svg" alt="" />
                  <Text mt={5} ml={2}> 100% safe and secure</Text>
               </Flex>
             </Flex>
 
        <SimpleGrid justifyContent={'center'} m={'auto'}      bg={'#FBF9F7'}  >
          
          <Text fontSize={"30px"} fontWeight={400} mb={3} mt={'170px'} >
          Your shopping cart is empty! 
          </Text>  
          <Link to={"/"}>
            <Button
            mt={5}
            fontSize={'24px'}
            borderRadius={'50px'}
            ml={10}
            p={7}
            w={'80%'}
            _hover={{ color: "white" }}
            bg={"#11DAAC"}
            color={"#010045"}
            >
              Continue Shopping
            </Button>

          </Link>
         
         <Text mt={200}>.</Text>
        </SimpleGrid>
               </Box>
      )}
    </>
  );
};

export default Cart;

