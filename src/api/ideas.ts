import api from "@/lib/axios";
import type { Idea } from "@/types";

//get all ideas
export const fetchIdeas = async (limit?: number): Promise<Idea[]> => {
  const response = await api.get("/ideas", {
    params: limit ? { _limit: limit } : {},
  });
  return response.data;
};

//get single idea
export const fetchIdea = async (ideaId: string): Promise<Idea> => {
  const response = await api.get(`/ideas/${ideaId}`);
  return response.data;
};
