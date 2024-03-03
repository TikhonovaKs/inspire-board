type Image = {
  id: number;
  src: {
    medium:string
  };
  alt: string;
  isSaved: boolean;
  index?: number;
};

export default Image;
