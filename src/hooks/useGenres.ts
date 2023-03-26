import useData from "./useData";
const useGenres = () => useData<Genre>("/genres");

export default useGenres;

export interface Genre {
  id: number;
  name: string;
}
