export interface OnGetRequestListener {
    onStart(): void;
    onError(error: string): void;
    onEnd(): void;
    onComplete(statusCode: number, response: any): void;
}