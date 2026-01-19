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

    title: "Boost Sales & Efficiency<br> with Digital Menu Boards",
        p: `Digital menu board solutions are revolutionizing the way food 
            service operations communicate with their customers. These dynamic
            digital signage displays offer more than just aesthetic appeal; 
            they provide a versatile platform for promoting products, specials, 
            and information in real-time. With their ability to update content
            instantly, digital menu boards help businesses respond quickly to 
            changes in inventory or customer preferences, ensuring that the offered 
            information is always current and engaging. From concession stands to food 
            trucks to fast-food outlets and more, these digital solutions are proving to 
            be invaluable in enhancing customer experiences,
            increasing sales, and improving operational efficiency.`,
        btn: "Get Started",

        // ===== 3 cartas imagen =====
        benefitsTitle: "One digital screen software, many benefits",
        benefit1Title: "Increase sales",
        benefit1p: `Strategic digital menu board design can help drive immediate sales. 
        Digital menu signs make it easier to introduce short-term deals and specials, 
and they can promote combinations, appetizers, side items, and desserts. 
All these combined can lead to increased average order value and repeat business.`,

benefit2Title: "Improve guest experience",
benefit2p: `Engage customers with vibrant images, entertaining content from PIRS apps such 
as Infotainment by Seenspire, and QR codes via digital restaurant menu boards 
while they wait to order, helping to reduce perceived wait time. Elements can 
move on screen, creating an eye-catching display,
while multiple screens can be joined together to display the full menu at once.`,

benefit3Title: "Enhance operational efficiency",
benefit3p: `Appealing images placed in prominent positions on digital menu boards 
can draw attention to new or high-margin items, encouraging customers to
choose them. Digital menu board software platforms such as Meseras apps allow 
for instant remote updates on pricing and menu item availability. Additionally,
promotions that tie into social media campaigns
can help build a cohesive brand experience across multiple customer touchpoints.`,

      // ===== ZIG ZAG =====
      zigzagTitle: "Is digital signage right for you?",
zigzagBtn: "Start a free trial",

zigzagItem1Title: "Cafes and coffee shops",
zigzagItem1p: `Digital signage for restaurants is especially effective in cafes and 
coffee shops, where high-resolution images of coffee, pastries, and other 
items on a digital menu can entice customers and stimulate sales. Easily 
promote special deals, happy hour discounts, or combo offers. For instance, 
a coffee shop menu board can highlight a breakfast combo deal during morning
hours to drive sales. Use the digital menu software to suggest popular add-ons 
or upgrades, such as an extra shot of espresso or a premium pastry.`,

zigzagItem2Title: "Food trucks",
zigzagItem2p: `Digital menu boards for food trucks can be a game-changer by allowing owners 
to easily update their offerings based on location, time of day, or inventory. 
They can also use vibrant visuals to attract passersby and stand out in crowded
food truck parks. Displays make it easy to promote meal deals or upsell
items on the menu with sides. For example, food trucks can use part of 
their digital display to advertise a combo meal, which might include a 
drink and a side at a discounted price.`,

zigzagItem3Title: "Concession stands",
zigzagItem3p: `A concession stand menu board can display dynamic pricing based on event type, 
such as at a concert or sporting event, and time of day, with lighter lunch combos 
at midday and more substantial offerings in the evening. Operators can also use 
them to highlight combo deals or promote faster-moving items to increase sales. 
With clear and updated menu displays, staff can process orders more efficiently, 
reducing the likelihood of errors and speeding up service.`,

zigzagItem4Title: "Fast Food and QSRs",
zigzagItem4p: `Digital menu boards for restaurants allow for instant updates to the menu, which 
is particularly useful for fast food restaurants and QSR digital signage needing 
to adjust offerings quickly due to changes in inventory, new promotions, or price 
changes. Menus can be automatically adjusted via restaurant menu software based on 
the time of day; for example, breakfast menus can switch to lunch offerings 
seamlessly, ensuring that customers always see relevant items. Device management 
features for Meseras apps (in the RM software and more premium CM tiers) can help manage brightness and other elements of hardware.`,

