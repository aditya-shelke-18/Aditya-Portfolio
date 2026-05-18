import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import {
  personal, socials, hero_titles, hero_badges,
  skill_categories, skills, experiences, educations, projects, contact_info,
} from "@/lib/schema";
import { asc, eq } from "drizzle-orm";

export async function GET() {
  const [
    personalData,
    socialsData,
    heroTitles,
    heroBadges,
    categories,
    skillsData,
    experiencesData,
    educationsData,
    projectsData,
    contactData,
  ] = await Promise.all([
    db.select().from(personal).limit(1),
    db.select().from(socials).limit(1),
    db.select().from(hero_titles).orderBy(asc(hero_titles.sort_order)),
    db.select().from(hero_badges).orderBy(asc(hero_badges.sort_order)),
    db.select().from(skill_categories).orderBy(asc(skill_categories.sort_order)),
    db.select().from(skills).orderBy(asc(skills.sort_order)),
    db.select().from(experiences).orderBy(asc(experiences.sort_order)),
    db.select().from(educations).orderBy(asc(educations.sort_order)),
    db.select().from(projects).orderBy(asc(projects.sort_order)),
    db.select().from(contact_info).orderBy(asc(contact_info.sort_order)),
  ]);

  // attach skills to their category
  const skillCategories = categories.map((cat) => ({
    ...cat,
    skills: skillsData.filter((s) => s.category_id === cat.id),
  }));

  return NextResponse.json({
    personal: personalData[0] ?? null,
    socials: socialsData[0] ?? null,
    heroTitles: heroTitles.map((t) => t.title),
    heroBadges: heroBadges.map((b) => ({ label: b.label, value: b.value })),
    skillCategories,
    experiences: experiencesData,
    educations: educationsData,
    projects: projectsData,
    contactInfo: contactData,
  });
}
