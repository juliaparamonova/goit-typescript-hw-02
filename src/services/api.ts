import axios from 'axios';

interface FetchImagesParams {
  query: string;
  page?: number;
}

interface Image {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
}

interface FetchImagesResponse {
  results: Image[];
  total: number;
  total_pages: number;
}

export const fetchImages = async ({
  query,
  page = 1,
}: FetchImagesParams): Promise<FetchImagesResponse> => {
  const params = {
    headers: {
      'Accept-Version': 'v1',
    },
    params: {
      query,
      client_id: 'L1W1xX9WwjYLX3dsnsGVoFO8nd8ofzU-O_PQmtXy9SQ',
      page,
      perPage: 9,
    },
  };
  const { data } = await axios.get<FetchImagesResponse>(
    'https://api.unsplash.com/search/photos',
    params
  );
  return data;
};
