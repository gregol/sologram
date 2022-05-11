import { User } from '../../users/domain/user.entity';
import {
    UniqueId,
    Comments
} from './types';


export type Post = {
    id: UniqueId;
    isLiked: boolean;
    isBookmarked: boolean;
    likeCount: number;
    image: string;
    comments?: Comments[];
    user?: User;
    caption?: string;
    filter?: string;
    created_at: number;
};

