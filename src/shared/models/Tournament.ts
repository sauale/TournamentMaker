export enum TournamentStatus {
  InProgress = "In progress",
  Finished = "Finished",
}

export interface Tournament {
  name: string;
  status: TournamentStatus;
}
