export interface UpdatePostRequest {
    title: string | undefined;
    content: string | undefined;
    summary: string | undefined;
    urlHandle: string | undefined;
    author: string | undefined;
    isVisible: boolean | undefined;
    publishDate: Date | undefined;
    updateDate: Date | undefined;
    featuredImageUrl: string | undefined;
}