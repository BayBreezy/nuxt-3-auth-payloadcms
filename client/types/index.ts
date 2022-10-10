export interface User {
	id?: string;
	name?: string;
	image?: string | Media;
	email: string;
	createdAt?: string;
	updatedAt?: string;
}

export interface Customer {
	user?: User;
	token?: string;
	refreshedToken?: string;
	exp?: number;
	[key: string]: any;
}

export interface Media {
	id: string;
	url?: string;
	filename?: string;
	mimeType?: string;
	filesize?: number;
	width?: number;
	height?: number;
	sizes: {
		avatar: {
			url?: string;
			width?: number;
			height?: number;
			mimeType?: string;
			filesize?: number;
			filename?: string;
		};
		thumbnail: {
			url?: string;
			width?: number;
			height?: number;
			mimeType?: string;
			filesize?: number;
			filename?: string;
		};
		card: {
			url?: string;
			width?: number;
			height?: number;
			mimeType?: string;
			filesize?: number;
			filename?: string;
		};
		tablet: {
			url?: string;
			width?: number;
			height?: number;
			mimeType?: string;
			filesize?: number;
			filename?: string;
		};
	};
	createdAt: string;
	updatedAt: string;
}
