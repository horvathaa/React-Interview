export interface SubmissionBase {
    isSubmit: boolean;
}

export interface TableSubmissionBase {
    id: number;
    patientId: number;
    isSubmit: boolean;
}

export interface SaveSubmissionWrapper {
    submission: any;
    path: string;
}

export interface PaginationSubmission {
    pageIndex: number;
    pageSize: number;
    search: string;
    tabIndex: number;
}

export interface DeleteSubmission {
    deleteId: number;
    identifier: number;
}

export interface DeleteSubmissionWrapper extends DeleteSubmission {
    deletePath: string;
}
