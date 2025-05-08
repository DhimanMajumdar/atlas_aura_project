import React from "react";

const ErrorPage = () => {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      textAlign: "center",
      padding: "20px",
      fontFamily: "'Arial', sans-serif",
    },
    title: {
      fontSize: "3rem",
      color: "#2c3e50",
      marginBottom: "20px",
      textTransform: "uppercase",
      letterSpacing: "2px",
    },
    image: {
      maxWidth: "300px",
      height: "auto",
      marginBottom: "30px",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    message: {
      fontSize: "1.5rem",
      color: "#34495e",
      maxWidth: "600px",
      lineHeight: "1.6",
    },
    subtext: {
      fontSize: "1.2rem",
      color: "#7f8c8d",
      maxWidth: "600px",
      margin: "10px 0 30px",
    },
    button: {
      padding: "12px 25px",
      fontSize: "1.1rem",
      color: "#fff",
      backgroundColor: "#e74c3c",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
    buttonHover: {
      backgroundColor: "#c0392b", // This won't work directly with style attribute; see note below
    },
    funFact: {
      marginTop: "40px",
      fontSize: "1rem",
      color: "#16a085",
    },
    funFactSpan: {
      fontWeight: "bold",
      color: "#1abc9c",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404 - Lost in the Atlas!</h1>
      <img
        src="https://images1.fanpop.com/images/image_uploads/the-map-lost-968865_1024_768.jpg"
        alt="A crumpled map floating in the ocean"
        style={styles.image}
      />
      <p style={styles.message}>
        Oops! Looks like we’ve sailed off the edge of the world. This page is
        more lost than Columbus on a cloudy day.
      </p>
      <p style={styles.subtext}>
        Don’t worry, even the best explorers get turned around. Maybe this is a
        secret continent we haven’t charted yet? Nah, it’s just a good ol’ 404.
      </p>
      <button
        style={styles.button}
        onClick={() => (window.location.href = "/")}
        onMouseOver={(e) =>
          (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)
        }
        onMouseOut={(e) =>
          (e.target.style.backgroundColor = styles.button.backgroundColor)
        }
      >
        Return to Civilization
      </button>
      <div style={styles.funFact}>
        <span style={styles.funFactSpan}>Did you know?</span> The shortest war
        in history lasted 38 minutes. Plenty of time to find your way back!
      </div>
    </div>
  );
};

export default ErrorPage;
