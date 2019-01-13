export interface OnPostRequestListener {
    onStart(): void;
    onError(error: string): void;
    onEnd(): void;
    onComplete(statusCode: number, response: any): void;
}