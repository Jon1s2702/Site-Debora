const servicos = [
  { numero: '01', titulo: 'Limpeza dental', texto: 'Cuidado essencial para manter o sorriso saudável, leve e bonito.' },
  { numero: '02', titulo: 'Clareamento dental', texto: 'Mais luminosidade para o seu sorriso com orientação profissional.' },
  { numero: '03', titulo: 'Preenchimento labial', texto: 'Harmonia e naturalidade para valorizar a beleza de cada rosto.' },
  { numero: '04', titulo: 'Botox', texto: 'Procedimentos pensados para realçar sua expressão com equilíbrio.' },
  { numero: '05', titulo: 'Tratamento de canal', texto: 'Precisão e cuidado para preservar a saúde e a função do seu sorriso.' },
]

function ArrowUpRight() {
  return <span aria-hidden="true">↗</span>
}

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Página inicial de Débora Fernandes Borges">
          <img className="brand-logo" src="/images/logo-debora.png" alt="Logo Débora Borges" />
          <span className="brand-name">Débora Borges<small>Cirurgiã-dentista</small></span>
        </a>
        <nav className="main-nav" aria-label="Navegação principal">
          <a href="#sobre">Sobre</a><a href="#servicos">Serviços</a>
        </nav>
        <a className="header-cta" href="#contato">Vamos conversar <ArrowUpRight /></a>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Odontologia com propósito</p>
            <h1>Seu sorriso,<br /><em>do seu jeito.</em></h1>
            <p className="hero-text">Cuidado, precisão e naturalidade para você se sentir ainda mais confiante em sua própria beleza.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#servicos">Conheça meu trabalho <ArrowUpRight /></a>
              <a className="text-link" href="#sobre">Sobre a Dra. Débora <span>↓</span></a>
            </div>
          </div>
          <div className="hero-visual" aria-label="Espaço reservado para foto profissional da Dra. Débora">
            <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
            <div className="portrait-placeholder"><img src="/images/debora1.webp" alt="Débora Borges, cirurgiã-dentista" /></div>
          </div>
          <div className="hero-scroll"><span className="scroll-line" /> Role para explorar</div>
        </section>

        <section className="intro-section" id="sobre">
          <div className="section-label">01 / Sobre</div>
          <div className="intro-content">
            <p className="eyebrow"><span /> Um olhar atento para cada detalhe</p>
            <h2>Odontologia que respeita <em>quem você é.</em></h2>
            <p className="body-copy">Meu trabalho nasce do encontro entre conhecimento, delicadeza e escuta. Cada pessoa tem uma história, um tempo e uma forma única de sorrir — e é isso que torna cada cuidado especial.</p>
            <div className="signature-row"><span className="signature">Débora</span><span>Cirurgiã-dentista<br />Especializando em Endodontia</span></div>
          </div>
          <div className="intro-detail"><img className="section-logo" src="/images/logo-debora.png" alt="Logo Débora Borges" /><p>Um atendimento próximo, humano e pensado para que você se sinta segura em cada etapa.</p></div>
        </section>

        <section className="services-section" id="servicos">
          <div className="services-heading">
            <div className="section-label">02 / Serviços</div>
            <div><p className="eyebrow"><span /> Cuidado completo</p><h2>Beleza que começa<br /><em>na saúde.</em></h2></div>
            <p className="services-lead">Soluções personalizadas para cuidar do seu sorriso e valorizar a sua beleza natural.</p>
          </div>
          <div className="services-list">
            {servicos.map((servico) => <article className="service-card" key={servico.numero}><span className="service-number">{servico.numero}</span><div><h3>{servico.titulo}</h3><p>{servico.texto}</p></div><span className="service-arrow" aria-hidden="true">↗</span></article>)}
          </div>
        </section>

        <section className="statement-section"><div className="statement-mark">“</div><p>Quando o cuidado é verdadeiro,<br /><em>o resultado revela você.</em></p><span className="statement-line" /></section>

        <section className="contact-section" id="contato">
          <div className="contact-kicker">03 / Próximo passo</div>
          <div><p className="eyebrow"><span /> Vamos começar?</p><h2>Seu sorriso merece<br /><em>esse cuidado.</em></h2><p className="contact-copy">Entre em contato para conhecer o atendimento e encontrar o melhor caminho para você.</p><div className="contact-details"><div><span>Clínica</span><strong>Clínica Integra</strong></div><a href="tel:+5564999596256"><span>Telefone</span><strong>(64) 99959-6256</strong></a><div><span>Endereço</span><strong>Av. Primeira, Qd. 78 - Lt. 06<br />Nº 101 — Setor Centro</strong></div></div></div>
        </section>
      </main>

      <footer className="site-footer"><a className="brand" href="#inicio"><img className="brand-logo" src="/images/logo-debora.png" alt="Logo Débora Borges" /><span className="brand-name">Débora Borges<small>Cirurgiã-dentista</small></span></a><span>Mineiros — GO</span><span>© 2026 Débora Fernandes Borges</span></footer>
    </div>
  )
}

export default App
