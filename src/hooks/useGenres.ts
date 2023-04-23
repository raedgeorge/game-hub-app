import { useQuery } from "@tanstack/react-query";
import APIClient, {FetchResponse} from "../services/api-client";
import genres from "../data/genres";

const apiClient = new APIClient<Genre>('/genres');

const useGenres = () =>
  useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: genres,
  });

export default useGenres;

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