zigzagItem5Title: "Drive-thru restaurants",
zigzagItem5p: `Drive-thru restaurants can use digital menu signage to improve order 
accuracy and speed up service. A digital drive-thru menu board can also 
be used to promote special deals or limited-time offers to customers waiting 
in line, featuring artwork if wait times are very long and users don’t need 
the menu anymore before moving on to the next screen. 
Meseras apps, which provides a wide selection of art content, requires an additional fee.`,

zigzagItem6Title: "Bars",
zigzagItem6p: `Digital menu board software can help bars display their extensive drink 
menus and daily specials in an engaging way. They can also use them to 
promote events such as happy hours or live music nights, enhancing the 
customer experience. Bars can quickly adapt their menus for special occasions 
such as themed drink nights, sports events, or holiday parties, helping to draw in crowds and boost sales during these events.`,
 // ===== FAQ NEGRO =====
 easeTitle: "Ease of use",

faq1Title: "Free digital signage templates",
faq1p: `For digital menu boards, Meseras apps canvas offers a versatile selection of digital 
signage templates, ranging from food and drink menus to mixed layouts, meal-specific
options like breakfast or dinner, and today’s specials—all designed to 
elevate the dining experience with professional, ready-to-use designs.`,

faq2Title: "Try Link My POS",
faq2p: `Link My POS connects your point-of-sale system with the Meseras apps platform 
to keep digital menus accurate and automatically updated in real time. With 
support for popular POS systems and customizable templates, it simplifies menu 
management while helping restaurants and cafés create visually engaging displays that
drive sales.`,

faq3Title: "Control from anywhere",
faq3p: `With the content management and remote management features of Meseras apps, 
it’s easy to deploy content and manage screens no matter where they are 
located or what hardware is being used. Administrators can 
easily create, schedule, and deploy playlists and content from anywhere 
in the world.`,

ctaBtn: "Get Started",

// ===== Sección Tutorial Hero =====
tutorialTitle: "Flexible pricing for maximum value",
tutorialP: `Meseras apps offers several different pricing plans, making it a great 
solution for any environment and use case. Restaurant operators 
can easily match their digital signage cost to their specific needs.`,
tutorialBtn: "Get Started",

// ===== FAQs Digital Menu Boards=====
faqTitle: "Digital Menu Boards FAQs",

faq1Title: "Are digital menu boards worth it?",
faq1p: `Digital menu boards are highly beneficial for restaurant operators looking 
to enhance customer engagement, streamline operations, and boost sales with 
their dynamic content capabilities and real-time update features. They can
produce significant long-term savings on printing costs and operational 
efficiencies while also providing a modern, adaptable tool for effective 
communication and marketing.`,

faq2Title: "How do electronic menus operate?",
faq2p: `Electronic menus use digital displays, such as LCD or LED screens, 
controlled by specialized software that allows for easy content updating 
and customization. This enables restaurants and other businesses to dynamically 
present their offerings, promotions, and updates in real time, enhancing customer 
interaction and operational efficiency.`,

faq3Title: "What do you need for a digital menu board?",
faq3p: `To set up a digital menu board, you need a digital display and a digital 
signage player that runs the content management software for creating, managing,
and scheduling your menu content. Additionally, a stable internet connection is 
often required to update the content remotely and ensure the accuracy of the 
displayed information in real time.`,

faq4Title: "What is the purpose of a digital menu board?",
faq4p: `Digital menu boards provide a dynamic and visually appealing way to display 
menu items, prices, and promotions, enhancing customer engagement. They also
allow for easy updates and modifications to the menu, helping businesses 
quickly adapt to inventory changes or promotional needs without the cost and 
waste associated with traditional printed menus.`,

faq5Title: "What makes a good digital menu?",
faq5p: `Effective digital menu design is characterized by clear, easy-to-read text 
and high-quality images that accurately represent the menu items, coupled 
with an organized layout that allows customers to find what they're looking 
for quickly. It should also be adaptable, allowing for real-time updates and 
modifications to keep the content current and relevant to customer needs and 
business operations.`,

faq6Title: "How much does it cost to create a digital menu?",
faq6p: `The cost to create a digital menu can vary widely depending on factors 
such as the size and type of the digital display, the complexity of the 
content management system, and any additional features like touch interactivity 
or custom software integration.`,

