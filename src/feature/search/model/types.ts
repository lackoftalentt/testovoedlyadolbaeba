import type { PersonDetail } from "@/entities/person/modal";

export interface SearchPeopleResponse {
  message: string;
  result: PersonDetail[];
}