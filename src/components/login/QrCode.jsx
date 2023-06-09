import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import QRCode from "qrcode";
const QrCode = ({ item }) => {
  const [qrImage, setQrImage] = useState("");

  useEffect(() => {
    QRCode.toDataURL("https://raiya-assesment.onrender.com/redirect").then(
      setQrImage
    );
  }, []);

  return (
    qrImage && (
      <motion.img
        src={qrImage}
        className="w-[55%] md:w-[30%]"
        variants={item}
      />
    )
  );
};

export default QrCode;
