import { Tag as TTag } from "../api/tag/Tag";

export const TAG_TITLE_FIELD = "title";

export const TagTitle = (record: TTag): string => {
  return record.title || String(record.id);
};
