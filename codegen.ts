import type { CodegenConfig } from '@graphql-codegen/cli';
import { Types } from '@graphql-codegen/plugin-helpers';
import { loadEnvConfig } from '@next/env';

loadEnvConfig(process.cwd());
let schema: Types.UrlSchemaWithOptions | string = {};

if (process.env.GRAPHQL_TOKEN) {
  const url: string = (process.env.NEXT_STRAPI_API_URL as string) + '/graphql';
  schema[url] = {
    headers: {
      Authorization: `Bearer ${process.env.GRAPHQL_TOKEN}`
    }
  };
} else {
  schema = (process.env.NEXT_STRAPI_API_URL as string) + '/graphql';
}

const config: CodegenConfig = {
  overwrite: true,
  schema,
  documents: './graphql/**/!(*.{type}).{tsx,ts}',

  generates: {
    './graphql/generated.tsx': {
      plugins: [
        'typescript'
        // 'typescript-operations',
        // 'typescript-react-apollo'
      ],
      config: {
        withHooks: true
      }
    }
  },
  hooks: {
    afterOneFileWrite: ['eslint --fix'],
    afterAllFileWrite: ['prettier --write']
  },
  config: {}
};
export default config;
