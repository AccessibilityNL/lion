export default {
  coverage: process.argv.includes('--coverage')
    ? {
        thresholds: {
          statements: 80,
          branches: 70,
          functions: 70,
          lines: 80,
        },
      }
    : undefined,
};
