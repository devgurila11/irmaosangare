import React, { useState, useEffect } from "react";
import Link from "next/link";
import InputMask from "react-input-mask";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function LandingPage() {
  // Estado para controlar se o usuário tem empresa
  const [temEmpresa, setTemEmpresa] = useState(null);

  // Efeito para animar o carrossel automaticamente
  useEffect(() => {
    const interval = setInterval(() => {
      const container = document.querySelector(".carousel");
      if (container) {
        container.scrollBy({ left: 310, behavior: "smooth" });
        console.log("Carrossel avançando automaticamente");
      }
    }, 3000); // a cada 3 segundos

    return () => {
      console.log("Limpando intervalo do carrossel");
      clearInterval(interval);
    };
  }, []);

  // Função chamada ao enviar o formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // evita recarregar a página
    console.log("Formulário enviado → redirecionando para e-mail");
    window.location.href = "mailto:rafael@irmaosangare.com.br";
  };

  // Função chamada ao clicar em "Área Administrativa"
  const handleAdminClick = () => {
    console.log("Botão Área Administrativa clicado → exibindo alerta");
    alert("Você não tem permissão para acessar esta área.");
  };

  return (
    <div className="landing-container">
      {/* Cabeçalho com logo, título e botões */}

      <header className="header">
        <img src="/images/logo-irmaosAngare.png" alt="Logo" className="logo" />
        <h1>Irmãos Angare Contabilidade</h1>

        {/* Botões de navegação */}
        <div className="header-buttons">
          <Link href="/clientes">
            <button
              onClick={() =>
                console.log("Botão Clientes clicado → navegando para /clientes")
              }
            >
              Clientes
            </button>
          </Link>
          <button onClick={handleAdminClick}>Área Administrativa</button>
        </div>
      </header>

      {/* Seção sobre o escritório */}
      <section className="section section-light">
        <h2>
          <i>
            Soluções contábeis inteligentes para empresas, empreendedores e
            profissionais da contabilidade.<br></br>Atuamos com transparência,
            agilidade e proximidade, oferecendo também nossa plataforma para que
            outros contadores possam impulsionar seus próprios escritórios
          </i>
        </h2>
      </section>

      {/* Seção de serviços com cards e descrições */}
      <section className="section section-dark">
        <h2>Serviços</h2>
        <div className="servicos-grid">
          <div className="servico-card">
            <h3>📊 Abertura de Empresas</h3>
            <p>
              Orientamos você desde o primeiro passo, cuidando da legalização e
              estruturação fiscal com agilidade.
            </p>
          </div>
          <div className="servico-card">
            <h3>📁 Escrituração Contábil</h3>
            <p>
              Organizamos e registramos todas as movimentações financeiras com
              precisão e transparência.
            </p>
          </div>
          <div className="servico-card">
            <h3>💼 Folha de Pagamento</h3>
            <p>
              Gerenciamos salários, encargos e obrigações trabalhistas com
              segurança e pontualidade.
            </p>
          </div>
          <div className="servico-card">
            <h3>📈 Planejamento Tributário</h3>
            <p>
              Reduzimos sua carga fiscal com estratégias legais e personalizadas
              para o seu negócio.
            </p>
          </div>
        </div>
      </section>

      {/* Carrossel de imagens contábeis */}
      <section className="section section-light">
        <h2>Nosso Trabalho</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div style={{ textAlign: "center" }}>
              <img
                src="/images/cloud-security-irmaosangare.png"
                alt="Cloud Security"
                style={{
                  maxWidth: "512px",
                  width: "100%",
                  height: "auto",
                  marginBottom: "10px",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 1)",
                }}
              />
              <p>
                Seu financeiro em ordem, seus arquivos na nuvem, sua rede
                conectada
              </p>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div style={{ textAlign: "center" }}>
              <img
                src="/images/collaboration-irmaosangare.png"
                alt="Collaboration"
                style={{
                  maxWidth: "512px",
                  width: "100%",
                  height: "auto",
                  marginBottom: "10px",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 1)",
                }}
              />
              <p>
                Contabilidade inteligente, documentos seguros, acesso
                compartilhado
              </p>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div style={{ textAlign: "center" }}>
              <img
                src="/images/control-irmaosangare.png"
                alt="Control"
                style={{
                  maxWidth: "512px",
                  width: "100%",
                  height: "auto",
                  marginBottom: "10px",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 1)",
                }}
              />
              <p>Controle contábil inteligente, movido por dados</p>
            </div>
          </SwiperSlide>

          {/* Slide 4 */}
          <SwiperSlide>
            <div style={{ textAlign: "center" }}>
              <img
                src="/images/digital-workspace-irmaosangare.png"
                alt="Digital Workspace"
                style={{
                  maxWidth: "512px",
                  width: "100%",
                  height: "auto",
                  marginBottom: "10px",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 1)",
                }}
              />
              <p>
                Do balanço à nuvem: tudo sob controle, com acesso para quem
                precisa
              </p>
            </div>
          </SwiperSlide>

          {/* Slide 5 */}
          <SwiperSlide>
            <div style={{ textAlign: "center" }}>
              <img
                src="/images/independent-professionals-irmaosangare.png"
                alt="Professionals Independent"
                style={{
                  maxWidth: "512px",
                  width: "100%",
                  height: "auto",
                  marginBottom: "10px",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 1)",
                }}
              />
              <p>Gestão contábil moderna: segura, online e colaborativa</p>
            </div>
          </SwiperSlide>

          {/* Slide 6 */}
          <SwiperSlide>
            <div style={{ textAlign: "center" }}>
              <img
                src="/images/smart-account-irmaosangare.png"
                alt="Smart Account"
                style={{
                  maxWidth: "512px",
                  width: "100%",
                  height: "auto",
                  marginBottom: "10px",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 1)",
                }}
              />
              <p>
                Contabilidade com segurança digital e colaboração profissional
              </p>
            </div>
          </SwiperSlide>

          {/* Slide 7 */}
          <SwiperSlide>
            <div style={{ textAlign: "center" }}>
              <img
                src="/images/technology-irmaosangare.png"
                alt="Technology"
                style={{
                  maxWidth: "512px",
                  width: "100%",
                  height: "auto",
                  marginBottom: "10px",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 1)",
                }}
              />
              <p>Controle total com tecnologia contábil</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Formulário com máscara e separação visual */}
      <section className="section section-dark">
        <h2>Seja Cliente</h2>
        <form
          action="https://formsubmit.co/contato@irmaosangare.com.br"
          method="POST"
          style={{ textAlign: "center" }}
          onSubmit={(e) => {
            console.log("✅ Formulário enviado");
            alert(
              "Mensagem enviada com sucesso! Entraremos em contato em breve.",
            );
            // Não usamos e.preventDefault() para que o envio continue
          }}
        >
          {/* Seleção de tipo de cliente */}
          <label>
            Você já possui empresa?
            <select
              onChange={(e) => {
                console.log("Selecionado tipo de cliente:", e.target.value);
                setTemEmpresa(e.target.value);
              }}
            >
              <option value="">Selecione</option>
              <option value="sim">Sim</option>
              <option value="nao">Não</option>
            </select>
          </label>

          {/* Campo condicional: CNPJ ou CPF */}
          {temEmpresa === "sim" && (
            <label>
              CNPJ:
              <InputMask
                mask="99.999.999/9999-99"
                name="cnpj"
                required
                onChange={(e) =>
                  console.log("CNPJ preenchido:", e.target.value)
                }
              />
            </label>
          )}
          {temEmpresa === "nao" && (
            <label>
              CPF:
              <InputMask
                mask="999.999.999-99"
                name="cpf"
                required
                onChange={(e) => console.log("CPF preenchido:", e.target.value)}
              />
            </label>
          )}

          {/* Campos comuns */}
          <label>
            E-mail:
            <input
              type="email"
              name="email"
              required
              onChange={(e) =>
                console.log("E-mail preenchido:", e.target.value)
              }
            />
          </label>

          <label>
            Celular:
            <InputMask
              mask="(99) 99999-9999"
              name="celular"
              required
              onChange={(e) =>
                console.log("Celular preenchido:", e.target.value)
              }
            />
          </label>
          <label>Digite sua mensagem</label>
          <textarea
            rows={10}
            cols={60}
            name="mensagem"
            placeholder="digite aqui..."
          ></textarea>

          <button type="submit">Enviar</button>
          {/* Campos ocultos para controle do FormSubmit */}
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_next"
            value="https://seusite.com/obrigado"
          />
        </form>
      </section>
      {/* 💬 Botão flutuante do WhatsApp */}
      <a
        href="https://wa.me/5511945195474"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
        onClick={() => console.log("📲 Botão do WhatsApp clicado")}
      >
        {/* Ícone SVG do WhatsApp */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="#fff"
        >
          <path d="M16 0C7.163 0 0 7.163 0 16c0 2.837.744 5.5 2.164 7.9L0 32l8.3-2.164C10.5 31.256 13.163 32 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.6c-2.6 0-5.1-.7-7.3-2.1l-.5-.3-4.9 1.3 1.3-4.8-.3-.5C3.1 21.1 2.4 18.6 2.4 16 2.4 8.9 8.9 2.4 16 2.4S29.6 8.9 29.6 16 23.1 29.6 16 29.6zm8.1-10.5c-.4-.2-2.3-1.1-2.6-1.2-.3-.1-.5-.2-.7.2-.2.4-.8 1.2-1 1.4-.2.2-.4.3-.8.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.3-.4.5-.6.2-.2.1-.4 0-.6-.1-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.2 3.3 1.4 3.5c.2.2 2.3 3.5 5.6 4.9.8.3 1.4.5 1.9.6.8.3 1.5.2 2.1.1.6-.1 2.3-.9 2.6-1.8.3-.9.3-1.7.2-1.8-.1-.1-.3-.2-.7-.4z" />
        </svg>
      </a>

      {/* 📍 Section com o mapa do escritório */}
      <section className="section section-map">
        <h2>Onde Estamos</h2>

        {/* Container do mapa */}
        <div className="map-container">
          {/* Mapa incorporado via iframe */}
          <iframe
            title="Localização do Escritório"
            src="https://www.google.com/maps/embed?pb=!4v1762712389276!6m8!1m7!1sn7G71HSICnQSUhUg5Ba7yw!2m2!1d-23.53030061356555!2d-46.51628757111227!3f122.37607898828769!4f1.8697244957255776!5f0.7820865974627469"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Informações de endereço e botão */}
        <div className="map-info">
          {/* Endereço com ícone */}
          <p>
            <span role="img" aria-label="localização">
              📍
            </span>{" "}
            Rua Costa Rego, 25 Complemento C – Vila Guilhermina - CEP: 03542-030
            - São Paulo, SP
          </p>

          {/* Botão para abrir o Google Maps */}

          <a
            href="https://www.google.com/maps/place/R.+Costa+Rego,+25+-+Vila+Guilhermina,+S%C3%A3o+Paulo+-+SP,+03542-030/@-23.5303335,-46.5161901,1043m/data=!3m2!1e3!4b1!4m6!3m5!1s0x94ce60a0a7966e11:0xc37836eb261a6421!8m2!3d-23.5303335!4d-46.5161901!16s%2Fg%2F11bw44dlyn?entry=ttu&g_ep=EgoyMDI1MTEwNS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="map-button"
            onClick={() => console.log("🗺️ Link para Google Maps clicado")}
          >
            Ver no Google Maps
          </a>
        </div>
      </section>

      <footer className="footer" id="contato">
        {console.log("📞 Rodapé carregado")}

        <p>&copy; 2025 Irmãos Angare</p>
        <div className="social">
          <a
            href="https://www.facebook.com/profile.php?id=61583293121413"
            target="_blank"
          >
            Facebook
          </a>
          <a href="https://www.instagram.com/irmaosangare/" target="_blank">
            Instagram
          </a>
          <a href="mailto:contato@irmaosangare.com">E-mail</a>
        </div>
      </footer>
    </div>
  );
}
