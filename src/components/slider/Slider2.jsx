
import { Box, Button, Text } from "@chakra-ui/react";
import Slider from "react-slick";

 

 export function SampleNextArrow(props) {
     const { className, onClick } = props;
     return (
         <Box
         className={className}
         onClick={onClick}
    
      borderRadius="50%"
      width="50px"
      height="50px"
      position="absolute"
      right="20px"
      top="50%"
     zIndex="1"
      cursor="pointer"
    />
);
}

 
  export function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <Box
      className={className}
      onClick={onClick}
 
      borderRadius="50%"
      width="50px"
      height="50px"
      position="absolute"
      left="30px"
      top="50%"
    
     zIndex="1"
     cursor="pointer" 
     />
  );
}
 
function Slider2() {
  const settings = {
    autoplay: true,
    
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />, 
    prevArrow: <SamplePrevArrow />,
  }
    const arr=[
           {
             "img": "https://static1.lenskart.com/media/desktop/img/Sep21/image179.png",
              'name' : 'Round',
              'button': 'Explore'
           },
         
           {
           'img': "https://static1.lenskart.com/media/desktop/img/Sep21/cateeye.jpg",
            'name': 'Cat-eye',
            'button': 'Explore'
           },
           {
           'img': "https://static1.lenskart.com/media/desktop/img/Sep21/clubmaster.jpg ",
           'name': 'Clube',
           'button': 'Explore'
           },
         {
            'img': "https://static1.lenskart.com/media/desktop/img/Sep21/blend.jpg ",
             'name':'Trans',
             'button': 'Explore'
         },
           {
             'img':" https://static1.lenskart.com/media/desktop/img/Sep21/clipon.jpg ",
             'name':'Blent',
             'button': 'Explore'
           },
         
           {
            'img': "https://static1.lenskart.com/media/desktop/img/Sep21/airflex.jpg",
            'name' :'AirClip',
            'button': 'Explore'
           },
           {
           'img': " https://static1.lenskart.com/media/desktop/img/Sep21/aviator.jpg",
            'name':'Airflex',
            'button': 'Explore'
           },
          {
           'img': " https://static1.lenskart.com/media/desktop/img/Sep21/clubmaster.jpg",
            'name':'Aviator',
            'button': 'Explore'
          },
          {
           "img": " https://static1.lenskart.com/media/desktop/img/Sep21/trans.jpg",
            'name':'Club',
            'button': 'Explore'
          }
          
    ]
  
  return (
    <Box w={'80%'}   m={"auto"}  pt={[2, 2, 2, 2]} pb={[2, 2,2,2]} position="relative" >
    <Slider {...settings}>
      {arr.map((ele, i) => (
        <Box  textAlign={"center"} key={i}> <img src={ele.img} alt="slider"/>
        <Text textAlign={"center"} as={'b'}>{ele.name} </Text><br />
        <Button mt={3}>{ele.button}</Button></Box>
      ))}
    </Slider>
  </Box>
)

}
 

export default Slider2;
