export declare const config: {
    env: string;
    port: string | number;
    mongoose: {
        url: string;
    };
    redis: {
        url: string | undefined;
        host: string;
        port: number;
        password: string | undefined;
    };
    jwt: {
        secret: string;
        accessExpirationMinutes: string;
    };
    socket: {
        corsOrigin: string;
    };
    agora: {
        appId: string;
        appCertificate: string;
    };
};
//# sourceMappingURL=env.d.ts.map