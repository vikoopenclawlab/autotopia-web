import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting seed...')

  // Admin user
  const hashedPassword = await bcrypt.hash('admin123', 10)
  const user = await prisma.user.upsert({
    where: { email: 'admin@autotopia.mx' },
    update: {},
    create: {
      email: 'admin@autotopia.mx',
      name: 'Administrador',
      password: hashedPassword,
      role: 'ADMIN',
    },
  })
  console.log(`✅ Admin: ${user.email}`)

  // Autos reales para concesionaria mexicana
  const autos = [
    {
      titulo: 'Toyota Corolla 2024 SE XLE',
      marca: 'Toyota',
      modelo: 'Corolla',
      anio: 2024,
      precio: 589900,
      kilometros: 0,
      color: 'Plata Meteorito',
      transmision: 'Automática',
      combustible: 'Gasolina',
      descripcion: 'Toyota Corolla SE XLE 2024. versión FULL con todos los accesorios. Navegador, cámara de reversa, pantalla táctil de 10", climatizador automático bizona, quemacocos, rines de aluminio de 18". Excelente estado, recién llegada de agencia. 5 años de garantía de fábrica.',
      imagenes: [
        'https://images.unsplash.com/photo-1623869675781-80aa08d8b3bd?w=800',
        'https://images.unsplash.com/photo-1619682817481-e9947cd2aff4?w=800',
        'https://images.unsplash.com/photo-1590362891991-f776e717a614?w=800',
      ],
      caracteristicas: ['Pantalla táctil 10"', 'Cámara de reversa', 'Climatizador bizona', 'Quemacocos', 'Bluetooth', 'Control de estabilidad', '6 airbags', 'Rines 18"'],
      disponibles: true,
      destacado: true,
    },
    {
      titulo: 'Honda CR-V 2024 Touring Híbrido',
      marca: 'Honda',
      modelo: 'CR-V',
      anio: 2024,
      precio: 829900,
      kilometros: 5000,
      color: 'Gris Lunar',
      transmision: 'Automática e-CVT',
      combustible: 'Híbrido',
      descripcion: 'Honda CR-V Touring Híbrido 2024. Navegador con Android Auto/Apple CarPlay, pantalla de 9", quemacocos panorámico, asientos de piel con calefacción, sensor de punto ciego, alerta de tráfico cruzado. Increíble rendimiento de 28 km/l. Auto seminuevo con solo 5,000 km.',
      imagenes: [
        'https://images.unsplash.com/photo-1568844293986-8c3a88b88f6a?w=800',
        'https://images.unsplash.com/photo-1606611013016-969c19ba27bb?w=800',
        'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800',
      ],
      caracteristicas: ['Sistema híbrido', 'Pantalla 9"', 'Android Auto/Apple CarPlay', 'Asientos de piel', 'Calefacción en asientos', 'Sensor punto ciego', 'Alerta tráfico cruzado', 'Ventanilla panorámica'],
      disponibles: true,
      destacado: true,
    },
    {
      titulo: 'Mazda CX-5 2024 Grand Touring',
      marca: 'Mazda',
      modelo: 'CX-5',
      anio: 2024,
      precio: 679900,
      kilometros: 8000,
      color: 'Rojo Alma',
      transmision: 'Automática',
      combustible: 'Gasolina',
      descripcion: 'Mazda CX-5 Grand Touring 2024. Diseño Kodo Soul of Motion, interiores en piel Nappa, HUD (head-up display), sistema de sonido Bose 10 bocinas, techo panorámico. Tecnología i-Activ AWD para mayor estabilidad en cualquier terreno. Seminuevo en excelente estado.',
      imagenes: [
        'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800',
        'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800',
        'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800',
      ],
      caracteristicas: ['Diseño Kodo', 'HUD (head-up display)', 'Sonido Bose 10 bocinas', 'Techo panorámico', 'AWD i-Activ', 'Asistente de mantenimiento de carril', 'Frenado automático de emergencia', 'Piel Nappa'],
      disponibles: true,
      destacado: false,
    },
    {
      titulo: 'Nissan X-Trail 2024 Exclusive Híbrido',
      marca: 'Nissan',
      modelo: 'X-Trail',
      anio: 2024,
      precio: 749900,
      kilometros: 12000,
      color: 'Azul Nocturno',
      transmision: 'Automática',
      combustible: 'Híbrido',
      descripcion: 'Nissan X-Trail Exclusive Híbrido 2024. 7 pasajeros, pantalla de 12.3", sistema ProPILOT con asistente de manejo en carretera, alrededor de vista 360°, puerta trasera hands-free. Ideal para familia. Seminuevo con mantenimiento en agencia.',
      imagenes: [
        'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800',
        'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800',
        'https://images.unsplash.com/photo-1568844293986-8c3a88b88f6a?w=800',
      ],
      caracteristicas: ['7 pasajeros', 'ProPILOT Assist', 'Pantalla 12.3"', 'Vista 360°', 'Puerta trasera hands-free', 'Climatizador tri-zona', 'Sistema audio premium', 'Tercera fila reclinable'],
      disponibles: true,
      destacado: true,
    },
    {
      titulo: 'Volkswagen Tiguan 2024 R-Line',
      marca: 'Volkswagen',
      modelo: 'Tiguan',
      anio: 2024,
      precio: 719900,
      kilometros: 15000,
      color: 'Blanco Glaciar',
      transmision: 'Automática DSG',
      combustible: 'Gasolina',
      descripcion: 'Volkswagen Tiguan R-Line 2024. Paquete Sport con suspensión adaptativa, rines de 20", sistema de infoentretenimiento MIB3 con pantalla de 10", Virtual Cockpit de 10.25", faros IQ.Light LED Matrix. Diseño robusto y elegante. Seminuevo.',
      imagenes: [
        'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800',
        'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800',
        'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800',
      ],
      caracteristicas: ['Paquete R-Line Sport', 'Suspensión adaptativa', 'Virtual Cockpit 10.25"', 'Faros IQ.Light LED Matrix', 'Pantalla 10" MIB3', 'Rines 20"', 'Asientos sport', 'Portón trasero eléctrico'],
      disponibles: true,
      destacado: false,
    },
    {
      titulo: 'Hyundai Tucson 2024 Limited Híbrido',
      marca: 'Hyundai',
      modelo: 'Tucson',
      anio: 2024,
      precio: 629900,
      kilometros: 6000,
      color: 'Gris Titanio',
      transmision: 'Automática',
      combustible: 'Híbrido',
      descripcion: 'Hyundai Tucson Limited Híbrido 2024. Diseño parametric jewel exterior, pantalla panorámica de 10.25", sistema de sonido premium Bose, asistencia de manejo highway driving, climatizador automático bi-zona. Auto seminuevo en condiciones de agencia.',
      imagenes: [
        'https://images.unsplash.com/photo-1619682817481-e9947cd2aff4?w=800',
        'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800',
        'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800',
      ],
      caracteristicas: ['Diseño Parametric Jewel', 'Pantalla panorámica 10.25"', 'Sonido Bose premium', 'Highway Driving Assist', 'Climatizador bi-zona', 'Asistente de frenado autónomo', 'Supervisión punto ciego', 'Luces de freno LED'],
      disponibles: true,
      destacado: true,
    },
    {
      titulo: 'Ford Explorer 2024 ST-Line',
      marca: 'Ford',
      modelo: 'Explorer',
      anio: 2024,
      precio: 899900,
      kilometros: 20000,
      color: 'Negro Ónix',
      transmision: 'Automática 10 velocidades',
      combustible: 'Gasolina',
      descripcion: 'Ford Explorer ST-Line 2024. Motor EcoBoost 2.3L de 300 hp, tracción 4WD, pantalla de 12.3", sistema SYNC 4, asientos de piel con calefacción y ventilación, techo panorámico, sistema de sonido B&O Play 12 bocinas. SUV familiar de lujo.',
      imagenes: [
        'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800',
        'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800',
        'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800',
      ],
      caracteristicas: ['Motor EcoBoost 2.3L 300hp', 'Tracción 4WD', 'Pantalla 12.3" SYNC 4', 'Sonido B&O Play 12 bocinas', 'Asientos piel calefacción/ventilación', 'Techo panorámico', '3 filas 7 pasajeros', 'Cochera automática'],
      disponibles: true,
      destacado: false,
    },
    {
      titulo: 'Chevrolet Trailblazer 2024 Premier',
      marca: 'Chevrolet',
      modelo: 'Trailblazer',
      anio: 2024,
      precio: 549900,
      kilometros: 8000,
      color: 'Rojo Carnelian',
      transmision: 'CVT',
      combustible: 'Gasolina',
      descripcion: 'Chevrolet Trailblazer Premier 2024. Diseño exterior sofisticado, interior con pantalla de 11" compatible con wireless Android Auto y Apple CarPlay, cámara de reversa HD, sensores de estacionamiento delanteros y traseros. Rendimiento de 16 km/l en ciudad.',
      imagenes: [
        'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800',
        'https://images.unsplash.com/photo-1619682817481-e9947cd2aff4?w=800',
        'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800',
      ],
      caracteristicas: ['Pantalla 11" wireless', 'Android Auto/Apple CarPlay inalámbrico', 'Cámara de reversa HD', 'Sensores adelante y atrás', 'Llantas 19"', 'Ventanas eléctricas', 'Control adaptive cruise', 'Alerta de cambio de carril'],
      disponibles: true,
      destacado: false,
    },
  ]

  for (const auto of autos) {
    await prisma.auto.upsert({
      where: { id: auto.titulo.slice(0, 20).replace(/\s/g, '-').toLowerCase() },
      update: {
        titulo: auto.titulo,
        marca: auto.marca,
        modelo: auto.modelo,
        anio: auto.anio,
        precio: auto.precio,
        kilometros: auto.kilometros,
        color: auto.color,
        transmision: auto.transmision,
        combustible: auto.combustible,
        descripcion: auto.descripcion,
        imagenes: auto.imagenes,
        caracteristicas: auto.caracteristicas,
        disponibles: auto.disponibles,
        destacado: auto.destacado,
      },
      create: {
        titulo: auto.titulo,
        marca: auto.marca,
        modelo: auto.modelo,
        anio: auto.anio,
        precio: auto.precio,
        kilometros: auto.kilometros,
        color: auto.color,
        transmision: auto.transmision,
        combustible: auto.combustible,
        descripcion: auto.descripcion,
        imagenes: auto.imagenes,
        caracteristicas: auto.caracteristicas,
        disponibles: auto.disponibles,
        destacado: auto.destacado,
      },
    })
    console.log(`  ✅ ${auto.marca} ${auto.modelo} ${auto.anio}`)
  }

  // Configuración global
  await prisma.configuracion.upsert({
    where: { id: 'global' },
    update: {},
    create: {
      id: 'global',
      telefono: '(55) 1234-5678',
      email: 'contacto@autotopia.mx',
      direccion: 'Av. Insurgentes Sur 1234, Col. Del Valle, CDMX, 03100',
      horario: 'Lun-Sáb: 9am - 7pm\nDomingo: 10am - 5pm',
    },
  })

  console.log('✅ Seed completed: 8 autos + admin + configuración')
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })