import { VolunteerProfile as TVolunteerProfile } from "../api/volunteerProfile/VolunteerProfile";

export const VOLUNTEERPROFILE_TITLE_FIELD = "fullName";

export const VolunteerProfileTitle = (record: TVolunteerProfile): string => {
  return record.fullName?.toString() || String(record.id);
};
