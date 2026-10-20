export type Profile = {
  name: string
  tagline: string
  bio: string
  location: string
  email: string
  avatar: string
}
export type Skill = { id: string; name: string; level: number; category: string }
export type Project = { id: string; title: string; description: string; tags: string[]; link: string; featured: boolean }
export type Post = { id: string; title: string; excerpt: string; content: string; date: string; tags: string[]; published: boolean }
export type Settings = { siteTitle: string; subtitle: string; accent: string }
export type Store = { profile: Profile; skills: Skill[]; projects: Project[]; posts: Post[]; settings: Settings }
