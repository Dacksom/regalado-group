export type PropertyType = "Casa" | "Apartamento" | "Local" | "Galpón" | "Terreno" | "Oficina" | "TownHouse";
export type PropertyStatus = "Venta" | "Alquiler";
export type PropertyZone = "Zona Norte" | "Zona Sur" | "Zona Este" | "Zona Oeste" | "Centro";

export interface Property {
  id: string;
  code: string;
  title: string;
  type: PropertyType;
  status: PropertyStatus;
  zone: PropertyZone;
  price: number;
  currency: string;
  isMonthly: boolean;
  bedrooms?: number;
  bathrooms?: number;
  area?: number;
  parking?: number;
  description: string;
  address: string;
  images: string[];
  featured: boolean;
  agent: string;
  createdAt: string;
}

export interface Advisor {
  name: string;
  role: string;
  phone: string;
  phone2: string;
  instagram: string;
  email: string;
  sede: "Maracaibo" | "Caracas" | "Falcón";
  image?: string;
}

function slugify(name: string): string {
  return name.toLowerCase().trim()
    .replace(/[áàä]/g, 'a').replace(/[éèë]/g, 'e').replace(/[íìï]/g, 'i')
    .replace(/[óòö]/g, 'o').replace(/[úùü]/g, 'u').replace(/[ñ]/g, 'n')
    .replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '');
}

// Map of advisors with non-.jpg extensions
const specialExt: Record<string, string> = {
  alex_torres: '.jpeg', elizabeth_fontalvo: '.jpeg', michell_carmona: '.jpeg',
  angel_ynciarte: '.jpeg', argelia_alvarado: '.jpeg', ciro_parente: '.jpeg',
  francisco_ramirez: '.jpeg', hider_negron: '.jpeg', linda_yicon: '.jpeg',
  wilsandra_morillo: '.jpeg', lizzeth_rodriguez: '.png',
};

export function getAdvisorImage(name: string): string {
  const slug = slugify(name);
  const ext = specialExt[slug] || '.jpg';
  return `/asesores/${slug}${ext}`;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  whatsappLink: string;
}

