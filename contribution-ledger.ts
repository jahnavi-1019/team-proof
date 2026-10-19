import { ContributionRecord, TeamMemberProfile, ContributionDimension } from './types.js';

export class ContributionLedger {
  private records: ContributionRecord[] = [];

  public recordContribution(record: ContributionRecord): void {
    this.records.push(record);
  }

  public getMemberProfile(userId: string): TeamMemberProfile {
    const userRecords = this.records.filter(r => r.authorId === userId);
    const contributionsByDimension: Record<ContributionDimension, number> = {
      ARCHITECTURE_DECISION: 0,
      CODE_QUALITY_HYGIENE: 0,
      PEER_REVIEW_LEVERAGE: 0,
      INCIDENT_RESOLUTION: 0
    };

    for (const r of userRecords) {
      contributionsByDimension[r.dimension]++;
    }

    const name = userRecords.length > 0 ? userRecords[0].authorName : userId;

    return {
      userId,
      fullName: name,
      contributionsByDimension,
      totalVerifiedImpacts: userRecords.length,
      records: userRecords
    };
  }
}
