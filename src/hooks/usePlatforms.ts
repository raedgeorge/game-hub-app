import APIClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";

const apiClient = new APIClient<Platform>(
                          '/platforms/lists/parents')

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: {
      count: platforms.results.length,
      results: platforms.results,
    },
  });

export default usePlatforms;

interface Platform {
  id: number;
  name: string;
  slug: string;
}
