/*
Path: src/content/siteContent.hugest.ts

Contenido real para HUGEST Sociedad Anónima.
Mantiene la misma estructura que SiteContent.
*/

import type { SiteContent } from "../types/domain";

export const siteContent = {
  header: {
    brandShort: "HUGEST",
    brandFull: "HUGEST Sociedad Anónima",
    menuTitle: "Menú",
    menu: {
      products: "Servicios",
      industries: "Clientes",
      sustainability: "Seguridad y ambiente",
      about: "Sobre nosotros",
      contact: "Contacto",
      locationSubItem: "Zona de trabajo",
      quoteCta: "Pedir presupuesto",
    },
    whatsappPrefilledMessage:
      "Hola, soy de Zona Norte (Buenos Aires). Quiero pedir presupuesto: (1) poda/extracción en altura o (2) movimiento de suelos / entoscado / nivelación / platea o (3) alquiler de maquinaria. ¿Cómo seguimos?",
  },

  hero: {
    ariaLabel: "Carrusel principal",
    imageAlt: "Trabajo de poda en altura en planta urbana",
    badge: "Zona Norte • Buenos Aires",
    title: "Poda en altura y movimiento de suelos, con cuadrilla propia",
    description:
      "Poda técnica y extracción de árboles, más preparación de terrenos: entoscados, nivelación y plateas. También alquilamos bobcats, retroexcavadoras e hidrogrúas.",
    prevSlideAria: "Imagen anterior",
    nextSlideAria: "Siguiente imagen",
    goToSlidePrefix: "Ir a imagen",
  },

  products: {
    sectionTitle: "Servicios",
    seeAllLabel: "Ver todos",
    categories: [
      {
        // Nota: el type actual solo permite "onda" | "higiene"
        id: "onda",
        title: "Poda y extracción de árboles en altura",
        description:
          "Trabajos de poda técnica y extracción controlada, con foco en seguridad, orden y resolución rápida. Operamos en Zona Norte de la provincia de Buenos Aires con cuadrilla propia.",
        features: [
          "Poda sanitaria, de formación y despeje",
          "Extracción/tala controlada (cuando corresponde)",
          "Intervenciones post-tormenta y urgencias",
          "Retiro de material y limpieza del área",
          "Trabajo con cuadrilla propia",
        ],
      },
      {
        id: "higiene",
        title: "Movimiento de suelos y alquiler de maquinaria",
        description:
          "Preparación y mejoramiento de terrenos: entoscados, venta de tosca y tierra, nivelación y plateas. Además, alquiler de maquinaria para obra y mantenimiento.",
        features: [
          "Entoscados y mejoramiento de calles/entradas",
          "Venta de tierra y tosca",
          "Nivelación y preparación de terrenos",
          "Ejecución de plateas",
          "Alquiler de bobcats, retroexcavadoras e hidrogrúas",
        ],
      },
    ],
  },

  industries: {
    title: "¿Para quién trabajamos?",
    items: [
      "Particulares",
      "Consorcios",
      "Countries y barrios cerrados",
      "Municipios",
      "Constructoras y obras",
      "Industrias y predios logísticos",
    ],
  },

  sustainability: {
    title: "Seguridad y cuidado del entorno",
    cards: [
      {
        title: "Trabajo seguro en altura",
        description:
          "Planificación previa, señalización y ejecución con criterios de seguridad para minimizar riesgos en entornos urbanos y de obra.",
      },
      {
        title: "Proceso ordenado y controlado",
        description:
          "Intervenciones limpias y organizadas: se cuida el entorno de trabajo y se evita el desorden durante y después del servicio.",
      },
      {
        title: "Gestión responsable del material",
        description:
          "Retiro del material generado y coordinación para su disposición/gestión, según el tipo de trabajo y el lugar de intervención.",
      },
    ],
  },

  about: {
    badge: "HUGEST S.A.",
    title: "Cuadrilla propia, respuesta rápida y trabajo bien hecho",
    description:
      "Somos una empresa enfocada en servicios de poda y extracción en altura, movimiento de suelos y alquiler de maquinaria. Trabajamos principalmente en la Zona Norte de la provincia de Buenos Aires, con equipos y personal propios para asegurar continuidad y calidad.",
  },

  location: {
    title: "Zona de trabajo",
    address:
      "Zona Norte • Provincia de Buenos Aires (GBA Norte y alrededores).",
    mapTitle: "Cobertura de servicio",
  },

  stats: {
    label: "Experiencia y operación",
    recycledTotal: "Cuadrilla",
    recycledUnit: "propia",
    growth: "Zona Norte",
    growthReference: "Buenos Aires",
  },

  floatingActions: {
    whatsappLabel: "WhatsApp",
    phoneAriaLabel: "Llamar a HUGEST",
  },
} as const satisfies SiteContent;