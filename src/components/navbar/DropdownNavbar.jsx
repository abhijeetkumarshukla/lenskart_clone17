import {
    Avatar,
    Box,
    Button,
    Flex,
    Heading,
    Image,
    Popover,
    PopoverBody,
    PopoverContent,
    PopoverTrigger,
    SimpleGrid,
    Text,
  } from "@chakra-ui/react";
  import { NavLink } from "react-router-dom";
  import { AiOutlineRight } from "react-icons/ai";
  
  const DropdownNavbar = () => {
    return (
      <Flex bg={'#FBF9F7'}
      
      position={'relative'}
      zIndex={2}>
        <Flex gap={1} bg={'#FBF9F7'}>
          {/*01 - EYEGLASSES */}
          <Popover>
            <PopoverTrigger>
              <Button
                pt={"5"}
                pr={"1"}
                pb={5}
                bg={'#FBF9F7'}
                _hover={{ borderBottom: "2px solid blue" }}
                borderRadius={"none"}
              >
                EYEGLASSES
              </Button>
            </PopoverTrigger>
            <PopoverContent w={"1300px"}>
              <PopoverBody>
                <SimpleGrid
                  gridTemplateColumns={"repeat(2,1fr)"}
                  gap={3}
                  color={"61608B"}
                  alignItems={"start"}
                >
                  <SimpleGrid w={"300px"}>
                    {/*01  SELECT CATEGORY         */}
                    <SimpleGrid gap={3}>
                      <Text fontSize={"1.2rem"} color={"black"} ml={10}>
                        SELECT CATEGORY
                      </Text>
  
                      {/* Mens section       */}
                      <NavLink to={"/menproduct"}>
                        <Flex gap={3}>
                          <Avatar
                            m="20px"
                            name="Dan Abrahmov"
                            src="https://static.lenskart.com/media/desktop/img/men_pic.png"
                            alt="men"
                          />
                          <Box mt={7}>Men</Box>
                          <Box mt={"8"}>
                            <AiOutlineRight size="10px" />
                          </Box>
                          <Box mt={4} w={"160px"}>
                            {" "}
                            CLASSIC EYE-GLASSES{" "}
                            <Text>
                              Starting From ₹ <span>1199</span>
                            </Text>
                          </Box>
                          <Box mt={8}>
                            <AiOutlineRight size="10px" />
                          </Box>
                        </Flex>
                      </NavLink>
                      {/* Women section */}
                      <NavLink to={'/womenproduct'}>
                        <Flex gap={2}>
                          <Avatar
                            ml="20px"
                            name="Kola Tioluwani"
                            src="https://static.lenskart.com/media/desktop/img/women_pic.png"
                            alt="women"
                          />
                          <Box mt={3} ml={3}>
                            Women
                          </Box>
                          <Box mt={5}>
                            <AiOutlineRight size="10px" />
                          </Box>
                          <Box mt={1}>
                            CLASSIC EYE-GLASSES
                            <Text>
                              Starting From ₹ <span>1199</span>
                            </Text>
                          </Box>
                          <Box mt={5}>
                            <AiOutlineRight size="10px" />
                          </Box>
                        </Flex>
                      </NavLink>
  
                      {/* Kids section */}
  
                      <NavLink to={'/kidproduct'} >
                        <Flex gap={2}>
                          <Avatar
                            ml="20px"
                            mt={2}
                            name="Kent Dodds"
                            src="https://static.lenskart.com/media/desktop/img/kid_pic.png"
                            alt="kid"
                          />
                          <Box mt={5} ml={5}>
                            Kids
                          </Box>
                          <Box mt={7} ml={3}>
                            <AiOutlineRight size="10px" />
                          </Box>
                          <Box mt={1} ml={3} w={"160px"}>
                            CLASSIC EYE-GLASSES
                            <Text>
                              Starting From ₹ <span>1199</span>
                            </Text>
                          </Box>
                          <Box mt={5}>
                            <AiOutlineRight size="10px" />
                          </Box>
                        </Flex>
                      </NavLink>
                    </SimpleGrid>
                  </SimpleGrid>
  
                  <SimpleGrid
                    gridTemplateColumns={"repeat(4,1fr)"}
                    gap={3}
                    color={"61608B"}
                    alignItems={"start"}
                    w={"100%"}
                  >
                    {/* Our Top Picks */}
                    <SimpleGrid>
                      <Text fontSize={"1.3rem"} color={"black"}>
                        Our Top Picks
                      </Text>
                      <SimpleGrid gap={3} mt={5}>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                          New Arrivals
                        </Text>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                          Best Seller
                        </Text>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                          Lenskart BLU Lenses
                        </Text>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                          Tinted Eyeglasses
                        </Text>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                          Progressive Eyeglasses
                        </Text>
                      </SimpleGrid>
                    </SimpleGrid>
  
                    {/* Collection */}
                    <SimpleGrid gap={3}>
                      <Text fontSize={"1.3rem"} color={"black"}>
                        Collection
                      </Text>
                      <SimpleGrid gap={3}>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                          {" "}
                          Switch Grip
                        </Text>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                          {" "}
                          Gulmarg Collection
                        </Text>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                          {" "}
                          Urban Edit
                        </Text>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                          {" "}
                          Blend Edit
                        </Text>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                          {" "}
                          Sleek Steel
                        </Text>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                          Switch - Magnetic Clips-On
                        </Text>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                          Air Flex
                        </Text>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                          {" "}
                          Electro Punk
                        </Text>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                          Classic Acetate
                        </Text>
                      </SimpleGrid>
                    </SimpleGrid>
  
                    {/* Frames */}
                    <SimpleGrid gap={3}>
                      <Text fontSize={"1.3rem"} color={"black"}>
                        Frames
                      </Text>
                      <SimpleGrid gap={3}>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                          Rectangle Frames
                        </Text>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                          Cabinet Refacing
                        </Text>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                          Wayfarer Frames
                        </Text>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                          {" "}
                          Round Frames
                        </Text>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                          Aviator Frames
                        </Text>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                          {" "}
                          Cat-Eye Frames
                        </Text>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                          Rimless Frames
                        </Text>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                          Halfrim Frames
                        </Text>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                          {" "}
                          Geometric Frames
                        </Text>
                      </SimpleGrid>
                    </SimpleGrid>
  
                    <SimpleGrid gap={3}>
                      <Text fontSize={"1.3rem"} color={"black"}>
                        Brands
                      </Text>
                      <SimpleGrid gap={3}>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                          Blinds, Shades & Shutters
                        </Text>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                          Cabinet Refacing
                        </Text>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                          Custom Closet & Storage Design
                        </Text>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                          Garage Door & Opener Installation
                        </Text>
                      </SimpleGrid>
                    </SimpleGrid>
                  </SimpleGrid>
                </SimpleGrid>
              </PopoverBody>
            </PopoverContent>
          </Popover>
  
          {/* 02 COMPUTER GLASSES */}
  
          <Popover>
            <PopoverTrigger>
              <Button
                pt={"5"}
                pr={"1"}
                pb={5}
                bg={'#FBF9F7'}
                _hover={{ borderBottom: "2px solid blue" }}
                borderRadius={"none"}
              >
                {" "}
                COMPUTER GLASSES
              </Button>
            </PopoverTrigger>
            <PopoverContent w={"1100px"}>
              <PopoverBody>
                <SimpleGrid
                  gridTemplateColumns={"repeat(2,1fr)"}
                  gap={3}
                  color={"61608B"}
                  alignItems={"start"}
                >
                  <SimpleGrid>
                    {/*01  SELECT CATEGORY         */}
                    <SimpleGrid gap={3}>
                      <Text fontSize={"1.2rem"} color={"black"} ml={40}>
                        SELECT CATEGORY
                      </Text>
  
                      {/* Mens section       */}
                      <NavLink to={""}>
                        <Flex gap={3} ml={40}>
                          <Avatar
                            m="20px"
                            name="Dan Abrahmov"
                            src="https://static.lenskart.com/media/desktop/img/men_pic.png"
                            alt="men"
                          />
                          <Box mt={7}>Men</Box>
                          <Box mt={"8"}>
                            <AiOutlineRight size="10px" />
                          </Box>
                          <Box mt={4} w={"160px"}>
                            {" "}
                            CLASSIC EYE-GLASSES{" "}
                            <Text>
                              Starting From ₹ <span>500</span>
                            </Text>
                          </Box>
                          <Box mt={8}>
                            <AiOutlineRight size="10px" />
                          </Box>
                        </Flex>
                      </NavLink>
                      {/* Women section */}
                      <NavLink>
                        <Flex gap={2} ml={40}>
                          <Avatar
                            ml="20px"
                            name="Kola Tioluwani"
                            src="https://static.lenskart.com/media/desktop/img/women_pic.png"
                            alt="women"
                          />
                          <Box mt={3} ml={3}>
                            Women
                          </Box>
                          <Box mt={5}>
                            <AiOutlineRight size="10px" />
                          </Box>
                          <Box mt={1}>
                            CLASSIC EYE-GLASSES
                            <Text>
                              Starting From ₹ <span>1200</span>
                            </Text>
                          </Box>
                          <Box mt={5}>
                            <AiOutlineRight size="10px" />
                          </Box>
                        </Flex>
                      </NavLink>
  
                      {/* Kids section */}
  
                      <NavLink>
                        <Flex gap={2} ml={40}>
                          <Avatar
                            ml="20px"
                            mt={2}
                            name="Kent Dodds"
                            src="https://static.lenskart.com/media/desktop/img/kid_pic.png"
                            alt="kid"
                          />
                          <Box mt={5} ml={5}>
                            Kids
                          </Box>
                          <Box mt={7} ml={3}>
                            <AiOutlineRight size="10px" />
                          </Box>
                          <Box mt={1} ml={3} w={"160px"}>
                            CLASSIC EYE-GLASSES
                            <Text>
                              Starting From ₹ <span>600</span>
                            </Text>
                          </Box>
                          <Box mt={5}>
                            <AiOutlineRight size="10px" />
                          </Box>
                        </Flex>
                      </NavLink>
                    </SimpleGrid>
                  </SimpleGrid>
                </SimpleGrid>
              </PopoverBody>
            </PopoverContent>
          </Popover>
  
          {/* 03 KIDS GLASSES */}
            
          <Popover>
            <PopoverTrigger>
              <Button
                pt={"5"}
                pr={"1"}
                pb={5}
                bg={'#FBF9F7'}
                _hover={{ borderBottom: "2px solid blue" }}
                borderRadius={"none"}
              >
                KIDS GLASSES
              </Button>
            </PopoverTrigger>
            <PopoverContent w={"1200px"} h={"400px"}>
              <PopoverBody>
  
                <Flex gap={40} justifyContent={"center"} mt={57} ml={70}>
                  <NavLink to={'/kidsunglassess'}>
                  <img
                    className="img_1"
                    src="https://static1.lenskart.com/media/desktop/img/May22/glasses.jpg"
                    alt="kidsIcon_1"
                    />
                    <Text as={'b'} ml={6}>EyeGlassess</Text>
                    </NavLink>
                   <NavLink to={''}>
                   <img
                    className="img_2"
                    src="https://static1.lenskart.com/media/desktop/img/May22/computer-glasses.jpg"
                    alt="kidsIcon_2"
                    />
                    <Text as={'b'} ml={6}>EyeGlassess</Text>
                   </NavLink>
                  <NavLink to={''}>
                  <img
                    className="img_3"
                    src="https://static1.lenskart.com/media/desktop/img/May22/Sunnies.jpg"
                    alt="kidsIcon_3"
                    />
                    <Text as={'b'} ml={6}>EyeGlassess</Text>
                  </NavLink>
                </Flex>
              </PopoverBody>
            </PopoverContent>
          </Popover>
  
          {/*04 CONTACT LENSES*/}
  
          <Popover>
            <PopoverTrigger>
              <Button
                pt={"5"}
                pr={"1"}
                pb={5}
                color={"020043"}
                bg={'#FBF9F7'}
                _hover={{ borderBottom: "2px solid blue" }}
                borderRadius={"none"}
              >
                CONTACT LENSES
              </Button>
            </PopoverTrigger>
            <PopoverContent w={"1200px"} h={"400px"}>
              <PopoverBody>
                <Flex justifyContent={"space-around"}>
                  {/*  Brands */}
                  <SimpleGrid gap={3}>
                    <Text fontSize={"1.3rem"} color={"black"}>
                      Brands
                    </Text>
                    <SimpleGrid gap={3}>
                      <Text
                        fontSize={"small"}
                        color="gray"
                        _hover={{ color: "black" }}
                        transition="color 0.1s"
                      >
                        Aqualens
                      </Text>
                      <Text
                        fontSize={"small"}
                        color="gray"
                        _hover={{ color: "black" }}
                        transition="color 0.1s"
                      >
                        Bausch Lomb
                      </Text>
                      <Text
                        fontSize={"small"}
                        color="gray"
                        _hover={{ color: "black" }}
                        transition="color 0.1s"
                      >
                        {" "}
                        Soflens
                      </Text>
                      <Text
                        fontSize={"small"}
                        color="gray"
                        _hover={{ color: "black" }}
                        transition="color 0.1s"
                      >
                        {" "}
                        Acuvue
                      </Text>
                      <Text
                        fontSize={"small"}
                        color="gray"
                        _hover={{ color: "black" }}
                        transition="color 0.1s"
                      >
                        Iconnect
                      </Text>
                      <Text
                        fontSize={"small"}
                        color="gray"
                        _hover={{ color: "black" }}
                        transition="color 0.1s"
                      >
                        Alcon
                      </Text>
                    </SimpleGrid>
                  </SimpleGrid>
                  {/* Explore By Disposablity */}
  
                  <SimpleGrid gap={3}>
                    <Text fontSize={"1.3rem"} color={"black"}>
                      Explore By Disposablity
                    </Text>
                    <SimpleGrid gap={3}>
                      <Text
                        fontSize={"small"}
                        color="gray"
                        _hover={{ color: "black" }}
                        transition="color 0.1s"
                      >
                        Monthly
                      </Text>
                      <Text
                        fontSize={"small"}
                        color="gray"
                        _hover={{ color: "black" }}
                        transition="color 0.1s"
                      >
                        {" "}
                        Day & Night
                      </Text>
                      <Text
                        fontSize={"small"}
                        color="gray"
                        _hover={{ color: "black" }}
                        transition="color 0.1s"
                      >
                        {" "}
                        Daily
                      </Text>
                      <Text
                        fontSize={"small"}
                        color="gray"
                        _hover={{ color: "black" }}
                        transition="color 0.1s"
                      >
                        Yearly
                      </Text>
                      <Text
                        fontSize={"small"}
                        color="gray"
                        _hover={{ color: "black" }}
                        transition="color 0.1s"
                      >
                        {" "}
                        Bi-weekly
                      </Text>
                    </SimpleGrid>
                  </SimpleGrid>
  
                  {/* Explore By Power */}
  
                  <SimpleGrid gap={3}>
                    <Text fontSize={"1.3rem"} color={"black"}>
                      Explore By Power
                    </Text>
                    <SimpleGrid gap={3}>
                      <Text
                        fontSize={"small"}
                        color="gray"
                        _hover={{ color: "black" }}
                        transition="color 0.1s"
                      >
                        Spherical - (CYL-0.5){" "}
                      </Text>
                      <Text
                        fontSize={"small"}
                        color="gray"
                        _hover={{ color: "black" }}
                        transition="color 0.1s"
                      >
                        {" "}
                        Spherical + (CYL-0.5)
                      </Text>
                      <Text
                        fontSize={"small"}
                        color="gray"
                        _hover={{ color: "black" }}
                        transition="color 0.1s"
                      >
                        {" "}
                        Cylindrical Power(+0.75)
                      </Text>
                      <Text
                        fontSize={"small"}
                        color="gray"
                        _hover={{ color: "black" }}
                        transition="color 0.1s"
                      >
                        {" "}
                        Toric Power
                      </Text>
                    </SimpleGrid>
                  </SimpleGrid>
  
                  {/* Explore By Color */}
  
                  <SimpleGrid gap={3}>
                    <Text fontSize={"1.3rem"} color={"black"}>
                      Explore By Color
                    </Text>
                    <SimpleGrid gap={3}>
                      <Text
                        fontSize={"small"}
                        color="gray"
                        _hover={{ color: "black" }}
                        transition="color 0.1s"
                      >
                        {" "}
                        Green{" "}
                      </Text>
                      <Text
                        fontSize={"small"}
                        color="gray"
                        _hover={{ color: "black" }}
                        transition="color 0.1s"
                      >
                        Black
                      </Text>
                      <Text
                        fontSize={"small"}
                        color="gray"
                        _hover={{ color: "black" }}
                        transition="color 0.1s"
                      >
                        Blue
                      </Text>
                      <Text
                        fontSize={"small"}
                        color="gray"
                        _hover={{ color: "black" }}
                        transition="color 0.1s"
                      >
                        {" "}
                        Turquoise
                      </Text>
                      <Text
                        fontSize={"small"}
                        color="gray"
                        _hover={{ color: "black" }}
                        transition="color 0.1s"
                      >
                        {" "}
                        View all colors
                      </Text>
                    </SimpleGrid>
                  </SimpleGrid>
  
                  {/* Solution */}
  
                  <SimpleGrid gap={3}>
                    <Text fontSize={"1.3rem"} color={"black"}>
                      Solution
                    </Text>
                    <SimpleGrid gap={3}>
                      <Text
                        fontSize={"small"}
                        color="gray"
                        _hover={{ color: "black" }}
                        transition="color 0.1s"
                      >
                        Small{" "}
                      </Text>
                      <Text
                        fontSize={"small"}
                        color="gray"
                        _hover={{ color: "black" }}
                        transition="color 0.1s"
                      >
                        {" "}
                        Large
                      </Text>
                      <Text
                        fontSize={"small"}
                        color="gray"
                        _hover={{ color: "black" }}
                        transition="color 0.1s"
                      >
                        {" "}
                        View all solutions
                      </Text>
                    </SimpleGrid>
                  </SimpleGrid>
                </Flex>
              </PopoverBody>
            </PopoverContent>
          </Popover>
  
          {/*05 SUNGLASSES */}
  
          <Popover>
            <PopoverTrigger>
              <Button
                pt={"5"}
                pr={"1"}
                pb={5}
                bg={'#FBF9F7'}
                _hover={{ borderBottom: "2px solid blue" }}
                borderRadius={"none"}
              >
                {" "}
                SUNGLASSES
              </Button>
            </PopoverTrigger>
            <PopoverContent w={"1200px"} h={"400px"}>
              <PopoverBody>
                <Flex gap={10}>
                  <SimpleGrid gap={3}>
                    <Text fontSize={"1rem"} color={"black"} ml={40}>
                      SELECT CATEGORY
                    </Text>
  
                    {/* Mens section       */}
                    <NavLink to={"/mensunglassess"}>
                      <Flex gap={3} ml={10}>
                        <Avatar
                          m="20px"
                          name="Dan Abrahmov"
                          src="https://static.lenskart.com/media/desktop/img/men_pic.png"
                          alt="men"
                        />
                        <Box mt={7}>Men</Box>
                        <Box mt={"8"}>
                          <AiOutlineRight size="10px" />
                        </Box>
                        <Box mt={4} w={"160px"}>
                          {" "}
                          CLASSIC EYE-GLASSES{" "}
                          <Text>
                            Starting From ₹ <span>1000</span>
                          </Text>
                        </Box>
                        <Box mt={8}>
                          <AiOutlineRight size="10px" />
                        </Box>
                      </Flex>
                    </NavLink>
                    {/* Women section */}
                    <NavLink to={'/womensunglassess'} >
                      <Flex gap={2} ml={10}>
                        <Avatar
                          ml="20px"
                          name="Kola Tioluwani"
                          src="https://static.lenskart.com/media/desktop/img/women_pic.png"
                          alt="women"
                        />
                        <Box mt={3} ml={3}>
                          Women
                        </Box>
                        <Box mt={5}>
                          <AiOutlineRight size="10px" />
                        </Box>
                        <Box mt={1}>
                          CLASSIC EYE-GLASSES
                          <Text>
                            Starting From ₹ <span>2500</span>
                          </Text>
                        </Box>
                        <Box mt={5}>
                          <AiOutlineRight size="10px" />
                        </Box>
                      </Flex>
                    </NavLink>
                  </SimpleGrid>
  
                  <Flex justifyContent={"space-around"} gap={20}>
                    {/* Our Top Picks */}
                    <SimpleGrid gap={3}>
                      <Text fontSize={"1rem"} color={"black"}>
                        Our Top Picks
                      </Text>
                      <SimpleGrid gap={3}>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                          Small{" "}
                        </Text>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                          {" "}
                          Large
                        </Text>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                          {" "}
                          View all solutions
                        </Text>
                      </SimpleGrid>
                    </SimpleGrid>
  
                    {/* Brands */}
  
                    <SimpleGrid gap={3}>
                      <Text fontSize={"1rem"} color={"black"}>
                        Brands
                      </Text>
                      <SimpleGrid gap={3}>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                          Small{" "}
                        </Text>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                          {" "}
                          Large
                        </Text>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                          {" "}
                          View all solutions
                        </Text>
                      </SimpleGrid>
                    </SimpleGrid>
  
                    {/* Frame Shape */}
  
                    <SimpleGrid gap={3}>
                      <Text fontSize={"1rem"} color={"black"}>
                        Frame Shape
                      </Text>
                      <SimpleGrid gap={3}>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                          Small{" "}
                        </Text>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                          {" "}
                          Large
                        </Text>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                          {" "}
                          View all solutions
                        </Text>
                      </SimpleGrid>
                    </SimpleGrid>
  
                    {/* ----------------- */}
  
                    <SimpleGrid gap={3}>
                      <Text fontSize={"1rem"} color={"black"}>
                        Our Top Picks
                      </Text>
                      <SimpleGrid gap={3}>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                          Small{" "}
                        </Text>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                          {" "}
                          Large
                        </Text>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                          {" "}
                          View all solutions
                        </Text>
                      </SimpleGrid>
                    </SimpleGrid>
                  </Flex>
                </Flex>
              </PopoverBody>
            </PopoverContent>
          </Popover>
  
          {/* 06 HOME EYE-TEST */}
  
          <Popover>
            <PopoverTrigger>
              <Button
                pt={"5"}
                pr={"1"}
                pb={5}
                bg={'#FBF9F7'}
                _hover={{ borderBottom: "2px solid blue" }}
                borderRadius={"none"}
              >
                {" "}
                HOME EYE-TEST
              </Button>
            </PopoverTrigger>
            <PopoverContent w={"1200px"} h={"400px"}>
              <PopoverBody>
                <Flex>
                  <Box>
                    {" "}
                    <Image
                      h="100%"
                      w="100%"
                      src="https://static1.lenskart.com/media/desktop/img/HomeTryOut.png"
                      alt="doc_img"
                    ></Image>
                  </Box>
                  <Box>
                    <Heading
                      color="#000042"
                      fontWeight=""
                      fontSize="40px"
                      fontFamily="sans-serif"
                      textAlign="center"
                      mt="10%"
                    >
                      Get your eyes checked at home
                    </Heading>
                    <Box
                      color="gray"
                      fontSize="larger"
                      textAlign="center"
                      mt="6%"
                      _hover={{ color: "blue" }}
                      transition="color 0.1s"
                    >
                      A certified refractionist will wisit you with
                    </Box>
                    <Box
                      color="gray"
                      fontSize="larger"
                      textAlign="center"
                      mt="1.5%"
                      _hover={{ color: "blue" }}
                      transition="color 0.1s"
                    >
                      latest eye testing machines & 100 trail frames
                    </Box>
                    <Button
                      ml={"35%"}
                      mt={5}
                      textDecoration={"none"}
                      p={7}
                      border={"1px Solid blue"}
                      borderRadius={"30px"}
                      _hover={{ bg: "blue.900", color: "white" }}
                    >
                      {" "}
                      Book appointment
                    </Button>
                  </Box>
                </Flex>
              </PopoverBody>
            </PopoverContent>
          </Popover>
  
          {/* 07 STORE LOCATOR */}
  
          <Popover>
            <PopoverTrigger>
              <Button
                pt={"5"}
                pr={"1"}
                pb={5}
                bg={'#FBF9F7'}
                _hover={{ borderBottom: "2px solid blue" }}
                borderRadius={"none"}
              >
                {" "}
                STORE LOCATOR
              </Button>
            </PopoverTrigger>
            <PopoverContent w={"1200px"} h={"400px"}>
              <PopoverBody>
                <Flex>
                  <Box>
                    <Heading
                      color="#000042"
                      fontWeight=""
                      fontSize="40px"
                      fontFamily="sans-serif"
                      textAlign="center"
                      mt="15%"
                    >
                      Over 1100+ Lenskart Store
                    </Heading>
                    <Box
                      color="gray"
                      fontSize="larger"
                      textAlign="center"
                      mt="6%"
                      _hover={{ color: "black" }}
                      transition="color 0.1s"
                    >
                      Experience eyewear in a whole new way: Visit your nearest
                      store
                    </Box>
                    <Box
                      color="gray"
                      fontSize="larger"
                      textAlign="center"
                      mt="1.5%"
                      _hover={{ color: "black" }}
                      transition="color 0.1s"
                    >
                      and treat yourself to 5000+ eyewear styles.
                    </Box>
  
                    <Button
                      ml={"35%"}
                      mt={5}
                      textDecoration={"none"}
                      p={7}
                      border={"1px solid blue"}
                      borderRadius={"30px"}
                      _hover={{ bg: "blue.900", color: "white" }}
                    >
                      Locate a store
                    </Button>
                  </Box>
  
                  <Box
                    display="flex"
                    justifyContent="space-around"
                    alignItems="center"
                    ml="20px"
                    mr="20px"
                    mt="10px"
                  >
                    <Box>
                      <NavLink>
                        <Image
                          h=""
                          w=""
                          src="https://static.lenskart.com/media/desktop/img/Delhi1.png"
                          alt="Delhi"
                        />
                        <Text mt="-8px" ml="22px">
                          Delhi
                        </Text>
                      </NavLink>
                    </Box>
                    <Box>
                      <NavLink>
                        <Image
                          h=""
                          w=""
                          src="https://static.lenskart.com/media/desktop/img/Banglore1.png"
                          alt="Banglore"
                        />
                        <Text mt="-8px" ml="15px">
                          Banglore
                        </Text>
                      </NavLink>
                    </Box>
                    <Box>
                      <NavLink>
                        <Image
                          h=""
                          w=""
                          src="https://static.lenskart.com/media/desktop/img/Mumbai1.png"
                          alt="Mumbai"
                        />
                        <Text mt="-8px" ml="15px">
                          Mumbai
                        </Text>
                      </NavLink>
                    </Box>
                    <Box>
                      <NavLink>
                        <Image
                          h=""
                          w=""
                          src="https://static.lenskart.com/media/desktop/img/Ahmedabad1.png"
                          alt="Ahemdabad"
                        />
                        <Text mt="-8px" ml="10px">
                          Ahmedabad
                        </Text>
                      </NavLink>
                    </Box>
                    <Box>
                      <NavLink>
                        <Image
                          h=""
                          w=""
                          src="https://static.lenskart.com/media/desktop/img/Chennai1.png"
                          alt="Chennai"
                        />
                        <Text mt="-8px" ml="15px">
                          Chennai
                        </Text>
                      </NavLink>
                    </Box>
                    <Box>
                      <NavLink>
                        <Image
                          h=""
                          w=""
                          src="https://static.lenskart.com/media/desktop/img/Hyderabad1.png"
                          alt="Hyderabad"
                        />
                        <Text mt="-8px" ml="15px">
                          Hyderabad
                        </Text>
                      </NavLink>
                    </Box>
                    <Box>
                      <NavLink>
                        <Image
                          h=""
                          w=""
                          src="https://static.lenskart.com/media/desktop/img/Cities1.png"
                          alt="+100_cities"
                        />
                        <Text mt="-8px" ml="15px">
                          +100 cities
                        </Text>
                      </NavLink>
                    </Box>
                  </Box>
                </Flex>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Flex>
  
        {/* img section */}
        <Flex gap={2} justifyContent={"end"} mr={20} mt={2}>
          <NavLink>
            {" "}
            <Image
              h="45%"
              w="100%"
              borderRadius="5px"
              src=" https://static1.lenskart.com/media/desktop/img/May22/3dtryon1.png"
              alt="TRY ON 3D"
            />
          </NavLink>
          <NavLink>
            {" "}
            <Image
              h="45%"
              w="100%"
              borderRadius="5px"
              src="https://static1.lenskart.com/media/desktop/img/Mar22/13-Mar/blulogo.png"
              alt="BLU"
            />
          </NavLink>
          <NavLink>
            {" "}
            <Image
              h="45%"
              w="100%"
              borderRadius="5px"
              src="https://static.lenskart.com/media/desktop/img/Feb22/18-Feb/goldlogo.jpg"
              alt="GOLD"
            />
          </NavLink>
        </Flex>
      </Flex>
    );
  };
  
  export default DropdownNavbar;
  