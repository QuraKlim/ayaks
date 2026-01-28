export interface IPost {
    body: string;
    id: number;
    title: string;
    userId: number;
    views: number;
    tags: string[];
    reactions: {
        likes: number;
        dislikes: number;
    };
}

export interface IResponse {
    limit: number;
    skip: number;
    total: number;
    posts: IPost[];
}
