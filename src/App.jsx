import React from 'react';
import foto1 from './assets/bruna-1.jpeg';
import foto2 from './assets/bruna-2.jpeg'; 
import foto3 from './assets/bruna-3.jpeg';
import logo from './assets/logo.jpeg'; // Importação da nova logo

function App() {
  const whatsappNumber = "5548999999999"; 
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20consultoria!`;

  return (
    <div className="min-h-screen bg-black text-zinc-200 font-sans selection:bg-[#C5A059] selection:text-black">
      
      {/* Botão Flutuante do WhatsApp (Mantido verde pela taxa de conversão padrão do app) */}
      <a 
        href={whatsappLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-[#25d366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 z-50 flex items-center justify-center"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
      </a>

      {/* Header com a Logo */}
      <div className="absolute top-0 left-0 w-full flex justify-center pt-10 z-20">
        <img src={logo} alt="Logo Bruna Ferreira" className="h-32 md:h-40 object-contain drop-shadow-2xl" />
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-black via-zinc-900 to-black text-white pt-52 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#C5A059] via-transparent to-transparent"></div>
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center mt-8">
          <span className="text-[#C5A059] font-semibold tracking-wider uppercase text-sm mb-4 block">
            Especialista em Saúde & Direito
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-white">
            Blindagem Jurídica e Gestão de Risco <br className="hidden md:block"/> para Centros Endoscópicos
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-3xl mx-auto">
            Traduza a complexidade jurídica e a gestão de materiais (OPME) em governança clínica segura e eficiente. 
            Proteja sua operação com quem entende a rotina hospitalar por dentro.
          </p>
          <a 
            href="#servicos" 
            className="inline-block bg-[#C5A059] hover:bg-[#b08d4f] text-black font-bold py-4 px-8 rounded-lg shadow-lg shadow-[#C5A059]/20 transition-all duration-300 transform hover:-translate-y-1"
          >
            Conheça a Metodologia
          </a>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="py-24 bg-zinc-950 max-w-full">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Como estruturamos sua operação</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">Soluções modulares desenhadas especificamente para a realidade de clínicas de endoscopia.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-zinc-900 p-8 rounded-2xl shadow-sm hover:shadow-2xl border border-zinc-800 hover:border-[#C5A059] transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-black text-[#C5A059] border border-zinc-800 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:bg-[#C5A059] group-hover:text-black transition-colors duration-300">
                ⚖️
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Blindagem Jurídica</h3>
              <p className="text-zinc-400 leading-relaxed">
                Análise de contratos, elaboração de termos de consentimento informado específicos e estruturação de defesas preventivas contra litígios médicos.
              </p>
            </div>

            <div className="group bg-zinc-900 p-8 rounded-2xl shadow-sm hover:shadow-2xl border border-zinc-800 hover:border-[#C5A059] transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-black text-[#C5A059] border border-zinc-800 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:bg-[#C5A059] group-hover:text-black transition-colors duration-300">
                📋
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Governança & Compliance</h3>
              <p className="text-zinc-400 leading-relaxed">
                Implementação de protocolos operacionais (SOPs) que garantem a adequação do seu centro endoscópico às normativas da Anvisa e CFM.
              </p>
            </div>

            <div className="group bg-zinc-900 p-8 rounded-2xl shadow-sm hover:shadow-2xl border border-zinc-800 hover:border-[#C5A059] transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-black text-[#C5A059] border border-zinc-800 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:bg-[#C5A059] group-hover:text-black transition-colors duration-300">
                💡
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Gestão de Risco em OPME</h3>
              <p className="text-zinc-400 leading-relaxed">
                Auditoria e padronização do fluxo de materiais especiais, mitigando desperdícios, glosas e riscos no uso de equipamentos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre a Bruna Section */}
      <section className="bg-black py-24 border-y border-zinc-900">
        <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
          
          {/* Colagem de Fotos */}
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
            <div className="col-span-2 overflow-hidden rounded-2xl shadow-lg h-72 border border-zinc-800">
              <img src={foto1} alt="Bruna trabalhando" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 opacity-90 hover:opacity-100" />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg h-56 border border-zinc-800">
              <img src={foto2} alt="Bruna" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 opacity-90 hover:opacity-100" />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg h-56 border border-zinc-800">
              <img src={foto3} alt="Bruna sorrindo" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 opacity-90 hover:opacity-100" />
            </div>
          </div>

          {/* Texto Sobre */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Quem é Bruna Rhayssa?</h2>
            <p className="text-lg text-zinc-400 mb-6">
              Com 18 anos de vivência no setor de saúde, atuo na intersecção perfeita entre a prática clínica avançada e a segurança legal.
            </p>
            
            <ul className="space-y-4 text-zinc-300">
              <li className="flex items-start">
                <span className="text-[#C5A059] mr-3 text-xl">✓</span>
                <p><strong>Advogada (OAB-MT 28064)</strong> especializada na área da saúde e gestão de risco.</p>
              </li>
              <li className="flex items-start">
                <span className="text-[#C5A059] mr-3 text-xl">✓</span>
                <p><strong>Pós-graduada em Direito Médico e Bioética</strong> pela PUC Minas.</p>
              </li>
              <li className="flex items-start">
                <span className="text-[#C5A059] mr-3 text-xl">✓</span>
                <p><strong>Expert em Endoscopia:</strong> Especialista de Produtos (Cook Medical e ERBE Endoscopy).</p>
              </li>
              <li className="flex items-start">
                <span className="text-[#C5A059] mr-3 text-xl">✓</span>
                <p>Sólida experiência em gestão, auditoria e negociação de OPME em cooperativas e hospitais de alta complexidade.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer / CTA Final */}
      <footer className="bg-zinc-950 text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-white">Pronto para proteger sua operação clínica?</h2>
          <p className="text-zinc-400 mb-10 text-lg">
            Agende uma conversa estratégica e vamos desenhar um plano de compliance sob medida para a sua clínica.
          </p>
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer" 
            className="inline-block bg-[#C5A059] text-black font-bold py-4 px-10 rounded-lg shadow-lg hover:bg-[#b08d4f] transition-colors duration-300 mb-12"
          >
            Falar pelo WhatsApp
          </a>
          
          <div className="flex justify-center space-x-6 border-t border-zinc-900 pt-8">
            <a href="https://www.linkedin.com/in/bruna-rhayssa-13294a16a" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-[#C5A059] transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-zinc-500 hover:text-[#C5A059] transition-colors">
              Instagram
            </a>
            <a href="#" className="text-zinc-500 hover:text-[#C5A059] transition-colors">
              E-mail
            </a>
          </div>
          <p className="mt-8 text-zinc-600 text-sm">
            © 2026 Bruna Ferreira. Florianópolis, SC.
          </p>
        </div>
      </footer>

    </div>
  );
}

export default App;