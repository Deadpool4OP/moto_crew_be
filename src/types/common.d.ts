export interface ILocation {
    latitude: number;
    longitude: number;
    timestamp: Date;
}
export interface IApiResponse<T> {
    status: 'success' | 'error';
    data?: T;
    message?: string;
    statusCode?: number;
}
//# sourceMappingURL=common.d.ts.map