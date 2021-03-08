var jwkToPem = require('jwk-to-pem');
var jwkPrivate = {
    e: 'AQAB',
    n: 'x3eske59LDFap320k4BJLnHF90SwFwncK4ne9tTC-OFoKBXogkYiFjVQleAoBR4nwqOMAyGGsLxV7Lnutc2mdEsERu_aKQRNjUyFyn-fq2KVaHEJHFg96h6zMb9XdiENixF7jYsWBq8xbyN1rRdopVXmWAGax2xV4iC1KGhieoE8FzL3Zfs2qXft57O5FTre4FUTMh618ffUziaGZVZhPbNQdTyewKd-JH1u4darUzlZZzbauhGlJ19l85RDoeXAAr7MwDF6QgWiuhmsMCZlhIy_X-8_QG5h7j0Ng1-q6TwpqOYvQ04H_i-Ms3WWpzZnL5ogDgLnkSZ9gXnOcP4tQw',
    d: 'fhC41JJyMhgPP4RHOGH_3oaxo5GZ6TWmHS5J6J6Xi0yK06rlBFDnAjo38EF3iaSBZJaQyvnJcrHVbIQmxmhvJ1iyH1NAAmRhz0fp1w3KEDuCSjwGkg-DMhCtGGfiExrYwGgQOmkJRrg6-g7jNL5yuOwNZNm-xQNHVF9vn1Y5x0oAw0z11LgS8ESNcgFqevmg5W8-8a5kGn8aaPkiBnBwyAavXYYnTfJPQcMhZFxiuJlEEBGwKb04zSrugjtopK5eLI_eQFlBbqSilo-vnhqx0mM6heueiZUHZ9-1Zk46qU6Az5nEhs8YusRy-788lTeFtYduaWqy4M9rVTAptKd3wQ',
    p: '54850RN74z5CpNS6Dt_gFPYUr7BiqgCDuMJEtAS2fQfD7urKRQClAwS355mtS1pUZgFqhtFnADfFnDfl6LIFKMdmljKX1R4Y_QsQNlrCF02tY3NEOHNocL2eNL4zmMfSLUi_d5e7pVdRu4ae9Y1oy1ohxOnLXUjaI4vaIcx7o2s',
    q: '3IVROnw93PjL1YGKaUj7yBEQksUrPJ2y-RBVwEiHnnD5saon9LWKyucX2-8zGLENHtnu1rfn0QBKO8UpoLpJDL5o7shkmshEDs7j2BgHbJET8BpqeUIJbAFIXC6Kh2qPbVgAa_d_GtJlL5avkOFP2kz-5Tw9fxYSrFr2uogSa4k',
    dp: '4Rjd_1yNZg40Ar-4TpVa44WD_nXcs53kbkqLNuQN8eUGls4u6n0B67k-fSlqyIF64d4mjAArvI56zq2YFWhYk5ejJgbwif_EEtgaXnxDiRu9nZuDiczGjjIGBQeQaMh2jAbX-Y3Kn6QOk9j91X4tjOCFS0JqqrgTNdLRrWF2Hxk',
    dq: 'lqq74fLLLbQLSJgWYnMMHBiUs0LllKfGhWdEv3iOuJFF-L5iSE7VQmZ8JbebuK4XYdHS3n-Ocnz5OzcthvRgPsXF2geuvRZBccCnaZiZUfMZpT3XK3wUBegmcV0XJwiGcFXlC99wx3miys3wrFNVBLkAmsz6017YaUxJMQ8RTsk',
    qi: 'UG6b2_I3d7MukmgxSeoj3aPyl5GkCv67XyQWKt6NPsqzOgo8gjsKqyKYK15QqHR0VE9Dk8KdG5-iK7buyAAFUvVRNIF5x-SGyOl9se-H-7O8RliR2J--7nqUgP7jg-cPUPyzEd-Yivs3ulJpvNWJa6gETujABEK3iRO-79CJh_A',
    kty: 'RSA',
    kid: 'uI_W6u0baIZ50ripcyFjMjglj5GGKoyXCJy3t3C1YuE',
    alg: 'RS256',
    use: 'sig'
};
var pemPrivate = jwkToPem(jwkPrivate, { private: true });
console.log(pemPrivate);

var jwkPublic = {
    e: 'AQAB',
    n: 'x3eske59LDFap320k4BJLnHF90SwFwncK4ne9tTC-OFoKBXogkYiFjVQleAoBR4nwqOMAyGGsLxV7Lnutc2mdEsERu_aKQRNjUyFyn-fq2KVaHEJHFg96h6zMb9XdiENixF7jYsWBq8xbyN1rRdopVXmWAGax2xV4iC1KGhieoE8FzL3Zfs2qXft57O5FTre4FUTMh618ffUziaGZVZhPbNQdTyewKd-JH1u4darUzlZZzbauhGlJ19l85RDoeXAAr7MwDF6QgWiuhmsMCZlhIy_X-8_QG5h7j0Ng1-q6TwpqOYvQ04H_i-Ms3WWpzZnL5ogDgLnkSZ9gXnOcP4tQw',
    kty: 'RSA',
    kid: 'uI_W6u0baIZ50ripcyFjMjglj5GGKoyXCJy3t3C1YuE',
    alg: 'RS256',
    use: 'sig'
};



var pemPublic = jwkToPem(jwkPublic, { private: false });
console.log(pemPublic);