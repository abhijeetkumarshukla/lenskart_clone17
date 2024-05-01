
import { Box } from "@chakra-ui/react";
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
 
function Slider6() {
  const settings = {
    autoplay: false,
    infinite: false,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          autoplay: true
          

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          autoplay: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
           autoplay: true
        }
      }
    ]
  }
    const arr=[
            ' https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e12947-c2-eyeglasses_vincent-chase-vc-e12947-c2-eyeglasses_G_1969_1.jpg ',
            'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e12943-c2-eyeglasses_vincent-chase-vc-e12943-c2-eyeglasses_g_2361_1_1.jpg ',
            ' https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e12852-c1-eyeglasses_vincent-chase-vc-e12852-c1-eyeglasses_g_1089_1.jpg',
            'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e12943-c2-eyeglasses_vincent-chase-vc-e12943-c2-eyeglasses_g_2361_1_1.jpg ',
            ' https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e12852-c1-eyeglasses_vincent-chase-vc-e12852-c1-eyeglasses_g_1089_1.jpg',
            'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//l/i/Black-Full-Rim-Rectangle-Lenskart-AIR-Flex-LA-E12852-C2-Eyeglasses_vincent-chase-vc-e12852-c2-eyeglasses_2eyeglasses_G_2091_10_02_2022.jpg '
       
 ]
  
 return(
    <Box w={'80%'}   m={"auto"}  pt={[2, 2, 2, 2]} pb={[2, 2,2,2]} position="relative" >
    <Slider {...settings}>
      {arr.map((ele, i) => (
         <img src={ele} alt="slider"  key={i}   />
    
         
      ))}
    </Slider>
  </Box>
)

}
 

export default Slider6;
