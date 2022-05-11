import { User } from '../../users/domain/user.entity';

type Email = string;

type UniqueId = string;

type PriceCents = number;

export type Comments = {
    user: User;
    comments: string;
}

export type PostTitle = string;