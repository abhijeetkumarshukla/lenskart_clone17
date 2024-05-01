
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
 
function Slider5() {
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
        ' https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//j/o/john-jacobs-jj-e10235-c7-eyeglasses_g_2375_image_pla.jpg',
        'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//j/o/john-jacobs-jj-e11675-c2-eyeglasses_g_0134.jpg ',
        ' https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//j/i/black-maroon-full-rim-square-john-jacobs-tr-flex-jj-e14412-c2-eyeglasses_g_7287_04_25_23.jpg',
        ' https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//j/o/john-jacobs-rimless-jj-e12565-c3-eyeglasses_john-jacobs-rimless-jj-e12565-c3-eyeglasses_g_3253.jpg',
        'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//j/i/silver-white-silver-black-full-rim-square-john-jacobs-supreme-steel-jj-e13561-c3-eyeglasses_g_9464_09_09_2022.jpg ',
        ' https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//j/o/john-jacobs-jj-e13319-c3-eyeglasses_g_7752.jpg'
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
 

export default Slider5;
