export interface APIUser{
    login: string;
    name: string;
    followers: number;
    following: number;
    public_repos: number;
    avatar_url: string;
    twitter_username: string;
}

export interface APIRepo{
    name: string;
    owner:{
        login:string;
    },
    stargazers_count: number;
    forks: number;
    html_url: string;
    language?: string;
    description: string;
}