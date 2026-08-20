import type { ImageMetadata } from 'astro';
import aboutOffice from '../assets/about-office.jpg';
import bannerAi from '../assets/banner-ai.jpg';
import bannerGis from '../assets/banner-gis.jpg';
import bannerInvoicing from '../assets/banner-invoicing.jpg';
import bannerSchool from '../assets/banner-school.jpg';
import caseEcommerce from '../assets/case-ecommerce.jpg';
import caseInvoicing from '../assets/case-invoicing.jpg';
import caseSchool from '../assets/case-school.jpg';
import caseWorkflow from '../assets/case-workflow.jpg';
import heroAutomation from '../assets/hero-automation.jpg';
import heroCustom from '../assets/hero-custom.jpg';
import heroEcommerce from '../assets/hero-ecommerce.jpg';
import heroOdoo from '../assets/hero-odoo.jpg';
import odooLaptop from '../assets/odoo-laptop.jpg';

export const photos = {
  about: aboutOffice,
  ai: bannerAi,
  gis: bannerGis,
  invoicing: bannerInvoicing,
  school: bannerSchool,
  ecommerce: heroEcommerce,
  odoo: heroOdoo,
  custom: heroCustom,
  automation: heroAutomation,
  workflow: caseWorkflow,
  caseSchool,
  caseEcommerce,
  caseInvoicing,
  odooLaptop,
} satisfies Record<string, ImageMetadata>;

export type PhotoKey = keyof typeof photos;

export const solutionPhotos: Record<string, PhotoKey> = {
  'odoo-erp': 'odoo',
  'school-erp': 'school',
  ecommerce: 'ecommerce',
  'custom-apps': 'custom',
  invoicing: 'invoicing',
  automation: 'automation',
  enterprise: 'odooLaptop',
  ai: 'ai',
  gis: 'gis',
};

export const industryPhotos: Record<string, PhotoKey> = {
  education: 'school',
  retail: 'ecommerce',
  professional: 'custom',
  government: 'about',
  mining: 'gis',
  agriculture: 'gis',
  enterprise: 'odooLaptop',
};

export const casePhotos: Record<string, PhotoKey> = {
  'case-school': 'caseSchool',
  'case-ecommerce': 'caseEcommerce',
  'case-invoicing': 'caseInvoicing',
  'case-workflow': 'workflow',
};
