import React from "react";

// HomePage Component
export const HomePage = () => {
  return (
    <div style={styles.homePage}>
      <div style={styles.overlapGroupWrapper}>
        <div style={styles.overlapGroup}>
          <div style={styles.rectangle}></div>
          <img
            style={styles.ellipse}
            alt="Ellipse"
            src="/ellipse-5.svg" // Make sure this file is in the public folder
          />
          <div style={styles.tx}>
            <p style={styles.speedUpYourCyber}>
              <span>
                <br />
              </span>
              <span style={styles.span}>Speed Up Your Cyber Response</span>
            </p>
            <p style={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
              congue metus quis accumsan euismod. Maecenas sed est mollis,
              convallis nisi convallis, imperdiet massa. Proin ipsum nunc,
              lacinia ac faucibus quis, ullamcorper non metus.
            </p>
          </div>
          <div style={styles.button}>
            <p style={styles.buttonText}>
              End-to-end investigation system for security operations, managed
              security providers, digital forensics, and law enforcement.
            </p>
          </div>
          <div style={styles.navbar}>
            <div style={styles.pagename}>pagename</div>
            <div style={styles.frame}>
              <button style={styles.navButton}>
                <div style={styles.buttonText}>Platform</div>
              </button>
              <button style={styles.navButton}>
                <div style={styles.buttonText}>Report</div>
              </button>
              <button style={styles.navButton}>
                <div style={styles.buttonText}>Resource</div>
              </button>
              <button style={styles.navButton}>
                <div style={styles.buttonText}>About Us</div>
              </button>
              <img
                style={styles.vector}
                alt="Vector"
                src="/vector-1.svg" // Make sure this file is in the public folder
              />
            </div>
            <button style={styles.loginButton}>
              <div style={styles.buttonText}>Login</div>
            </button>
          </div>
          <img
            style={styles.securityShield}
            alt="Security shield"
            src="/security-shield-glows-blue-symbolizes-safety-encryption-generative-ai-removebg-preview-1.png" // Ensure the image is in the public folder
          />
        </div>
      </div>
    </div>
  );
};

// Inline Styles
const styles = {
  homePage: {
    backgroundColor: 'rgba(23, 23, 23, 1)',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    minHeight: '100vh',
  },
  overlapGroupWrapper: {
    backgroundColor: 'rgba(23, 23, 23, 1)',
    width: '100%',
    maxWidth: '1440px',
    overflow: 'hidden',
    position: 'relative',
  },
  overlapGroup: {
    position: 'relative',
    width: '100%',
    maxWidth: '1517px',
    margin: '0 auto',
  },
  rectangle: {
    backgroundColor: '#223336',
    height: '221px',
    position: 'absolute',
    bottom: '0',
    width: '100%',
  },
  ellipse: {
    width: '100%',
    maxWidth: '930px',
    height: 'auto',
    position: 'absolute',
    top: '0',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  tx: {
    position: 'absolute',
    top: '50%',
    left: '10%',
    transform: 'translateY(-50%)',
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
    maxWidth: '50%',
  },
  speedUpYourCyber: {
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'Poppins, Helvetica, sans-serif',
    fontSize: '64px',
    fontWeight: 400,
  },
  span: {
    fontFamily: 'Poppins, Helvetica, sans-serif',
    fontWeight: 600,
  },
  description: {
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'Poppins, Helvetica, sans-serif',
    fontSize: '16px',
    lineHeight: '23px',
  },
  button: {
    position: 'absolute',
    bottom: '10%',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#0aa1d5',
    borderRadius: '20px',
    padding: '30px 24px',
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'Titillium Web, Helvetica, sans-serif',
    fontSize: '24px',
    textAlign: 'center',
  },
  buttonText: {
    margin: 0,
  },
  navbar: {
    position: 'absolute',
    top: '0',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    boxSizing: 'border-box',
  },
  pagename: {
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'Titillium Web, Helvetica, sans-serif',
    fontSize: '24px',
    fontWeight: 600,
  },
  frame: {
    display: 'flex',
    gap: '15px',
  },
  navButton: {
    background: 'linear-gradient(180deg, rgba(9, 117, 123, 0.96) 0%, rgba(0, 167, 213, 0.56) 100%)',
    border: 'none',
    borderRadius: '40px',
    padding: '10px 18px',
    color: 'rgba(255, 255, 255, 1)',
    cursor: 'pointer',
  },
  vector: {
    width: '24px',
    height: '24px',
    cursor: 'pointer',
  },
  loginButton: {
    background: 'linear-gradient(180deg, rgba(9, 117, 123, 0.96) 0%, rgba(0, 167, 213, 0.56) 100%)',
    border: 'none',
    borderRadius: '40px',
    padding: '10px 18px',
    color: 'rgba(255, 255, 255, 1)',
    cursor: 'pointer',
  },
  securityShield: {
    width: '150px',
    height: 'auto',
    position: 'absolute',
    bottom: '10%',
    right: '10%',
  },
};

export default HomePage;
