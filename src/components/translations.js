

const translations = [
  {
    en:
      "Hey! My name is Valery, I am a Software developer. I've been doing this for a couple of years.",
    es:
      "¡Hola! Mi nombre es Valery, soy un Desarrollador de Software. Ya llevo un par de años haciendolo.",
    it:
      "Ciao! Mi chiamo Valery, sono un sviluppatore di Software. Ho un paio d'anni facendo questo.",
  },

  {
    en:
      "Happy to learn new things, eager to discover new features. Furthermore, I enjoy my time because I love what I do.",
    es:
      "Me encanta aprender cosas nueva, ansioso por descubrir nuevas funcionalidades. Amo lo que hago",
    it:
      "Mi piace imparare nuove robi, desideroso di scoprire nuove funzionalità. Mi piace tantisimo tutto quello che faccio",
  },
  {
    en: "I am really good with integrations among different applications.",
    es: "Soy realmente bueno con las integraciones entre muchas aplicaciones.",
    it: "Sono davvero bravo con le integrazioni tra molte applicazioni.",
  },
  {
    en: "Why don't you send a message first?",
    es: "¿Por qué no enviar un mensaje primero?",
    it: "Perché non inviare prima un messaggio?"
  },
  {
    en: "I'll be more than happy to have a meeting with you.",
    es:"Estaré encantado de tener una reunión contigo.",
    it: "Sarò felice di avere un incontro di lavoro con te"
  },
  {
    en: "At any case...",
    es: "En cualquier caso...",
    it: "Comunque..."
  },
  {
    en: "Read more!",
    es: "¡Leer más!",
    it: "Per saperne di più",
  },
  {
    en: "Send a message",
    es:"Enviar mensaje",
    it: "Invia messaggio"
  },
  {
    en: "My story",
    es: "Mi historia",
    it: "La mia storia"
  },
  {
    en: "Projects",
    es: "Proyectos",
    it: "Proggeti"
  },
  {
    en: "Home",
    es: "Inicio",
    it: "Inizio"
  },
  {
    en: "My past",
    es: "Mi pasado",
    it: "Il mio passato"
  },
  {
    en: "My present",
    es: "Mi presente",
    it: "Il mio presente"
  },
  {
    en: "My future",
    es: "Mi futuro",
    it: "Il mio futuro"
  },
  {
    en: "Let's see if you have paid attention to ",
    es: "Veamos si has prestado atención",
    it: "Vediamo se hai prestato attenzione"
  },
  {
    en: "my story",
    es: "mi historia",
    it: "la mia storia"
  },
  {
    en: "Let's play",
    es: "Vamos a jugar",
    it: "Giochiamo"
  },
  {
    en: "Leave for now",
    es: "Salir por ahora",
    it: "Vai via per ora"
  }
];

const translated = (text) => {
    const langSelected = localStorage.getItem("currentLang") || "en"; 
  
    const translation = translations.find((item) => item.en === text);
  
    return translation ? translation[langSelected] : text; 
  };
  
  export default translated;

