const { typescript } = require('projen');
const project = new typescript.TypeScriptAppProject({
  defaultReleaseBranch: 'main',
  github: true,
  name: 'cqrs-ts',
  package: true,
  release: true,
  mutableBuilds: false,
  releaseToNpm: true,
});
project.synth();