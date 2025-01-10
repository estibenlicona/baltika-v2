export interface PositionsQuery {
    teamId: number;
    teamName: string;
    assistant: string;
    emblem: string;
    matches_played: number;
    wins: number;
    losses: number;
    draws: number;
    goals_for: number;
    goals_against: number;
    goal_difference: number;
    points: number;
}
