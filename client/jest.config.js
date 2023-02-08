const {defaults} = require('jest-config');

/** @type {import('jest').Config} */
const config = {
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'mts', 'cts'],
  testEnvironment: {jest-environment-jsdom},
  testURL: 'http://localhost:3000'
};

module.exports = config;