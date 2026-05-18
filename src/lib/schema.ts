import { pgTable, serial, text, integer, boolean } from "drizzle-orm/pg-core";

// ─── PERSONAL ────────────────────────────────────────────────
export const personal = pgTable("personal", {
  id:              serial("id").primaryKey(),
  name:            text("name").notNull(),
  short_name:      text("short_name").notNull(),
  title:           text("title").notNull(),
  tagline:         text("tagline").notNull(),
  bio:             text("bio").notNull(),
  location:        text("location").notNull(),
  email:           text("email").notNull(),
  phone:           text("phone").notNull(),
  cv_url:          text("cv_url").notNull(),
  cv_download_name:text("cv_download_name").notNull(),
  hero_image:      text("hero_image").notNull(),
});

// ─── SOCIALS ─────────────────────────────────────────────────
export const socials = pgTable("socials", {
  id:        serial("id").primaryKey(),
  github:    text("github").notNull(),
  linkedin:  text("linkedin").notNull(),
  instagram: text("instagram").notNull(),
});

// ─── HERO TITLES (typewriter) ────────────────────────────────
export const hero_titles = pgTable("hero_titles", {
  id:       serial("id").primaryKey(),
  title:    text("title").notNull(),
  sort_order: integer("sort_order").notNull().default(0),
});

// ─── HERO BADGES ─────────────────────────────────────────────
export const hero_badges = pgTable("hero_badges", {
  id:         serial("id").primaryKey(),
  label:      text("label").notNull(),
  value:      text("value").notNull(),
  sort_order: integer("sort_order").notNull().default(0),
});

// ─── SKILL CATEGORIES ────────────────────────────────────────
export const skill_categories = pgTable("skill_categories", {
  id:         serial("id").primaryKey(),
  title:      text("title").notNull(),
  color:      text("color").notNull(),       // tailwind gradient class
  bg:         text("bg").notNull(),
  border:     text("border").notNull(),
  icon_color: text("icon_color").notNull(),
  sort_order: integer("sort_order").notNull().default(0),
});

// ─── SKILLS ──────────────────────────────────────────────────
export const skills = pgTable("skills", {
  id:          serial("id").primaryKey(),
  category_id: integer("category_id").notNull().references(() => skill_categories.id, { onDelete: "cascade" }),
  name:        text("name").notNull(),
  icon_key:    text("icon_key").notNull(),   // maps to lucide icon name
  sort_order:  integer("sort_order").notNull().default(0),
});

// ─── EXPERIENCES ─────────────────────────────────────────────
export const experiences = pgTable("experiences", {
  id:          serial("id").primaryKey(),
  title:       text("title").notNull(),
  subtitle:    text("subtitle").notNull(),
  duration:    text("duration").notNull(),
  location:    text("location").notNull(),
  description: text("description").array().notNull(), // string[]
  sort_order:  integer("sort_order").notNull().default(0),
});

// ─── EDUCATIONS ──────────────────────────────────────────────
export const educations = pgTable("educations", {
  id:         serial("id").primaryKey(),
  title:      text("title").notNull(),
  subtitle:   text("subtitle").notNull(),
  duration:   text("duration").notNull(),
  location:   text("location").notNull(),
  sort_order: integer("sort_order").notNull().default(0),
});

// ─── PROJECTS ────────────────────────────────────────────────
export const projects = pgTable("projects", {
  id:         serial("id").primaryKey(),
  title:      text("title").notNull(),
  category:   text("category").notNull(),
  description:text("description").notNull(),
  tech:       text("tech").array().notNull(),  // string[]
  github:     text("github").notNull(),
  live:       text("live").notNull(),
  image:      text("image").notNull(),
  gradient:   text("gradient").notNull(),
  sort_order: integer("sort_order").notNull().default(0),
});

// ─── CONTACT INFO ────────────────────────────────────────────
export const contact_info = pgTable("contact_info", {
  id:         serial("id").primaryKey(),
  icon_key:   text("icon_key").notNull(),
  title:      text("title").notNull(),
  value:      text("value").notNull(),
  href:       text("href").notNull(),
  color:      text("color").notNull(),
  sort_order: integer("sort_order").notNull().default(0),
});