faq7Title: "Do digital menu boards increase sales?",
faq7p: `Although there is no guarantee, digital menu boards often increase sales 
by effectively attracting customer attention, promoting high-margin items,
and facilitating upsells through eye-catching displays and dynamic content. 
They enhance the customer experience and make it easier to introduce timely 
promotions and specials, which can lead to increased average order value and 
repeat business.`
,




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
title: "Aumenta Ventas y Eficiencia<br> con Menús Digitales",
        p: `Las soluciones de menús digitales están revolucionando la forma en que los
            negocios de alimentos se comunican con sus clientes. Estas pantallas dinámicas
            ofrecen más que atractivo estético; proporcionan una plataforma versátil para
            promocionar productos, ofertas e información en tiempo real. Con su capacidad
            de actualizar contenido al instante, los menús digitales ayudan a los negocios
            a responder rápidamente a cambios en inventario o preferencias de los clientes,
            asegurando que la información ofrecida sea siempre actual y atractiva. Desde
            puestos de comida hasta camiones de alimentos y restaurantes de comida rápida,
            estas soluciones digitales son invaluables para mejorar la experiencia del cliente,
            aumentar las ventas y optimizar la eficiencia operativa.`,
        btn: "Comenzar",

        // ===== 3 CARTAS IMAGENS =====
        benefitsTitle: "Un solo software de pantalla digital, muchos beneficios",
benefit1Title: "Aumenta las ventas",
benefit1p: `El diseño estratégico de menús digitales puede ayudar a impulsar ventas inmediatas. 
Las pantallas de menús digitales facilitan la introducción de ofertas y promociones a corto plazo, 
y pueden promocionar combinaciones, aperitivos, acompañamientos y postres. 
Todo esto combinado puede aumentar el valor promedio del pedido y fomentar la fidelidad de los clientes.`,

benefit2Title: "Mejora la experiencia del cliente",
benefit2p: `Involucra a los clientes con imágenes vibrantes, contenido entretenido de aplicaciones PIRS 
como Infotainment de Seenspire y códigos QR mediante menús digitales mientras esperan 
su pedido, ayudando a reducir la percepción del tiempo de espera. Los elementos pueden 
moverse en pantalla, creando una visualización atractiva, mientras que múltiples pantallas 
pueden unirse para mostrar el menú completo de una sola vez.`,

benefit3Title: "Mejora la eficiencia operativa",
benefit3p: `Las imágenes atractivas colocadas en posiciones destacadas en los menús digitales 
pueden atraer la atención hacia productos nuevos o de alto margen, incentivando a los clientes a elegirlos. 
Las plataformas de software de menús digitales como Meseras permiten actualizaciones instantáneas 
de precios y disponibilidad de productos de forma remota. Además, las promociones vinculadas 
a campañas en redes sociales pueden ayudar a crear una experiencia de marca coherente 
en múltiples puntos de contacto con los clientes.`,


 // ===== ZIG ZAG =====
zigzagTitle: "¿Es la señalización digital adecuada para ti?",
zigzagBtn: "Comienza una prueba gratuita",

zigzagItem1Title: "Cafés y cafeterías",
zigzagItem1p: `La señalización digital para restaurantes es especialmente efectiva en cafés y 
cafeterías, donde las imágenes de alta resolución de café, pasteles y otros 
productos en un menú digital pueden atraer a los clientes y estimular las ventas. 
Promociona fácilmente ofertas especiales, descuentos de happy hour o combos. 
Por ejemplo, un menú digital de cafetería puede resaltar un combo de desayuno durante la mañana 
para impulsar las ventas. Usa el software de menús digitales para sugerir complementos populares 
o mejoras, como un shot extra de espresso o un pastel premium.`,

zigzagItem2Title: "Food trucks",
zigzagItem2p: `Los menús digitales para food trucks pueden ser un cambio de juego al permitir que los propietarios 
actualicen fácilmente su oferta según la ubicación, la hora del día o el inventario. 
También pueden usar imágenes llamativas para atraer a los transeúntes y destacar en parques de food trucks concurridos. 
Las pantallas facilitan promocionar combos de comida o aumentar la venta de productos adicionales. 
Por ejemplo, los food trucks pueden usar parte de la pantalla digital para anunciar un combo que incluya 
una bebida y un acompañamiento a precio reducido.`,

