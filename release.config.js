module.exports = {
    branches: ['main'],
    plugins: [
        
        [
            "@semantic-release/commit-analyzer",
            {
              "preset": "angular",
              "releaseRules": [
                { "type": "docs", "scope": "README", "release": "patch" },
                { "type": "refactor", "release": "patch" },
                { "type": "style", "release": "patch" },
                { "type": "maj", "release": "major" }
              ],
              "parserOpts": {
                "noteKeywords": ["BREAKING CHANGE", "BREAKING CHANGES"]
              }
            }
          ],
      '@semantic-release/release-notes-generator',
      [
        "@semantic-release/changelog",
        {
          "changelogFile": "./CHANGELOG.md"
        }
      ],
      '@semantic-release/git',
      '@semantic-release/github',
    ],
    "dryRun": false // Par défaut : 'false' si exécuté dans un environnement CI, true sinon.
  };