// Sample property data (would be replaced by CMS/DB)
export const properties: Property[] = [
  {
    id: "1",
    code: "CV-1918",
    title: "Casa Comercial Urbanización Monte Bello",
    type: "Casa",
    status: "Venta",
    zone: "Zona Norte",
    price: 150000,
    currency: "$",
    isMonthly: false,
    bedrooms: 4,
    bathrooms: 3,
    area: 350,
    parking: 2,
    description: "Espectacular casa comercial en la exclusiva Urbanización Monte Bello, ideal para oficinas o residencia de lujo.",
    address: "Urb. Monte Bello, Zona Norte, Maracaibo",
    images: ["https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop"],
    featured: true,
    agent: "Omar Regalado",
    createdAt: "2024-01-15",
  },
  {
    id: "2",
    code: "LA-544",
    title: "Local Centro Comercial Akrai Center",
    type: "Local",
    status: "Alquiler",
    zone: "Zona Norte",
    price: 400,
    currency: "$",
    isMonthly: true,
    area: 45,
    description: "Local comercial en el moderno Centro Comercial Akrai Center, excelente ubicación en Avenida Bella Vista.",
    address: "CC Akrai Center, Av. Bella Vista, Zona Norte",
    images: ["https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"],
    featured: true,
    agent: "Janny Brett",
    createdAt: "2024-02-20",
  },
  {
    id: "3",
    code: "AA-763",
    title: "Apartamento Edificio Toki Eder",
    type: "Apartamento",
    status: "Alquiler",
    zone: "Zona Este",
    price: 600,
    currency: "$",
    isMonthly: true,
    bedrooms: 3,
    bathrooms: 2,
    area: 120,
    parking: 1,
    description: "Hermoso apartamento en el Edificio Toki Eder, completamente remodelado con acabados de primera.",
    address: "Edif. Toki Eder, Av. 2A, Zona Este",
    images: ["https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop"],
    featured: true,
    agent: "Alejandrina Matos",
    createdAt: "2024-03-10",
  },
  {
    id: "4",
    code: "LV-66",
    title: "Local Comercial Avenida La Limpia",
    type: "Local",
    status: "Venta",
    zone: "Zona Oeste",
    price: 180000,
    currency: "$",
    isMonthly: false,
    area: 200,
    parking: 4,
    description: "Amplio local comercial con excelente flujo vehicular y peatonal sobre la Avenida La Limpia.",
    address: "Av. La Limpia, Zona Oeste, Maracaibo",
    images: ["https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop"],
    featured: false,
    agent: "Javier Gutierrez",
    createdAt: "2024-01-05",
  },
  {
    id: "5",
    code: "GV-26",
    title: "Galpón – Terreno Calle 51 Los Mangos",
    type: "Galpón",
    status: "Venta",
    zone: "Zona Oeste",
    price: 95000,
    currency: "$",
    isMonthly: false,
    area: 500,
    parking: 6,
    description: "Gran galpón con terreno ubicado en la Calle 51 Los Mangos/Las Amalias, vía Cujicito.",
    address: "Calle 51 Los Mangos, Zona Oeste",
    images: ["https://images.unsplash.com/photo-1565610222536-ef125c59da2e?w=800&h=600&fit=crop"],
    featured: false,
    agent: "Carlos Aldea",
    createdAt: "2024-02-01",
  },
  {
    id: "6",
    code: "CV-2001",
    title: "Quinta en La Lago",
    type: "Casa",
    status: "Venta",
    zone: "Zona Norte",
    price: 280000,
    currency: "$",
    isMonthly: false,
    bedrooms: 5,
    bathrooms: 4,
    area: 450,
    parking: 3,
    description: "Lujosa quinta en el exclusivo sector La Lago con piscina, jardín y acabados premium.",
    address: "Sector La Lago, Zona Norte, Maracaibo",
    images: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop"],
    featured: true,
    agent: "Vanessa Regalado",
    createdAt: "2024-03-25",
  },
  {
    id: "7",
    code: "AA-812",
    title: "Apartamento Torre Sol del Este",
    type: "Apartamento",
    status: "Venta",
    zone: "Zona Este",
    price: 75000,
    currency: "$",
    isMonthly: false,
    bedrooms: 3,
    bathrooms: 2,
    area: 95,
    parking: 1,
    description: "Moderno apartamento con vista panorámica en Torre Sol del Este.",
    address: "Torre Sol del Este, Zona Este",
    images: ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop"],
    featured: false,
    agent: "Elizabeth Fontalvo",
    createdAt: "2024-04-01",
  },
  {
    id: "8",
    code: "TH-445",
    title: "TownHouse Doral Norte",
    type: "TownHouse",
    status: "Venta",
    zone: "Zona Norte",
    price: 125000,
    currency: "$",
    isMonthly: false,
    bedrooms: 3,
    bathrooms: 3,
    area: 180,
    parking: 2,
    description: "Hermoso townhouse en el exclusivo conjunto residencial Doral Norte.",
    address: "Doral Norte, Zona Norte",
    images: ["https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop"],
    featured: false,
    agent: "Salvatore Iannitti",
    createdAt: "2024-04-15",
  },
  {
    id: "9",
    code: "OF-110",
    title: "Oficina Centro Empresarial Bella Vista",
    type: "Oficina",
    status: "Alquiler",
    zone: "Zona Norte",
    price: 350,
    currency: "$",
    isMonthly: true,
    area: 60,
    parking: 1,
    description: "Oficina ejecutiva equipada en el Centro Empresarial Bella Vista.",
    address: "CE Bella Vista, Zona Norte",
    images: ["https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop"],
    featured: false,
    agent: "Nelibeth León",
    createdAt: "2024-05-01",
  },
];

export const services: Service[] = [
  { title: "Compra y Venta", description: "Asesoría completa en transacciones inmobiliarias", icon: "building", whatsappLink: "https://wa.link/xkqkpw" },
  { title: "Arrendamiento", description: "Gestión integral de alquileres residenciales y comerciales", icon: "key", whatsappLink: "https://wa.link/ywvxsw" },
  { title: "Departamento Legal", description: "Soporte jurídico especializado en bienes raíces", icon: "scale", whatsappLink: "https://wa.link/ec9kiv" },
  { title: "Avalúos", description: "Valoración profesional de inmuebles", icon: "calculator", whatsappLink: "https://wa.link/3ozhdh" },
  { title: "Trámites Públicos", description: "Gestión ante SEDEMAT, DARU, SENIAT y más", icon: "fileText", whatsappLink: "https://wa.link/8o4mt4" },
  { title: "Liberación Hipoteca", description: "BANAVIH y recursos propios", icon: "unlock", whatsappLink: "https://wa.link/urosx6" },
  { title: "Administración", description: "Administración integral de inmuebles", icon: "settings", whatsappLink: "https://wa.link/9r20eh" },
  { title: "Remodelaciones", description: "Reparaciones y mejoras para tu propiedad", icon: "hammer", whatsappLink: "https://wa.link/hzhins" },
  { title: "Transacciones Exterior", description: "Operaciones inmobiliarias internacionales", icon: "globe", whatsappLink: "https://wa.link/vb39jl" },
  { title: "Créditos Personales", description: "Financiamiento para tu inversión", icon: "creditCard", whatsappLink: "https://wa.link/jko0xp" },
  { title: "Representación", description: "Representación ante organismos administrativos", icon: "shield", whatsappLink: "https://wa.link/9e2i49" },
];

