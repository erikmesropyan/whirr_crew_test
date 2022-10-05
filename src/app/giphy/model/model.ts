export interface GiphyResponse {
  "pagination": Pagination
  "data": Array<Data>
}

interface Data {
  "type": string
  "id": string
  "url": string
  "slug": string
  "bitly_gif_url": string
  "bitly_url": string
  "embed_url": string
  "username": string
  "source": string
  "title": string
  "rating": string
  "content_url": string
  "source_tld": string
  "source_post_url": string
  "is_sticker": number
  "import_datetime": string
  "trending_datetime": string
  "images": Images
}

interface Images {
  "original": Original
}

interface Original {
  "height": string
  "width": string
  "size": string
  "url": string
  "mp4_size": string
  "mp4": string
  "webp_size": string
  "webp": string
  "frames": string
  "hash": string
}

interface Pagination {
  "total_count": number
  "count": number
  "offset": number
}
