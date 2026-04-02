"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleLogin = () => {
    setError("");

    if (username === "vk" && password === "VK*India") {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);

        // ✅ REDIRECT HERE
        router.push("/status");

      }, 3000);
    } else {
      setError("Invalid credentials ❌");
    }
  };

  return (
    <div style={styles.container}>
      {/* LOGIN BOX */}
      <div style={styles.box}>
        <h2>🏏 Cricket Login</h2>

        <input
          type="text"
          placeholder="Username"
          style={styles.input}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          style={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p style={styles.error}>{error}</p>}

        <button
          onClick={handleLogin}
          disabled={loading}
          style={{
            ...styles.button,
            backgroundColor: loading ? "gray" : "#00c853",
          }}
        >
          {loading ? "Match Starting..." : "Login"}
        </button>
      </div>

      {/* IPL LOADER */}
      {loading && (
        <div style={iplStyles.overlay}>
          <div style={iplStyles.loaderBox}>
            <video
              src="/bowler.mp4"
              autoPlay
              loop
              muted
              playsInline
              style={iplStyles.video}
            />

            <h2 style={iplStyles.title}>Match in Progress...</h2>
            <p style={iplStyles.subtitle}>Bhuvi charging in ⚡</p>

            <div className="dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      )}

      {/* DOT ANIMATION */}
      <style jsx>{`
        .dots span {
          width: 6px;
          height: 6px;
          background: #00ff95;
          border-radius: 50%;
          display: inline-block;
          margin: 0 3px;
          animation: blink 1.4s infinite;
        }

        .dots span:nth-child(2) {
          animation-delay: 0.2s;
        }

        .dots span:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes blink {
          0%, 80%, 100% { opacity: 0.2; }
          40% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}

/* LOGIN UI */
const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #0f2027, #2c5364)",
    color: "white",
  },
  box: {
    background: "rgba(255,255,255,0.1)",
    padding: "30px",
    borderRadius: "12px",
    width: "300px",
    textAlign: "center",
    backdropFilter: "blur(10px)",
  },
  input: {
    width: "90%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "6px",
    border: "none",
  },
  button: {
    width: "100%",
    padding: "10px",
    border: "none",
    color: "white",
    fontSize: "16px",
    borderRadius: "6px",
    cursor: "pointer",
  },
  error: {
    color: "#ff5252",
    fontSize: "13px",
    marginBottom: "10px",
  },
};

/* IPL LOADER */
const iplStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.92)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },

  loaderBox: {
    textAlign: "center",
    padding: "30px",
    borderRadius: "16px",
    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(15px)",
    boxShadow: "0 0 40px rgba(0,255,150,0.4)",
  },

  video: {
    height: "220px",
    borderRadius: "12px",
    boxShadow: "0 0 20px rgba(0,255,150,0.6)",
  },

  title: {
    color: "#00ff95",
    marginTop: "15px",
    fontWeight: "bold",
  },

  subtitle: {
    color: "#ccc",
    fontSize: "14px",
  },
};