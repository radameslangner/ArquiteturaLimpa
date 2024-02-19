npm init -y

npm i -D typescript

npx tsc --init ( criar arquivo tsconfig.json)

npm i -D jest ts-jest @types/jest @types/node

npm i -D ts-node-dev (fica rodando a aplicação no modo watch )

npx ts-jest config:init (cria tsconfig.json e configura ele para typescript )

configurar tsconfig.json

{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "outDir": "dist",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
     "strict": true,
      "skipLibCheck": true
  },
    "include": ["src/**/*"]
}
configurar package.js

  "scripts": {
    "build": "tsc",
    "dev": "ts-node-dev --respawn --transpile-only src/server.ts",
    "test": "jest"
  },

   npm i bcrypt
   npm i -D @types/bcrypt