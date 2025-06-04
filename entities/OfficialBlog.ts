import { Extendable } from "../genericTypes";
import { BaseEntity } from "./BaseEntity";
import { Media } from "./media";
import { User } from "./User";

interface Faq {
  question: string;
  answer: string;
}

interface SeoMetadata {
  title: string;
  description: string;
  keywords: string[];
}

export interface OfficialBlog extends BaseEntity {
  title: string;
  description: string;
  media: Media & {
    alt: string;
  };
  content: string;
  tableOfContents: string;
  createdBy: Extendable<User>;
  faq: Faq[];
  seo: SeoMetadata;
  slug: string;
  published: boolean;
  scheduledAt?: Date;
  relatedBlogs: Extendable<OfficialBlog>[];
}
