module.exports = {
  branches: 'main',
  repositoryUrl: 'https://github.com/uangpintar/nestjs-microservices',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/github',
  ],
};
