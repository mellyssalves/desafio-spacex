import { useQuery } from "@apollo/client";
import { GET_ALL_LAUNCHES } from "../graphql/queries";
import type { LaunchesData } from "../types";
import CometLoader from "./CometLoader";
import React from "react";

interface LaunchesTableProps {
  year: string;
}

const LaunchesTable = ({ year }: LaunchesTableProps) => {
  const { data, loading, error } = useQuery<LaunchesData>(GET_ALL_LAUNCHES);

  if (loading)
    return (
      <div className="flex justify-center items-center">
        <CometLoader />
      </div>
    );

  if (error) return <p>Server error, please try again later.</p>;

  const filteredLaunches = data?.launches?.filter((launch) => {
    const launchYear = new Date(launch.launch_date_utc)
      .getFullYear()
      .toString();
    return launchYear === year;
  });

  if (!filteredLaunches?.length)
    return (
      <p className="text-center text-[2rem]">
        No releases found this year, try another!
      </p>
    );

  return (
    <div className="w-full">
      <div className="text-[1.4rem] p-[1rem] grid grid-cols-3 bg-[#d0d3cf42] rounded-[1rem] shadow-lg overflow-auto scrollbar-thin scrollbar-thumb-[#d0368a] scrollbar-track-[#1a1a1a]">
        <div className="p-[1rem] bg-zinc-800 font-semibold uppercase tracking-widest">
          Mission
        </div>
        <div className="p-[1rem] bg-zinc-800 font-semibold uppercase tracking-widest">
          Rocket
        </div>
        <div className="p-[1rem] bg-zinc-800 font-semibold uppercase tracking-widest">
          Date
        </div>
        {filteredLaunches.map((launch) => (
          <React.Fragment key={launch.mission_name}>
            <div className="p-[1rem]  bg-zinc-950 px-4 py-3 border-t border-zinc-800">
              {launch.mission_name}
            </div>
            <div className="p-[1rem] bg-zinc-950 px-4 py-3 border-t border-zinc-800">
              {launch.rocket?.rocket_name || "N/A"}
            </div>
            <div className="p-[1rem]  bg-zinc-950 px-4 py-3 border-t border-zinc-800">
              {launch.launch_date_utc
                ? new Date(launch.launch_date_utc).toLocaleDateString()
                : "N/A"}
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default LaunchesTable;
