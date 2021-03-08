const express = require('express');
const Provider = require('oidc-provider');
const { JWKS: { KeyStore } } = require('jose');
const cors = require('cors');

const app = express();

const keystore = new KeyStore();
keystore.generateSync('RSA', 2048, { alg: 'RS256', use: 'sig' });
console.log('this is the full private JWKS:\n', keystore.toJWKS(true));
console.log('this is the full public JWKS:\n', keystore.toJWKS(false));

const configuration = {
    features: {
        introspection: { enabled: true },
        clientCredentials: { enabled: true },
        userinfo: { enabled: true },
        jwtUserinfo: { enabled: true },
        jwtIntrospection: { enabled: true },
        jwtResponseModes: { enabled: true },
    },
    jwks: {
        keys: [
            keystore.toJWKS(true).keys[0]
        ]
    },
    formats: {
        AccessToken: 'jwt'
    },
    clients: [{
        client_id: 'my_client_id',
        client_secret: 'my_client_secret',
        grant_types: ['client_credentials'],
        redirect_uris: [],
        response_types: [],
        scopes: ['offline_access', 'openid']
    }]
};

const oidc = new Provider('http://localhost:3000', configuration);

app.use(cors());
app.use('/', oidc.callback());
app.listen(3000, () => {
    console.log('oidc-provider listening on port 3000, check http://localhost:3000/.well-known/openid-configuration');
});

// const server = oidc.listen(3000, () => {
//     console.log('oidc-provider listening on port 3000, check http://localhost:3000/.well-known/openid-configuration');
// });