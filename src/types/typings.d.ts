type Category =
 | "business"
 | "entertainment"
 | "general"
 | "health"
 | "science"
 | "sports"
 | "technology";

type Pagination = {
  count: int
  limit: int
  offset: int
  total: int
}

type Article = {
  author: string | null
  category: string
  country: string
  description: string
  image: string | null
  language: string
  published_at: string
  source: string
  title: string
  url: string
}

type NewResponse = {
  paginition: Pagination
  data: Article[]
}