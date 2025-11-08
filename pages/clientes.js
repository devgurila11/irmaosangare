import React, { useEffect, useState } from "react";

function Home() {
  // Detecta se a tela é mobile (largura menor ou igual a 600px)
  const [isMobile, setIsMobile] = useState(false);

  // Armazena quantos dias faltam até o lançamento
  const [daysLeft, setDaysLeft] = useState(0);

  // Controla se o mouse está sobre a logo
  const [isHovered, setIsHovered] = useState(false);

  // Verifica se a tela é mobile e atualiza dinamicamente ao redimensionar
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 600;
      console.log("Verificando se é mobile:", mobile);
      setIsMobile(mobile);
    };

    checkMobile(); // Executa na primeira renderização
    window.addEventListener("resize", checkMobile); // Atualiza ao redimensionar

    return () => {
      console.log("Removendo listener de resize");
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Calcula os dias restantes até a data de lançamento
  useEffect(() => {
    const launchDate = new Date("2026-03-01"); // Data de lançamento
    const today = new Date();
    const diff = Math.ceil((launchDate - today) / (1000 * 60 * 60 * 24));
    console.log("Dias até o lançamento:", diff);
    setDaysLeft(diff);
  }, []);

  // Estilos do container principal
  const containerStyle = {
    margin: "30px auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    fontFamily: "'Nunito', Arial, sans-serif",
    backgroundColor: "#e6f9e6",
    minHeight: "100vh",
    padding: isMobile ? "20px" : "40px",
    borderRadius: "10px",
    border: "2px solid #b3e6b3",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
    position: "relative", // necessário para posicionar o balão
  };

  // Estilo do título
  const headingStyle = {
    fontSize: isMobile ? "1.2rem" : "2rem",
    marginBottom: "20px",
  };

  // Estilo da imagem da logo, com hover animado e cursor tipo ampulheta
  const imageStyle = {
    width: isMobile ? "140px" : "200px",
    marginBottom: "20px",
    transition: "transform 0.3s ease, filter 0.3s ease",
    transform: isHovered ? "scale(1.05)" : "scale(1)",
    filter: isHovered ? "brightness(1.1)" : "brightness(1)",
    cursor: isHovered ? "wait" : "pointer", // cursor tipo ampulheta
  };

  // Estilo do balão de diálogo "em construção..."
  const balloonStyle = {
    position: "absolute",
    top: "50%",
    left: "calc(50% + 120px)",
    transform: "translateY(-50%)",
    backgroundColor: "#fff",
    color: "#003366",
    padding: "8px 12px",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
    fontSize: "0.9rem",
    whiteSpace: "nowrap",
    transition: "opacity 0.3s ease",
    opacity: isHovered ? 1 : 0, // aparece somente no hover
    pointerEvents: "none", // não interfere com o mouse
  };

  // Estilo do botão de contato
  const buttonStyle = {
    backgroundColor: "#003366",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    fontSize: "1rem",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "20px",
  };

  // Ação ao clicar no botão de contato
  const handleContactClick = () => {
    console.log("Botão de contato clicado → abrindo e-mail");
    window.location.href = "mailto:rafael@irmaosangare.com.br";
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>
        Bem-vindo à nossa futura Aplicação Contábil, em breve teremos prazer em
        atendê-lo.
      </h1>

      {/* Logo com hover e balão de diálogo */}
      <div style={{ position: "relative" }}>
        <img
          src="/images/logo-irmaosAngare.png"
          alt="Logo Irmãos Angare"
          style={imageStyle}
          onMouseEnter={() => {
            console.log("Mouse entrou na logo → ativando hover e balão");
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            console.log("Mouse saiu da logo → desativando hover e balão");
            setIsHovered(false);
          }}
        />
        <div style={balloonStyle}>em construção...</div>
      </div>

      {/* Contagem regressiva */}
      <p
        style={{ fontSize: isMobile ? "1rem" : "1.2rem", marginBottom: "10px" }}
      >
        Lançamento previsto em <strong>{daysLeft}</strong> dias!
      </p>

      {/* Botão de contato */}
      <button style={buttonStyle} onClick={handleContactClick}>
        Entrar em contato
      </button>
    </div>
  );
}

export default Home;
