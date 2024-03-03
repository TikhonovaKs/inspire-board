type Image = {
  id: number;
  src: {
    large:string
  };
  alt: string;
  isSaved: boolean;
  index?: number;
};

export default Image;
