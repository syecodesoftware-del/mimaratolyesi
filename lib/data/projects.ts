export interface Project {
  slug: string;
  title: string;
  status: "completed" | "in-the-works";
  beds: number;
  baths: number;
  cars: number;
  coverImage: string;
  images?: string[];
  description?: string;
}

export const projects: Project[] = [
  {
    slug: "freshwater-konak",
    title: "Freshwater Konak",
    status: "in-the-works",
    beds: 4,
    baths: 3,
    cars: 2,
    coverImage: "/assets/images/proj-1.jpg",
    images: ["/assets/images/proj-1.jpg", "/assets/images/sticky-1.jpg", "/assets/images/split-2.jpg", "/assets/images/proj-7.jpg"],
  },
  {
    slug: "freshwater-konak-ii",
    title: "Freshwater Konak II",
    status: "in-the-works",
    beds: 5,
    baths: 4,
    cars: 2,
    coverImage: "/assets/images/proj-2.jpg",
    images: ["/assets/images/proj-2.jpg", "/assets/images/sticky-3.jpg", "/assets/images/proj-8.jpg", "/assets/images/split-1.jpg"],
  },
  {
    slug: "melrose-evi",
    title: "Melrose Evi",
    status: "in-the-works",
    beds: 5,
    baths: 3,
    cars: 2,
    coverImage: "/assets/images/proj-3.jpg",
    images: ["/assets/images/proj-3.jpg", "/assets/images/proj-9.jpg", "/assets/images/sticky-2.jpg", "/assets/images/split-2.jpg"],
  },
  {
    slug: "cadde-evi",
    title: "Cadde Evi",
    status: "completed",
    beds: 5,
    baths: 4,
    cars: 2,
    coverImage: "/assets/images/proj-4.jpg",
    images: ["/assets/images/proj-4.jpg", "/assets/images/proj-10.jpg", "/assets/images/split-1.jpg", "/assets/images/proj-1.jpg"],
  },
  {
    slug: "nehir-kenar-konut",
    title: "Nehir Kenarı Konut",
    status: "completed",
    beds: 5,
    baths: 5,
    cars: 2,
    coverImage: "/assets/images/proj-5.jpg",
    images: ["/assets/images/proj-5.jpg", "/assets/images/sticky-1.jpg", "/assets/images/proj-11.jpg", "/assets/images/split-2.jpg"],
  },
  {
    slug: "casa-willoughby",
    title: "Casa Willoughby",
    status: "completed",
    beds: 5,
    baths: 5,
    cars: 2,
    coverImage: "/assets/images/proj-6.jpg",
    images: ["/assets/images/proj-6.jpg", "/assets/images/proj-12.jpg", "/assets/images/sticky-3.jpg", "/assets/images/split-1.jpg"],
  },
  {
    slug: "gol-evi",
    title: "Göl Evi",
    status: "completed",
    beds: 5,
    baths: 4,
    cars: 3,
    coverImage: "/assets/images/proj-7.jpg",
    images: ["/assets/images/proj-7.jpg", "/assets/images/proj-2.jpg", "/assets/images/sticky-2.jpg", "/assets/images/split-2.jpg"],
  },
  {
    slug: "kopru-evi",
    title: "Köprü Evi",
    status: "in-the-works",
    beds: 5,
    baths: 4,
    cars: 2,
    coverImage: "/assets/images/proj-8.jpg",
    images: ["/assets/images/proj-8.jpg", "/assets/images/split-1.jpg", "/assets/images/proj-3.jpg", "/assets/images/sticky-1.jpg"],
  },
  {
    slug: "willah-konut",
    title: "Willah Konut",
    status: "completed",
    beds: 4,
    baths: 3,
    cars: 2,
    coverImage: "/assets/images/proj-9.jpg",
    images: ["/assets/images/proj-9.jpg", "/assets/images/proj-4.jpg", "/assets/images/split-2.jpg", "/assets/images/sticky-3.jpg"],
  },
  {
    slug: "park-rezidans",
    title: "Park Rezidans",
    status: "completed",
    beds: 6,
    baths: 3.5,
    cars: 2,
    coverImage: "/assets/images/proj-10.jpg",
    images: ["/assets/images/proj-10.jpg", "/assets/images/proj-5.jpg", "/assets/images/sticky-2.jpg", "/assets/images/split-1.jpg"],
  },
  {
    slug: "soho-evi",
    title: "Soho Evi",
    status: "completed",
    beds: 5,
    baths: 3.5,
    cars: 2,
    coverImage: "/assets/images/proj-11.jpg",
    images: ["/assets/images/proj-11.jpg", "/assets/images/split-2.jpg", "/assets/images/proj-6.jpg", "/assets/images/sticky-1.jpg"],
  },
  {
    slug: "jakaranda-evi",
    title: "Jakaranda Evi",
    status: "completed",
    beds: 4,
    baths: 4,
    cars: 2,
    coverImage: "/assets/images/proj-12.jpg",
    images: ["/assets/images/proj-12.jpg", "/assets/images/proj-1.jpg", "/assets/images/sticky-3.jpg", "/assets/images/split-1.jpg"],
  },
];
