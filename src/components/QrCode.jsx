import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import QRCode from "qrcode";
const QrCode = ({ item }) => {
  const [qrImage, setQrImage] = useState("");

  useEffect(() => {
    QRCode.toDataURL("http://localhost:5173/redirect").then(setQrImage);
  }, []);

  return (
    qrImage && (
      <motion.img
        src={qrImage}
        className="w-[50%] md:w-[30%]"
        variants={item}
      />
    )
  );
};

export default QrCode;
