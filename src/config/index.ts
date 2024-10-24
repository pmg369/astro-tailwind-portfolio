import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Pablo M. González — Desarrollador Web",
  author: "Pablo M. González",
  description:
    "Soy Pablo, desarrollador web freelance 🧑‍💻, potenciemos tu marca y proyecto 🚀",
  lang: "es",
  siteLogo: "/pablo-small.jpg",
  navLinks: [
    { text: "Sobre mi", href: "#about" },
    { text: "Projectos", href: "#projects" },
  ],
  socialLinks: [
    { text: "Instagram", href: "https://www.instagram.com/pablomg.dev/" },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/pablomgdev/" },
    { text: "Github", href: "https://github.com/pablomg-dev" },
  ],
  socialImage: "/vistaprevia.png",
  canonicalURL: "https://pablomgdev.netlify.app/",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Pablo M. González",
    specialty: "Desarrollador Web",
    summary:
      "Soy Pablo, desarrollador web freelance 🧑‍💻, potenciemos tu marca y proyecto 🚀",
    email: "pablomgonzalez.dev@gmail.com",
  },
  about: {
    description: `
      Soy una persona dinámica y apasionado por el aprendizaje continuo, con experiencia en desarrollo web utilizando tecnologías como HTML, CSS, JavaScript, Bootstrap, Tailwind, Node.js, y MongoDB. Mi enfoque esta orientado a los resultados, destacando por mi capacidad de adaptación a entornos cambiantes, aportando mi iniciativa y organización.
    `,
    image: "/pablo-big.jpg",
  },
  projects: [
    {
      name: "Plataforma Disco Music",
      summary: "Este proyecto está inspirado en mi banda favorita, Audioslave. Permite a los usuarios registrarse, editar álbumes y canciones, agregar nuevos elementos, y ofrece la opción de escuchar canciones en streaming o enlazarlas a videos de YouTube.",
      link: "https://audioslave-fanpage-p5.onrender.com/",
      code: "https://github.com/pmg369/plataforma-disco-music",
      image: "/platdismu.png",
    },
    {
      name: "Cora Astrología Viva",
      summary: "Este sitio web está diseñado para reflejar la esencia y los servicios de una terapeuta holística, combinando un enfoque visual relajante con información clara y accesible.",
      link: "https://corastrologiaviva.netlify.app/",
      code: "https://github.com/pmg369/CoraAstrologiaViva",
      image: "/corastro.png",
    },
    {
      name: "Espacio Luminem",
      summary: "Sitio personal para terapeuta holístico. La página busca transmitir serenidad y confianza desde el primer momento, creando un espacio donde los visitantes se sientan en paz y acogidos.",
      link: "https://espacio-luminem.com/",
      code: "https://github.com/pmg369/espacio-luminem",
      image: "/esplum.png",
    },
  ],
};

// #5755ff
