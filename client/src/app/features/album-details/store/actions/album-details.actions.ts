import { Action } from '@ngrx/store';

export enum AlbumDetailsActionType {
  SET_ALBUM_DETAILS = "[album details] Set album details"
}

export class SetAlbumDetails implements Action {
  readonly type = AlbumDetailsActionType.SET_ALBUM_DETAILS;

  constructor(public show: boolean) {}
}

export type AlbumDetailsActions = SetAlbumDetails;
