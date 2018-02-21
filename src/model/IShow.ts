export interface ShowModelBase {
    id: number;
    title: string;
}

export interface ShowModelDetail extends ShowModelBase {
    image_url: string;
}

export interface ShowsParams {}
