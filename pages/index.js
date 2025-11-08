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
            Escritório contábil com foco em soluções inteligentes para empresas
            e empreendedores. <br /> Atuamos com transparência, agilidade e
            proximidade com nossos clientes.
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
        <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
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
              required
              onChange={(e) =>
                console.log("Celular preenchido:", e.target.value)
              }
            />
          </label>
          <label>Digite sua mensagem</label>
          <textarea rows={10} cols={60} placeholder="digite aqui..."></textarea>

          <button type="submit">Enviar</button>
        </form>
      </section>

      {/* Rodapé com informações de contato */}
      <footer className="footer">
        <p>© 2025 Irmãos Angare Contabilidade</p>
      </footer>
    </div>
  );
}
