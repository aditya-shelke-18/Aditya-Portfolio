import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
import {
  PERSONAL, SOCIALS, HERO_TITLES, HERO_BADGES,
  SKILL_CATEGORIES, EXPERIENCES, EDUCATIONS, PROJECTS, CONTACT_INFO,
} from "./data";

async function seed() {
  const sql = neon(process.env.DB_URI!);
  const db = drizzle(sql, { schema });

  console.log("🌱 Seeding database...");

  // personal
  await db.delete(schema.personal);
  await db.insert(schema.personal).values({
    name: PERSONAL.name,
    short_name: PERSONAL.shortName,
    title: PERSONAL.title,
    tagline: PERSONAL.tagline,
    bio: PERSONAL.bio,
    location: PERSONAL.location,
    email: PERSONAL.email,
    phone: PERSONAL.phone,
    cv_url: PERSONAL.cvUrl,
    cv_download_name: PERSONAL.cvDownloadName,
    hero_image: PERSONAL.heroImage,
  });
  console.log("✅ personal");

  // socials
  await db.delete(schema.socials);
  await db.insert(schema.socials).values({
    github: SOCIALS.github,
    linkedin: SOCIALS.linkedin,
    instagram: SOCIALS.instagram,
  });
  console.log("✅ socials");

  // hero_titles
  await db.delete(schema.hero_titles);
  await db.insert(schema.hero_titles).values(
    HERO_TITLES.map((title, i) => ({ title, sort_order: i }))
  );
  console.log("✅ hero_titles");

  // hero_badges
  await db.delete(schema.hero_badges);
  await db.insert(schema.hero_badges).values(
    HERO_BADGES.map((b, i) => ({ label: b.label, value: b.value, sort_order: i }))
  );
  console.log("✅ hero_badges");

  // skill_categories + skills
  await db.delete(schema.skills);
  await db.delete(schema.skill_categories);
  for (let i = 0; i < SKILL_CATEGORIES.length; i++) {
    const cat = SKILL_CATEGORIES[i];
    const [inserted] = await db.insert(schema.skill_categories).values({
      title: cat.title,
      color: cat.color,
      bg: cat.bg,
      border: cat.border,
      icon_color: cat.iconColor,
      sort_order: i,
    }).returning({ id: schema.skill_categories.id });

    await db.insert(schema.skills).values(
      cat.skills.map((s, j) => ({
        category_id: inserted.id,
        name: s.name,
        icon_key: s.iconKey,
        sort_order: j,
      }))
    );
  }
  console.log("✅ skill_categories + skills");

  // experiences
  await db.delete(schema.experiences);
  await db.insert(schema.experiences).values(
    EXPERIENCES.map((e, i) => ({
      title: e.title,
      subtitle: e.subtitle,
      duration: e.duration,
      location: e.location,
      description: e.description,
      sort_order: i,
    }))
  );
  console.log("✅ experiences");

  // educations
  await db.delete(schema.educations);
  await db.insert(schema.educations).values(
    EDUCATIONS.map((e, i) => ({
      title: e.title,
      subtitle: e.subtitle,
      duration: e.duration,
      location: e.location,
      sort_order: i,
    }))
  );
  console.log("✅ educations");

  // projects
  await db.delete(schema.projects);
  await db.insert(schema.projects).values(
    PROJECTS.map((p, i) => ({
      title: p.title,
      category: p.category,
      description: p.description,
      tech: p.tech,
      github: p.github,
      live: p.live,
      image: p.image,
      gradient: p.gradient,
      sort_order: i,
    }))
  );
  console.log("✅ projects");

  // contact_info
  await db.delete(schema.contact_info);
  await db.insert(schema.contact_info).values(
    CONTACT_INFO.map((c, i) => ({
      icon_key: c.iconKey,
      title: c.title,
      value: c.value,
      href: c.href,
      color: c.color,
      sort_order: i,
    }))
  );
  console.log("✅ contact_info");

  console.log("🎉 Seeding complete!");
  process.exit(0);
}

seed().catch((err) => {
  console.error("❌ Seed failed:", err);
  process.exit(1);
});
