export interface Launch {
  mission_name: string;
  rocket: {
    rocket_name: string;
  };
  launch_site: {
    site_name_long: string;
  };
  launch_date_utc: string;
  launch_success: boolean | null;
}

export interface LaunchesData {
  launches: Launch[];
}