zigzagItem3Title: "Puestos de concesión",
zigzagItem3p: `Un menú digital en un puesto de concesión puede mostrar precios dinámicos según el tipo de evento, 
como un concierto o evento deportivo, y la hora del día, con combos más ligeros al mediodía y opciones más sustanciosas por la tarde. 
Los operadores también pueden usarlo para resaltar combos o promocionar los productos más vendidos para aumentar las ventas. 
Con menús claros y actualizados, el personal puede procesar pedidos de manera más eficiente, reduciendo errores y acelerando el servicio.`,

zigzagItem4Title: "Comida rápida y QSRs",
zigzagItem4p: `Los menús digitales para restaurantes permiten actualizaciones instantáneas del menú, lo cual 
es especialmente útil para restaurantes de comida rápida y QSR que necesitan ajustar la oferta rápidamente 
debido a cambios en inventario, nuevas promociones o cambios de precio. 
Los menús pueden ajustarse automáticamente mediante el software de restaurante según la hora del día; 
por ejemplo, los menús de desayuno pueden cambiar a las opciones de almuerzo sin interrupciones, 
asegurando que los clientes siempre vean los productos relevantes. 
Las funciones de gestión de dispositivos de las apps de Meseras (en el software RM y en los niveles premium CM) 
pueden ayudar a controlar el brillo y otros elementos del hardware.`,

zigzagItem5Title: "Restaurantes Drive-thru",
zigzagItem5p: `Los restaurantes Drive-thru pueden usar la señalización digital para mejorar la precisión de los pedidos 
y agilizar el servicio. Un menú digital drive-thru también puede promocionar ofertas especiales o limitadas 
a los clientes que esperan en la fila, mostrando ilustraciones si los tiempos de espera son largos y los usuarios 
ya no necesitan ver el menú antes de pasar a la siguiente pantalla. 
Las apps de Meseras, que ofrecen una amplia selección de contenido artístico, requieren un costo adicional.`,

zigzagItem6Title: "Bares",
zigzagItem6p: `El software de menús digitales puede ayudar a los bares a mostrar sus extensos menús de bebidas 
y especiales diarios de manera atractiva. También pueden usarlo para promocionar eventos como happy hours 
o noches de música en vivo, mejorando la experiencia del cliente. Los bares pueden adaptar rápidamente 
sus menús para ocasiones especiales como noches temáticas de bebidas, eventos deportivos o fiestas 
festivas, ayudando a atraer público y aumentar las ventas durante estos eventos.`,

// ===== FAQ NEGRO =====
easeTitle: "Facilidad de uso",

faq1Title: "Plantillas gratuitas de señalización digital",
faq1p: `Para menús digitales, Meseras apps canvas ofrece una selección versátil de plantillas de señalización digital, 
que van desde menús de comida y bebida hasta diseños mixtos, opciones específicas para comidas como desayuno o cena, 
y los especiales del día, todo diseñado para mejorar la experiencia gastronómica con diseños profesionales listos para usar.`,

faq2Title: "Prueba Link My POS",
faq2p: `Link My POS conecta tu sistema de punto de venta con la plataforma Meseras apps 
para mantener los menús digitales precisos y actualizados automáticamente en tiempo real. 
Con soporte para sistemas POS populares y plantillas personalizables, simplifica la gestión del menú 
mientras ayuda a restaurantes y cafeterías a crear exhibiciones visualmente atractivas que aumentan las ventas.`,

faq3Title: "Control desde cualquier lugar",
faq3p: `Con las funciones de gestión de contenido y administración remota de Meseras apps, 
es fácil desplegar contenido y administrar pantallas sin importar dónde estén ubicadas 
o qué hardware se esté utilizando. Los administradores pueden crear, programar y desplegar 
listas de reproducción y contenido fácilmente desde cualquier parte del mundo.`,

ctaBtn: "Comienza ahora",

