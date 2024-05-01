
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

const SliderOne = () => {
  
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    
   
  };
 
  const arr = [
    "https://static1.lenskart.com/media/desktop/img/2024/feb/IN/tentpole/web%20banner.jpg",
    "  https://static1.lenskart.com/media/desktop/img/2024/jan/turban/Desktop-GIF.gif",
    " https://static5.lenskart.com/media/uploads/Web_Banner_eyesun-1.jpg",
    " https://static5.lenskart.com/media/uploads/web_bannerlkairpop21421.gif",
    " https://static5.lenskart.com/media/uploads/Web-bannerTentpole.jpg ",
    " https://static5.lenskart.com/media/uploads/web02apr.jpg",
    " https://static1.lenskart.com/media/desktop/img/republic/chic-metal/web.jpg",
    " https://static1.lenskart.com/media/desktop/img/oct9/elc-two/web-1.gif",
    " https://static1.lenskart.com/media/desktop/img/2024/apr/vibe-badlo/Frame%2048097456.jpg",
    " https://static5.lenskart.com/media/uploads/final-lpl-webbanner-1.gif",
    " https://static1.lenskart.com/media/desktop/img/Feb24/bloom/InBloom-WebBanner.jpg",
    "https://static5.lenskart.com/media/uploads/web-banner.gif ",
    " https://static1.lenskart.com/media/desktop/img/republic/matte-new/web.gif",
    " https://static5.lenskart.com/media/uploads/homepage_banner.jpg",
    "https://static1.lenskart.com/media/desktop/img/republic/chic-metal/web.jpg ",
    " https://static1.lenskart.com/media/desktop/img/oct9/holiday-edit/Web-banner.jpg",
    " https://static5.lenskart.com/media/uploads/Web-bannerTentpole.jpg",
    " https://static5.lenskart.com/media/uploads/final-lpl-webbanner-1.gif",
    " https://static5.lenskart.com/media/uploads/web02apr.jpg",
    " https://static1.lenskart.com/media/desktop/img/Mar24/SheildShades/SheildShadesWebBanner.jpg",
    " https://static1.lenskart.com/media/desktop/img/republic/tr-flex/Desktop.jpg",
    "https://static1.lenskart.com/media/desktop/img/republic/future-classic/web.gif ",
    " https://static1.lenskart.com/media/desktop/img/republic/petite/Web-banner%20option%202.jpg",
    " https://static1.lenskart.com/media/desktop/img/oct9/holiday-edit/Desktop.jpg",
    " https://static1.lenskart.com/media/desktop/img/sep22/jj-titanium/Web-Banner.gif",
    " https://static1.lenskart.com/media/desktop/img/republic/eco_jj/Desktop%20(2).gif",
    " https://static1.lenskart.com/media/desktop/img/republic/hustlr-ace/Hustlr_Ace_Desktop_Banner.gif",
    " https://static1.lenskart.com/media/desktop/img/2024/feb/IN/tentpole/web%20banner.jpg",
    " https://static1.lenskart.com/media/desktop/img/2024/feb/IN/Sobhita/Desktop.png"
     
  ];

  return (
        <Box  w={'99%'} m={"auto"}  pt={[2, 2, 2, 2]} pb={[2, 2,2,2]} position="relative">
    <Slider {...settings}>
        {arr.map((elem, i) => (
          <img src={elem} alt="slider" key={i}   />
        ))}
      </Slider>
    </Box>
  );
}

export default SliderOne;
