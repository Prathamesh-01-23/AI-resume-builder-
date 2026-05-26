// Global type declarations to fix TypeScript errors

declare module 'react-beautiful-dnd' {
  export interface DropResult {
    draggableId: string;
    type: string;
    source: {
      index: number;
      droppableId: string;
    };
    destination?: {
      index: number;
      droppableId: string;
    };
  }

  export interface DraggableProvided {
  draggableProps: Record<string, unknown>;
  dragHandleProps: Record<string, unknown>;
  innerRef: (element: HTMLElement | null) => void;
}

  export interface DraggableStateSnapshot {
    isDragging: boolean;
    draggingOver?: string;
  }

  export interface DroppableProvided {
  droppableProps: Record<string, unknown>;
  innerRef: (element: HTMLElement | null) => void;
  placeholder: React.ReactElement | null;
}

  export const DragDropContext: React.ComponentType<{
    onDragEnd: (result: DropResult) => void;
    children: React.ReactNode;
  }>;

  export const Droppable: React.ComponentType<{
  droppableId: string;
  type?: string;
  children: (provided: DroppableProvided, snapshot: Record<string, unknown>) => React.ReactElement;
}>;

  export const Draggable: React.ComponentType<{
    draggableId: string;
    index: number;
    children: (provided: DraggableProvided, snapshot: DraggableStateSnapshot) => React.ReactElement;
  }>;
}

// Extend the ResumeTemplate interface to include isPremium
declare global {
  interface ResumeTemplate {
    isPremium?: boolean;
  }
}

export {}; 