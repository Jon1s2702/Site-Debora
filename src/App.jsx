import { useEffect, useState } from 'react'

const servicos = [
  { numero: '01', titulo: 'Limpeza dental', imagem: 'limpeza-dental.jfif', texto: 'Cuidado essencial para manter o sorriso saudável, leve e bonito.', detalhe: 'A limpeza dental ajuda a remover placa bacteriana e tártaro, contribuindo para a saúde da gengiva e para a manutenção de um sorriso mais leve e bem cuidado.' },
  { numero: '02', titulo: 'Clareamento dental', imagem: 'clareamento-dental.jfif', texto: 'Mais luminosidade para o seu sorriso com orientação profissional.', detalhe: 'O clareamento dental é planejado de acordo com o seu sorriso e com a sua sensibilidade, buscando mais luminosidade sem abrir mão de um resultado natural.' },
  { numero: '03', titulo: 'Preenchimento labial', imagem: 'preenchimento-labial.jpeg', texto: 'Harmonia e naturalidade para valorizar a beleza de cada rosto.', detalhe: 'O preenchimento labial pode valorizar o contorno, o volume e a hidratação dos lábios. Cada caso é avaliado individualmente para preservar a harmonia do rosto.' },
  { numero: '04', titulo: 'Botox', imagem: 'botox.jpeg', texto: 'Procedimentos pensados para realçar sua expressão com equilíbrio.', detalhe: 'O botox é utilizado para suavizar linhas de expressão e preservar a leveza do rosto. O planejamento considera as características e os objetivos de cada pessoa.' },
  { numero: '05', titulo: 'Tratamento de canal', imagem: 'tratamento-de-canal.jfif', texto: 'Precisão e cuidado para preservar a saúde e a função do seu sorriso.', detalhe: 'O tratamento de canal busca tratar a parte interna do dente, aliviar a dor quando presente e preservar o dente sempre que possível, com planejamento e cuidado em cada etapa.' },
]

function ArrowUpRight() {
  return <span aria-hidden="true">↗</span>
}

function InstagramIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" /><circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.8" /><circle cx="17.4" cy="6.7" r="1" fill="currentColor" /></svg>
}

function WhatsappIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false"><path d="M20.5 11.7a8.4 8.4 0 0 1-12.4 7.4L3.5 20.5l1.4-4.5a8.4 8.4 0 1 1 15.6-4.3Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /><path d="M8.6 8.5c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.6c.1.3.1.5-.1.7l-.5.6c-.1.1-.1.3 0 .5.4.7 1 1.3 1.7 1.7.2.1.4.1.5-.1l.6-.7c.2-.2.4-.2.7-.1l1.6.7c.3.1.4.3.4.6v.5c0 .3-.1.5-.4.7-.4.3-1.1.4-1.7.2-1.1-.3-2.4-1-3.4-2s-1.7-2.3-2-3.4c-.2-.6-.1-1.3.2-1.7Z" fill="currentColor" /></svg>
}

