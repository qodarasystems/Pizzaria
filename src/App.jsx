


import "./App.css"


import React, { useState, useEffect } from "react"
import { FaPeopleGroup} from "react-icons/fa6";
import { FaWhatsapp, 
        FaInstagram, 
        FaFacebookF } from "react-icons/fa";

function App() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <div className="App">
      {/* Header */}
      <header className="navbar">
  <div className="container nav-flex">
    <div className="logo">SUA PIZZARIA</div>

    <button
      className="hamburger"
      onClick={() => setMenuAberto(!menuAberto)}
      aria-label="Abrir menu"
    >
      ☰
    </button>

    <nav className={`nav-links ${menuAberto ? "active" : ""}`}>
      <a href="#home">Início</a>
      <a href="#menu">Menu</a>
      <a href="#sabores">Sabores</a>
      <a href="#delivery">Delivery</a>
      <a href="#sobre">Sobre</a>
    </nav>

    <div className="nav-action">
      <button className="order-btn">📦 Fazer Pedido</button>
    </div>
  </div>
</header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h1>A Pizza Mais Quente do Bairro!</h1>
          <p>
            Sabores autênticos brasileiros com os melhores ingredientes, assados à perfeição em nosso forno à lenha
            tradicional.
          </p>
          <button className="cta-button">COMECE SEU PEDIDO</button>
        </div>

       {/*  <div className="hero-image">
          <img src="/placeholder.svg?height=600&width=600" alt="Pizza deliciosa" />
        </div> */}

      </section>

      {/* Seção de Pizzas */}
      <section className="pizzas-section" id="sabores">
        <div className="container">
          <h2>Nossos Sabores Especiais</h2>
          <div className="pizzas-grid">
            <div className="pizza-card">
              <div className="pizza-image">
                <img src="/calabresa.svg?height=250&width=250" alt="Pizza Pepperoni" />
              </div>
              <div className="pizza-info">
                <h3>Calabresa</h3>
                <p>Pepperoni clássico com nosso molho especial de tomate e queijo mozzarella</p>
                <button className="ver-sabor-btn">VER SABOR</button>
              </div>
            </div>

            <div className="pizza-card">
              <div className="pizza-image">
                <img src="/mussa.svg?height=250&width=250" alt="Pizza Margherita" />
              </div>
              <div className="pizza-info">
                <h3>Mussarela</h3>
                <p>Tomates frescos, queijo mozzarella, manjericão fresco, sal e azeite</p>
                <button className="ver-sabor-btn">VER SABOR</button>
              </div>
            </div>

            <div className="pizza-card">
              <div className="pizza-image">
                <img src="/portuguesa.svg?height=250&width=250" alt="Pizza Portuguesa" />
              </div>
              <div className="pizza-info">
                <h3>Portuguesa</h3>
                <p>Presunto, cebolas, ovos cozidos, azeitonas e nossa mistura especial de queijos</p>
                <button className="ver-sabor-btn">VER SABOR</button>
              </div>
            </div>

            <div className="pizza-card">
              <div className="pizza-image">
                <img src="/brocolis.svg?height=250&width=250" alt="Pizza 4 Queijos" />
              </div>
              <div className="pizza-info">
                <h3>Brocolis</h3>
                <p>Mozzarella, parmesão, gorgonzola e provolone para os amantes de queijo</p>
                <button className="ver-sabor-btn">VER SABOR</button>
              </div>
            </div>
            <div className="pizza-card">
              <div className="pizza-image">
                <img src="/4queijos.svg?height=250&width=250" alt="Pizza 4 Queijos" />
              </div>
              <div className="pizza-info">
                <h3>4 Queijos</h3>
                <p>Mozzarella, parmesão, gorgonzola e provolone para os amantes de queijo</p>
                <button className="ver-sabor-btn">VER SABOR</button>
              </div>
            </div>
            <div className="pizza-card">
              <div className="pizza-image">
                <img src="/frango.svg?height=250&width=250" alt="Pizza 4 Queijos" />
              </div>
              <div className="pizza-info">
                <h3>Frango Catupiry</h3>
                <p>Mozzarella, parmesão, gorgonzola e provolone para os amantes de queijo</p>
                <button className="ver-sabor-btn">VER SABOR</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Combos */}
      <section className="combos-section">
        <div className="container">
          <div className="combos-content">
            <div className="combo-left">
              <h2>Nossos Combos</h2>
              <h3>Combo Aberto</h3>
              <div className="combo-image">
                <img src="/combo.svg?height=400&width=400" alt="Combo Pizza" />
              </div>
            </div>
            <div className="combo-right">
              <div className="combos-grid">
                <div className="combo-item">
                  <div className="combo-icon">
                    <img src="/placeholder.svg?height=60&width=60" alt="Pizza" />
                  </div>
                  <div className="combo-details">
                    <div className="stars">⭐⭐⭐⭐⭐</div>
                    <h4>Pizza + Refrigerante</h4>
                    <p>Pizza média de qualquer sabor e refrigerante 2L</p>
                  </div>
                </div>

                <div className="combo-item">
                  <div className="combo-icon">
                    <img src="/placeholder.svg?height=60&width=60" alt="Pizza" />
                  </div>
                  <div className="combo-details">
                    <div className="stars">⭐⭐⭐⭐⭐</div>
                    <h4>Combo Família</h4>
                    <p>Pizza grande, palitos de alho e dois refrigerantes 2L</p>
                  </div>
                </div>

                <div className="combo-item">
                  <div className="combo-icon">
                    <img src="/placeholder.svg?height=60&width=60" alt="Pizza" />
                  </div>
                  <div className="combo-details">
                    <div className="stars">⭐⭐⭐⭐⭐</div>
                    <h4>Combo Festa</h4>
                    <p>2 pizzas grandes, chicken wings e refrigerante 3L</p>
                  </div>
                </div>

                <div className="combo-item">
                  <div className="combo-icon">
                    <img src="/placeholder.svg?height=60&width=60" alt="Pizza" />
                  </div>
                  <div className="combo-details">
                    <div className="stars">⭐⭐⭐⭐⭐</div>
                    <h4>Combo Sobremesa</h4>
                    <p>Pizza média com pizza doce de chocolate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avaliações de Clientes */}
      <section className="reviews-section">
        <div className="container">
          <h2>Avaliações dos Clientes</h2>
          <div className="reviews-grid">
            <div className="review-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p>
                "A melhor pizza que já comi! A massa é perfeita e os ingredientes sempre frescos. A entrega sempre
                pontual também!"
              </p>
              <div className="reviewer">
                <div className="reviewer-avatar"><img src="c3.png" alt="" /></div>
                <div className="reviewer-info">
                  <h4>Jamal Silva</h4>
                  <span>São Paulo</span>
                </div>
              </div>
            </div>

            <div className="review-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p>
                "A pizza portuguesa é incrível! Sabores autênticos que me lembram de casa. Definitivamente vou pedir
                novamente!"
              </p>
              <div className="reviewer">
                <div className="reviewer-avatar"><img src="c1.png" alt="" /></div>
                <div className="reviewer-info">
                  <h4>João Santos</h4>
                  <span>Rio de Janeiro</span>
                </div>
              </div>
            </div>

            <div className="review-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p>
                "O combo família é perfeito para noites de filme! Ótimo custo-benefício e as pizzas sempre chegam
                quentinhas e deliciosas."
              </p>
              <div className="reviewer">
                <div className="reviewer-avatar"><img src="c2.png" alt="" /></div>
                <div className="reviewer-info">
                  <h4>Ana Oliveira</h4>
                  <span>Brasília</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Peça Agora */}
      <section className="order-section" id="delivery">
        <div className="container">
          <div className="order-content">
            <div className="order-left">
              <h2>Peça Agora</h2>
              <p>Entrega rápida, direto na sua porta</p>
              <div className="order-buttons">
                <button className="call-btn">LIGAR</button>
                <button className="whatsapp-btn">WHATSAPP</button>
              </div>
              <div className="rating-info">
                <div className="stars">⭐⭐⭐⭐⭐</div>
                <span>4.8 avaliação (500+ avaliações)</span>
              </div>
            </div>
            <div className="order-right">
              <img src="/pizzeria.svg?height=400&width=400" alt="Pizza para entrega" />
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Contato */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-left">
              <h2>Avaliações dos Clientes</h2>
              <p>
                Clientes satisfeitos compartilham suas experiências com nossas pizzas deliciosas e excelente
                atendimento.
              </p>
              <div className="rating-display">
                <div className="stars">⭐⭐⭐⭐⭐</div>
                <span>5.0 (1,234 avaliações)</span>
              </div>
            </div>

            <div className="contact-center">
              <div className="phone-circle">📞</div>
              <h3>011 96355-2384</h3>
              <button className="call-now-btn">LIGAR AGORA</button>
            </div>

            <div className="contact-right">
              <h3>Pizzas Servidas</h3>
              <div className="pizza-count">40 853</div>
              <div className="social-links">
                <a href="#" className="social-link">
                  <FaInstagram />
                </a>
                <a href="#" className="social-link">
                  <FaFacebookF />
                </a>
                <a href="#" className="social-link">
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Brazilian Pizza</h3>
              <p>A melhor pizza brasileira autêntica da cidade. Feita com amor e os melhores ingredientes.</p>
              <div className="footer-social">
                <a href="#"><FaWhatsapp /></a>
                <a href="#"><FaFacebookF /></a>
                <a href="#"> <FaInstagram /></a>
              </div>
            </div>

            <div className="footer-section">
              <h3>Contato</h3>
              <div className="contact-info">
                <div className="contact-item">
                  <span>📍</span>
                  <span>Rua das Pizzas, 123, São Paulo, Brasil</span>
                </div>
                <div className="contact-item">
                  <span>📞</span>
                  <span>+55 11 9876-5432</span>
                </div>
                <div className="contact-item">
                  <span>✉️</span>
                  <span>contato@brazilianpizza.com</span>
                </div>
              </div>
            </div>

            <div className="footer-section">
              <h3>Horário de Funcionamento</h3>
              <div className="hours">
                <div className="hour-item">
                  <span>Segunda - Sexta</span>
                  <span>11:00 - 22:00</span>
                </div>
                <div className="hour-item">
                  <span>Sábado</span>
                  <span>11:00 - 23:00</span>
                </div>
                <div className="hour-item">
                  <span>Domingo</span>
                  <span>12:00 - 22:00</span>
                </div>
              </div>
            </div>

            <div className="footer-section">
              <h3>Links Rápidos</h3>
              <div className="quick-links">
                <a href="#home">Home</a>
                <a href="#menu">Menu</a>
                <a href="#sabores">Sabores</a>
                <a href="#delivery">Delivery</a>
                <a href="#sobre">Sobre Nós</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2024 Brazilian Pizza. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Botão Flutuante WhatsApp */}
{/*       <div className="whatsapp-float">
        <button className="whatsapp-button"><FaWhatsapp /></button>
      </div> */}

      <a
              href="https://wa.me/5511919223489"
              className="whatsapp-float"
              target="_blank"
              rel="noopener noreferrer"
              >
              {/* 🟢 WhatsApp */}
              <FaWhatsapp />
           </a>


    </div>
  )
}

export default App
