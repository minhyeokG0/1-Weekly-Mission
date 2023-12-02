export interface FolderLinkData {
  id?: number;
  folder_id?: number;
  title: string;
  description: string;
  created_at?: string;
  updated_at?: string | null;
  image_source?: string;
  url: string;
}

export type SampleLinkData = Omit<
  FolderLinkData,
  "folder_id" | "updated_at" | "image_source"
> & {
  imageSource?: string;
};

export interface TabButtonData {
  id: number;
  user_id?: number;
  name?: string;
  created_at?: string;
  link?: {
    count: number;
  };
}

export interface UserLoginData {
  lists: {
    id?: number;
    auth_id?: string;
    name?: string;
    email?: string;
    image_source?: string;
    created_at?: string;
    userImage?: string;
    userEmail?: string;
  };
}

export interface LinkAddBarProps {
  openMAF: (e: MouseEvent, text?: string) => void;
}

export interface LinkAddBackgroundProps {
  $show?: boolean;
}

export interface PopAddProps {
  $Selected: boolean;
}

export interface PopDeleteProps {
  $isSelected: boolean;
}

export interface LinkInfoProps {
  folderName: string;
  nowFolderId: number;
  userId: number;
}
export interface HandleLinkProps {
  $isDisplay: boolean;
}

export interface SearchBarWrapperProps {
  $display: boolean;
}

export interface ButtonProps {
  $selected: boolean;
}

export interface ModalkebabProps {
  url: string;
  title: string;
  buttonTitle: string;
  color: string;
  onClose: (e: any) => void;
}

export interface ModalLinkProps {
  LinkOptions: {
    name: string;
    modalTitle: string;
    color: string;
    buttonTitle: string;
  };
  folderName: string;
  onClose: (e: any) => void;
  nowFolderId?: number;
  userId?: number;
}
export interface AddFolderSectionProps {
  $isSelected: boolean;
}
