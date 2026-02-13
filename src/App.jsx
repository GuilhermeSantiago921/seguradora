import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Car, 
  Heart, 
  FileText, 
  CheckCircle, 
  MessageCircle, 
  Menu, 
  X, 
  ChevronRight, 
  Phone, 
  MapPin,
  Clock
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Efeito para mudar o header ao rolar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleWhatsAppClick = (message) => {
    const phone = "5511999999999"; // Substituir pelo número real
    const text = encodeURIComponent(message || "Olá! Gostaria de uma cotação.");
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  };

  return (
    <div className="font-sans text-slate-800 antialiased bg-gray-50">
      
      {/* Botão Flutuante do WhatsApp */}
      <div className="fixed bottom-6 right-6 z-50">
        <button 
          onClick={() => handleWhatsAppClick("Olá, vi o site e preciso de ajuda agora.")}
          className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all transform hover:scale-110 focus:outline-none animate-bounce-slow"
          aria-label="Falar no WhatsApp"
        >
          <MessageCircle size={32} />
        </button>
      </div>

      {/* Header / Navegação */}
      <header className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-blue-900 p-2 rounded text-white">
              <ShieldCheck size={24} />
            </div>
            <span className={`text-xl font-bold tracking-tight ${scrolled ? 'text-blue-900' : 'text-white'}`}>
              Líder<span className="text-blue-500">Seguros</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {['Início', 'Seguro Auto', 'Seguro Saúde', 'Despachante', 'Contato'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                className={`font-medium hover:text-blue-500 transition-colors ${scrolled ? 'text-slate-600' : 'text-gray-200'}`}
              >
                {item}
              </a>
            ))}
          </nav>

          <button 
            onClick={() => handleWhatsAppClick("Quero uma cotação rápida.")}
            className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition-all shadow-md"
          >
            Cotação Online
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-500 focus:outline-none" onClick={toggleMenu}>
            {isMenuOpen ? <X size={28} className={scrolled ? 'text-slate-800' : 'text-white'} /> : <Menu size={28} className={scrolled ? 'text-slate-800' : 'text-white'} />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-xl absolute w-full top-full border-t">
            <div className="flex flex-col p-4 space-y-4">
              {['Início', 'Seguro Auto', 'Seguro Saúde', 'Despachante', 'Contato'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-slate-700 font-medium py-2 border-b border-gray-100"
                >
                  {item}
                </a>
              ))}
              <button 
                onClick={() => handleWhatsAppClick()}
                className="bg-green-500 text-white py-3 rounded-lg font-bold w-full flex justify-center items-center gap-2"
              >
                <MessageCircle size={20} /> Falar no WhatsApp
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="início" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Família e Carro" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-blue-900/70"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-white">
            <div className="inline-block bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-1 mb-6 backdrop-blur-sm">
              <span className="text-sm font-semibold tracking-wide uppercase text-blue-100">Soluções Completas</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Proteção para sua vida, <br/>
              <span className="text-blue-400">agilidade</span> para seu veículo.
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              Unimos a segurança dos melhores Seguros (Auto e Saúde) com a facilidade da nossa Despachadoria própria. Resolva tudo em um só lugar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => handleWhatsAppClick("Gostaria de cotar um seguro.")}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition-transform hover:-translate-y-1 shadow-lg shadow-green-500/30"
              >
                <MessageCircle size={24} />
                Cotar Agora
              </button>
              <a 
                href="#servicos"
                className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center transition-all backdrop-blur-sm"
              >
                Ver Serviços
              </a>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-green-400" /> Atendimento Humanizado
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-green-400" /> +15 Anos de Mercado
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid (Intro) */}
      <section id="servicos" className="py-20 bg-white -mt-10 relative z-20 rounded-t-[3rem]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">O que podemos fazer por você?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Simplificamos a burocracia e garantimos sua proteção. Escolha a solução ideal para o seu momento.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: Seguro Auto */}
            <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Car size={100} className="text-blue-600" />
              </div>
              <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                <Car size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">Seguro Auto</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Proteção completa contra roubo, furto e colisão. Assistência 24h e carro reserva para você não parar.
              </p>
              <ul className="space-y-2 mb-8">
                {['Cobertura Compreensiva', 'Assistência 24h Guinho', 'Danos a Terceiros', 'Carro Reserva'].map(item => (
                  <li key={item} className="flex items-center text-sm text-slate-500">
                    <CheckCircle size={16} className="text-blue-500 mr-2" /> {item}
                  </li>
                ))}
              </ul>
              <button onClick={() => handleWhatsAppClick("Tenho interesse em Seguro Auto")} className="w-full py-3 border-2 border-blue-600 text-blue-600 font-bold rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
                Simular Seguro Auto
              </button>
            </div>

            {/* Card 2: Seguro Saúde (Destaque) */}
            <div className="bg-blue-900 p-8 rounded-2xl shadow-xl transform md:-translate-y-4 relative overflow-hidden text-white">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-800 rounded-bl-full -mr-8 -mt-8 opacity-50"></div>
              <div className="bg-blue-800/50 w-14 h-14 rounded-xl flex items-center justify-center text-blue-300 mb-6 border border-blue-700">
                <Heart size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Seguro Saúde</h3>
              <p className="text-blue-200 mb-6 leading-relaxed">
                Planos de saúde para você, sua família ou sua empresa. As melhores redes credenciadas com o melhor custo-benefício.
              </p>
              <ul className="space-y-2 mb-8">
                {['Planos Individuais e Familiares', 'Planos Empresariais (PME)', 'Coparticipação Opcional', 'Hospitais de Referência'].map(item => (
                  <li key={item} className="flex items-center text-sm text-blue-100">
                    <CheckCircle size={16} className="text-blue-400 mr-2" /> {item}
                  </li>
                ))}
              </ul>
              <button onClick={() => handleWhatsAppClick("Tenho interesse em Plano de Saúde")} className="w-full py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition-colors shadow-lg">
                Cotar Saúde Agora
              </button>
            </div>

            {/* Card 3: Despachadoria */}
            <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow group relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <FileText size={100} className="text-orange-600" />
              </div>
              <div className="bg-orange-100 w-14 h-14 rounded-xl flex items-center justify-center text-orange-600 mb-6">
                <FileText size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">Despachadoria</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Chega de filas e burocracia. Regularizamos a situação do seu veículo com rapidez e transparência.
              </p>
              <ul className="space-y-2 mb-8">
                {['Licenciamento Anual', 'Transferência de Propriedade', 'Primeiro Emplacamento', 'Parcelamento de Débitos'].map(item => (
                  <li key={item} className="flex items-center text-sm text-slate-500">
                    <CheckCircle size={16} className="text-orange-500 mr-2" /> {item}
                  </li>
                ))}
              </ul>
              <button onClick={() => handleWhatsAppClick("Preciso de serviço de despachante")} className="w-full py-3 border-2 border-orange-500 text-orange-600 font-bold rounded-lg hover:bg-orange-500 hover:text-white transition-colors">
                Falar com Despachante
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Split Section: Auto & Despachadoria */}
      <section id="seguro-auto" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Carro Seguro" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="lg:w-1/2">
              <span className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-2 block">Seu Carro em Dia</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Do Seguro ao Documento: <br/>Cuidamos de tudo.
              </h2>
              <p className="text-slate-600 text-lg mb-6">
                Não somos apenas uma corretora. Somos seu parceiro automotivo. Enquanto garantimos a proteção do seu bem com as melhores seguradoras do mercado, nosso time de despachantes resolve qualquer pendência documental.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded shadow-sm mr-4 text-blue-600">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">Sinistro sem dor de cabeça</h4>
                    <p className="text-sm text-slate-500">Acompanhamos todo o processo de indenização.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded shadow-sm mr-4 text-orange-500">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">Docs em 24h</h4>
                    <p className="text-sm text-slate-500">Licenciamento digital entregue no seu WhatsApp.</p>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => handleWhatsAppClick("Quero resolver pendências do meu carro")}
                className="bg-blue-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-800 transition-colors flex items-center gap-2"
              >
                Resolver Agora <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Split Section: Saúde (Inverted) */}
      <section id="seguro-saude" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2 relative">
               <div className="absolute inset-0 bg-blue-100 rounded-full transform translate-x-12 translate-y-12 -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Saúde e Família" 
                className="rounded-2xl shadow-2xl relative z-10"
              />
            </div>
            <div className="lg:w-1/2">
              <span className="text-green-600 font-bold tracking-wide uppercase text-sm mb-2 block">Saúde e Bem-Estar</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Planos de Saúde que cabem no bolso da sua família ou empresa.
              </h2>
              <p className="text-slate-600 text-lg mb-6">
                Trabalhamos com as principais operadoras do país (Amil, Bradesco, SulAmérica, NotreDame). Fazemos um estudo personalizado para reduzir custos do seu plano atual ou encontrar a melhor opção para sua primeira contratação.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <CheckCircle className="text-blue-600 mr-4 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">Redução de carência para planos empresariais</span>
                </div>
                <div className="flex items-center p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <CheckCircle className="text-blue-600 mr-4 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">Reembolso para consultas fora da rede</span>
                </div>
              </div>

              <button 
                onClick={() => handleWhatsAppClick("Quero simular um plano de saúde")}
                className="bg-green-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-600 transition-colors flex items-center gap-2"
              >
                Simular Saúde <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contato" className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Info */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Vamos conversar?</h2>
              <p className="text-blue-200 text-lg mb-8">
                Preencha o formulário ao lado ou nos chame no WhatsApp. Nossa equipe responde em menos de 15 minutos durante o horário comercial.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-800 p-3 rounded-full">
                    <Phone size={24} className="text-blue-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Telefone & WhatsApp</h4>
                    <p className="text-blue-200">(11) 99999-9999</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                   <div className="bg-blue-800 p-3 rounded-full">
                    <MapPin size={24} className="text-blue-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Localização</h4>
                    <p className="text-blue-200">Av. Paulista, 1000 - São Paulo, SP</p>
                  </div>
                </div>

                 <div className="flex items-center gap-4">
                   <div className="bg-blue-800 p-3 rounded-full">
                    <Clock size={24} className="text-blue-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Horário de Atendimento</h4>
                    <p className="text-blue-200">Seg a Sex: 09h às 18h</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Lead Form */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl text-slate-800">
              <h3 className="text-2xl font-bold mb-6">Solicite um Contato</h3>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Mensagem enviada! Em breve entraremos em contato."); }}>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Nome Completo</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="Seu nome" required />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">WhatsApp / Telefone</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="(00) 00000-0000" required />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Tenho interesse em:</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all">
                    <option>Seguro Auto</option>
                    <option>Seguro Saúde (Familiar)</option>
                    <option>Seguro Saúde (Empresarial)</option>
                    <option>Despachante / Documentos</option>
                    <option>Outros Seguros</option>
                  </select>
                </div>

                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-all shadow-md mt-4">
                  Enviar Solicitação
                </button>
                <p className="text-xs text-center text-gray-500 mt-2">
                  Seus dados estão seguros conosco. Não enviamos spam.
                </p>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center space-x-2 mb-6">
            <ShieldCheck size={32} className="text-blue-500" />
            <span className="text-2xl font-bold text-white">
              Líder<span className="text-blue-500">Seguros</span>
            </span>
          </div>
          <p className="mb-8 max-w-md mx-auto">
            Corretora de seguros registrada na SUSEP. Proteção e agilidade para o que realmente importa.
          </p>
          <div className="flex justify-center gap-6 mb-8 text-sm font-medium">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Sobre Nós</a>
          </div>
          <p className="text-xs">
            © {new Date().getFullYear()} Líder Seguros & Despachadoria. Todos os direitos reservados. CNPJ: 00.000.000/0000-00. SUSEP: 123456789.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;