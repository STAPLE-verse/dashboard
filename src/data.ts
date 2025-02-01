interface TaskLog {
    id: number;
    createdAt: string;
    status: 'NOT_COMPLETED' | 'COMPLETED';
    metadata: {
      email?: string;
      givenName?: string;
      familyName?: string;
      identifier?: string;
      additionalName?: string;
    } | null;
    completedAs: 'INDIVIDUAL';
    assignedToId: number;
    completedById: number | null;
    taskId: number;
  }
  
  interface Element {
    id: number;
    createdAt: string;
    updatedAt: string;
    projectId: number;
    name: string;
    description: string;
  }
  
  interface Role {
    id: number;
    userId: number;
    name: string;
    description: string;
    taxonomy: string;
    projectId: number | null;
  }
  
  interface FormVersion {
    id: number;
    name: string;
    formId: number;
    version: number;
    schema: Record<string, any>;
  }
  
  interface Task {
    id: number;
    createdAt: string;
    updatedAt: string;
    createdById: number;
    deadline: string;
    name: string;
    description: string;
    tags: string[] | null;
    containerTaskOrder: number;
    containerId: number;
    projectId: number;
    elementId: number;
    formVersionId: number;
    status: 'NOT_COMPLETED' | 'COMPLETED';
    element: Element;
    roles: Role[];
    taskLogs: TaskLog[];
    formVersion: FormVersion;
  }
  
  interface Project {
    id: number;
    createdAt: string;
    updatedAt: string;
    name: string;
    description: string;
    abstract: string;
    keywords: string;
    citation: string;
    publisher: string;
    identifier: string;
    tasks: Task[];
  }
  
  export type { Project, Task, Element, Role, TaskLog, FormVersion };