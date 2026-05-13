// Datos de ejemplo para AutoTopía
// Estos datos se mostrarán mientras no haya conexión a la base de datos

export interface Auto {
  id: string
  titulo: string
  marca: string
  modelo: string
  anio: number
  precio: number
  kilometros: number
  color: string
  transmision: string
  combustible: string
  descripcion: string
  imagenes: string[]
  caracteristicas: string[]
  disponibles: boolean
  destacado: boolean
}

export const autosEjemplo: Auto[] = [
  {
    id: '1',
    titulo: 'Toyota Corolla 2024 SE',
    marca: 'Toyota',
    modelo: 'Corolla',
    anio: 2024,
    precio: 589900,
    kilometros: 0,
    color: 'Plata',
    transmision: 'Automática',
    combustible: 'Gasolina',
    descripcion: 'Toyota Corolla SE 2024, versión FULL con todos los accesorios. Navegador, cámara de reversa, pantalla táctil de 10", climatizador automático, quemacocos, rines de aluminio de 18". Excelente estado, recién llegada de agencia.',
    imagenes: [
      'https://images.unsplash.com/photo-1623869675781-80aa08d8b3bd?w=800',
      'https://images.unsplash.com/photo-1619682817481-e9947cd2aff4?w=800',
    ],
    caracteristicas: [
      'Pantalla táctil 10"',
      'Cámara de reversa',
      'Climatizador automático',
      'Quemacocos',
      'Bluetooth',
      'Control de estabilidad',
      '6 airbags',
      'Rines 18"',
    ],
    disponibles: true,
    destacado: true,
  },
  {
    id: '2',
    titulo: 'Honda CR-V 2023 Touring',
    marca: 'Honda',
    modelo: 'CR-V',
    anio: 2023,
    precio: 789900,
    kilometros: 15000,
    color: 'Negro',
    transmision: 'Automática',
    combustible: 'Híbrido',
    descripcion: 'Honda CR-V Touring Híbrido 2023. Navegador con Android Auto/Apple CarPlay, pantalla de 9", quemacocos panorámico, asientos de piel con calefacción, sensor de punto ciego, alerta de tráfico cruzado. Increíble rendimiento de 28 km/l.',
    imagenes: [
      'https://images.unsplash.com/photo-1568844293986-8c3a88b88f6a?w=800',
      'https://images.unsplash.com/photo-1606611013016-969c19ba27bb?w=800',
    ],
    caracteristicas: [
      'Sistema híbrido',
      'Pantalla 9"',
      'Android Auto/Apple CarPlay',
      'Asientos de piel',
      'Calefacción en asientos',
      'Sensor punto ciego',
      'Alerta tráfico cruzado',
      'Ventanilla panorámica',
    ],
    disponibles: true,
    destacado: true,
  },
  {
    id: '3',
    titulo: 'Mazda CX-5 2024 Grand Touring',
    marca: 'Mazda',
    modelo: 'CX-5',
    anio: 2024,
    precio: 659900,
    kilometros: 5000,
    color: 'Rojo',
    transmision: 'Automática',
    combustible: 'Gasolina',
    descripcion: 'Mazda CX-5 Grand Touring 2024. Diseño Kodo Soul of Motion, interiores en piel Nappa, HUD (head-up display), sistema de sonido Bose 10 bocinas, techo panorámico. Tecnología i-Activ AWD para mayor estabilidad.',
    imagenes: [
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800',
    ],
    caracteristicas: [
      'Diseño Kodo',
      'HUD (head-up display)',
      'Sonido Bose',
      'Techo panorámico',
      'AWD i-Activ',
      'Asistente de mantenimiento de carril',
      'Frenado automático de emergencia',
      'Piel Nappa',
    ],
    disponibles: true,
    destacado: false,
  },
  {
    id: '4',
    titulo: 'Nissan X-Trail 2024 Exclusive',
    marca: 'Nissan',
    modelo: 'X-Trail',
    anio: 2024,
    precio: 719900,
    kilometros: 8000,
    color: 'Azul',
    transmision: 'Automática',
    combustible: 'Híbrido',
    descripcion: 'Nissan X-Trail Exclusive Híbrido 2024. 7 pasajeros, pantalla de 12.3", sistema ProPILOT con asistente de manejo en carretera, alrededor de vista 360°, puerta trasera hands-free. Ideal para familia.',
    imagenes: [
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800',
    ],
    caracteristicas: [
      '7 pasajeros',
      'ProPILOT Assist',
      'Pantalla 12.3"',
      'Vista 360°',
      'Puerta trasera hands-free',
      'Climatizador tri-zona',
      'Sistema audio premium',
      'Tercera fila reclinable',
    ],
    disponibles: true,
    destacado: false,
  },
  {
    id: '5',
    titulo: 'Volkswagen Tiguan 2024 R-Line',
    marca: 'Volkswagen',
    modelo: 'Tiguan',
    anio: 2024,
    precio: 699900,
    kilometros: 12000,
    color: 'Blanco',
    transmision: 'Automática',
    combustible: 'Gasolina',
    descripcion: 'Volkswagen Tiguan R-Line 2024. Paquete Sport con suspensión adaptativa, rines de 20", sistema de infoentretenimiento MIB3 con pantalla de 10", Virtual Cockpit de 10.25", faros IQ.Light LED Matrix.',
    imagenes: [
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800',
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800',
    ],
    caracteristicas: [
      'Paquete R-Line Sport',
      'Suspensión adaptativa',
      'Virtual Cockpit',
      'Faros IQ.Light LED',
      'Pantalla 10" MIB3',
      'Rines 20"',
      'Asientos sport',
      'Portón trasero eléctrico',
    ],
    disponibles: true,
    destacado: true,
  },
  {
    id: '6',
    titulo: 'Hyundai Tucson 2023 Limited',
    marca: 'Hyundai',
    modelo: 'Tucson',
    anio: 2023,
    precio: 589900,
    kilometros: 20000,
    color: 'Gris',
    transmision: 'Automática',
    combustible: 'Híbrido',
    descripcion: 'Hyundai Tucson Limited Híbrido 2023. Diseño parametric jewel exterior, pantalla panorámica de 10.25", sistema de sonido premium Bose, asistencia de manejo highway driving, climatizador automático bi-zona.',
    imagenes: [
      'https://images.unsplash.com/photo-1619682817481-e9947cd2aff4?w=800',
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800',
    ],
    caracteristicas: [
      'Diseño Parametric Jewel',
      'Pantalla panorámica 10.25"',
      'Sonido Bose premium',
      'Highway Driving Assist',
      'Climatizador bi-zona',
      'Asistente de frenado autónomo',
      'Supervisión punto ciego',
      'Luces de freno LED',
    ],
    disponibles: true,
    destacado: false,
  },
]

// Marcas disponibles para filtro
export const marcas = [...new Set(autosEjemplo.map(a => a.marca))].sort()

// Autos destacados
export const autosDestacados = autosEjemplo.filter(a => a.destacado)