export const advisors: Advisor[] = [
  { name: "Omar Regalado", role: "Broker Director", phone: "+58 414.638.8708", phone2: "+58 261.614.7172", instagram: "@omarregaladogroup", email: "info@regaladogroup.com", sede: "Maracaibo" },
  { name: "Janny Brett", role: "Broker", phone: "+58 414.631.4499", phone2: "+58 412.258.1700", instagram: "@jannybregaladogroup", email: "info@regaladogroup.com", sede: "Falcón" },
  { name: "Alejandrina Matos", role: "Asesor Inmobiliario", phone: "+58 414.611.8077", phone2: "+58 261.614.7172", instagram: "@alejandrinaregaladogroup", email: "info@regaladogroup.com", sede: "Maracaibo" },
  { name: "Javier Gutierrez", role: "Asesor Inmobiliario", phone: "+58 414.626.8989", phone2: "+58 261.614.7172", instagram: "@javiergutierrez_elrealtor", email: "info@regaladogroup.com", sede: "Maracaibo" },
  { name: "Vanessa Regalado", role: "Asesor Inmobiliario", phone: "+58 424.672.4080", phone2: "+58 261.614.7172", instagram: "@vanessaregaladogroup", email: "info@regaladogroup.com", sede: "Maracaibo" },
  { name: "Elizabeth Fontalvo", role: "Asesor Inmobiliario", phone: "+58 424.606.1117", phone2: "+58 261.614.7172", instagram: "@elizabethregaladogroup", email: "info@regaladogroup.com", sede: "Maracaibo" },
  { name: "Carlos Aldea", role: "Asesor Inmobiliario", phone: "+58 412.245.3479", phone2: "+58 261.614.7172", instagram: "@carlosaldearegaladogroup", email: "info@regaladogroup.com", sede: "Maracaibo" },
  { name: "Nelibeth León", role: "Asesor Inmobiliario", phone: "+58 424.655.5817", phone2: "+58 261.614.7172", instagram: "@nelibethregaladogroup", email: "info@regaladogroup.com", sede: "Maracaibo" },
  { name: "Salvatore Iannitti", role: "Asesor Inmobiliario", phone: "+58 424.735.7192", phone2: "+58 261.614.7172", instagram: "@salvatoreregaladogroup", email: "info@regaladogroup.com", sede: "Maracaibo" },
  { name: "Jennyffer Linares", role: "Asesor Inmobiliario", phone: "+58 424.616.0121", phone2: "+58 261.614.7172", instagram: "@JennyfferLinRegaladoGroup", email: "info@regaladogroup.com", sede: "Maracaibo" },
  { name: "Jorge Luces", role: "Asesor Inmobiliario", phone: "+54 9 11 2365.0553", phone2: "+58 261.614.7172", instagram: "@jorgelregaladogroup", email: "info@regaladogroup.com", sede: "Maracaibo" },
  { name: "Rosana Arapé", role: "Asesor Inmobiliario", phone: "+58 414.611.8771", phone2: "+58 261.614.7172", instagram: "@Rosana.regaladogroup", email: "info@regaladogroup.com", sede: "Maracaibo" },
  { name: "Viviana Velasquez", role: "Asesor Inmobiliario", phone: "+58 412.774.0764", phone2: "+58 261.614.7172", instagram: "@vivianaregaladogroup", email: "info@regaladogroup.com", sede: "Maracaibo" },
  { name: "Adriana Cristalino", role: "Asesor Inmobiliario", phone: "+58 414.621.9759", phone2: "+58 261.614.7172", instagram: "@adrianaregaladogroup", email: "info@regaladogroup.com", sede: "Maracaibo" },
  { name: "María Patricia Boscan", role: "Asesor Inmobiliario", phone: "+58 414.964.2443", phone2: "+58 261.614.7172", instagram: "@mpatriciaregaladogroup", email: "info@regaladogroup.com", sede: "Maracaibo" },
  { name: "Anyi Gavidia", role: "Asesor Inmobiliario", phone: "+58 414.065.0090", phone2: "+58 261.614.7172", instagram: "@anyigregaladogroup", email: "info@regaladogroup.com", sede: "Maracaibo" },
  { name: "Martha Portillo", role: "Asesor Inmobiliario", phone: "+58 414.629.0244", phone2: "+58 261.614.7172", instagram: "@martharegaladogroup", email: "info@regaladogroup.com", sede: "Maracaibo" },
  { name: "Mily Solano", role: "Asesor Inmobiliario", phone: "+58 414.065.0090", phone2: "+58 261.614.7172", instagram: "@milyregaladogroup", email: "info@regaladogroup.com", sede: "Maracaibo" },
  { name: "Michell Carmona", role: "Asesor Inmobiliario", phone: "+58 424.650.8308", phone2: "+58 261.614.7172", instagram: "@mcarmonarg", email: "info@regaladogroup.com", sede: "Maracaibo" },
  { name: "Zoe Sanchez", role: "Asesor Inmobiliario", phone: "+58 424.639.0689", phone2: "+58 261.614.7172", instagram: "@zoeregaladogroup", email: "info@regaladogroup.com", sede: "Maracaibo" },
  { name: "Julio Paz", role: "Asesor Inmobiliario", phone: "+58 414.632.2788", phone2: "+58 261.614.7172", instagram: "@zoeregaladogroup", email: "info@regaladogroup.com", sede: "Maracaibo" },
  { name: "Diana Redondo", role: "Asesor Inmobiliario", phone: "+58 414.037.1089", phone2: "+58 261.614.7172", instagram: "@dianaregaladogroup", email: "info@regaladogroup.com", sede: "Maracaibo" },
  { name: "Soraya Casanova", role: "Asesor Inmobiliario", phone: "+58 414.632.0782", phone2: "+58 261.614.7172", instagram: "@sorayaregaladogroup", email: "info@regaladogroup.com", sede: "Maracaibo" },
  { name: "Maritza Quintero", role: "Asesor Inmobiliario", phone: "+58 414.639.3737", phone2: "+58 261.614.7172", instagram: "@maritzaregaladogroup", email: "info@regaladogroup.com", sede: "Maracaibo" },
  { name: "Katiana Ballesteros", role: "Asesor Inmobiliario", phone: "+58 424.626.8061", phone2: "+58 261.614.7172", instagram: "@katianaregaladogroup", email: "info@regaladogroup.com", sede: "Maracaibo" },
  { name: "Guillermo Toledo", role: "Asesor Inmobiliario", phone: "+58 412.095.0229", phone2: "+58 261.614.7172", instagram: "@gtoledo.regaladogroup", email: "info@regaladogroup.com", sede: "Maracaibo" },
  { name: "Bruna de Rubeis", role: "Asesor Inmobiliario", phone: "+58 414.361.2507", phone2: "+58 261.614.7172", instagram: "@Brunaregaladogroup", email: "info@regaladogroup.com", sede: "Maracaibo" },
  { name: "Viviana Morón", role: "Asesor Inmobiliario", phone: "+58 412.686.5739", phone2: "+58 261.614.7172", instagram: "@vivianamoronregaladogroup", email: "info@regaladogroup.com", sede: "Maracaibo" },
  { name: "Marta Contreras", role: "Asesor Inmobiliario", phone: "+58 412.683.3220", phone2: "+58 261.614.7172", instagram: "@martacontrerasregaladogroup", email: "info@regaladogroup.com", sede: "Maracaibo" },
  { name: "Jonathan Chacín", role: "Asesor Inmobiliario", phone: "+58 414.363.2334", phone2: "+58 261.614.7172", instagram: "@lusineregaladogroup", email: "info@regaladogroup.com", sede: "Maracaibo" },
  { name: "Zoret Méndez", role: "Asesor Inmobiliario", phone: "+58 412.065.2296", phone2: "+58 261.614.7172", instagram: "@zoretregaladogroup", email: "info@regaladogroup.com", sede: "Maracaibo" },
  { name: "Oswaldo Melendez", role: "Asesor Inmobiliario", phone: "+58 412.251.3298", phone2: "+58 261.614.7172", instagram: "@oswaldomelendez_regaladogroup", email: "info@regaladogroup.com", sede: "Maracaibo" },
  { name: "Sofía Urdaneta", role: "Asesor Inmobiliario", phone: "+58 412.247.9268", phone2: "+58 261.614.7172", instagram: "@sofiaregaladogroup", email: "info@regaladogroup.com", sede: "Maracaibo" },
  { name: "Yisel Portillo", role: "Asesor Inmobiliario", phone: "+58 424.653.8948", phone2: "+58 261.614.7172", instagram: "@yiselregaladogroup", email: "info@regaladogroup.com", sede: "Maracaibo" },
  { name: "Wilsandra Morillo", role: "Asesor Inmobiliario", phone: "+58 424.709.0317", phone2: "+58 261.614.7172", instagram: "@wilsandraregaladogroup", email: "info@regaladogroup.com", sede: "Maracaibo" },
  { name: "Marianny Alarcón", role: "Asesor Inmobiliario", phone: "+58 412.160.5952", phone2: "+58 261.614.7172", instagram: "@asesora_mariannyalarcon", email: "info@regaladogroup.com", sede: "Maracaibo" },
  { name: "Mario Trabucco", role: "Asesor Inmobiliario", phone: "+58 414.604.5148", phone2: "+58 261.614.7172", instagram: "@mtrabuccoregaladogroup", email: "info@regaladogroup.com", sede: "Maracaibo" },
  { name: "Azaye Hernandez", role: "Asesor Inmobiliario", phone: "+58 414.613.7009", phone2: "+58 261.614.7172", instagram: "@azayehernandeze", email: "info@regaladogroup.com", sede: "Maracaibo" },
  { name: "Ciro Parente", role: "Asesor Inmobiliario", phone: "+58 414.660.6012", phone2: "+58 261.614.7172", instagram: "@ciroregaladogroup", email: "info@regaladogroup.com", sede: "Maracaibo" },
  { name: "Cesar Morales", role: "Asesor Inmobiliario", phone: "+58 412.249.4577", phone2: "+58 261.614.7172", instagram: "@cmoralesregaladogroup", email: "info@regaladogroup.com", sede: "Maracaibo" },
  { name: "Leidy Ramirez", role: "Asesor Inmobiliario", phone: "+58 412.162.3532", phone2: "+58 261.614.7172", instagram: "@lei_ramirez", email: "info@regaladogroup.com", sede: "Maracaibo" },
  { name: "Francisco Ramirez", role: "Asesor Inmobiliario", phone: "+58 412.270.1861", phone2: "+58 261.614.7172", instagram: "@ramirez_regaladogroup", email: "info@regaladogroup.com", sede: "Maracaibo" },
  { name: "Sarahi Berardinelli", role: "Asesor Inmobiliario", phone: "+58 424.622.4005", phone2: "+58 261.614.7172", instagram: "@sarahiregaladogroup", email: "info@regaladogroup.com", sede: "Maracaibo" },
  { name: "Emiluz Villalobos", role: "Asesor Inmobiliario", phone: "+58 412.792.5873", phone2: "+58 261.614.7172", instagram: "@emiluzvillalobos", email: "info@regaladogroup.com", sede: "Maracaibo" },
  { name: "Linda Yicon", role: "Asesor Inmobiliario", phone: "+58 414.681.1313", phone2: "+58 261.614.7172", instagram: "@luisvregaladogroup", email: "info@regaladogroup.com", sede: "Maracaibo" },
  { name: "Candida Barbati", role: "Asesor Inmobiliario", phone: "+58 414.612.3235", phone2: "+58 261.614.7172", instagram: "@candidaregaladogroup", email: "info@regaladogroup.com", sede: "Maracaibo" },
  { name: "Catherine Becker", role: "Asesor Inmobiliario", phone: "+58 414.162.2963", phone2: "+58 261.614.7172", instagram: "@catherinebeckerregaladogroup", email: "info@regaladogroup.com", sede: "Maracaibo" },
  { name: "Angel Parra", role: "Asesor Inmobiliario", phone: "+58 412.682.4832", phone2: "+58 261.614.7172", instagram: "@angelparra869", email: "info@regaladogroup.com", sede: "Maracaibo" },
  { name: "Janina Morales", role: "Asesor Inmobiliario", phone: "+58 412.900.7689", phone2: "+58 261.614.7172", instagram: "@janinabeatriz_regaladogroup", email: "info@regaladogroup.com", sede: "Maracaibo" },
  { name: "Herminia Perdomo", role: "Asesor Inmobiliario", phone: "+58 412.671.8628", phone2: "+58 261.614.7172", instagram: "@herminiaregaladogroup", email: "info@regaladogroup.com", sede: "Maracaibo" },
  { name: "Lusine Roldan", role: "Asesor Inmobiliario", phone: "+58 424.669.3233", phone2: "+58 261.614.7172", instagram: "@lusine09", email: "info@regaladogroup.com", sede: "Maracaibo" },
  { name: "Lendy Viveros", role: "Asesor Inmobiliario", phone: "+58 414.620.4135", phone2: "+58 261.614.7172", instagram: "@lendyregaladogroup", email: "info@regaladogroup.com", sede: "Maracaibo" },
  { name: "Fabiola Soriano", role: "Asesor Inmobiliario", phone: "+58 414.631.1958", phone2: "+58 261.614.7172", instagram: "@fabiolasoriano.inmuebles", email: "info@regaladogroup.com", sede: "Maracaibo" },
  { name: "Herminio Castillo", role: "Asesor Inmobiliario", phone: "+58 414.636.3156", phone2: "+58 261.614.7172", instagram: "@herminio.regaladogroup", email: "info@regaladogroup.com", sede: "Maracaibo" },
  { name: "Hider Negrón", role: "Asesor Inmobiliario", phone: "+58 414.630.1212", phone2: "+58 261.614.7172", instagram: "@negronregaladogroup", email: "info@regaladogroup.com", sede: "Maracaibo" },
  { name: "Liria Lugo", role: "Asesor Inmobiliario", phone: "+58 412.164.8588", phone2: "+58 261.614.7172", instagram: "@liria_regaladogroup", email: "info@regaladogroup.com", sede: "Maracaibo" },
  { name: "Nila Pérez", role: "Asesor Inmobiliario", phone: "+58 414.631.8153", phone2: "+58 261.614.7172", instagram: "@nilaperezmregaladogroup", email: "info@regaladogroup.com", sede: "Maracaibo" },
  { name: "Daniela Dueñas", role: "Asesor Inmobiliario", phone: "+58 414.606.7640", phone2: "+58 261.614.7172", instagram: "@danieladuenasregalado821", email: "info@regaladogroup.com", sede: "Maracaibo" },
  { name: "Rosario Briceño", role: "Asesor Inmobiliario", phone: "+58 414.063.1417", phone2: "+58 261.614.7172", instagram: "@rosariobriceno11", email: "info@regaladogroup.com", sede: "Maracaibo" },
  { name: "Bassel Tahmouch", role: "Asesor Inmobiliario", phone: "+58 424.625.1676", phone2: "+58 261.614.7172", instagram: "@basselregaladogroup", email: "info@regaladogroup.com", sede: "Maracaibo" },
  { name: "Rosa Soto", role: "Asesor Inmobiliario", phone: "+58 412.710.0815", phone2: "+58 261.614.7172", instagram: "@rosasotoregaladogroup", email: "info@regaladogroup.com", sede: "Maracaibo" },
  { name: "Angel Ynciarte", role: "Asesor Inmobiliario", phone: "+58 414.744.0646", phone2: "+58 261.614.7172", instagram: "@avisregaladogroup", email: "info@regaladogroup.com", sede: "Maracaibo" },
  { name: "Luis Collantes", role: "Asesor Inmobiliario", phone: "+58 414.063.3631", phone2: "+58 261.614.7172", instagram: "@luiscollantes.realtor", email: "info@regaladogroup.com", sede: "Maracaibo" },
  { name: "Lina Chourio", role: "Asesor Inmobiliario", phone: "+58 412.927.6363", phone2: "+58 261.614.7172", instagram: "@linachouriov", email: "info@regaladogroup.com", sede: "Maracaibo" },
  { name: "Marien Olano", role: "Asesor Inmobiliario", phone: "+58 414.690.4395", phone2: "+58 261.614.7172", instagram: "@marienolanorealtorrg", email: "info@regaladogroup.com", sede: "Maracaibo" },
  { name: "Ana Paspirgelis", role: "Asesor Inmobiliario", phone: "+58 412.690.1379", phone2: "+58 261.614.7172", instagram: "@anamregaladogroup", email: "info@regaladogroup.com", sede: "Maracaibo" },
  { name: "Mariana Osorio", role: "Asesor Inmobiliario", phone: "+58 424.606.8791", phone2: "+58 261.614.7172", instagram: "@marianaosorioregaladogroup", email: "info@regaladogroup.com", sede: "Maracaibo" },
  { name: "Alex Torres", role: "Asesor Inmobiliario", phone: "+58 414.360.0949", phone2: "+58 261.614.7172", instagram: "@inmobiliariasunidas", email: "info@regaladogroup.com", sede: "Maracaibo" },
  { name: "Henry Carrasquero", role: "Asesor Inmobiliario", phone: "+58 414.606.0515", phone2: "+58 261.614.7172", instagram: "@henryregalado2023", email: "info@regaladogroup.com", sede: "Maracaibo" },
  { name: "Francelys Urdaneta", role: "Asesor Inmobiliario", phone: "+58 424.676.8674", phone2: "+58 261.614.7172", instagram: "@franregaladogroup", email: "info@regaladogroup.com", sede: "Maracaibo" },
  { name: "Daniel Aguado", role: "Asesor Inmobiliario", phone: "+58 412.711.0161", phone2: "+58 261.614.7172", instagram: "@danielaguado78", email: "info@regaladogroup.com", sede: "Maracaibo" },
  { name: "Lucy Guitian", role: "Asesor Inmobiliario", phone: "+58 414.618.4608", phone2: "+58 261.614.7172", instagram: "@lucyguitianrealtor", email: "info@regaladogroup.com", sede: "Maracaibo" },
  { name: "Lizzeth Rodriguez", role: "Asesor Inmobiliario", phone: "+58 412.966.9619", phone2: "+58 261.614.7172", instagram: "@lizz.regaladogroup", email: "info@regaladogroup.com", sede: "Maracaibo" },
  { name: "Zuleiny Cortéz", role: "Asesor Inmobiliario", phone: "+58 424.625.9755", phone2: "+58 261.614.7172", instagram: "@zulec573p", email: "info@regaladogroup.com", sede: "Maracaibo" },
  { name: "Wendy Arías", role: "Asesor Inmobiliario", phone: "+58 414.642.9618", phone2: "+58 261.614.7172", instagram: "@wendyregaladogroup", email: "info@regaladogroup.com", sede: "Maracaibo" },
  { name: "Johana Pérez", role: "Asesor Inmobiliario", phone: "+58 424.689.6321", phone2: "+58 261.614.7172", instagram: "@joharegaladogroup", email: "info@regaladogroup.com", sede: "Maracaibo" },
  { name: "Alejandro Fuenmayor", role: "Asesor Inmobiliario", phone: "+58 414.630.2358", phone2: "+58.261.614.7172", instagram: "@alejandro.regaladogroup", email: "info@regaladogroup.com", sede: "Maracaibo" },
  { name: "Joanna Davila", role: "Asesor Inmobiliario", phone: "+58 414.690.6294", phone2: "412.258.1700", instagram: "@joanna.regaladogroup", email: "info@regaladogroup.com", sede: "Falcón" },
  { name: "Jaime Yamarte", role: "Asesor Inmobiliario", phone: "+58 414.699.2745", phone2: "+58 412.258.1700", instagram: "@jaime.regaladogroup", email: "info@regaladogroup.com", sede: "Falcón" },
  { name: "Maria Jordan", role: "Asesor Inmobiliario", phone: "+58 426.734.0848", phone2: "+58 412.258.1700", instagram: "@gabyjordanregaladogroup", email: "info@regaladogroup.com", sede: "Falcón" },
  { name: "Kati Jimenez", role: "Asesor Inmobiliario", phone: "+58 412.666.6028", phone2: "+58 412.258.1700", instagram: "@kati.regaladogroup", email: "info@regaladogroup.com", sede: "Falcón" },
  { name: "Roberto Palencia", role: "Asesor Inmobiliario", phone: "+58 414.620.8391", phone2: "+58 412.258.1700", instagram: "@robertoregaladogroup", email: "info@regaladogroup.com", sede: "Falcón" },
  { name: "Emperatriz Galicia", role: "Asesor Inmobiliario", phone: "+58 414.698.8256", phone2: "+58 412.258.1700", instagram: "@emperatriz_regaladogroup", email: "info@regaladogroup.com", sede: "Falcón" },
  { name: "Evelyn Galicia", role: "Asesor Inmobiliario", phone: "+58 414.059.0971", phone2: "+58 412.258.1700", instagram: "@everegaladogroup", email: "info@regaladogroup.com", sede: "Falcón" },
  { name: "Rafaela Rojas", role: "Asesor Inmobiliario", phone: "+58 424.658.5459", phone2: "+58 412.258.1700", instagram: "@aurimaryraf.regaladogroup", email: "info@regaladogroup.com", sede: "Falcón" },
  { name: "Eliomar Hernandez", role: "Asesor Inmobiliario", phone: "+58 414.967.6245", phone2: "+58 412.258.1700", instagram: "@Eliomarh_regaladogroup", email: "info@regaladogroup.com", sede: "Falcón" },
  { name: "Wladimir Ramones", role: "Asesor Inmobiliario", phone: "+58 412.677.2894", phone2: "+58 412.258.1700", instagram: "@wladimir.regaladogroup", email: "info@regaladogroup.com", sede: "Falcón" },
  { name: "Roxana Lugo", role: "Asesor Inmobiliario", phone: "+58 412.690.1780", phone2: "+58 412.258.1700", instagram: "@roxana_regaladogroup", email: "info@regaladogroup.com", sede: "Falcón" },
  { name: "María Pérez", role: "Asesor Inmobiliario", phone: "+58 412.062.8433", phone2: "+58 412.258.1700", instagram: "@marialeperezregaladogroup", email: "info@regaladogroup.com", sede: "Falcón" },
  { name: "Yoelimar Castellano", role: "Asesor Inmobiliario", phone: "+58 412.665.4432", phone2: "+58 412.258.1700", instagram: "@yoelimarcast.regaladogroup", email: "info@regaladogroup.com", sede: "Falcón" },
  { name: "Delierik Colina", role: "Asesor Inmobiliario", phone: "+58 412.892.1535", phone2: "+58 412.258.1700", instagram: "@colinadelierik", email: "info@regaladogroup.com", sede: "Falcón" },
  { name: "Gabriela Vilchez", role: "Asesor Inmobiliario", phone: "+58 414.239.0187", phone2: "+58 212.989.0174", instagram: "@soygabrielatuasesor", email: "info@regaladogroup.com", sede: "Caracas" },
  { name: "Pricila Espinoza", role: "Asesor Inmobiliario", phone: "+58 414.399.0175", phone2: "+58 212.989.0174", instagram: "@pricilaregaladogroup", email: "info@regaladogroup.com", sede: "Caracas" },
  { name: "David Esteva", role: "Asesor Inmobiliario", phone: "+58 412.937.1117", phone2: "+58 212.989.0174", instagram: "@davidesteva.regaladogroup", email: "info@regaladogroup.com", sede: "Caracas" },
  { name: "Elsa Calles", role: "Asesor Inmobiliario", phone: "+58 424.208.1807", phone2: "+58 212.989.0174", instagram: "@elsaregaladogroupccs", email: "info@regaladogroup.com", sede: "Caracas" },
  { name: "Mary Hernandez", role: "Asesor Inmobiliario", phone: "+58 414.312.5551", phone2: "+58 212.989.0174", instagram: "@maryhernández.regaladogroup", email: "info@regaladogroup.com", sede: "Caracas" },
  { name: "Marianna Padrón", role: "Asesor Inmobiliario", phone: "+58 424.819.8761", phone2: "+58 212.989.0174", instagram: "@mariannapadronregaladogroup", email: "info@regaladogroup.com", sede: "Caracas" },
  { name: "Angel Rivas", role: "Asesor Inmobiliario", phone: "+58 424.136.3161", phone2: "+58 212.989.0174", instagram: "@angelrivasregaladogroup", email: "info@regaladogroup.com", sede: "Caracas" },
  { name: "Giovani Herrera", role: "Asesor Inmobiliario", phone: "+58 412.010.7905", phone2: "+58 212.989.0174", instagram: "@giovaniherreraregaladogroup", email: "info@regaladogroup.com", sede: "Caracas" },
  { name: "Laurentina Da Silva", role: "Asesor Inmobiliario", phone: "+58 414.120.3191", phone2: "+58 212.989.0174", instagram: "@laurentinadasilvaregaladogroup", email: "info@regaladogroup.com", sede: "Caracas" },
  { name: "Franyuly Rodriguez", role: "Asesor Inmobiliario", phone: "+58 412.552.3221", phone2: "+58 212.989.0174", instagram: "@rodriguezfranyuly", email: "info@regaladogroup.com", sede: "Caracas" },
  { name: "José Godinho", role: "Asesor Inmobiliario", phone: "+58 414.138.0708", phone2: "+58 212.989.0174", instagram: "@josegodinhoregaladogroup", email: "info@regaladogroup.com", sede: "Caracas" },
  { name: "Barbara Regalado", role: "Asesor Inmobiliario", phone: "+58 412.312.6489", phone2: "+58 212.989.0174", instagram: "@barbararegaladogroup", email: "info@regaladogroup.com", sede: "Caracas" },
  { name: "Yaimar Davalos", role: "Asesor Inmobiliario", phone: "+58 416.625.3983", phone2: "+58 212.989.0174", instagram: "@yaimar.regaladogroup", email: "info@regaladogroup.com", sede: "Caracas" },
  { name: "Yelitza Ramirez", role: "Asesor Inmobiliario", phone: "+58 424.143.8158", phone2: "+58 212.989.0174", instagram: "@yelitzaramirezregaladogroup", email: "info@regaladogroup.com", sede: "Caracas" },
  { name: "Sandra Flores", role: "Asesor Inmobiliario", phone: "+58 412.988.6898", phone2: "+58 212.989.0174", instagram: "@sandrafloresregaladogroup", email: "info@regaladogroup.com", sede: "Caracas" },
  { name: "Stevens Prada", role: "Asesor Inmobiliario", phone: "+58 426.511.6770", phone2: "+58 212.989.0174", instagram: "@stevens.regaladogroup", email: "info@regaladogroup.com", sede: "Caracas" },
  { name: "Erick Viteri", role: "Asesor Inmobiliario", phone: "+58 426.913.6149", phone2: "+58 212.989.0174", instagram: "@erick.regaladogroup", email: "info@regaladogroup.com", sede: "Caracas" },
  { name: "Omar Rodriguez", role: "Asesor Inmobiliario", phone: "+58 424.341.4300", phone2: "+58 212.989.0174", instagram: "@omarrodriguez.regaladogroupccs", email: "info@regaladogroup.com", sede: "Caracas" },
  { name: "Joice Maciel", role: "Asesor Inmobiliario", phone: "+58 412.229.0384", phone2: "+58 212.989.0174", instagram: "@Correo", email: "info@regaladogroup.com", sede: "Caracas" },
  { name: "Mariela Morillo", role: "Asesor Inmobiliario", phone: "+58 424.635.1094", phone2: "+58 212.989.0174", instagram: "@marielam_rg", email: "info@regaladogroup.com", sede: "Caracas" },
  { name: "Mary Fernández", role: "Asesor Inmobiliario", phone: "+58 426.779.8371", phone2: "+58 212.989.0174", instagram: "@maryfernandez.regaladogroup", email: "info@regaladogroup.com", sede: "Caracas" },
  { name: "Argelia Alvarado", role: "Asesor Inmobiliario", phone: "+58 414.138.9602", phone2: "+58 212.989.0174", instagram: "@marienolanorealtorrg", email: "info@regaladogroup.com", sede: "Caracas" },
];

export function formatPrice(price: number, currency: string, isMonthly: boolean): string {
  const formatted = new Intl.NumberFormat("en-US").format(price);
  return `${currency} ${formatted}${isMonthly ? "/mes" : ""}`;
}