// ===== Sección Tutorial Hero =====
tutorialTitle: "Precios flexibles para máximo valor",
tutorialP: `Meseras apps ofrece varios planes de precios diferentes, lo que la convierte en una excelente 
solución para cualquier entorno y caso de uso. Los operadores de restaurantes 
pueden ajustar fácilmente el costo de la señalización digital a sus necesidades específicas.`,
tutorialBtn: "Comienza ahora",

// ===== FAQs Digital Menu Boards =====
faqTitle: "Preguntas frecuentes sobre menús digitales",

faq1Title: "¿Vale la pena un menú digital?",
faq1p: `Los menús digitales son muy beneficiosos para los operadores de restaurantes que buscan 
mejorar la interacción con los clientes, optimizar operaciones y aumentar ventas 
gracias a sus capacidades de contenido dinámico y actualizaciones en tiempo real. 
También generan ahorros significativos a largo plazo en costos de impresión y eficiencia 
operativa, además de proporcionar una herramienta moderna y adaptable para comunicación 
y marketing efectivos.`,

faq2Title: "¿Cómo funcionan los menús electrónicos?",
faq2p: `Los menús electrónicos utilizan pantallas digitales, como LCD o LED, controladas por 
software especializado que permite actualizar y personalizar el contenido fácilmente. 
Esto permite que restaurantes y otros negocios presenten dinámicamente sus ofertas, 
promociones y actualizaciones en tiempo real, mejorando la interacción con los clientes 
y la eficiencia operativa.`,

faq3Title: "¿Qué se necesita para un menú digital?",
faq3p: `Para configurar un menú digital se necesita una pantalla digital y un reproductor de 
señalización digital que ejecute el software de gestión de contenido para crear, administrar 
y programar el contenido del menú. Además, a menudo se requiere una conexión estable a internet 
para actualizar el contenido de forma remota y garantizar la precisión de la información 
mostrada en tiempo real.`,

faq4Title: "¿Cuál es el propósito de un menú digital?",
faq4p: `Los menús digitales proporcionan una forma dinámica y visualmente atractiva de mostrar 
los elementos del menú, precios y promociones, mejorando la interacción con los clientes. 
También permiten actualizaciones y modificaciones fáciles, ayudando a los negocios a adaptarse 
rápidamente a cambios de inventario o promociones sin los costos y desperdicio asociados con 
menús impresos tradicionales.`,

faq5Title: "¿Qué hace que un menú digital sea bueno?",
faq5p: `Un diseño efectivo de menú digital se caracteriza por textos claros y fáciles de leer 
y imágenes de alta calidad que representan con precisión los elementos del menú, junto con un 
diseño organizado que permite a los clientes encontrar rápidamente lo que buscan. También 
debe ser adaptable, permitiendo actualizaciones y modificaciones en tiempo real para mantener 
el contenido actual y relevante para las necesidades del cliente y operaciones del negocio.`,

faq6Title: "¿Cuánto cuesta crear un menú digital?",
faq6p: `El costo de crear un menú digital puede variar ampliamente según factores como el tamaño 
y tipo de pantalla digital, la complejidad del sistema de gestión de contenido y cualquier 
característica adicional como interactividad táctil o integración de software personalizado.`,

faq7Title: "¿Los menús digitales aumentan las ventas?",
faq7p: `Aunque no hay garantía, los menús digitales a menudo aumentan las ventas al atraer 
efectivamente la atención del cliente, promocionar productos de alto margen y facilitar 
ventas adicionales mediante pantallas llamativas y contenido dinámico. Mejoran la experiencia 
del cliente y facilitan introducir promociones y especiales oportunos, lo que puede conducir 
a un aumento del valor promedio de los pedidos y a clientes recurrentes.`,

    // ===== Footer =====
   footer_desc: "Soluciones de señalización digital y menús diseñadas para ayudar a los restaurantes a gestionar contenido fácilmente y aumentar sus ventas.",
    footer_product: "Producto",
    footer_menu_boards: "Menús Digitales",
    footer_restaurant: "Restaurante",
    footer_company: "Empresa",
    footer_about: "Sobre nosotros",
    footer_contact: "Contacto",
    footer_trial: "Iniciar prueba gratis",
    footer_rights: "© 2025 Meseras. Todos los derechos reservados.",

    

    


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