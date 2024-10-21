// Selección de elementos
const carouselImages = document.querySelectorAll('.carousel-image');
let currentImageIndex = 0;
let intervalId;

// Iniciar el carrusel al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    startCarousel();
    document.getElementById('close-info').addEventListener('click', closeInfo);
});

// Cambiar imágenes en el carrusel
function changeBackgroundImage() {
    carouselImages[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
    carouselImages[currentImageIndex].classList.add('active');
}

// Iniciar el carrusel
function startCarousel() {
    intervalId = setInterval(changeBackgroundImage, 5000);
}

// Mostrar información del cuadro de diálogo
function mostrarInfo(tipo) {
    stopCarousel();
    const infoContent = document.getElementById('info-content');

    switch (tipo) {
        case 'manicura':
            infoContent.innerHTML = `
                <div style="text-align: center; margin-bottom: 5px;">
                    <!-- Título con fuente en negrita y tamaño ajustado para mayor visibilidad -->
                    <h2 style="font-size: 3.5em; margin-top: 5px; font-weight: bold;">"Manicura"</h2>
                    <!-- Imagen ajustada para reducir el espacio entre el título y el subtítulo -->
                    <img src="imagenes/IMG-20241011-WA0030.jpg" alt="Manicura" style="width: 60%; max-width: 180px; height: auto; margin: 3px 0;">
                    <!-- Subtítulo en negrita con márgenes para maximizar el espacio disponible -->
                    <p style="font-size: 3em; margin: 3px 0; font-weight: bold;">Ofrezco los siguientes tipos de manicura:</p>
                </div>

                <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 15px;">
                    <!-- Columna izquierda: Lista de servicios en negrita con control de margen y espaciado -->
                    <div style="flex: 1;">
                        <ul style="font-size: 2.5em; line-height: 0.8; margin-bottom: 5px; font-weight: bold;">
                            <li style="margin-bottom: 8px;"><strong>Manicura rusa, manicura rusa combinada</strong></li>
                            <li style="margin-bottom: 8px;"><strong>Esmaltado permanente</strong></li>
                            <li style="margin-bottom: 8px;"><strong>Acrílico</strong></li>
                            <li style="margin-bottom: 8px;"><strong>Polygel</strong></li>
                            <li style="margin-bottom: 8px;"><strong>Gel</strong></li>
                            <li style="margin-bottom: 8px;"><strong>Softgel</strong></li>
                            <li style="margin-bottom: 8px;"><strong>Sistema Dualform</strong></li>
                            <li style="margin-bottom: 8px;"><strong>Cristalería simple</strong></li>
                        </ul>
                    </div>

                    <!-- Columna derecha: Reseña en primera persona con control de espaciado y negrita -->
                    <div style="flex: 1;">
                        <h3 style="font-size: 3em; margin-bottom: 8px; font-weight: bold;">Atención personalizada</h3>
                        <p style="font-size: 2.5em; line-height: 0.8; margin-bottom: 8px; font-weight: bold;">
                            Atenderé con total profesionalismo, utilizando las técnicas más modernas y seguras en el arte de la manicura.
                            Me aseguro de que cada cliente reciba un servicio de calidad, enfocándome en la higiene y en cumplir con tus expectativas.
                        </p>
                        <p style="font-size: 2.5em; line-height: 0.8; font-weight: bold;">
                            Estoy capacitada en las últimas tendencias y técnicas, garantizando resultados impecables en cada visita. ¡Mi objetivo es que te sientas satisfecha con el servicio que recibes!
                        </p>
                    </div>
                </div>
            `;
            break;
        case 'clases':
            infoContent.innerHTML = `
                <div style="text-align: center; margin-bottom: 5px;">
                    <!-- Título ajustado con fuente en negrita para mayor visibilidad -->
                    <h2 style="font-size: 3.5em; margin-top: 5px; font-weight: bold;">"Clases"</h2>
                    <!-- Imagen con margen reducido para maximizar el espacio disponible -->
                    <img src="./imagenes/azul1.jpg" alt="Clases" style="width: 60%; max-width: 180px; height: auto; margin: 3px 0;">
                </div>
            
                <div style="text-align: center; margin-bottom: 10px;">
                    <!-- Texto de introducción con fuente y espaciado ajustados -->
                    <p style="font-size: 2.5em; margin: 5px 0; font-weight: bold;">
                        Ofrezco <strong>clases personalizadas</strong>, asegurando que cada estudiante reciba una atención dedicada, adaptada a su ritmo de aprendizaje.
                        Con enfoque en la <strong>calidad</strong> y el <strong>perfeccionamiento</strong> de técnicas, garantizo un aprendizaje práctico, con resultados profesionales desde la primera sesión.
                    </p>
                </div>
            
                <!-- Sección de imágenes en fila ajustada con tamaños consistentes -->
                <div style="display: flex; justify-content: center; gap: 15px; margin-top: 10px;">
                    <img src="imagenes/blanca0.jpg" alt="Clase 1" style="width: 60%; max-width: 200px; height: auto;">
                    <img src="imagenes/flores.jpg" alt="Clase 2" style="width: 60%; max-width: 200px; height: auto;">
                    <img src="imagenes/naranja.jpg" alt="Clase 3" style="width: 60%; max-width: 200px; height: auto;">
                    <img src="imagenes/verde0.jpg" alt="Clase 4" style="width: 60%; max-width: 200px; height: auto;">
                </div>
            `;            
            break;
            case 'descuentos': 
            infoContent.innerHTML = `
                <div style="text-align: center; margin-bottom: 5px;">
                    <!-- Título con fuente en negrita y tamaño ajustado para mayor visibilidad -->
                    <h2 style="font-size: 3.5em; margin-top: 5px; font-weight: bold;">"Descuentos"</h2>
                    <!-- Imagen ajustada para reducir el espacio entre el título y el subtítulo -->
                    <img src="imagenes/octubre.jpg" alt="Promociones" style="width: 100%; max-width: 120px; height: auto; margin: 3px 0;">
                    <!-- Descripción de la promoción con fuente en negrita -->
                    <p style="font-size: 2.5em; margin: 3px 0; font-weight: bold;">Promoción: Aprovecha esta promoción en servicios de manicura.</p>
                </div>
        
                <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 15px;">
                    <!-- Columna izquierda: Lista de servicios en negrita con control de margen y espaciado -->
                    <div style="flex: 1;">
                        <ul style="font-size: 2.5em; line-height: 0.8; margin-bottom: 5px; font-weight: bold;">
                            <li style="margin-bottom: 8px;"><strong>Descuento en acrilico</strong></li>
                            <li style="margin-bottom: 8px;"><strong>Descuento en esmaltado permanente</strong></li>
                            <li style="margin-bottom: 8px;"><strong>Descuento en polygel</strong></li>
                            <li style="margin-bottom: 8px;"><strong>Descuento en todos los baños de gel, polygel y acrilicos de todos los colores</strong></li>
                            <li style="margin-bottom: 8px;"><strong>Paquetes promocionales para grupos</strong></li>
                        </ul>
                    </div>
        
                    <!-- Columna derecha: Información adicional sobre la promoción -->
                    <div style="flex: 1;">
                        <h3 style="font-size: 3em; margin-bottom: 8px; font-weight: bold;">Detalles de la Promoción</h3>
                        <p style="font-size: 2.5em; line-height: 0.8; margin-bottom: 8px; font-weight: bold;">
                            Disfruta de descuentos especiales en todos los servicios de manicura durante el mes de octubre.
                        </p>
                        <p style="font-size: 2.5em; line-height: 0.8; font-weight: bold;">
                            Consulta nuestras ofertas exclusivas y aprovecha las promociones limitadas.
                        </p>
                    </div>
                </div>
            `;        
            break;
            case 'paquetes': 
            infoContent.innerHTML = `
                <div style="text-align: center; margin-bottom: 5px;">
                    <!-- Título con fuente en negrita y tamaño ajustado para mayor visibilidad -->
                    <h2 style="font-size: 3.5em; margin-top: 5px; font-weight: bold;">"Paquetes Especiales"</h2>
                    <!-- Imagen ajustada para reducir el espacio entre el título y el subtítulo -->
                    <img src="imagenes/estudio_frente.jpg" alt="Paquetes" style="width: 50%; max-width: 250px; height: auto; margin: 3px 0;">
                    <!-- Descripción del paquete en negrita -->
                    <p style="font-size: 2.5em; margin: 3px 0; font-weight: bold;">
                        Paquetes: Por el momento consulta directamente a mi número, estoy trabajando para ofrecerte los mejores paquetes especiales.
                    </p>
                </div>
        
                <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 20px;">
                    <!-- Columna izquierda: Lista de paquetes o detalles adicionales (puedes expandir si lo necesitas) -->
                    <div style="flex: 1;">
                        <ul style="font-size: 2.5em; line-height: 0.8; margin-bottom: 5px; font-weight: bold;">
                            <li style="margin-bottom: 8px;"><strong>Paquete 1: Detalles personalizados</strong></li>
                            <li style="margin-bottom: 8px;"><strong>Paquete 2: Servicios premium</strong></li>
                            <li style="margin-bottom: 8px;"><strong>Paquete 3: Ofertas especiales</strong></li>
                        </ul>
                    </div>
        
                    <!-- Columna derecha: Información adicional sobre los paquetes -->
                    <div style="flex: 1;">
                        <h3 style="font-size: 3em; margin-bottom: 8px; font-weight: bold;">Más información</h3>
                        <p style="font-size: 2.5em; line-height: 0.8; margin-bottom: 8px; font-weight: bold;">
                            Para obtener más información sobre los paquetes disponibles, contáctame directamente al número proporcionado.
                        </p>
                        <p style="font-size: 2.5em; line-height: 0.8; font-weight: bold;">
                            ¡Estoy trabajando para ofrecerte las mejores opciones y paquetes especiales!
                        </p>
                    </div>
                </div>
            `;        
            break;
            case 'informacion':
                infoContent.innerHTML = `
                    <div style="text-align: center; margin-bottom: 5px;">
                        <!-- Título en negrita con tamaño ajustado para visibilidad -->
                        <h2 style="font-size: 3.5em; margin-top: 5px; font-weight: bold;">"Información"</h2>
                    </div>
            
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 15px; margin-top: 15px;">
                        <!-- Botón de WhatsApp con estilo consistente -->
                        <a href="https://wa.me/+56950095272" style="
                            display: inline-block;
                            text-decoration: none;
                            font-size: 2.5em; /* Tamaño de fuente ajustado */
                            padding: 10px 20px;
                            background: linear-gradient(to bottom, #FF69B4, #8A2BE2, #40E0D0);
                            color: white;
                            border: none;
                            border-radius: 8px;
                            cursor: pointer;
                            text-align: center;
                            width: 300px; /* Ancho ajustado */
                            font-weight: bold;
                        ">
                            WhatsApp
                        </a>
            
                        <!-- Botón de Instagram con estilo consistente -->
                        <a href="https://instagram.com/_benys.nails.afta_" style="
                            display: inline-block;
                            text-decoration: none;
                            font-size: 2.5em; /* Tamaño de fuente ajustado */
                            padding: 10px 20px;
                            background: linear-gradient(to bottom, #FF69B4, #8A2BE2, #40E0D0);
                            color: white;
                            border: none;
                            border-radius: 8px;
                            cursor: pointer;
                            text-align: center;
                            width: 300px; /* Ancho ajustado */
                            font-weight: bold;
                        ">
                            Instagram
                        </a>
                    </div>
                `;            
            break;
            case 'reservas':
                infoContent.innerHTML = `
                    <div style="text-align: center; margin-bottom: 10px;">
                        <h2 style="font-size: 3.5em; margin-top: 5px; font-weight: bold;">"Reservas"</h2>
                    </div>

                    <div style="text-align: center; margin-bottom: 20px;">
                        <img src="./imagenes/estudio.jpg" alt="Reservas" style="width: 60%; max-width: 200px; height: auto; margin: 10px 0;">
                    </div>

                    <div style="text-align: center;">
                        <p style="font-size: 2.5em; margin: 5px 0; font-weight: bold;">
                            ¿Tienes dudas o consultas sobre los servicios?
                        </p>
                        <p style="font-size: 2.5em; margin: 5px 0; font-weight: bold;">
                            Contáctame para más información acerca de manicura, clases, promociones y paquetes especiales.
                        </p>
                        <p style="font-size: 3em; margin: 15px 0; font-weight: bold;">
                            ¡Estaré encantada de ayudarte!
                        </p>
                    </div>

                    <!-- Contenedor de botones con flex para ponerlos en línea -->
                    <div style="display: flex; justify-content: center; gap: 20px; margin-top: 20px;">
                        <!-- Botón para llamar -->
                        <button style="
                            font-size: 2em; 
                            padding: 15px 30px; 
                            background: linear-gradient(to bottom, #FF69B4, #8A2BE2, #40E0D0);
                            color: white; 
                            border: none; 
                            border-radius: 8px; 
                            cursor: pointer;
                            width: 100%; 
                            max-width: 300px;
                            font-weight: bold;
                            text-align: center;
                        " 
                        onclick="window.location.href='tel:+56950095272'">
                            Llamar al +569 5009 5272
                        </button>

                        <!-- Botón para WhatsApp -->
                        <button style="
                            font-size: 2em; 
                            padding: 15px 30px; 
                            background: linear-gradient(to bottom, #FF69B4, #8A2BE2, #40E0D0);
                            color: white; 
                            border: none; 
                            border-radius: 8px; 
                            cursor: pointer;
                            width: 100%; 
                            max-width: 300px;
                            font-weight: bold;
                            text-align: center;
                        " 
                        onclick="window.open('https://wa.me/56950095272', '_blank')">
                            Contactar por WhatsApp
                        </button>
                    </div>
                `;           
            break;
        default:
            infoContent.innerHTML = '<p>No se ha encontrado la información.</p>';
    }

    document.getElementById('info-cuadro').classList.add('active');
}

// Cerrar el cuadro de información
function closeInfo() {
    document.getElementById('info-cuadro').classList.remove('active');
    startCarousel();
}

// Detener el carrusel
function stopCarousel() {
    clearInterval(intervalId);
}
