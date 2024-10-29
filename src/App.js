
import './App.css';
import img_hoja from './img_hoja.jpg';

function App() {
  return (
    <body>
    <div class="contenedor">
        <header>
            <img src = {img_hoja} alt="foto Daniel"/>
            <div class="texto">
                <h1>Daniel Alberto Galvis Betancur</h1>
                <h3>Dirección: Vereda la Aurora Finca Estambul - Manizales, Caldas</h3>
                <h3>Teléfono: 319-394-9304</h3>
                <h3>Email: dagalvis@unitecnica.net</h3>
            </div>
        </header>
       
        <div>
            <div class="margen">
                <h2>Sobre mi:</h2>
                <p>Soy una persona perspicas y trabajadora, me gusta trabajar en equipo pero tambien lo hago bien en solitario.</p>
            </div>

            <div class="margen">
                <h2>Experiencia Laboral</h2>
                <div>
                    <div>
                        <h3>Vapor Blast CO</h3>
                        <p>Octubre 2014 - Junio 2018</p>
                        <p>Administrador General, Vendedor, Tecnico en Reparaciones</p>
                    </div>
                    <div>
                        <h3>Vapor House CO</h3>
                        <p>Septiembre 2018 - Junio 2024</p>
                        <p>Administrador General, Vendedor, Tecnico en Reparaciones, Diseñador grafico</p>
                    </div>
                </div>
            </div>

            <div class="margen">
                <h2>Experiencia Academica</h2>
                <div>
                    <div>
                        <h3>Técnico en Diseño Grafico Digital</h3>
                        <p><strong>Institución:</strong>Unitecnica</p>
                        <p><strong>Fecha:</strong> 2011 - 2013</p>
                    </div>
                    <div>
                        <h3>Técnico en Animación 3D y Videojuegos</h3>
                        <p><strong>Institución:</strong>Unitecnica</p>
                        <p><strong>Fecha:</strong> 2013 - 2016</p>
                    </div>
                    <div>
                        <h3>Diplomado en Herramientas Digitales basadas en diseño</h3>
                        <p><strong>Institución:</strong>Unitecnica</p>
                        <p><strong>Fecha:</strong> 2013</p>
                    </div>
                    <div>
                        <h3>Diplomado en Zbrush</h3>
                        <p><strong>Institución:</strong>Unitecnica</p>
                        <p><strong>Fecha:</strong> 2016</p>
                    </div>
                    <div>
                        <h3>Técnologia en Sistemas informaticos</h3>
                        <p><strong>Institución:</strong>Univercidad de Caldas</p>
                        <p><strong>Fecha:</strong> 2023 - hasta la Fecha</p>
                    </div>
                </div>
            </div>

            <div class="margen">
                <h2>Aptitudes:</h2>
                <h3>Habilidades en Diseño</h3>
                <ul>
                    <li>Photoshop 60%</li>
                    <li>Indesigne 80%</li>
                    <li>After efects 40%</li>
                    <li>Premiere Pro 80%</li>
                    <li>3D Max 50%</li>
                </ul>
                <h3>Habilidades personales</h3>
                <ul>
                    <li>Experto en Ventas</li>
                    <li>Auto suficiente</li>
                    <li>Buen desempeño en equipo</li>
                    <li>Lider</li>
                    <li>Recursivo</li>
                </ul>
            </div>

            <div class="margen">
                <h2>Idiomas</h2>
                <ul>
                    <li>Español - Nativo</li>
                    <li>Inglés - Intermedio</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="margen">
        <h2>Contáctame:</h2>
        <div>
            <form action="">
                <div>
                    <label for="nombre">Nombre y Apellido:</label>
                    <input type="text" id="nombre" placeholder="Pepito Perez"/>
                </div>
                <div>
                    <label for="correo">Correo:</label>
                    <input type="email" id="correo" placeholder="info@local.com"/>
                </div>
                <div>
                    <label for="mensage">Mensage:</label>
                    <textarea id="mensage" cols="30" rows="10"></textarea>
                </div>
            </form>
        </div>
    </div>
    </body>
  );
}

export default App;
