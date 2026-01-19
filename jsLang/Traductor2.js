const langToggle = document.getElementById("langToggle");

const translations = {
  en: {
    // ===== HEADER =====
    industriesBtn: "Industries & Use Cases",
    industriesTitle: "Industries",
    seeAll: "See all →",
    restaurant: "Restaurant",
    digitalMenus: "Digital menu boards",
    startFree: "Start free",

    // ===== inicio =====
    industries_label: "RESTAURANT",
    industries_title: "Restaurant digital signage <br> software solutions",
    industries_text: "Digital menu boards are quickly becoming standard in the restaurant industry, and the Meseras apps solution makes the process of incorporating restaurant digital signage simple and efficient. The process of creating content is quick and intuitive and promotions can be easily managed from a central dashboard, ensuring your menu reflects the current trends.",
    industries_btn: "Get Started",

     // ===== seccion imagenes =====
      inventory_title: "Managing inventory with ease",

    inventory_card1_title: "Keep menus accurate and reduce customer frustration",
    inventory_card1_text:
      "With Meseras apps digital menu board software, restaurant managers can instantly remove out-of-stock items from displays. This ensures guests only see what’s currently available, improving satisfaction and keeping your menu boards clean, accurate, and professional.",

    inventory_card2_title: "Turn excess inventory into revenue opportunities",
    inventory_card2_text:
      "For items that are slow to sell or nearing expiration, digital signage allows teams to quickly launch targeted promotions, such as discounts or BOGO deals, to move inventory faster and reduce waste.",

    inventory_card3_title: "Drive sales with timely, relevant promotions",
    inventory_card3_text:
      "Whether it’s a game-day appetizer deal or a limited-time seasonal item, digital menu boards help align your offerings with real-time demand—boosting impulse buys, improving inventory turnover, and enhancing the overall dining experience.",

    inventory_card4_title: "Adapt instantly to seasonal trends and weather shifts",
    inventory_card4_text:
      "Restaurant digital signage gives you the flexibility to react to changing temperatures or local events. On hot days, feature refreshing options like iced coffees or smoothies; on colder days, pivot to hot drinks and comfort food specials to match customer cravings. Make these updates quickly and easily with customizable digital signage templates.",

    inventory_button: "Get Started",

    // ===== seccion negra faq =====
     menus_title: "Managing menus with ease and efficiency",

    menus_q1_title: "Simplified menu management",
    menus_q1_text: "Meseras apps digital menu board software offers an intuitive platform for creating and managing professional signage across concession stands, cafés, restaurants, and QSR digital signage environments. Menu changes and price updates can be made remotely, from home or a central office, saving time and ensuring your boards always display accurate, up-to-date information.",

    menus_q2_title: "Ready-to-use templates",
    menus_q2_text: "Meseras apps canvas has over 150 digital signage content templates, with new ones being added regularly. This allows your team to create visually appealing and engaging restaurant digital signage without the need to hire a graphic designer.",

    menus_q3_title: "Custom content made easy",
    menus_q3_text: "Meseras apps canvas allows users to create original content by incorporating their own images and text. Alternatively, your team can choose from the wide variety of included images and templates to quickly create eye-catching menus and engaging promotional materials.",

    menus_cta: "Get Started",

    // ===== seccion parrafo e imagen =====
     brand_title: "Maintain consistent branding throughout the system",

    brand_block1_title: "Many locations, one brand voice",
    brand_block1_text:
      "Digital signage placed at entrances or throughout the dining area allows restaurants to deliver a seamless brand experience. Use screens to highlight key offerings or promote specials, all while reinforcing consistent visuals and messaging across every location.",

    brand_block2_title: "Instant updates from anywhere",
    brand_block2_text:
      "Meseras apps remote management system allows your team to update menu board content remotely, eliminating the need for restaurant staff to manually change content and pricing. This saves time and effort, allowing staff to focus on other important tasks, and ensures menu items and pricing are always accurate.",

    brand_block3_title: "Manage pricing and availability by region",
    brand_block3_text:
      "If the restaurant has different pricing or menu items in different regions, managing those items is a breeze with Meseras apps digital signage CMS. Your team can easily customize and update menus based on specific regional requirements, ensuring both accuracy and brand consistency across all locations.",

    brand_btn: "Get Started",
    // ===== Faq negro =====
    staff_title: "Keeping staff engaged and informed",
    staff_q1_title: "Keep the back of house organized",
    staff_q1_text: "Restaurant digital signage in staff areas throughout the kitchen or behind the bar can help keep orders organized, ensuring they are prepared efficiently and accurately and leading to improved customer satisfaction. Signage in break rooms can remind staff about changes to hours of operation, menu changes, and more, reducing hassles in the workplace.",
    staff_q2_title: "Improve employee recruitment and retention",
    staff_q2_text: "Leverage digital displays to help you manage your restaurants better. Attract new employees by displaying \"Join Our Team\" ads on dining room signage. Recognizing star employees with quick messages on the back-of-house menu boards can boost morale and instill a sense of pride among employees.",
    staff_q3_title: "Streamline training and communication",
    staff_q3_text: "Digital displays can be utilized to show training videos and messages from the corporate office in break rooms or on main screens when the restaurant is closed. This allows for effective communication and helps employees stay up to date with important information and training materials.",
    staff_btn: "Get Started",

     // ===== Faq  =====
     faq2_title: "Restaurant Digital Signage FAQs",

    faq2_q1: "What are the benefits of digital signage in restaurants?",
    faq2_a1: "Digital signs with vibrant displays and animations can engage customers more effectively than traditional menus or signs. Restaurants can promote deals, events, and loyalty programs while entertaining waiting customers.",

    faq2_q2: "What do I need for digital signage?",
    faq2_a2: "Setting up digital signage requires displays, content management software, and an internet-connected device to update content.",

    faq2_q3: "What are digital menu boards for restaurants?",
    faq2_a3: "Digital menu boards are electronic displays that replace traditional printed menus and allow real-time updates with images and videos.",

    faq2_q4: "What software do restaurants use to make menus?",
    faq2_a4: "Restaurants use digital menu board software like Meseras apps to easily create and manage content across one or many screens.",

    faq2_q5: "What is the recommended app to create a menu?",
    faq2_a5: "Meseras apps Canvas allows anyone to create menus using custom assets or ready-made templates with ease.",

    tutorial_title: "View our tutorial library",
    // ===== Blogs =====
blogs_title: "Related blogs",

blog1_meta: "Restaurant • March 14, 2024",
blog1_title: "9 Digital Menu Board Design Tips to Improve Your Sales and Customer Satisfaction",
blog1_excerpt:
  "Digital menu boards are a dynamic way to display a restaurant’s offerings and can significantly enhance the customer experience. These boards are visually engaging and can be designed...",

blog2_meta: "Restaurant • February 14, 2024",
blog2_title: "DIY Digital Restaurant Menu Board: Using TV For Menu Boards",
blog2_excerpt:
  "Digital menu boards have become an increasingly important fixture in restaurants, cafés, and other food establishments…",

blog3_meta: "Restaurant • December 19, 2023",
blog3_title: "6 Benefits of Digital Menu Boards for Restaurants",
blog3_excerpt:
  "Digital menu boards offer several benefits for restaurants far beyond simply advertising the restaurant’s offerings…",



    // ===== Footer =====
    footer_desc: "Digital signage and menu board solutions designed to help restaurants manage content easily and increase sales.",
    footer_product: "Product",
    footer_menu_boards: "Digital Menu Boards",
    footer_restaurant: "Restaurant",
    footer_company: "Company",
    footer_about: "About us",
    footer_contact: "Contact",
    footer_trial: "Start free trial",
    footer_rights: "© 2025 Meseras. All rights reserved."




    },

  es: {
    // ===== HEADER =====
    industriesBtn: "Industrias y Casos de Uso",
    industriesTitle: "Industrias",
    seeAll: "Ver todo →",
    restaurant: "Restaurante",
    digitalMenus: "Menús digitales",
    startFree: "Comenzar gratis",

    // ===== inicio =====
    industries_label: "RESTAURANTE",
    industries_title: "Soluciones de software <br> de señalización digital para restaurantes",
    industries_text: "Los menús digitales se están convirtiendo rápidamente en un estándar en la industria restaurantera, y la solución de Meseras apps hace que el proceso de integrar señalización digital sea simple y eficiente. La creación de contenido es rápida e intuitiva, y las promociones pueden gestionarse fácilmente desde un panel central, asegurando que tu menú refleje las tendencias actuales.",
    industries_btn: "Comenzar",

     // ===== seccion imagenes =====
     inventory_title: "Gestión de inventario de forma sencilla",

    inventory_card1_title: "Mantén menús precisos y reduce la frustración del cliente",
    inventory_card1_text:
      "Con el software de menús digitales de Meseras apps, los administradores pueden eliminar al instante los productos agotados de las pantallas. Esto garantiza que los clientes solo vean lo disponible, mejorando la satisfacción y manteniendo menús claros, precisos y profesionales.",

    inventory_card2_title: "Convierte el exceso de inventario en oportunidades de ingresos",
    inventory_card2_text:
      "Para productos de baja rotación o próximos a vencer, la señalización digital permite lanzar promociones rápidamente, como descuentos u ofertas 2x1, para mover inventario y reducir desperdicios.",

    inventory_card3_title: "Impulsa ventas con promociones oportunas y relevantes",
    inventory_card3_text:
      "Ya sea una promoción para días de partido o un producto de temporada por tiempo limitado, los menús digitales ayudan a alinear tu oferta con la demanda en tiempo real, aumentando compras impulsivas y mejorando la experiencia del cliente.",

    inventory_card4_title: "Adáptate al instante a tendencias estacionales y cambios climáticos",
    inventory_card4_text:
      "La señalización digital para restaurantes te permite reaccionar rápidamente a cambios de temperatura o eventos locales. En días calurosos, promociona bebidas frías; en días fríos, destaca bebidas calientes y platillos reconfortantes mediante plantillas personalizables.",

    inventory_button: "Comenzar",

     // ===== seccion negra faq =====
      menus_title: "Gestión de menús de forma fácil y eficiente",

    menus_q1_title: "Gestión de menús simplificada",
    menus_q1_text: "El software de menús digitales de Meseras ofrece una plataforma intuitiva para crear y administrar señalización profesional en cafeterías, restaurantes, locales de comida rápida y más. Los cambios de menú y precios pueden realizarse de forma remota, ahorrando tiempo y garantizando información siempre actualizada.",

    menus_q2_title: "Plantillas listas para usar",
    menus_q2_text: "Meseras Canvas cuenta con más de 150 plantillas de contenido para señalización digital, con nuevas incorporaciones frecuentes. Esto permite crear menús atractivos sin necesidad de contratar un diseñador gráfico.",

    menus_q3_title: "Contenido personalizado fácilmente",
    menus_q3_text: "Meseras Canvas permite crear contenido original incorporando imágenes y textos propios. También puedes elegir entre una amplia variedad de plantillas e imágenes para crear menús llamativos y materiales promocionales rápidamente.",

    menus_cta: "Comenzar",
    // ===== seccion parrafo e imagen =====
    brand_title: "Mantén una identidad de marca consistente en todo el sistema",

    brand_block1_title: "Muchas ubicaciones, una sola voz de marca",
    brand_block1_text:
      "La señalización digital ubicada en entradas o en todo el comedor permite a los restaurantes ofrecer una experiencia de marca uniforme. Utiliza pantallas para destacar productos clave o promociones especiales, reforzando imágenes y mensajes consistentes en cada ubicación.",

    brand_block2_title: "Actualizaciones instantáneas desde cualquier lugar",
    brand_block2_text:
      "El sistema de administración remota de Meseras permite a tu equipo actualizar los menús digitales a distancia, eliminando la necesidad de cambios manuales. Esto ahorra tiempo y esfuerzo, permite que el personal se concentre en tareas importantes y garantiza precios y menús siempre correctos.",

    brand_block3_title: "Gestiona precios y disponibilidad por región",
    brand_block3_text:
      "Si el restaurante maneja precios o productos distintos según la región, Meseras facilita esta gestión con su CMS de señalización digital. Tu equipo puede personalizar menús por región, asegurando precisión y coherencia de marca en todas las ubicaciones.",

    brand_btn: "Comenzar",

    // ===== Faq negro =====
        staff_title: "Mantén al personal informado y comprometido",
    staff_q1_title: "Mantén el área de trabajo organizada",
    staff_q1_text: "La señalización digital en áreas internas como la cocina o detrás de la barra ayuda a mantener los pedidos organizados, asegurando una preparación eficiente y precisa, lo que mejora la satisfacción del cliente. Las pantallas en áreas de descanso pueden recordar cambios en horarios, menús y más.",
    staff_q2_title: "Mejora la contratación y retención de empleados",
    staff_q2_text: "Aprovecha las pantallas digitales para gestionar mejor tus restaurantes. Atrae nuevos empleados mostrando anuncios de \"Únete a nuestro equipo\" y reconoce a los empleados destacados con mensajes rápidos que aumentan la motivación y el sentido de pertenencia.",
    staff_q3_title: "Optimiza la capacitación y comunicación",
    staff_q3_text: "Las pantallas digitales pueden utilizarse para mostrar videos de capacitación y mensajes corporativos en áreas de descanso o pantallas principales cuando el restaurante está cerrado, manteniendo al personal informado y actualizado.",
    staff_btn: "Comenzar",

    // ===== Faq =====
    faq2_title: "Preguntas frecuentes sobre señalización digital para restaurantes",

    faq2_q1: "¿Cuáles son los beneficios de la señalización digital en restaurantes?",
    faq2_a1: "Las pantallas digitales con imágenes llamativas y animaciones atraen más a los clientes que los menús tradicionales. Permiten promocionar ofertas, eventos y programas de lealtad.",

    faq2_q2: "¿Qué necesito para usar señalización digital?",
    faq2_a2: "Necesitas pantallas, un software de gestión de contenido y un dispositivo con conexión a internet para actualizar la información.",

    faq2_q3: "¿Qué son los menús digitales para restaurantes?",
    faq2_a3: "Los menús digitales son pantallas electrónicas que reemplazan los menús impresos y permiten actualizaciones en tiempo real con imágenes y videos.",

    faq2_q4: "¿Qué software usan los restaurantes para crear menús?",
    faq2_a4: "Los restaurantes utilizan software de menús digitales como Meseras apps para crear y administrar contenido de forma sencilla.",

    faq2_q5: "¿Cuál es la aplicación recomendada para crear un menú?",
    faq2_a5: "Meseras apps Canvas permite crear menús fácilmente usando recursos propios o plantillas prediseñadas.",

    tutorial_title: "Consulta nuestra biblioteca de tutoriales",

    // ===== Blogs =====
blogs_title: "Blogs relacionados",

blog1_meta: "Restaurante • 14 de marzo de 2024",
blog1_title: "9 consejos de diseño para menús digitales que mejoran tus ventas y la satisfacción del cliente",
blog1_excerpt:
  "Los menús digitales son una forma dinámica de mostrar la oferta de un restaurante y pueden mejorar significativamente la experiencia del cliente. Son visualmente atractivos y pueden diseñarse...",

blog2_meta: "Restaurante • 14 de febrero de 2024",
blog2_title: "Menú digital para restaurantes DIY: usando televisores como menús",
blog2_excerpt:
  "Los menús digitales se han convertido en un elemento cada vez más importante en restaurantes, cafeterías y otros negocios de alimentos…",

blog3_meta: "Restaurante • 19 de diciembre de 2023",
blog3_title: "6 beneficios de los menús digitales para restaurantes",
blog3_excerpt:
  "Los menús digitales ofrecen múltiples beneficios para los restaurantes más allá de solo anunciar sus productos…",




    // ===== Footer =====
   footer_desc: "Soluciones de señalización digital y menús diseñadas para ayudar a los restaurantes a gestionar contenido fácilmente y aumentar sus ventas.",
    footer_product: "Producto",
    footer_menu_boards: "Menús Digitales",
    footer_restaurant: "Restaurante",
    footer_company: "Empresa",
    footer_about: "Sobre nosotros",
    footer_contact: "Contacto",
    footer_trial: "Iniciar prueba gratis",
    footer_rights: "© 2025 Meseras. Todos los derechos reservados."

    }

  };


// 1️⃣ Detectar idioma por región o guardado
let currentLang =
  localStorage.getItem("lang") ||
  navigator.language.slice(0, 2);

if (!translations[currentLang]) currentLang = "en";

// 2️⃣ Aplicar idioma inicial
setLanguage(currentLang);

// 3️⃣ Click en la bandera
langToggle.addEventListener("click", () => {
  currentLang = currentLang === "es" ? "en" : "es";
  localStorage.setItem("lang", currentLang);
  setLanguage(currentLang);
});

// 4️⃣ Función central
function setLanguage(lang) {
  document.querySelectorAll("[data-lang]").forEach(el => {
    const key = el.dataset.lang;
    if (!translations[lang][key]) return;

    // Si es un botón de FAQ, conservamos el span
    if (el.classList.contains("faq2-question")) {
      el.innerHTML = `
        ${translations[lang][key]}
        <span class="faq2-icon">+</span>
      `;
    } else {
      el.innerHTML = translations[lang][key];
    }
  });

  // Cambiar bandera
  const langImg = document.querySelector("#langToggle img");
  if (lang === "es") {
    langImg.src = "img/mx.png";
    langImg.alt = "Español";
  } else {
    langImg.src = "img/usa.png";
    langImg.alt = "English";
  }
}