function App() {
  const [servicoSelecionado, setServicoSelecionado] = useState(null)

  useEffect(() => {
    if (!servicoSelecionado) return undefined

    const fecharComEscape = (evento) => {
      if (evento.key === 'Escape') setServicoSelecionado(null)
    }

    document.addEventListener('keydown', fecharComEscape)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', fecharComEscape)
      document.body.style.overflow = ''
    }
  }, [servicoSelecionado])

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Página inicial de Débora Fernandes Borges">
          <img className="brand-logo" src="/images/logo-debora.png" alt="Logo Débora Borges" />
          <span className="brand-name">Débora Borges<small>Cirurgiã-dentista</small></span>
        </a>
        <nav className="main-nav" aria-label="Navegação principal"><a href="#sobre">Sobre</a><a href="#servicos">Serviços</a></nav>
        <a className="header-cta" href="#contato">Vamos conversar <ArrowUpRight /></a>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Odontologia com propósito</p>
            <h1>Seu sorriso,<br /><em>do seu jeito.</em></h1>
            <p className="hero-text">Cuidado, precisão e naturalidade para você se sentir ainda mais confiante em sua própria beleza.</p>
            <div className="hero-actions"><a className="button button-dark" href="#servicos">Conheça meu trabalho <ArrowUpRight /></a><a className="text-link" href="#sobre">Sobre a Dra. Débora <span>↓</span></a></div>
          </div>
          <div className="hero-visual" aria-label="Espaço reservado para foto profissional da Dra. Débora">
            <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
            <div className="portrait-placeholder"><img src="/images/debora1.webp" alt="Débora Borges, cirurgiã-dentista" /></div>
          </div>
          <div className="hero-scroll"><span className="scroll-line" /> Role para explorar</div>
        </section>

        <section className="intro-section" id="sobre">
          <div className="section-label">01 / Sobre</div>
          <div className="intro-content"><p className="eyebrow"><span /> Um olhar atento para cada detalhe</p><h2>Odontologia que respeita <em>quem você é.</em></h2><p className="body-copy">Meu trabalho nasce do encontro entre conhecimento, delicadeza e escuta. Cada pessoa tem uma história, um tempo e uma forma única de sorrir — e é isso que torna cada cuidado especial.</p><div className="signature-row"><span className="signature">Débora</span><span>Cirurgiã-dentista<br />Especializando em Endodontia</span></div></div>
          <div className="intro-detail"><img className="section-logo" src="/images/logo-debora.png" alt="Logo Débora Borges" /><p>Um atendimento próximo, humano e pensado para que você se sinta segura em cada etapa.</p></div>
        </section>

        <section className="services-section" id="servicos">
          <div className="services-heading"><div className="section-label">02 / Serviços</div><div><p className="eyebrow"><span /> Cuidado completo</p><h2>Beleza que começa<br /><em>na saúde.</em></h2></div><p className="services-lead">Soluções personalizadas para cuidar do seu sorriso e valorizar a sua beleza natural.</p></div>
          <div className="services-list">
            {servicos.map((servico) => <button className="service-card" key={servico.numero} type="button" onClick={() => setServicoSelecionado(servico)} aria-label={`Ver detalhes sobre ${servico.titulo}`}><span className="service-number">{servico.numero}</span><span className="service-card-content"><strong>{servico.titulo}</strong><span>{servico.texto}</span></span><span className="service-arrow" aria-hidden="true">↗</span></button>)}
          </div>
        </section>

        <section className="statement-section"><div className="statement-mark">“</div><p>Quando o cuidado é verdadeiro,<br /><em>o resultado revela você.</em></p><span className="statement-line" /></section>

        <section className="contact-section" id="contato"><div className="contact-kicker">03 / Próximo passo</div><div><p className="eyebrow"><span /> Vamos começar?</p><h2>Seu sorriso merece<br /><em>esse cuidado.</em></h2><p className="contact-copy">Entre em contato para conhecer o atendimento e encontrar o melhor caminho para você.</p><div className="contact-details"><div><span>Clínica</span><strong>Clínica Integra</strong></div><a className="contact-action" href="tel:+5564999596256"><span>Telefone</span><strong>(64) 99959-6256</strong><small>Ligar agora <ArrowUpRight /></small></a><a className="contact-action" href="https://wa.me/5564999596256" target="_blank" rel="noreferrer"><span>WhatsApp</span><strong>Falar pelo WhatsApp</strong><small>Enviar mensagem <ArrowUpRight /></small></a><a className="contact-action" href="https://www.instagram.com/debora_fborges?stkn=MTd2M2l3d3YyZzgwag%3D%3D&utm_source=qr" target="_blank" rel="noreferrer"><span>Instagram</span><strong>@debora_fborges</strong><small>Ver perfil <ArrowUpRight /></small></a><div><span>Endereço</span><strong>Av. Primeira, Qd. 78 - Lt. 06<br />Nº 101 — Setor Centro</strong></div></div></div></section>
      </main>

      {servicoSelecionado && <div className="service-modal-backdrop" role="presentation" onMouseDown={(evento) => { if (evento.target === evento.currentTarget) setServicoSelecionado(null) }}>
        <section className="service-modal" role="dialog" aria-modal="true" aria-labelledby="service-modal-title">
          <button className="modal-close" type="button" onClick={() => setServicoSelecionado(null)} aria-label="Fechar detalhes">×</button>
          <div className="modal-image-placeholder"><img className="service-modal-image" src={`/images/${servicoSelecionado.imagem}`} alt={`Imagem de ${servicoSelecionado.titulo}`} /></div>
          <div className="modal-content"><p className="eyebrow"><span /> Procedimento {servicoSelecionado.numero}</p><h2 id="service-modal-title">{servicoSelecionado.titulo}</h2><p>{servicoSelecionado.detalhe}</p><a className="button button-dark" href="#contato" onClick={() => setServicoSelecionado(null)}>Tenho interesse <ArrowUpRight /></a></div>
        </section>
      </div>}

      <footer className="site-footer"><a className="brand" href="#inicio"><img className="brand-logo" src="/images/logo-debora.png" alt="Logo Débora Borges" /><span className="brand-name">Débora Borges<small>Cirurgiã-dentista</small></span></a><span>Mineiros — GO</span><span>© 2026 Débora Fernandes Borges</span></footer>
    </div>
  )
}

export default App
