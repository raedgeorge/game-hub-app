import useData from "./useData";
// const useGenres = () => useData<Genre>("/genres");
import genres from "../data/genres";

const useGenres = () => ({ data: genres, isLoading: false, error: null });

export default useGenres;

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
