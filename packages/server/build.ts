import s from 'shelljs';
import config from './tsconfig.json';
const outDir = config.compilerOptions.outDir;

s.rm('-rf', outDir);
s.mkdir(outDir);
s.cp('.env', `${outDir}/.env`);
s.mkdir('-p', `${outDir}/api/swagger`);
s.cp('src/api/swagger/api.yaml', `${outDir}/api/swagger/api.yaml`);
