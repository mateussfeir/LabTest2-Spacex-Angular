export interface LaunchLinks {
  patch: {
    small: string | null;
    large: string | null;
  };
  webcast: string | null;
  article: string | null;
  wikipedia: string | null;
}

export interface Launch {
  id: string;
  name: string;
  date_utc: string;
  success: boolean | null;
  upcoming: boolean;
  details: string | null;
  links: LaunchLinks;
}

export type LaunchStatusFilter = 'all' | 'successful' | 'failed' | 'upcoming';

export interface LaunchFilterValues {
  searchText: string;
  status: LaunchStatusFilter;
}
