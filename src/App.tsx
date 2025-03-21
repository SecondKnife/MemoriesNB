import { useState } from "react";
import { motion } from "framer-motion";

const images = [
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.jpg",
  "/images/5.jpg",
  "/images/6.jpg",
  "/images/7.jpg",
  "/images/8.jpg",
];


export default function BirthdayLanding() {
  const [isClicked, setIsClicked] = useState(false);
  const [showDialog, setShowDialog] = useState(false);


  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: "url('https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmxxZGd0aWs0eWV1b2ZyYjFoODYybHB1ZDlwcDRxeXF3dWc1cWszOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT0BKBvMYBEq0CcYmY/giphy.gif')",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
        position: "relative",
        cursor: "pointer",
      }}
      onClick={() => {
        setIsClicked(true);
      }}
    >
      {!isClicked ? (
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.2 }}
          transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
          style={{
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
            fontSize: "72px",
          }}
        >
          🎉 Nhấn vào đây! 🎉
        </motion.div>
      ) : (
        <>
          <div
            style={{
              color: "white",
              marginBottom: "800px",
              fontSize: "72px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <motion.span
              animate={{ color: ["#ff0000", "#00ff00", "#0000ff", "#ff00ff", "#ff0000"] }}
              transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
            >
              Yêu Lợn béo vô cùng
            </motion.span>
            <motion.span
              style={{ marginLeft: "10px", fontSize: "60px" }}
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut" }}
            >
              ❤️
            </motion.span>
          </div>
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "900px",
              top: "60%",
              transform: "translateY(-50%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              whiteSpace: "nowrap",
            }}
          >
            <motion.div
              style={{
                display: "flex",
                gap: "20px",
              }}
              animate={{
                x: ["0%", "-100%"],
              }}
              transition={{
                repeat: Infinity,
                duration: 10,
                ease: "linear",
              }}
            >
              {[...images, ...images].map((src, index) => (
                <img
                  onClick={() => setShowDialog(true)}
                  key={index}
                  src={src}
                  style={{
                    width: "100%",
                    height: "90%",
                    borderRadius: "10px",
                    boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
                  }}
                />
              ))}
            </motion.div>
          </div>
        </>
      )}

      {/* Dialog */}
      {showDialog && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          style={{
            position: "fixed",
            top: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
            textAlign: "center",
            zIndex: 1000,
          }}
        >
          <p style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px", color: "black" }}>
            Yêu không mà đòi click? 😏, nếu bấm Yes thì đóng tiền quan tâm đi
          </p>
          <div style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
            <button
              onClick={() => {
                setShowDialog(false)
                window.location.href = "https://www.facebook.com/newdowning/"
              }}
              style={{
                padding: "10px 20px",
                fontSize: "20px",
                backgroundColor: "#ff4081",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Yes ❤️
            </button>
            <button
              onClick={() => setShowDialog(true)}
              style={{
                padding: "10px 20px",
                fontSize: "20px",
                backgroundColor: "#ff4081",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              NO
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
