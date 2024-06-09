
import { Issue } from "./interface";

export function getKeys(data: Issue[]): string[] {
    const keys = data[0] && Object.keys(data[0]);
    const filteredKeys = keys?.filter(
      (el: string) =>
        el !== "_id" && el !== "__v" && el !== "createdAt" && el !== "updatedAt"
    );
    return filteredKeys || [];
  }
  