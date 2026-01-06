
export interface SyllabusItem {
  title: string;
  description: string;
  explanation: string;
  codeSnippet: string;
}

export interface SyllabusModule {
  id: string;
  title: string;
  subtitle: string;
  items: SyllabusItem[];
}

export interface SlideProps {
  module?: SyllabusModule;
  isHero?: boolean;
  isClosing?: boolean;
  onSelectTopic?: (item: SyllabusItem) => void;
}
