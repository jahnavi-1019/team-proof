import { AntiGamingCheck } from './types.js';

export class AntiGamingFilter {
  private static GENERATED_PATTERNS = [
    /package-lock\.json$/,
    /pnpm-lock\.yaml$/,
    /yarn\.lock$/,
    /composer\.lock$/,
    /\.min\.(?:js|css)$/,
    /(?:^|\/)dist\//,
    /(?:^|\/)build\//,
    /(?:^|\/)node_modules\//,
    /(?:^|\/)vendor\//
  ];

  /**
   * Inspects changed files and lines to prevent vanity commits or vendor bundle inflation.
   */
  public static auditContribution(
    filesChanged: string[],
    linesAdded: number,
    linesDeleted: number
  ): AntiGamingCheck {
    const isGenerated = filesChanged.some(file =>
      this.GENERATED_PATTERNS.some(pattern => pattern.test(file))
    );

    if (isGenerated && (linesAdded > 1000 || linesDeleted > 1000)) {
      return {
        filesChanged,
        linesAdded,
        linesDeleted,
        isFlaggedAsVanityOrGenerated: true,
        reason: 'Commit contains large lockfile, vendor bundle, or build artifact modifications.'
      };
    }

    return {
      filesChanged,
      linesAdded,
      linesDeleted,
      isFlaggedAsVanityOrGenerated: false
    };
  }
}
