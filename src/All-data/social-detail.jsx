import { FaMapMarkedAlt, FaVoicemail, FaPhoneAlt } from "react-icons/fa";
const socialDetail = [
  {
    id: 1,
    value: "Bhaniyawala, Dehradun 248140",
    icons: <FaMapMarkedAlt size={32} />,
    linkUrl:
      "https://www.google.com/maps/place/Bhania+Wala,+Uttarakhand+248140/@30.1842912,78.1495078,15.31z/data=!4m5!3m4!1s0x390925255ec8f53b:0x1f8480613f59a4d9!8m2!3d30.1842339!4d78.1443436",
  },
  {
    id: 2,
    value: "anujpanwar7911@gmail.com",
    icons: <FaVoicemail size={32} />,
    linkUrl: "mailto:anujpanwar7911@gmail.com",
  },
  {
    id: 3,
    value: "+91 9634111164",
    icons: <FaPhoneAlt size={32} />,
    linkUrl: "tel:9634111164",
  },
];

export default socialDetail;
