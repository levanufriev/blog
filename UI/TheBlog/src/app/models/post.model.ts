export interface Post {
    id: string;
    title: string;
    content: string;
    summary: string;
    urlHandle: string;
    author: string;
    isVisible: boolean;
    publishDate: Date;
    updateDate: Date;
    featuredImageUrl: string;
}