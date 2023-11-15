export interface Project {
  id: number;
  name: string;
  image: string;
  description: string;
  technologies: string[];
  urlGitHub: string;
  urlDeploy: string;
}

export interface Technology {
  name: string;
  icon: string;
  type: string;
}
